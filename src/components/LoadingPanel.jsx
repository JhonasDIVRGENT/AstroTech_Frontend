import './LoadingPanel.css';

/**
 * Panel de loading con animación
 */
export default function LoadingPanel() {
    return (
        <div className="loading-panel">
            <div className="loading-spinner"></div>
            <p className="loading-text">Consultando el oráculo...</p>
            <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}
