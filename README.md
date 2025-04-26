## Instalar el proyecto

1 Instalar dependencias:

```bash
npm i
```

2 Correr el proyecto en modo dev:

```bash
npm run dev
```

La app también se encuentra desplegada en vercel
https://test-bvc.vercel.app/

# Respuestas

## 1. Criterios para diseñar la UI de productos financieros

Al diseñar la interfaz, seguí estos principios:

### Claridad y simplicidad

- Los productos financieros deben ser fáciles de entender.
- Evité sobrecargar la UI con información innecesaria.
- Jerarquicé los datos (ej: interés, plazo, riesgo) según importancia.

### Accesibilidad

- Contraste adecuado (texto legible sobre fondos).
- Uso de `aria-labels` en gráficos y botones.
- Tamaños de fuente responsivos.

### Consistencia visual

- Mismo sistema de colores para tipos de productos (ej: tarjetas en azul, préstamos en verde).
- Iconografía intuitiva.
- Gráficos estandarizados.

### Experiencia móvil-first

- Diseño adaptable desde smartphones hasta desktop.
- Componentes que no rompen en pantallas pequeñas.

### Seguridad y confianza

- Feedback visual al interactuar (ej: loaders al cargar datos).
- Mensajes claros en errores (ej: cuando se ingresa a un producto que no existe como `http://localhost:3000/product/40`, se aprecia el mensaje de “No se pudo encontrar el producto”).

---

## 2. ¿Cuándo usar Tailwind vs. Styled Components?

- **Styled Components:** Se debe usar para crear componentes, debido a su facilidad en crear componentes reutilizables, mediante props y temas.
- **Tailwind:** Se usa para los layouts, grid y flex de los componentes.

---

## 3. ¿Qué harías para escalar este proyecto en una aplicación real de banca digital?

Para llevar el proyecto a producción:

### Arquitectura

- Crear un system design (Button, Card, etc.) en una librería compartida.

### Estado global

- Zustand o Redux Toolkit para datos compartidos (ej: sesión del usuario).
- React Query para manejo de caché de API financieras.
- Usar el provider de styled-components para manejar temas (por cuestiones de tiempo no se terminó el manejo de temas).

### Seguridad

- Autenticación y protección de rutas privadas mediante el middleware de Next.js.
- Validación de formularios con Yup y Formik.
- Cifrado de datos sensibles usando la Web Crypto API.
- Manejar diferentes idiomas mediante una librería de i18n.
- Usar un CMS headless como Hygraph para editar el contenido de la app de forma dinámica y sencilla.

### Rendimiento

- SSR/ISR en Next.js para páginas estáticas (ej: términos y condiciones).
- Lazy loading de componentes pesados (gráficos, PDFs).
- Usar React Query para realizar prefetch y almacenar data en caché.
- Usar herramientas como `next/image` para obtener imágenes optimizadas.

### DevOps

- Implementar prácticas de DevOps como CI/CD para evitar cuellos de botella en el ciclo de vida del producto.

---

## 4. ¿Qué herramientas usarías para mejorar el rendimiento y monitoreo en producción?

### Analítica

- **Google Analytics + Mixpanel:** Mixpanel para eventos complejos (ej: "¿Cuántos usuarios comparan tasas de interés?").

### Feedback visual

- **Hotjar:** Grabaciones de cómo los usuarios interactúan con los formularios.

### Monitoreo de errores

- **Sentry:** Detección proactiva de errores JavaScript/API.

### Performance

- **Lighthouse:** Verificación del rendimiento de la app en producción.
