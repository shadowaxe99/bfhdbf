import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { OrbitState, OrbitAction } from '../store/types';
import { orbitReducer } from '../store/reducers';

interface OrbitContextProps {
  state: OrbitState;
  dispatch: React.Dispatch<OrbitAction>;
}

const initialState: OrbitState = {
  // Define the initial state of the orbit context
  orbits: [],
  activeOrbit: null,
  loading: false,
  error: null,
};

const OrbitContext = createContext<OrbitContextProps>({
  state: initialState,
  dispatch: () => null,
});

interface OrbitProviderProps {
  children: ReactNode;
}

export const OrbitProvider = ({ children }: OrbitProviderProps) => {
  const [state, dispatch] = useReducer(orbitReducer, initialState);

  return (
    <OrbitContext.Provider value={{ state, dispatch }}>
      {children}
    </OrbitContext.Provider>
  );
};

export const useOrbit = () => {
  const context = useContext(OrbitContext);
  if (context === undefined) {
    throw new Error('useOrbit must be used within an OrbitProvider');
  }
  return context;
};