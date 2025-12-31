import './AppHeader.css';

/**
 * Header de la aplicación con branding AstroTech
 */
export default function AppHeader() {
    return (
        <header className="app-header">
            <div className="header-content">
                <h1 className="brand-title">
                    <span className="brand-astro">Astro</span>
                    <span className="brand-tech">Tech</span>
                </h1>
                <p className="header-subtitle">Oráculo Tecnológico 2026</p>
                <p className="header-author">by <span className="author-name">JhonasDev</span></p>
            </div>
        </header>
    );
}
