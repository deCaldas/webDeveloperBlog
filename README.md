# Web Developer Blog

Web Developer Blog es un blog personal que comparte contenido de calidad y actualizado sobre el desarrollo web full stack con Javascript. El objetivo del blog es ayudar a los desarrolladores web jr a mejorar sus habilidades y superar las pruebas técnicas. El blog está creado con Next.js y Tailwind CSS, usando el template Tailwind Nextjs Starter Blog.

## Características

- Escritura técnica en formato markdown con soporte para MDX, que permite usar componentes de React dentro del markdown.
- Estilo personalizable con Tailwind CSS, un framework de CSS basado en utilidades que permite crear sitios web modernos sin salir del HTML.
- Generación de sitio web estático con Next.js, un marco de desarrollo web basado en React que permite crear sitios web estáticos y dinámicos con un alto rendimiento y una buena experiencia de usuario.
- Despliegue fácil en GitHub Pages, un servicio de hosting gratuito que permite publicar sitios web estáticos directamente desde un repositorio de GitHub.

## Uso

Para usar este proyecto, debes seguir los siguientes pasos:

- Clonar el repositorio de GitHub del proyecto o usar el botón "Use this template" para crear tu propio repositorio a partir del template.
- Instalar las dependencias con `yarn install` o `npm install`.
- Ejecutar el servidor de desarrollo con `yarn dev` o `npm run dev`.
- Crear tus posts en formato markdown dentro de la carpeta `app/posts`. Puedes usar el archivo `example.md` como referencia para el formato y los metadatos que debes incluir en cada post. También puedes agregar imágenes dentro de la carpeta `public/static` y referenciarlas en tus posts con la ruta `/static/imagen.jpg`.
- Personalizar el aspecto y el comportamiento de tu blog editando los archivos dentro de las carpetas `components`, `css`, `data` y `layouts`. Puedes cambiar el nombre del blog, el autor, la descripción, el tema, los colores, las fuentes, los componentes y mucho más. Consulta la documentación del template para más detalles sobre cada archivo y opción.
- Generar el sitio web estático con `yarn build` o `npm run build`. Esto creará una carpeta `.next` con los archivos necesarios para desplegar tu blog en GitHub Pages.
- Crea una nueva rama en tu repositorio llamada `gh-pages` y copia el contenido de la carpeta `.next` en ella. Puedes usar el comando `git subtree push --prefix .next origin gh-pages` para hacerlo de forma rápida.
- Vuelve a la página de GitHub y accede a la sección Pages de los Settings del repositorio. Selecciona la rama `gh-pages` para habilitar GitHub Pages. Espera unos minutos hasta que se complete el despliegue.
- Accede a la URL que te proporciona GitHub Pages para ver tu blog en vivo. Por defecto, será algo como `https://<tu-usuario>.github.io/<tu-repositorio>`.

## Contribuir

Si quieres contribuir a este proyecto, puedes hacerlo de las siguientes formas:

- Reportar errores o sugerir mejoras abriendo un issue en el repositorio del proyecto.
- Enviar un pull request con tus cambios o nuevas funcionalidades al repositorio del proyecto.
- Compartir el proyecto con otros desarrolladores web que puedan estar interesados en él.

## Licencia

Este proyecto está licenciado bajo la licencia MIT, lo que significa que puedes usarlo, modificarlo y distribuirlo libremente, siempre que incluyas el archivo de licencia original y des crédito al autor. El autor del proyecto es **[Timothy Lin](https://www.timlrx.com)**, un desarrollador web apasionado por el aprendizaje continuo.

## Licence

[MIT](https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/main/LICENSE) © [Timothy Lin](https://www.timlrx.com)
