import { Reducer } from 'redux';
import { AIActionTypes, OrbitActionTypes } from './types';
import { AIState, OrbitState } from './index';

const initialAIState: AIState = {
  entities: [],
  loading: false,
  error: null,
};

const initialOrbitState: OrbitState = {
  orbits: [],
  currentOrbit: null,
  loading: false,
  error: null,
};

export const aiReducer: Reducer<AIState, AIActionTypes> = (state = initialAIState, action) => {
  switch (action.type) {
    case 'FETCH_AI_ENTITIES_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_AI_ENTITIES_SUCCESS':
      return {
        ...state,
        entities: action.payload,
        loading: false,
      };
    case 'FETCH_AI_ENTITIES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orbitReducer: Reducer<OrbitState, OrbitActionTypes> = (state = initialOrbitState, action) => {
  switch (action.type) {
    case 'FETCH_ORBITS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_ORBITS_SUCCESS':
      return {
        ...state,
        orbits: action.payload,
        loading: false,
      };
    case 'FETCH_ORBITS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'SET_CURRENT_ORBIT':
      return {
        ...state,
        currentOrbit: action.payload,
      };
    default:
      return state;
  }
};