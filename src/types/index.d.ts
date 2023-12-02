// src/types/index.d.ts

export interface AIEntity {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'training';
  capabilities: AICapability[];
}

export interface AICapability {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
}

export interface UserInteraction {
  id: string;
  type: 'voice' | 'text' | 'gesture';
  content: string;
  timestamp: Date;
}

export interface SimulationEnvironment {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
}

export interface Persona {
  id: string;
  name: string;
  personalityTraits: string[];
  preferences: UserPreference[];
}

export interface UserPreference {
  id: string;
  name: string;
  value: string | number | boolean;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  status: 'pending' | 'in-progress' | 'completed';
}

export interface Game {
  id: string;
  title: string;
  genre: string;
  description: string;
  releaseDate: Date;
}

export interface Transaction {
  id: string;
  from: string;
  to: string;
  amount: number;
  currency: string;
  timestamp: Date;
  status: 'pending' | 'completed' | 'failed';
}

export interface OrbitState {
  aiEntities: AIEntity[];
  userInteractions: UserInteraction[];
  environments: SimulationEnvironment[];
  personas: Persona[];
  tasks: Task[];
  games: Game[];
  transactions: Transaction[];
}

export interface AIContextState {
  aiEntities: AIEntity[];
  addAIEntity: (entity: AIEntity) => void;
  updateAIEntity: (entity: AIEntity) => void;
  removeAIEntity: (entityId: string) => void;
}

export interface OrbitContextState {
  orbitData: OrbitState;
  updateOrbitData: (data: Partial<OrbitState>) => void;
}

export interface ServiceResponse<T> {
  data: T;
  error?: string;
}

export interface AIAction {
  type: string;
  payload: any;
}

export interface OrbitAction {
  type: string;
  payload: any;
}

export interface AIState {
  entities: AIEntity[];
}

export interface OrbitState {
  data: OrbitState;
}

export type AIActionType = 'ADD_ENTITY' | 'UPDATE_ENTITY' | 'REMOVE_ENTITY';
export type OrbitActionType = 'UPDATE_ORBIT_DATA';

// Reiterate the type definitions for AI projects and collaborators.
export interface Project {
  // type definition remains the same
}

export interface Collaborator {
  // type definition remains the same
}