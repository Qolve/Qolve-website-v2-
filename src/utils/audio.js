// Organic Web Audio synthesizer for ambient pine wind, gentle rain on ferns, and soft resonant glass chimes
class ForestSoundscape {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.gainNode = null;
    this.filterNode = null;
    this.noiseNode = null;
    this.chimeTimer = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
  }

  start() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) return;
    this.isPlaying = true;

    // Create pink/brown noise for pine wind
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.035;
      b6 = white * 0.115926;
    }

    this.noiseNode = this.ctx.createBufferSource();
    this.noiseNode.buffer = noiseBuffer;
    this.noiseNode.loop = true;

    // Lowpass filter for deep forest canopy wind feel
    this.filterNode = this.ctx.createBiquadFilter();
    this.filterNode.type = 'lowpass';
    this.filterNode.frequency.setValueAtTime(320, this.ctx.currentTime);
    this.filterNode.Q.setValueAtTime(1.5, this.ctx.currentTime);

    // Subtle gentle modulation (canopy rustle)
    const lfo = this.ctx.createOscillator();
    lfo.frequency.setValueAtTime(0.12, this.ctx.currentTime);
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(140, this.ctx.currentTime);
    lfo.connect(this.filterNode.frequency);
    lfo.start();

    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.01, this.ctx.currentTime);
    this.gainNode.gain.exponentialRampToValueAtTime(0.4, this.ctx.currentTime + 3);

    this.noiseNode.connect(this.filterNode);
    this.filterNode.connect(this.gainNode);
    this.gainNode.connect(this.ctx.destination);
    this.noiseNode.start();

    // Occasional soft glass harmonic chime
    this.scheduleChimes();
  }

  scheduleChimes() {
    if (!this.isPlaying) return;
    const nextChime = 5000 + Math.random() * 8000;
    this.chimeTimer = setTimeout(() => {
      if (this.isPlaying) {
        this.playGlassChime();
        this.scheduleChimes();
      }
    }, nextChime);
  }

  playGlassChime(freq = 528) {
    if (!this.ctx || this.ctx.state === 'suspended') return;
    const osc = this.ctx.createOscillator();
    const chimeGain = this.ctx.createGain();
    
    // Soothing natural harmonic
    const frequencies = [432, 528, 648, 864, 1056];
    const targetFreq = freq || frequencies[Math.floor(Math.random() * frequencies.length)];
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(targetFreq, this.ctx.currentTime);

    chimeGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
    chimeGain.gain.linearRampToValueAtTime(0.04, this.ctx.currentTime + 0.1);
    chimeGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 4.5);

    osc.connect(chimeGain);
    chimeGain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 4.6);
  }

  playClick() {
    this.init();
    if (this.ctx.state === 'suspended') this.ctx.resume();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.04);
    
    gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  stop() {
    if (!this.isPlaying) return;
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.5);
      setTimeout(() => {
        if (this.noiseNode) {
          try { this.noiseNode.stop(); } catch(e) {}
        }
        this.isPlaying = false;
      }, 1500);
    }
    if (this.chimeTimer) clearTimeout(this.chimeTimer);
  }
}

export const forestAudio = new ForestSoundscape();
