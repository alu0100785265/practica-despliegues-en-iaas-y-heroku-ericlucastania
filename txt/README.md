

 

> #### primary::1. Gitbook 

> ![](icons/gitbook.PNG)

> ### ¿Qué es?  


> Gitbook es una herramienta que nos permite crear libros y
documentos utilizando sintaxis Markdown o AsciiDoc. Estos
libros una vez creados, pueden ser visualizados en web, o
pueden ser exportados como e-book o pdf. 

> Tiene una plataforma web donde una vez identificados se puede publicar libros de forma gratuita. {%youtube%} https://www.youtube.com/watch?v=fvirwCe66IA {%endyoutube%}


> ### Utilización

> ***1. Creación de una cuenta en Gitbook***


> Para crear una cuenta en Gitbook podemos dar nuestros datos para
la creación o asociarla con Github o alguna otra plataforma. Es interesante 
asociarla con Github para documentar proyectos ya que tendrás acceso a los
distintos repositorios de tu cuenta. Pudiendo documentar así el que más te pueda interesar.
    
> ***2. Creación de un libro***

> Una vez dentro de la página tendremos la opción de crear nuestra documentación
para ello tendremos que elegir un título y un modo. Que podrá ser enlazando el
contenido con Github o dejarlo en Gitbook.


> ### Markdown ![](icons/markdo.PNG)

> Para el desarrollo de este documento se ha utilizado Markdown. Aquí las multiples opciones que ofrece este lenguaje.
>
    # Encabezado h1
    ## Encabezado h2
    ### Encabezado h3
    #### Encabezado h4
    ##### Encabezado h5
    ###### Encabezado h6
    Citas: Para citar solo es necesario escribir una cuña antes del texto
>
    La vida es muy corta para aprender Alemán. -Tad Marburg
    Texto con énfasis: Agregar un asterisco para cursiva y dos para negrita
>
     *énfasis* (cursiva)
>
     **énfasis fuerte** (negrita)
    Código: Se utiliza el acento grave para identificar código
>
     `Código`
     ```
     Código en
     varias líneas
     ```
    Listas:
>
     * Un elemento en una lista no ordenada
     * Otro elemento en una lista
     1. Elemento en una lista enumerada u ordenada.
     2. Otro elemento
    Enlaces:
>
     [Texto del enlace aquí](URL "Título del enlace")

----------

> #### warning:: 2. Github Desktop  
> ![](icons/git.PNG)
### Instalación

