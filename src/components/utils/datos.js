
//traido de ChapGPT

/*
import React, { createContext, useContext, useState } from 'react';

// 1. Crear un contexto
const GlobalContext = createContext();

// 2. Crear un componente proveedor que contiene la variable global
function GlobalProvider({ children }) {
  const [globalVariable, setGlobalVariable] = useState('Este es un valor global');

  return (
    <GlobalContext.Provider value={{ globalVariable, setGlobalVariable }}>
      {children}
    </GlobalContext.Provider>
  );
}

// 3. Crear un hook personalizado para acceder al contexto
function useGlobal() {
  return useContext(GlobalContext);
}

// 4. Componentes que utilizan la variable global
function ComponentA() {
  const { globalVariable, setGlobalVariable } = useGlobal();

  return (
    <div>
      <p>Componente A: {globalVariable}</p>
      <button onClick={() => setGlobalVariable('Nuevo valor global en A')}>Cambiar Valor</button>
    </div>
  );
}

function ComponentB() {
  const { globalVariable, setGlobalVariable } = useGlobal();

  return (
    <div>
      <p>Componente B: {globalVariable}</p>
      <button onClick={() => setGlobalVariable('Nuevo valor global en B')}>Cambiar Valor</button>
    </div>
  );
}

function App() {
  return (
    <GlobalProvider>
      <div>
        <ComponentA />
        <ComponentB />
      </div>
    </GlobalProvider>
  );
}

export default App;

*/


//============================================================================

/*
Es diferente hacer los estados globales con react-redux?
ChatGPT


Sí, es diferente hacerlo con React-Redux. React-Redux es una biblioteca que simplifica la gestión del estado global en aplicaciones React utilizando Redux, que es una implementación de almacenamiento de estado. En lugar de utilizar el contexto de React directamente, React-Redux proporciona una forma más estructurada y eficiente de manejar el estado global.

Aquí tienes un ejemplo de cómo funciona con React-Redux:

Primero, debes configurar tu tienda de Redux:

*/



// store.js
import { configureStore } from "@reduxjs/toolkit"; // antes era asi:  import { createStore } from 'redux';

const initialState = {
  globalVariable: 'Este es un valor global',
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_GLOBAL_VARIABLE':
      return { ...state, globalVariable: action.payload };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;





//---------------


