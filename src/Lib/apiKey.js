// src/lib/apiKey.js

export const getApiKey = () => {
    // Implementa el código para obtener la API KEY desde Local Storage
        const getStorage = localStorage.getItem("apiKey");
        return getStorage;
        /*console.log(getStorage); */
}; 
 
 export const setApiKey = (Key) => {
   // Implementa el código para guardar la API KEY en Local Storage
   const setStorage = localStorage.setItem("apiKey", Key);
   return setStorage;
 };