> Para instalar Github APP en windows se ha accedido a la [página oficial ](https://desktop.github.com/) e se instaló la version de desktop que nos permite trabajar con una interfaz
![](images/github.PNG)

> Una vez instalado el mismo podremos trabajar con los respositorios vinculados a nuestra cuenta de GitHub, así como crear, clonar los mismos y trabajar con múltiples ramas mediante una interfaz gráfica.


> ![](images/gitdesk.PNG)



----------


> #### danger:: 3. Gh-Pages 
> ![](icons/gh-pages.PNG)
> ### ¿Qué son?

> Se trata de una herramienta de Git hub que permite desplegar tu página web de manera sencilla. Simplemente creando una rama llamada "gh-pages" y empujando los archivos a ella.
> ### ¿Cómo se utilizan?
> ***1. Crear un archivo index***
    Dentro de github.com creamos un nuevo repositorio o vamos a uno ya existente. hacemos click en *Create a new file*. 

> ***2. Escribimos el contenido del archivo***
    Debemos llamar a dicho archivo *idex.html*. Escribimos codigo HTML en él.

> ***3. Escribimos el commit del archivo***
    Bajamos hasta la parte baja de la pagina, escribimos un mensaje de commit y hacemos click en *Commit new file*.

> ***4. Configuración del repositorio***
    En la pestaña *Settings* vamos a la sección GitHub Pages, seleccionamos la rama master como fuente y guardamos.

> ***5. Y hemos acabado***
    Si escribimos en un navegador la dirección *http://nombredeusuario.github.io/repositorio* tendremos la pagina web de nuestro proyecto.
  
----------


> #### success:: 4. Despliegue en Gitbook 
> ![](icons/gitbook.PNG)

>  GitBook está implementando usando node.js, podemos instalarlo usando NPM:

> ```$ npm install gitbook -g```

> Podemos servir un libro directamente desde un repositorio con este comando:

> ```$ gitbook serve ./repository```

> Los documentos se pueden exportar como sitio web independiente incluyendo ejemplos interactivos que pueden ser alojados directamente desde GitHub Pages, 
PDF con la solución de los ejercicios al final del libro, ebook utilizando además un conversor, formato Single Page o JSON 
para extraer metadatos del documento.

> Cuenta con un editor de forma experimental para Windows, Mac y Linux que facilita la escritura en GitBook.
  
----------

> #### warning::5. NodeJS
> ### ¿Qué es?   ![](icons/help.PNG)
Node es un intérprete Javascript del lado del servidor que cambia la noción de cómo debería trabajar un servidor. Su meta es permitir a un programador construir aplicaciones altamente escalables y escribir código que maneje decenas de miles de conexiones simultáneas en una sólo una máquina física.

> ### Instalación
> Para instalar ***NodeJS*** se ha accedido a la [página oficial de nodeJS](https://nodejs.org/en/)
> donde se ha encontrado dos versiones, una estable y la ultima version reciente.Se instaló la versión estable.![Version estable nodejs](images/nodejs.PNG)

> ### NPM
> Es el manejdor por defecto para Node.js, un entorno de ejecucion para JavaScript. Se ejecuta desde la linea de comandos y maneja las dependencias para una aplicación, es el equivalente a gemspec de ruby.
Ademas permite a los usuarios instalar aplicaciones Node.js que se encuentran en el repositorio. La sintaxis para instalar un modulo es:

> ```$ npm install <Module Name> ```





> ## Comprobación de **npm**

> Para comprobar el que npm se ha instalado correctamente hemos ejecutado el comando : ```npm version```. Tras la correcta ejecución del mismo damos por adecuada la intrepretación de comandos en el mismo.

> ![](images/npmversion.PNG)


> ### Package.json

> Este documento es todo lo que necesitas saber acerca de lo que requiere tu proyecto. Está escrito en JSON, no es un objeto 
literal de javascript. Todo lo que se describe en este documento afecta a la configuración del proyecto.


> ### Express

> Express es una infraestructura de aplicaciones web Node.js mínima y 
flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.

> ### Instalación Express

> Para instalar Express se ha introducido el comando en el cmd de windows npm install ```express --save```, se incluyela opción ```--save``` para que se guarde de forma permanente en la lista de dependencias.
> ![](images/express.PNG)




> Para el desarrollo de la práctica instalaremos la última versión reciente para asegurarnos la disponibilidad de sus servicios.

----------

> #### info:: 6. Gulp

> ![](icons/gulp1.PNG)

> ## ¿Qué es Gulp?
>Es una herramienta que permite automatizar tareas comunes de desarrollo.Se suele utilizar para tareas de front-end como recargar la página
,optimizar activos como CSS, JavaScript,las imágenes y un sin fin de demás tareas

## Pon a prueba tus conocimientos
### Recuerda!,el saber no ocupa lugar
{%mcq ans="o2"%}
{%title%} 1.¿Qué es Gitbook?
{%o1%} Una lenguaje de programación
{%o2%} Un herramienta que nos permite documentar
{%o3%} Una aplicación de escritorio
{%o4%} Un proyecto de Google
{%endmcq%}



{%mcq ans="o1"%}
{%title%} 2.¿Qué es el Markdown?
{%o1%} Un lenguaje que nos permite escribir y exportar a diferentes formatos
{%o2%} Un plugin de Gitbook
{%o3%} Una herramienta de desarrollador de Google Chrome
{%o4%} La B y la C son correctas
{%endmcq%}



{%mcq ans="o1"%}
{%title%} 3.¿Para que sirve Gulp?
{%o1%} Para automatizar tareas comunes de desarrollo
{%o2%} Para añadir fechas a Gitbook
{%o3%} Para sincronizar Gitbook con un repositorio
{%o4%} Para codificar en C#
{%endmcq%}



{%mcq ans="o3"%}
{%title%} 4.¿Cuál de las siguientes cuestiones no es cierta respecto a Node.JS?
{%o1%} Es el manejdor por defecto para Node.js
{%o2%} Se ejecuta desde la linea de comandos
{%o3%} No se ejecuta desde la linea de comandos
{%o4%} Permite a los usuarios instalar aplicaciones Node.js que se encuentran en el repositorio
{%endmcq%}



{%mcq ans="o4"%}
{%title%} 5.¿Cuál es el sitio idóneo para encontrar información relacionada con los modulos requeridos por el proyecto?
{%o1%} En el Gulp
{%o2%} En el README
{%o3%} En el SUMMARY
{%o4%} En el Package.json
{%endmcq%}



{%mcq ans="o1"%}
{%title%} 6.¿Qué son las gh-pages?
{%o1%} Un conjunto de aplicaciones web para depurar tu código javascript
{%o2%} Una herramienta para añadir estilo a tu página web
{%o3%} Una herramienta de Github que permite desplegar una página web de manera sencilla
{%o4%} Un conjunto de normas y directrices para escribir codigo html de forma correcta
{%endmcq%}


{%mcq ans="o1"%}
{%title%} 7.¿Cuál de los siguientes comandos se utiliza para combrobar que se ha instalado correctamente npm?
{%o1%} npm version
{%o2%} npm run version
{%o3%} git version
{%o4%} Ninguno de los anteriores comandos es correcto
{%endmcq%}



{%mcq ans="o1"%}
{%title%} 8.¿Cuál es el comando que se utiliza para instalar Gitbook?
{%o1%} npm install gitbook -g
{%o2%} git install gitbook 
{%o3%} Ninguna de las opciones es correcta
{%o4%} npm gitbook
{%endmcq%}


{%mcq ans="o4"%}
{%title%} 9.El orden correcto para utilizar gh-pages es...
{%o1%} Configurar el repositorio, hacer commit, crear un archivo index, escribir el contenido del archivo
{%o2%} Crear un archivo index, hacer commit, escribir el contenido del archivo, configurar el repositorio
{%o3%} Configurar el repositorio, crear un archivo index, escribir el contenido del archivo, hacer commit
{%o4%} Crear un archivo index, escribir el contenido del archivo, hacer commit y configurar el repositorio
{%endmcq%}



{%mcq ans="o1"%}
{%title%} 10.¿Qué es Express?
{%o1%} Es el manejador por defecto para Node.js, un entorno de ejecucion para JavaScript
{%o2%} Una infraestructura de aplicaciones web que proporciona un conjunto de caracteristicas para aplicaciones web y moviles
{%o3%} Un framework para Node con la particularidad de permitir crear documentación a partir de un README y un SUMMARY
{%o4%} Un lenguaje de programación basado en javascript
{%endmcq%}



