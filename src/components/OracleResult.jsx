// src/components/OracleResult.jsx
import TerminalFrame from './TerminalFrame';
import { formatStack, formatDate } from '../utils/format.js';
import './OracleResult.css';

/**
 * Renderiza el resultado del oráculo con UX de terminal
 * @param {Object} props
 * @param {Object} props.data - datos del oráculo
 */
export default function OracleResult({ data }) {
    if (!data) return null;

    const {
        sign = '',
        panorama = '',
        skill = '',
        stack = [],
        avoid = '',
        useCase = '',
        mindset = '',
        message = '',
        meta = {}
    } = data;

    const formattedStack = formatStack(stack);

    return (
        <div className="oracle-results-flow">
            <TerminalFrame label={`[DECODING: ${sign.toUpperCase()}]`}>

                <div className="result-box">
                    <span className="section-label">{'>>'} PANORAMA 2026</span>
                    <p className="result-main-text">{panorama}</p>
                </div>

                <div className="result-box">
                    <span className="section-label">{'>>'} HABILIDAD CLAVE</span>
                    <p className="result-main-text" style={{ color: '#fff' }}>{skill}</p>
                </div>

                {formattedStack.length > 0 && (
                    <div className="result-box">
                        <span className="section-label">{'>>'} STACK TECNOLÓGICO</span>
                        <div className="stack-tags">
                            {formattedStack.map((tech, i) => (
                                <span key={i} className="stack-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                )}

                <div className="result-box">
                    <span className="section-label">{'>>'} ERROR A EVITAR</span>
                    <p className="result-main-text" style={{ color: '#ffaaa8' }}>{avoid}</p>
                </div>

                <div className="result-box">
                    <span className="section-label">{'>>'} CASO DE USO</span>
                    <p className="result-main-text">{useCase}</p>
                </div>

                <div className="result-box">
                    <span className="section-label">{'>>'} MINDSET DIGITAL</span>
                    <p className="result-main-text">{mindset}</p>
                </div>

                <div className="message-final">
                    <span className="section-label" style={{ color: '#00ffff' }}>{'>>'} MENSAJE DEL ORÁCULO</span>
                    <p>"{message}"</p>
                </div>

                <footer className="meta-footer">
                    <span>MODE: {meta.mode?.toUpperCase()}</span>
                    <span>MODEL: {meta.model || 'LLAMA-4-SCOUT'}</span>
                    <span>TIMESTAMP: {formatDate(meta.generatedAt)}</span>
                </footer>
            </TerminalFrame>
        </div>
    );
}
