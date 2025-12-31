/**
 * Utilidades para efectos de sonido Cyberdeck
 */

const SOUNDS = {
    CLICK: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3', // Click digital
    SCAN: 'https://assets.mixkit.co/active_storage/sfx/1359/1359-preview.mp3',  // Hum electrónico
    SUCCESS: 'https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3', // Notificación positiva
    ERROR: 'https://assets.mixkit.co/active_storage/sfx/2959/2959-preview.mp3',  // Alerta error
    AMBIENT: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3' // Placeholder para ambiente cinematográfico (música futurista)
};

class SoundManager {
    constructor() {
        this.audioCache = {};
        this.enabled = false; // Desactivado por defecto por políticas de navegador
        this.ambientAudio = null;
    }

    initAmbient() {
        if (!this.ambientAudio) {
            this.ambientAudio = new Audio(SOUNDS.AMBIENT);
            this.ambientAudio.loop = true;
            this.ambientAudio.volume = 0.15; // Volumen bajo para fondo
        }
    }

    play(soundKey) {
        if (!this.enabled) return;

        const url = SOUNDS[soundKey];
        if (!url) return;

        try {
            if (!this.audioCache[soundKey]) {
                this.audioCache[soundKey] = new Audio(url);
            }

            const audio = this.audioCache[soundKey];
            audio.currentTime = 0;
            audio.volume = soundKey === 'SCAN' ? 0.2 : 0.4;
            audio.play().catch(e => console.log('Audio blocked'));
        } catch (error) {
            console.error('Error sound:', error);
        }
    }

    toggle() {
        this.enabled = !this.enabled;

        if (this.enabled) {
            this.initAmbient();
            this.ambientAudio.play().catch(e => console.log('Ambient blocked'));
        } else {
            if (this.ambientAudio) {
                this.ambientAudio.pause();
            }
        }
        return this.enabled;
    }

    isEnabled() {
        return this.enabled;
    }
}

export const soundManager = new SoundManager();
export default soundManager;
