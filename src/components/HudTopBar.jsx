import { useState } from 'react';
import soundManager from '../utils/sounds';

/**
 * Barra superior estilo HUD
 * @param {Object} props
 * @param {number} props.scanning - porcentaje de escaneo
 */
export default function HudTopBar({ scanning = 66 }) {
    const [audioEnabled, setAudioEnabled] = useState(soundManager.isEnabled());

    const toggleAudio = () => {
        const newState = soundManager.toggle();
        setAudioEnabled(newState);
        if (newState) soundManager.play('CLICK');
    };

    return (
        <div className="hud-bar">
            <div className="hud-section">
                <span>UNIT: CYBERDECK_V5 // CORE: LLAMA-4-SCOUT</span>
                <span className="text-red" style={{ marginLeft: '15px' }}>SCANNING {scanning}%</span>
            </div>

            <button
                onClick={toggleAudio}
                className="audio-toggle"
                title={audioEnabled ? "MUTE SYSTEM" : "ENABLE AUDIO"}
            >
                {audioEnabled ? '🔊 AUDIO_ON' : '🔇 AUDIO_OFF'}
            </button>
        </div>
    );
}
