let ROUTES = {};
let rootEl = "";

export const setRootEl = (el) => {
  // El parametro (el) representa x elemento HTML
  rootEl = el;
  //rootEl es el contenedor principal donde se renderizarán todas las vistas 
};

export const setRoutes = (routes) => {
  //routes es un objeto que contiene las rutas de la app
  if (typeof routes === "object") {
    //Si routes es estrictamente igual a un objeto
    if (routes["/error"]) {
      //Si ruoutes contiene la ruta de Error
      ROUTES = routes;
    }
  }//Si se cumplen las condicionales se asigna el objeto routes a la variable ROUTES
};

export const queryStringToObject = (queryString) => {
  //El parametro (queryString) es la cadena de consulta
  const urlParams = new URLSearchParams(queryString);
  const queryParams = {}; 
  // Creamos un objeto vacio para almacenar Key, Value
  for (const [key, value] of urlParams) {
    //Recorre todos los pares de Key Value en EL OBJETO urlParams
    queryParams[key] = value;
    //Asignamos cada key y value al objeto queryParams
    //"?id=123&name=John" = { id: "123", name: "John" }
  }
  return queryParams;
  //Devuelve el queryParams
};

export const renderView = (pathname, props = {}) => {
  //pathname es la ruta de la vista que se va a renderizar
  //props es un objeto vacio
  const root = rootEl;
  //A la variable root se le asigna el elemento rootEl donde se renderizan las vistas ¿
  let view;
  root.innerHTML = "";
  //Se limpia el elemento root
  if (ROUTES[pathname]) {
    //Si en el objeto ROUTES hay una ruta especifica [pathname]
    view = ROUTES[pathname](props);
    //Si se cumple, se llama a la función y se le pasa el objeto props
  } else {
    view = ROUTES["/error"](props);
    //Si la ruta no está definida en ROUTES se llama a la ruta de error y se le pasa el objeto props
  }
  root.appendChild(view);
  //view se añade como hijo al elemento root para renderizar en la vista
};

export const navigateTo = (pathname, props = {}) => {
 history.pushState({}, "", pathname);
 //Con history se puede mirar el historial 
 const apartRoot = pathname.split("?");
 pathname = apartRoot[0];
 props = apartRoot[1];
 const propsObject = queryStringToObject(props);
 
 renderView(pathname, propsObject);
};

export const onURLChange = (location) => {
  const newProps = queryStringToObject(window.location.search);
  renderView(location, newProps);
};

// const searchParams = new URLSearchParams();
// Object.entries(props).forEach(([key, value]) => {
//   searchParams.set(key, value);
// });
// const queryString = searchParams.toString();

// const URLvisited = `${pathname}${queryString ? `?${queryString}` : ""}`;
// history.pushState({ pathname, props }, "", URLvisited);