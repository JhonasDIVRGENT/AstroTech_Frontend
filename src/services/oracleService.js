import { post } from './apiClient.js';

/**
 * Consulta el oráculo tecnológico para un signo zodiacal
 * @param {string} sign - signo zodiacal (ej: 'aries')
 * @returns {Promise<Object>} - respuesta del oráculo con panorama, skill, stack, etc.
 * @throws {Error} - si la petición falla
 */
export async function fetchOracle(sign) {
    if (!sign) {
        throw new Error('Debes seleccionar un signo zodiacal');
    }

    const response = await post('/api/oracle', { sign });
    return response;
}
