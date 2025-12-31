/**
 * Cliente HTTP base para comunicación con el backend
 * Usa fetch nativo y maneja errores de forma consistente
 */

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

/**
 * Realiza una petición POST al backend
 * @param {string} path - ruta del endpoint (ej: '/api/oracle')
 * @param {Object} body - cuerpo de la petición
 * @returns {Promise<Object>} - respuesta JSON parseada
 * @throws {Error} - si la petición falla
 */
export async function post(path, body) {
    try {
        const response = await fetch(`${BASE_URL}${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        // Intenta parsear la respuesta como JSON
        const data = await response.json();

        // Si la respuesta no es OK, lanza error con el mensaje del servidor
        if (!response.ok) {
            throw new Error(data.message || `Error ${response.status}: ${response.statusText}`);
        }

        return data;
    } catch (error) {
        // Si es un error de red o parsing, lanza un mensaje más amigable
        if (error.name === 'TypeError' || error.message.includes('fetch')) {
            throw new Error('No se pudo conectar con el servidor. Verifica que el backend esté corriendo.');
        }
        throw error;
    }
}

/**
 * Realiza una petición GET al backend
 * @param {string} path - ruta del endpoint
 * @returns {Promise<Object>} - respuesta JSON parseada
 * @throws {Error} - si la petición falla
 */
export async function get(path) {
    try {
        const response = await fetch(`${BASE_URL}${path}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || `Error ${response.status}: ${response.statusText}`);
        }

        return data;
    } catch (error) {
        if (error.name === 'TypeError' || error.message.includes('fetch')) {
            throw new Error('No se pudo conectar con el servidor. Verifica que el backend esté corriendo.');
        }
        throw error;
    }
}
