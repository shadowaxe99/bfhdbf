// src/store/actions.ts

import { AIEntity, OrbitEntity, Persona, Environment } from '../types/index.d.ts';

// AI Actions
export const FETCH_AI_ENTITIES = 'FETCH_AI_ENTITIES';
export const UPDATE_AI_ENTITY = 'UPDATE_AI_ENTITY';
export const DELETE_AI_ENTITY = 'DELETE_AI_ENTITY';
export const CREATE_AI_ENTITY = 'CREATE_AI_ENTITY';

// Orbit Actions
export const FETCH_ORBIT_ENTITIES = 'FETCH_ORBIT_ENTITIES';
export const UPDATE_ORBIT_ENTITY = 'UPDATE_ORBIT_ENTITY';
export const DELETE_ORBIT_ENTITY = 'DELETE_ORBIT_ENTITY';
export const CREATE_ORBIT_ENTITY = 'CREATE_ORBIT_ENTITY';

// Persona Actions
export const FETCH_PERSONAS = 'FETCH_PERSONAS';
export const UPDATE_PERSONA = 'UPDATE_PERSONA';
export const DELETE_PERSONA = 'DELETE_PERSONA';
export const CREATE_PERSONA = 'CREATE_PERSONA';

// Environment Actions
export const FETCH_ENVIRONMENTS = 'FETCH_ENVIRONMENTS';
export const UPDATE_ENVIRONMENT = 'UPDATE_ENVIRONMENT';
export const DELETE_ENVIRONMENT = 'DELETE_ENVIRONMENT';
export const CREATE_ENVIRONMENT = 'CREATE_ENVIRONMENT';

// AI Action Creators
export const fetchAIEntities = () => ({
  type: FETCH_AI_ENTITIES,
});

export const updateAIEntity = (aiEntity: AIEntity) => ({
  type: UPDATE_AI_ENTITY,
  payload: aiEntity,
});

export const deleteAIEntity = (aiEntityId: string) => ({
  type: DELETE_AI_ENTITY,
  payload: aiEntityId,
});

export const createAIEntity = (aiEntity: AIEntity) => ({
  type: CREATE_AI_ENTITY,
  payload: aiEntity,
});

// Orbit Action Creators
export const fetchOrbitEntities = () => ({
  type: FETCH_ORBIT_ENTITIES,
});

export const updateOrbitEntity = (orbitEntity: OrbitEntity) => ({
  type: UPDATE_ORBIT_ENTITY,
  payload: orbitEntity,
});

export const deleteOrbitEntity = (orbitEntityId: string) => ({
  type: DELETE_ORBIT_ENTITY,
  payload: orbitEntityId,
});

export const createOrbitEntity = (orbitEntity: OrbitEntity) => ({
  type: CREATE_ORBIT_ENTITY,
  payload: orbitEntity,
});

// Persona Action Creators
export const fetchPersonas = () => ({
  type: FETCH_PERSONAS,
});

export const updatePersona = (persona: Persona) => ({
  type: UPDATE_PERSONA,
  payload: persona,
});

export const deletePersona = (personaId: string) => ({
  type: DELETE_PERSONA,
  payload: personaId,
});

export const createPersona = (persona: Persona) => ({
  type: CREATE_PERSONA,
  payload: persona,
});

// Environment Action Creators
export const fetchEnvironments = () => ({
  type: FETCH_ENVIRONMENTS,
});

export const updateEnvironment = (environment: Environment) => ({
  type: UPDATE_ENVIRONMENT,
  payload: environment,
});

export const deleteEnvironment = (environmentId: string) => ({
  type: DELETE_ENVIRONMENT,
  payload: environmentId,
});

export const createEnvironment = (environment: Environment) => ({
  type: CREATE_ENVIRONMENT,
  payload: environment,
});