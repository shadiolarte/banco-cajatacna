# Plan de Adaptación de Diseño a Caja Tacna

Este plan detalla los cambios necesarios para adaptar el diseño de las aplicaciones frontend de **Homebanking** (`front_homebanking_react`) y **Core Financiero** (`front_core_financiero_react`) con la identidad visual y los colores corporativos de **Caja Tacna** (Rojo Principal: `#CC2027`, Gris: `#99999A`).

## User Review Required

> [!NOTE]
> No se realizarán cambios en las APIs de Backend ni en la Base de Datos. Solo modificaremos variables CSS, colores, textos del branding (cambiando "Banco Pichincha" / "Banco Andino" por "Caja Tacna") y la fuente del logotipo para adaptarlos al estilo corporativo.

> [!TIP]
> Se utilizará la dirección del logo oficial de Caja Tacna extraído de su sitio oficial: `https://cmactacna.com.pe/wp-content/themes/cajatacna/img/logo.svg` y se integrará de forma local en los directorios públicos de ambos proyectos.

## Proposed Changes

---

### Componente: Logotipo y Favicon de la Marca

#### [NEW] [logo-cajatacna.svg](file:///c:/Users/USUARIO/Downloads/banco-pichincha-main/front_homebanking_react/public/logo-cajatacna.svg)
- Contenido SVG de Caja Tacna (extraído de su web oficial con color principal `#CC2027` y gris `#99999A`).

#### [NEW] [logo-cajatacna.svg](file:///c:/Users/USUARIO/Downloads/banco-pichincha-main/front_core_financiero_react/public/logo-cajatacna.svg)
- Mismo contenido SVG en la carpeta pública del Core Financiero.

---

### Componente: Core Financiero (`front_core_financiero_react`)

#### [MODIFY] [index.html](file:///c:/Users/USUARIO/Downloads/banco-pichincha-main/front_core_financiero_react/index.html)
- Cambiar el `<title>` de "Core Financiero — Banco Andino" a "Core Financiero — Caja Tacna".

#### [MODIFY] [index.css](file:///c:/Users/USUARIO/Downloads/banco-pichincha-main/front_core_financiero_react/src/index.css)
- Reemplazar las variables de color corporativo de Pichincha (`#0F265C`, `#FFDD00`) por la paleta de Caja Tacna (`#CC2027` como rojo principal, `#991319` como rojo oscuro y `#99999A` como gris de contraste).
- Adaptar el gradiente lineal `--franja` al patrón rojo-gris-blanco.

#### [MODIFY] [home.css](file:///c:/Users/USUARIO/Downloads/banco-pichincha-main/front_core_financiero_react/src/styles/home.css)
- Modificar las variables de color internas del landing de acceso (`--rojo`, `--magenta`, etc.).
- Actualizar el gradiente de fondo de inicio de sesión (`.split-login`) para usar la gama de rojos de Caja Tacna.

#### [MODIFY] [Logo.jsx](file:///c:/Users/USUARIO/Downloads/banco-pichincha-main/front_core_financiero_react/src/components/ui/Logo.jsx)
- Reemplazar la referencia a `logo-pch.svg` por `/logo-cajatacna.svg`.
- Cambiar la propiedad `alt` a "Caja Tacna".

#### [MODIFY] [LoginPage.jsx](file:///c:/Users/USUARIO/Downloads/banco-pichincha-main/front_core_financiero_react/src/pages/LoginPage.jsx)
- Reemplazar el encabezado de texto `<h1>Banco Pichincha</h1>` por `<h1>Caja Tacna</h1>`.

#### [MODIFY] [HomePage.jsx](file:///c:/Users/USUARIO/Downloads/banco-pichincha-main/front_core_financiero_react/src/pages/HomePage.jsx)
- Cambiar los colores de la animación `Flor` para usar rojo `#CC2027` y gris `#99999A`.
- Modificar los colores del fondo de los SVGs decorativos del carrusel para adaptarlos a la paleta de Caja Tacna.
- Modificar el pie de página para cambiar "Banco Pichincha" por "Caja Tacna".

#### [MODIFY] [DashboardPage.jsx](file:///c:/Users/USUARIO/Downloads/banco-pichincha-main/front_core_financiero_react/src/pages/DashboardPage.jsx)
- Cambiar los colores de los gráficos y barras de progreso institucionales (reemplazando el azul oscuro `#0F265C` por el rojo `#CC2027` y el amarillo `#FFDD00` por el gris `#99999A`).

