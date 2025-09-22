import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, useState } from "react";
import "@fontsource/inter";
import HomePage from "./components/HomePage";
import GameShowcase from "./components/GameShowcase";
import MiniGames from "./components/MiniGames";
import MusicGallery from "./components/MusicGallery";
import AboutSection from "./components/AboutSection";
import ContactForm from "./components/ContactForm";
import Navigation from "./components/Navigation";
import { useNavigation } from "./lib/stores/useNavigation";

const queryClient = new QueryClient();

function App() {
  const { currentSection } = useNavigation();

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <HomePage />;
      case 'games':
        return <GameShowcase />;
      case 'play':
        return <MiniGames />;
      case 'gallery':
        return <MusicGallery />;
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactForm />;
      default:
        return <HomePage />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <Navigation />
        <Suspense fallback={
          <div className="flex items-center justify-center h-screen">
            <div className="text-white text-xl">Loading...</div>
          </div>
        }>
          {renderSection()}
        </Suspense>
      </div>
    </QueryClientProvider>
  );
}

export default App;
