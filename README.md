# Proyecto Final: Explorador de Películas Pokémon

**Nombre del alumno:** Fernando García Rojas

El proyecto final del curso llamado **“Explorador de Películas Pokémon”** es una aplicación frontend desarrollada con **React** que permite al usuario buscar y explorar películas de Pokémon de manera interactiva. La interfaz muestra tarjetas de películas con su poster, título y una breve descripción, y permite acceder a un detalle individual de cada película al hacer clic sobre ella.  

La aplicación funciona como un **SPA (Single Page Application)**, lo que significa que la navegación entre la página principal, el detalle de películas y la sección de contacto se realiza sin recargar el navegador. Además, incluye un formulario de contacto para enviar sugerencias de películas y utiliza **Context API** para compartir datos entre los distintos componentes de manera eficiente.  

La experiencia está acompañada de un diseño visual atractivo, con tarjetas centradas, bordes redondeados, sombras y tipografía profesional, manteniendo la estética Pokémon.

---

## Archivos usados

- **App.jsx:** Componente principal que maneja las rutas de la SPA y contiene la barra de navegación entre Home, Detalle y Contacto.  
- **main.jsx:** Archivo de entrada de React; renderiza el componente App dentro de BrowserRouter.  
- **App.css:** Contiene los estilos principales de la aplicación, incluyendo la disposición de tarjetas, navegación, responsive y tipografía.  
- **index.css:** Estilos globales opcionales que afectan al body y tipografía general.  
- **/components/MovieCard.jsx:** Define la tarjeta de cada película mostrando poster, título y descripción.  
- **/components/MovieList.jsx:** Lista todas las tarjetas de películas usando MovieCard y las organiza en un grid.  
- **/components/SearchBar.jsx:** Permite buscar películas por nombre y filtrar la lista dinámica usando Context API.  
- **/context/MoviesContext.jsx:** Contexto de React que mantiene la lista de películas y comparte datos entre componentes.  
- **/pages/Home.jsx:** Página principal donde se muestra la barra de búsqueda y la lista de películas.  
- **/pages/MovieDetail.jsx:** Página de detalle de una película específica, accedida al hacer clic en una tarjeta.  
- **/pages/Contact.jsx:** Contiene un formulario de contacto para sugerencias de películas.  
- **/services/moviesApi.js:** Simula llamadas a una API; devuelve los datos estáticos de películas.  
- **/data/movies.json:** Contiene los datos estáticos de las películas (id, título, descripción, poster).  

---

## Objetivos y cómo se cumplieron

- **Buscar películas por nombre:** Se logró mediante el componente `SearchBar` que filtra dinámicamente las películas.  
- **Mostrar resultados en tarjetas:** `MovieList` y `MovieCard` muestran el poster, título y descripción de cada película.  
- **Ver detalle individual de películas:** `MovieDetail.jsx` permite acceder a información completa de una película al hacer clic.  
- **Navegación SPA entre secciones:** La aplicación permite navegar entre Home, Detalle y Contacto sin recargar la página usando `react-router-dom`.  
- **Enviar sugerencias mediante un formulario:** `Contact.jsx` permite al usuario enviar sugerencias (simulado con alert).  
- **Compartir datos entre componentes:** `MoviesContext.jsx` gestiona la información de películas y la comparte eficientemente.

