// src/store/types.ts

export interface AIEntity {
  id: string;
  name: string;
  status: 'idle' | 'active' | 'error';
  lastUpdated: Date;
}

export interface OrbitState {
  entities: AIEntity[];
  currentEntityId: string | null;
}

export interface AIState {
  personas: AIPersona[];
  currentPersonaId: string | null;
}

export interface AIPersona {
  id: string;
  name: string;
  personality: string;
  functions: string[];
}

export interface AppState {
  orbit: OrbitState;
  ai: AIState;
}

export const SET_CURRENT_ORBIT_ENTITY = 'SET_CURRENT_ORBIT_ENTITY';
export const UPDATE_ORBIT_ENTITY_STATUS = 'UPDATE_ORBIT_ENTITY_STATUS';
export const SET_CURRENT_AI_PERSONA = 'SET_CURRENT_AI_PERSONA';
export const UPDATE_AI_PERSONA = 'UPDATE_AI_PERSONA';

interface SetCurrentOrbitEntityAction {
  type: typeof SET_CURRENT_ORBIT_ENTITY;
  payload: string;
}

interface UpdateOrbitEntityStatusAction {
  type: typeof UPDATE_ORBIT_ENTITY_STATUS;
  payload: {
    entityId: string;
    status: AIEntity['status'];
  };
}

interface SetCurrentAIPersonaAction {
  type: typeof SET_CURRENT_AI_PERSONA;
  payload: string;
}

interface UpdateAIPersonaAction {
  type: typeof UPDATE_AI_PERSONA;
  payload: AIPersona;
}

export type OrbitActionTypes = SetCurrentOrbitEntityAction | UpdateOrbitEntityStatusAction;
export type AIActionTypes = SetCurrentAIPersonaAction | UpdateAIPersonaAction;

export type AppActionTypes = OrbitActionTypes | AIActionTypes;