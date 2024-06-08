let ROUTES = {};
let rootEl = "";

export const setRootEl = (el) => {
  rootEl = el;
};

export const setRoutes = (routes) => {
  if (typeof routes === "object") {
    if (routes["/error"]) {
      ROUTES = routes;
    }
  }
};

export const queryStringToObject = (queryString) => {
  const urlParams = new URLSearchParams(queryString);
  const queryParams = {}; 
  for (const [key, value] of urlParams) {
    queryParams[key] = value;
  }
  return queryParams;
 
};

export const renderView = (pathname, props = {}) => {
  const root = rootEl;
  let view;
  root.innerHTML = "";
  if (ROUTES[pathname]) {
    view = ROUTES[pathname](props);
  } else {
    view = ROUTES["/error"](props);
  }
  root.appendChild(view);
  
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