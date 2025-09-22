import React, { useState, useCallback, useEffect } from 'react';
import { Canvas, CanvasProps } from "@react-three/fiber";
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface ResilientCanvasProps extends CanvasProps {
  children: React.ReactNode;
  maxRetries?: number;
  fallbackContent?: React.ReactNode;
}

export default function ResilientCanvas({ 
  children, 
  maxRetries = 2, 
  fallbackContent,
  ...canvasProps 
}: ResilientCanvasProps) {
  const [canvasKey, setCanvasKey] = useState(0);
  const [retryCount, setRetryCount] = useState(0);
  const [isRecovering, setIsRecovering] = useState(false);
  const [hasContextLoss, setHasContextLoss] = useState(false);

  const handleContextLost = useCallback((event: Event) => {
    event.preventDefault();
    console.warn('WebGL context lost, attempting recovery...');
    setHasContextLoss(true);
    
    if (retryCount < maxRetries) {
      setIsRecovering(true);
      const delay = Math.pow(2, retryCount) * 500; // Exponential backoff: 500ms, 1s, 2s
      
      setTimeout(() => {
        setCanvasKey(prev => prev + 1);
        setRetryCount(prev => prev + 1);
        setIsRecovering(false);
        setHasContextLoss(false);
      }, delay);
    }
  }, [retryCount, maxRetries]);

  const handleContextRestored = useCallback(() => {
    console.log('WebGL context restored successfully');
    setHasContextLoss(false);
    setRetryCount(0);
  }, []);

  const handleManualRefresh = () => {
    setCanvasKey(prev => prev + 1);
    setRetryCount(0);
    setHasContextLoss(false);
    setIsRecovering(false);
  };

  // Max retries reached - show fallback
  if (retryCount >= maxRetries && hasContextLoss) {
    if (fallbackContent) {
      return <>{fallbackContent}</>;
    }

    return (
      <Card className="bg-black/30 border-white/20 max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5 text-yellow-400" />
            3D Graphics Unavailable
          </CardTitle>
          <CardDescription className="text-gray-300">
            WebGL context couldn't be restored. This happens when:
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• Too many browser tabs using graphics</li>
            <li>• Limited device memory or GPU resources</li>
            <li>• Graphics driver issues</li>
          </ul>
          
          <div className="space-y-3">
            <div className="p-4 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg text-center">
              <div className="text-4xl mb-2">🎵</div>
              <p className="text-white font-medium">Music still works!</p>
              <p className="text-gray-300 text-sm">
                All other features remain fully functional
              </p>
            </div>
            
            <Button 
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              onClick={handleManualRefresh}
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Show recovery state
  if (isRecovering) {
    return (
      <div className="flex items-center justify-center h-64 text-white">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-purple-400 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Restoring 3D graphics... (Attempt {retryCount + 1})</p>
        </div>
      </div>
    );
  }

  // Render Canvas with event listeners
  return (
    <Canvas
      key={canvasKey}
      gl={{
        antialias: true,
        powerPreference: "default",
        failIfMajorPerformanceCaveat: false,
        preserveDrawingBuffer: true,
        ...canvasProps.gl
      }}
      onCreated={({ gl }) => {
        // Add context loss event listeners
        const canvas = gl.domElement;
        canvas.addEventListener('webglcontextlost', handleContextLost);
        canvas.addEventListener('webglcontextrestored', handleContextRestored);

        // Clean up on unmount
        return () => {
          canvas.removeEventListener('webglcontextlost', handleContextLost);
          canvas.removeEventListener('webglcontextrestored', handleContextRestored);
        };
      }}
      {...canvasProps}
    >
      {children}
    </Canvas>
  );
}