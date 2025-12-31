import { useState, useEffect } from 'react';
import HudTopBar from '../components/HudTopBar';
import TerminalFrame from '../components/TerminalFrame';
import OracleResult from '../components/OracleResult';
import StatusBanner from '../components/StatusBanner';
import SignSelect from '../components/SignSelect';
import { fetchOracle } from '../services/oracleService';
import soundManager from '../utils/sounds';
import '../styles/oracle.css';

/**
 * Página principal - TECHNOASTRO CYBERDECK
 */
export default function HomePage() {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [sign, setSign] = useState('');
    const [data, setData] = useState(null);
    const [scanValue, setScanValue] = useState(53);
    const [errorMessage, setErrorMessage] = useState('');

    // Efecto para animar el scanning durante el loading
    useEffect(() => {
        let interval;
        if (status === 'loading') {
            soundManager.play('SCAN');
            setScanValue(0);
            interval = setInterval(() => {
                setScanValue(prev => (prev < 99 ? prev + 1 : prev));
            }, 60);
        } else if (status === 'success') {
            soundManager.play('SUCCESS');
            setScanValue(100);
        } else if (status === 'error') {
            soundManager.play('ERROR');
        } else {
            setScanValue(53);
        }
        return () => clearInterval(interval);
    }, [status]);

    const handleConsult = async (selectedSign) => {
        const signToQuery = selectedSign || sign;

        if (!signToQuery) {
            setErrorMessage('SELECCIONA UNA IDENTIDAD PARA DECODIFICAR.');
            setStatus('error');
            return;
        }

        soundManager.play('CLICK');
        setStatus('loading');
        setErrorMessage('');
        setData(null);

        try {
            const res = await fetchOracle(signToQuery.toLowerCase());
            setData(res);
            setStatus('success');
        } catch (e) {
            setErrorMessage('FALLO EN LA TRANSMISIÓN. REINTENTA.');
            setStatus('error');
        }
    };

    const resetTerminal = () => {
        soundManager.play('CLICK');
        setStatus('idle');
        setSign('');
        setData(null);
        setErrorMessage('');
    };

    return (
        <div className="app-container" style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            paddingBottom: '150px',
            overflowY: 'auto',
            position: 'relative'
        }}>
            <HudTopBar scanning={scanValue} />

            <main style={{ maxWidth: '700px', margin: '0 auto', width: '100%', padding: '20px', flex: 1, marginBottom: '50px' }}>
                <header style={{ textAlign: 'center', margin: '30px 0 50px' }}>
                    <h1 className="tech-title">⚠️ AstroTech ⚠️</h1>
                    <p style={{ color: 'var(--neon-red-dim)', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '1px' }}>
                        ORDENADOR DE DESTINO 2026 // v2.077
                    </p>
                </header>

                {status === 'idle' && (
                    <TerminalFrame label="[ACCESO_CONCEDIDO]">
                        <p className="text-red" style={{ marginBottom: '10px' }}>{" >> SISTEMA OPERATIVO CARGADO"}</p>
                        <p className="text-red" style={{ marginBottom: '5px' }}>{" >> NÚCLEO PREDICTIVO ONLINE"}</p>
                        <p className="text-red" style={{ marginBottom: '25px' }}>{" >> NEURAL LLM INTERFACE: SYNCED"}</p>

                        <p style={{ marginBottom: '25px', lineHeight: '1.6', color: '#aaa' }}>
                            Bienvenido, usuario. El Oráculo está listo para procesar las fluctuaciones del año 2026.
                            Selecciona tu frecuencia zodiacal para iniciar la consulta.
                        </p>

                        <SignSelect
                            value={sign}
                            onChange={(val) => {
                                setSign(val);
                                soundManager.play('CLICK');
                            }}
                            disabled={status === 'loading'}
                        />

                        <div style={{ marginTop: '30px', textAlign: 'center' }}>
                            <button
                                className="btn-send"
                                onClick={() => handleConsult()}
                                disabled={!sign || status === 'loading'}
                                style={{ width: '100%', padding: '15px', fontSize: '1.1rem' }}
                            >
                                INICIAR DECODIFICACIÓN
                            </button>
                        </div>
                    </TerminalFrame>
                )}

                {status === 'loading' && (
                    <TerminalFrame label="[SCANNING_CORE]">
                        <div style={{ padding: '60px 0', textAlign: 'center' }}>
                            <h2 className="text-red scanning" style={{ fontSize: '1.4rem', marginBottom: '15px' }}>
                                CONECTANDO CON EL FUTURO...
                            </h2>
                            <p style={{ color: '#555', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                                Procesando variables temporales de 2026
                            </p>
                            <div style={{
                                width: '100%',
                                height: '2px',
                                background: '#100',
                                marginTop: '40px',
                                position: 'relative'
                            }}>
                                <div style={{
                                    width: `${scanValue}%`,
                                    height: '100%',
                                    background: 'var(--neon-red)',
                                    boxShadow: '0 0 10px var(--neon-red)'
                                }} />
                            </div>
                        </div>
                    </TerminalFrame>
                )}

                {status === 'error' && (
                    <div style={{ marginTop: '20px' }}>
                        <StatusBanner
                            type="error"
                            message={errorMessage}
                            onRetry={resetTerminal}
                        />
                    </div>
                )}

                {status === 'success' && data && (
                    <>
                        {data.meta?.mode === 'mock_fallback' && (
                            <StatusBanner type="info" message="MODO FALLBACK ACTIVO." />
                        )}
                        <OracleResult data={data} />
                        <div style={{ textAlign: 'center', marginTop: '40px' }}>
                            <button
                                className="btn-send"
                                onClick={resetTerminal}
                                style={{ padding: '10px 40px' }}
                            >
                                NUEVA CONSULTA
                            </button>
                        </div>
                    </>
                )}
            </main>

            <footer style={{
                marginTop: 'auto',
                padding: '20px',
                textAlign: 'center',
                fontSize: '0.65rem',
                color: '#333',
                borderTop: '1px solid #111'
            }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
                    <span>AstroTech // TERMINAL_ACCESS</span>
                    <span>by JhonasDev</span>
                </div>
            </footer>
        </div>
    );
}