#### [MODIFY] [MiCarteraDashboard.jsx](file:///c:/Users/USUARIO/Downloads/banco-pichincha-main/front_core_financiero_react/src/pages/MiCarteraDashboard.jsx)
- Reemplazar los colores de los tipos de producto (`PRODUCTO.ME.color` y `PRODUCTO.PE.color`) por el nuevo set de rojos y grises.

---

### Componente: Homebanking (`front_homebanking_react`)

#### [MODIFY] [index.html](file:///c:/Users/USUARIO/Downloads/banco-pichincha-main/front_homebanking_react/index.html)
- Cambiar el `<title>` a "Caja Tacna — Tu Caja por Internet".
- Actualizar el `<link rel="icon">` para usar el favicon oficial de Caja Tacna.

#### [MODIFY] [index.css](file:///c:/Users/USUARIO/Downloads/banco-pichincha-main/front_homebanking_react/src/index.css)
- Actualizar todas las variables corporativas (`--hb-red`, `--hb-red-dark`, `--hb-magenta`, `--hb-turquesa`) con la paleta de Caja Tacna.
- Ajustar los gradientes `--hb-grad` y `--hb-grad-login` para usar la escala de rojos corporativos.
- Cambiar el fondo de la barra de navegación superior `.bbva-topbar` para usar los tonos de Caja Tacna.

#### [MODIFY] [Logo.jsx](file:///c:/Users/USUARIO/Downloads/banco-pichincha-main/front_homebanking_react/src/components/ui/Logo.jsx)
- Apuntar a `/logo-cajatacna.svg` y usar `alt="Caja Tacna"`.

#### [MODIFY] [PublicHeader.jsx](file:///c:/Users/USUARIO/Downloads/banco-pichincha-main/front_homebanking_react/src/components/layout/PublicHeader.jsx)
- Actualizar `aria-label` a "Caja Tacna — Inicio".

#### [MODIFY] [PublicFooter.jsx](file:///c:/Users/USUARIO/Downloads/banco-pichincha-main/front_homebanking_react/src/components/layout/PublicFooter.jsx)
- Cambiar referencias de texto de "Banco Pichincha" a "Caja Tacna".
- Modificar el texto del pie de página y la información de contacto (Central telefónica de Tacna: (052) 583658, email `contacto@cmactacna.com.pe` y dirección física en Tacna).

#### [MODIFY] [HomePage.jsx](file:///c:/Users/USUARIO/Downloads/banco-pichincha-main/front_homebanking_react/src/pages/HomePage.jsx)
- Actualizar el texto de bienvenida para reflejar que la posición global de los productos es en Caja Tacna.
- Modificar el fondo del KPI de ahorros para usar el tono rojo suave.

#### [MODIFY] [LandingPage.jsx](file:///c:/Users/USUARIO/Downloads/banco-pichincha-main/front_homebanking_react/src/pages/LandingPage.jsx)
- Actualizar los títulos, banners y preguntas frecuentes ("¿Por qué Caja Tacna?").
- Reemplazar los colores de los iconos de la lista de productos destacados para usar la paleta cromática roja de Caja Tacna.

#### [MODIFY] [OperacionesPage.jsx](file:///c:/Users/USUARIO/Downloads/banco-pichincha-main/front_homebanking_react/src/pages/OperacionesPage.jsx)
- Cambiar los colores de los iconos para ajustarse a Caja Tacna.

#### [MODIFY] [PagoServiciosPage.jsx](file:///c:/Users/USUARIO/Downloads/banco-pichincha-main/front_homebanking_react/src/pages/PagoServiciosPage.jsx)
- Modificar el color corporativo del icono de telefonía para usar el rojo de la marca.

---

## Verification Plan

### Automated Tests
- Validaremos que no haya errores de compilación ejecutando:
  - En `front_core_financiero_react`: `npm run build`
  - En `front_homebanking_react`: `npm run build`

### Manual Verification
- Iniciaremos los servidores locales (`npm run dev`) para revisar visualmente la correcta aplicación del diseño, el logo de Caja Tacna y el nuevo esquema de color.
