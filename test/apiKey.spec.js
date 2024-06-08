import { getApiKey, setApiKey } from '../src/Lib/apiKey.js';

describe('getApiKey', () => {
  it('debería regresar correctamente el valor de la API Key', () => {
    const newKey = "456123ada";
    setApiKey(newKey);
    expect(getApiKey()).toBe("456123ada");
  });
  it('si no existe una Api Key', () => {
    const nullKey = "";
    setApiKey(nullKey);
    expect(getApiKey()).toBe("");
  });
});

describe('setApiKey', () => {

  it('debería establecer correctamente la API Key', () => {
    const newKey = "456789";
    setApiKey(newKey);
    expect(localStorage.getItem("apiKey")).toBe(newKey);
  });

  it('si no hay una Apikey guardada', () => {
    const newKey = "";
    setApiKey(newKey);
    expect(localStorage.getItem("apiKey")).toBe(newKey);
  });
});