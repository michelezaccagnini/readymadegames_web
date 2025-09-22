export class AudioEngine {
  private audioContext: AudioContext | null = null;
  private masterGain: GainNode | null = null;

  constructor() {
    this.initAudioContext();
  }

  private async initAudioContext() {
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.masterGain = this.audioContext.createGain();
      this.masterGain.connect(this.audioContext.destination);
      this.masterGain.gain.value = 0.3; // Master volume
    } catch (error) {
      console.error('Failed to initialize audio context:', error);
    }
  }

  async ensureAudioContext() {
    if (!this.audioContext) {
      await this.initAudioContext();
    }
    
    if (this.audioContext?.state === 'suspended') {
      await this.audioContext.resume();
    }
  }

  async playNote(frequency: number, duration: number = 0.5, waveType: OscillatorType = 'sine') {
    await this.ensureAudioContext();
    
    if (!this.audioContext || !this.masterGain) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    // Connect nodes
    oscillator.connect(gainNode);
    gainNode.connect(this.masterGain);

    // Configure oscillator
    oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
    oscillator.type = waveType;

    // Configure envelope (ADSR)
    const currentTime = this.audioContext.currentTime;
    const attackTime = 0.01;
    const decayTime = 0.1;
    const sustainLevel = 0.3;
    const releaseTime = 0.3;

    gainNode.gain.setValueAtTime(0, currentTime);
    gainNode.gain.linearRampToValueAtTime(0.8, currentTime + attackTime);
    gainNode.gain.linearRampToValueAtTime(sustainLevel, currentTime + attackTime + decayTime);
    gainNode.gain.setValueAtTime(sustainLevel, currentTime + duration - releaseTime);
    gainNode.gain.linearRampToValueAtTime(0, currentTime + duration);

    // Start and stop
    oscillator.start(currentTime);
    oscillator.stop(currentTime + duration);
  }

  async playChord(frequencies: number[], duration: number = 1.0) {
    for (const frequency of frequencies) {
      this.playNote(frequency, duration, 'sine');
    }
  }

  // Create a simple drum sound using noise and filtering
  async playDrum(type: 'kick' | 'snare' | 'hihat' = 'kick') {
    await this.ensureAudioContext();
    
    if (!this.audioContext || !this.masterGain) return;

    const currentTime = this.audioContext.currentTime;
    
    if (type === 'kick') {
      // Kick drum - low frequency sine wave with quick decay
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(this.masterGain);
      
      oscillator.frequency.setValueAtTime(60, currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(20, currentTime + 0.1);
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(1, currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, currentTime + 0.3);
      
      oscillator.start(currentTime);
      oscillator.stop(currentTime + 0.3);
      
    } else if (type === 'snare') {
      // Snare drum - noise with bandpass filter
      const bufferSize = this.audioContext.sampleRate * 0.2;
      const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
      const data = buffer.getChannelData(0);
      
      // Generate white noise
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      
      const source = this.audioContext.createBufferSource();
      const filter = this.audioContext.createBiquadFilter();
      const gainNode = this.audioContext.createGain();
      
      source.buffer = buffer;
      filter.type = 'bandpass';
      filter.frequency.value = 200;
      filter.Q.value = 1;
      
      source.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(this.masterGain);
      
      gainNode.gain.setValueAtTime(0.5, currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, currentTime + 0.2);
      
      source.start(currentTime);
      
    } else if (type === 'hihat') {
      // Hi-hat - high-frequency noise with quick decay
      const bufferSize = this.audioContext.sampleRate * 0.1;
      const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
      const data = buffer.getChannelData(0);
      
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      
      const source = this.audioContext.createBufferSource();
      const filter = this.audioContext.createBiquadFilter();
      const gainNode = this.audioContext.createGain();
      
      source.buffer = buffer;
      filter.type = 'highpass';
      filter.frequency.value = 8000;
      
      source.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(this.masterGain);
      
      gainNode.gain.setValueAtTime(0.3, currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, currentTime + 0.1);
      
      source.start(currentTime);
    }
  }

  setMasterVolume(volume: number) {
    if (this.masterGain) {
      this.masterGain.gain.setValueAtTime(Math.max(0, Math.min(1, volume)), this.audioContext?.currentTime || 0);
    }
  }

  // Generate a scale of frequencies
  static generateScale(rootFreq: number, scaleType: 'major' | 'minor' | 'pentatonic' = 'major'): number[] {
    const scales = {
      major: [0, 2, 4, 5, 7, 9, 11],
      minor: [0, 2, 3, 5, 7, 8, 10],
      pentatonic: [0, 2, 4, 7, 9]
    };
    
    const intervals = scales[scaleType];
    return intervals.map(interval => rootFreq * Math.pow(2, interval / 12));
  }
}
