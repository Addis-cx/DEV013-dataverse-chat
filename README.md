# Dataverse Chat

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Funcionalidades](#2-resumen-del-proyecto)
* [3. Estructura del proyecto](#3-consideraciones-generales)
* [4. Definición técnica del proyecto](#4-funcionalidades)
* [5. Desarrolladoras](#5-consideraciones-técnicas)


***

## 1. Resumen del proyecto

Este proyecto es una celebración del legado cinematográfico de Studio 
Ghibli. Nuestra herramienta, ofrece una variedad de funciones para 
los amantes del cine de Ghibli desde la capacidad de buscar una película 
específica hasta la libertad de filtrar y ordenar según los gustos 
individuales, cada interacción está diseñada para brindar una experiencia 
fluida y personalizada.

Gracias a la implementación de la Single Page Application (SPA), la 
navegación se convierte en un viaje sin obstáculos, donde la inmersión 
en el universo de Ghibli es ininterrumpida y envolvente. La arquitectura 
de SPA complementa perfectamente la visión de nuestra plataforma.

Sin embargo, la innovación no se detiene aquí. Introducimos un toque de 
inteligencia artificial a través de un sistema de chat impulsado por la
API de OpenAI para que tenga la capacidad de interactuar o conversar con cada
película.

En resumen, lo que hemos creado es más que una simple aplicación web; 
es un tributo interactivo a la imaginación, la creatividad y la emoción 
que Studio Ghibli ha infundido en generaciones de espectadores. Es una 
invitación a explorar, descubrir y compartir la magia de estas obras 
maestras del cine animado japonés, todo ello en un entorno digital 
diseñado con amor y dedicación.

Bienvenidos a nuestro rincón virtual del mundo de Ghibli.

![alt Pantalla Principal](<Captura pantalla principal escritorio.png>)

## 2. Funcionalidades

El entregable final es una Single Page Application (SPA) que permite, cuya 
funcionalidad a continuación:

* HOME: Vista principal que proporciona un listado de las películas realizadas  
  por el Studio Ghibli con las siguientes opciones:
  - Ver más: Se puede acceder a una descripción más amplia de cada una de las
    películas.
  - Filtado y Ordenamiento: Las películas se pueden filtrar por categoría y
    ordenar en forma ascedente o descendiente.
  - Búsqueda: En esta opción se puede buscar una película por nombre.
  - Estadísticas: Se puede observar las estadísticas de las películas.

* ERROR 404:  Vista que observa la usuaria cuando existe un error en la página.

* CHAT INDIVIDUAL: Vista para ingresar a un chat con la película seleccionada
  y poder interactuar preguntando los datos que sean de curiosidad de la usuaria.

![alt Chat Individual](<Captura ChatApi Escritorio.png>)
  
```text
Usuaria: "Hola, Casillo en el cielo, ayúdame con una descripción de la película."

Casillo en el cielo (AI de OpenAI): "Soy una película de Studio Ghibli dirigida 
por Hayao Miyazaki, que narra la historia de una joven llamada Sheeta y un niño 
llamado Pazu en su búsqueda por descubrir los secretos de un misterioso 
castillo flotante."

Usuaria: "¿En qué año estrenaste?"

Casillo en el cielo (AI de OpenAI): " Estrené en 1986."
```

## 3. Estructura del proyecto

La lógica del proyecto esta implementada completamente en Vanilla JavaScript (ES6), 
HTML y CSS. 

```text
.
├── src
|  ├── components
|  |  └── ButtonHome.js
|  |  └── Cards.js
|  |  └── divAPI.js
|  |  └── Filters.js
|  |  └── Footer.js
|  |  └── Header.js
|  ├── data
|  |  └── dataset.js
|  ├── Images
|  |  └── duendes-del-polvo.png
|  |  └── toro-paraguas.png
|  ├── Lib
|  |  └── apiKey.js
|  |  └── dataFunctions.js
|  |  └── openAIApi.js
|  ├── views
|  |  └── APIKEY.js
|  |  └── ChatIndividual.js
|  |  └── Error.js
|  |  └── Home.js
|  ├── index.html
|  ├── index.js
|  ├── router.js
|  └── style.css
├── test
|  └── apiKey.spec.js
|  └── components.spec.js
|  └── data.js
|  └── dataFunctions.spec.js
├── README.md
└── package.json

```

## 4. Definición técnica del proyecto

### Definición del producto

Para el desarrollo del proyecto se utilizaron herramientas de la web 
moderna, desde el poderoso HTML, CSS y JavaScript hasta la magia 
emergente de la inteligencia artificial, se ha dado vida a una 
experiencia única centrada en el inigualable universo de Studio Ghibli.

### Historias de usuaria

Conocedora de las necesidades de las usuarias amantes de las películas de 
Studio Ghibli, se plantearon las siguientes historias:

Historia de Usuaria N°1

Yo como Usuaria deseo ver una pagina con opciones de menú claras, colores 
suaves para la vista.

Criterios mínimos de aceptación

      - Correcta funcionalidad.
      - Una buena experiencia de usuaria.
      - Que tenga un menú hamburguesa con el filtrado por género, ordenado 
        de forma asc y des y la estadística.
      - Colores suaves que contrasten con las imagenes de las peliculas, de 
        diseño agradable.

Definición de terminado 
  
     - Las opciones del menú y el buscador, funcionen correctamente.
     - Que el menú contenga opciones de filtrado, ordenado y estadísticas.
     - Que la paleta de colores sea suave y colores claros.

Historia de Usuaria N°2

Yo como aficionada de Studio Ghibli espero poder chatear con las películas.

Criterios de aceptación:
 
    - Un botón que te lleve a un chat individual para cada película 
    - Un botón que me dirija a un chat grupal, con todas las películas.
    - Con un botón para ingresar a la API Key.
    - Una vista creativa que muestre error.
    
Definición de terminado

    - Debe contener un botón para chat individual, para chat grupal y un botón 
      para ingresar a la API Key.
    - Una vista ingeniosa para la vista del error.


Luego de establecer historias de usuaria se planificó con ayuda de la 
herramiento Notion cada sprints.

![alt Planning](<Captura Notion.png>)

### Diseño de la Interfaz de Usuaria

#### Prototipo de alta fidelidad

Con la ayuda de la herramienta Figma se elaboró el prototipo de alta fidelidad.

![alt Vista Celular](<Captura Figma Celular.png>)

![alt Vista Error-Api Celular](<Captura Figma Celular-Error-API.png>)

![alt Vista Chat Escritorio](<Captura Figma Escritorio.png>)

### Pruebas unitarias

### HTML

### CSS

### Web APIs

- [ ] **Ruteado (History API, evento hashchange, window.location)**

- [ ] **Browser storage (localStorage, sessionStorage)**

- [ ] **Fetch API**

#### DOM (Document Object Model)

- [ ] **Uso de selectores del DOM**

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

- [ ] **Manipulación dinámica del DOM**
<>
### JavaScript

#### Asincronía

- [ ] **Callbacks**

- [ ] **Promesas**

#### Testing en Javascript

- [ ] **Pruebas unitarias (unit tests)**

- [ ] **Pruebas asíncronas**

- [ ] **Uso de mocks y espías**

### Control de Versiones (Git y GitHub)

#### Git

#### GitHub

## 5. Desarrolladoras

Se forjó una colaboración excepcional entre dos mentes 
apasionadas por el arte y la tecnología. 

Addis Pérez & Daisy Correa

