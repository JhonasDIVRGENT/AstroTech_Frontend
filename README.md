# 🌟 AstroTech Frontend - Fase 2

**Oráculo Tecnológico 2026** by **JhonasDev**

Frontend React mobile-first con estética cyberpunk que se conecta al backend AstroTech para consultar predicciones tecnológicas basadas en signos zodiacales.

---

## 📋 Descripción

AstroTech Frontend es una aplicación web React construida con Vite que permite a los usuarios consultar el "Oráculo Tecnológico 2026". Seleccionas tu signo zodiacal y recibes una predicción personalizada con:

- 📊 **Panorama 2026**: Visión general del año
- 🎯 **Skill Clave**: Habilidad principal a desarrollar
- 🛠️ **Stack Recomendado**: Tecnologías sugeridas
- ⚠️ **Evitar**: Qué tecnologías o prácticas evitar
- 💡 **Caso de Uso**: Proyecto o aplicación recomendada
- 🧠 **Mindset**: Mentalidad para el año
- ✨ **Mensaje del Oráculo**: Consejo final

---

## 🚀 Requisitos Previos

- **Node.js** v18 o superior
- **npm** v9 o superior
- **Backend AstroTech** corriendo (ver sección de Conexión Backend)

---

## ⚙️ Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone <url-del-repo>
cd AstroTech_Frontend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Copia el archivo `.env.example` a `.env`:

```bash
cp .env.example .env
```

Edita el archivo `.env` y ajusta la URL del backend si es necesario:

```env
VITE_API_BASE_URL=http://localhost:3000
```

> **Nota**: Si tu backend corre en otro puerto o dominio, actualiza esta variable.

---

## 🏃‍♂️ Ejecutar la Aplicación

### Modo desarrollo

```bash
npm run dev
```

La aplicación estará disponible en: **http://localhost:5173**

### Build de producción

```bash
npm run build
```

### Preview del build

```bash
npm run preview
```

---

## 🔌 Conexión con el Backend

El frontend espera que el backend esté corriendo y exponga el siguiente endpoint:

### Endpoint del Oráculo

**POST** `/api/oracle`

**Body:**
```json
{
  "sign": "aries"
}
```

**Response esperada:**
```json
{
  "brand": "AstroTech",
  "by": "JhonasDev",
  "year": 2026,
  "sign": "Aries",
  "panorama": "...",
  "skill": "...",
  "stack": ["...", "..."],
  "avoid": "...",
  "useCase": "...",
  "mindset": "...",
  "message": "...",
  "meta": {
    "mode": "mock",
    "generatedAt": "2026-01-01T00:00:00.000Z"
  }
}
```

### Configuración del Backend

Asegúrate de que:

1. El backend esté corriendo en el puerto configurado (por defecto `3000`)
2. CORS esté habilitado para permitir peticiones desde `http://localhost:5173`
3. El endpoint `/api/oracle` esté funcionando correctamente

---

## 📁 Estructura del Proyecto

```
AstroTech_Frontend/
├── src/
│   ├── assets/              # Recursos estáticos (imágenes, etc.)
│   ├── components/          # Componentes reutilizables
│   │   ├── AppHeader.jsx
│   │   ├── SignSelect.jsx
│   │   ├── PrimaryButton.jsx
│   │   ├── OracleResult.jsx
│   │   ├── StatusBanner.jsx
│   │   └── LoadingPanel.jsx
│   ├── pages/               # Páginas de la aplicación
│   │   └── HomePage.jsx
│   ├── services/            # Servicios de API
│   │   ├── apiClient.js
│   │   └── oracleService.js
│   ├── styles/              # Estilos globales
│   │   └── globals.css
│   ├── utils/               # Utilidades
│   │   ├── zodiac.js
│   │   └── format.js
│   ├── App.jsx              # Componente raíz
│   └── main.jsx             # Punto de entrada
├── index.html               # HTML principal
├── vite.config.js           # Configuración de Vite
├── package.json             # Dependencias y scripts
├── .env.example             # Template de variables de entorno
├── .gitignore               # Archivos ignorados por Git
└── README.md                # Este archivo
```

---

## 🎨 Características de Diseño

### Mobile-First
- Diseñado primero para pantallas pequeñas (~360px)
- Escalable a tablets y desktop
- Layout responsive con breakpoints en 480px y 768px

### Estética Cyberpunk
- Fondo oscuro con degradados sutiles
- Colores neon (cyan y magenta)
- Efectos de glow y sombras
- Animaciones suaves y micro-interacciones
- Tipografía legible con efectos visuales

### Accesibilidad
- Labels asociados a inputs
- Estados de focus visibles
- Contraste adecuado
- Botones con estados disabled claros

---

## 🐛 Troubleshooting

### Error: "No se pudo conectar con el servidor"

**Causa**: El backend no está corriendo o la URL es incorrecta.

**Solución**:
1. Verifica que el backend esté corriendo: `http://localhost:3000/health`
2. Revisa la variable `VITE_API_BASE_URL` en tu archivo `.env`
3. Asegúrate de que no haya problemas de CORS

### Error 400: "Invalid sign"

**Causa**: El signo enviado no es válido según el backend.

**Solución**:
1. Verifica que los signos en `src/utils/zodiac.js` coincidan con los aceptados por el backend
2. El backend espera signos en minúsculas (ej: "aries", no "Aries")

### La página se ve en blanco

**Causa**: Error de JavaScript o problema con las variables de entorno.

**Solución**:
1. Abre la consola del navegador (F12) y revisa errores
2. Verifica que el archivo `.env` exista y tenga `VITE_API_BASE_URL` definido
3. Reinicia el servidor de desarrollo: `Ctrl+C` y luego `npm run dev`

### Estilos no se aplican correctamente

**Causa**: CSS no se está importando o hay conflictos.

**Solución**:
1. Verifica que `src/styles/globals.css` esté importado en `App.jsx`
2. Limpia la caché del navegador (Ctrl+Shift+R)
3. Reinicia el servidor de desarrollo

---

## 🛠️ Stack Tecnológico

- **React** 19.2.3 - Librería UI
- **Vite** 7.3.0 - Build tool y dev server
- **Vanilla CSS** - Estilos (sin frameworks)
- **Fetch API** - Peticiones HTTP (sin dependencias extra)

---

## 📝 Principios de Desarrollo

Este proyecto sigue principios de código limpio:

1. **Componentes pequeños**: Máximo 120-150 líneas
2. **Separación de responsabilidades**: UI, servicios, utilidades
3. **Sin sobre-ingeniería**: No Redux, no routers complejos
4. **Mobile-first real**: Diseño pensado para móvil primero
5. **Accesibilidad básica**: Labels, focus, contraste
6. **Manejo de errores consistente**: Mensajes claros y útiles

---

## 👨‍💻 Autor

**JhonasDev**

---

## 📄 Licencia

MIT

---

## 🔮 Roadmap (Futuras Fases)

- [ ] Historial de consultas
- [ ] Compartir resultados en redes sociales
- [ ] Modo oscuro/claro toggle
- [ ] Animaciones más elaboradas
- [ ] PWA (Progressive Web App)
- [ ] Tests unitarios y E2E

---

**¡Que el oráculo te guíe en 2026! 🌟**
