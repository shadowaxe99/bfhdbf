```typescript
import { AIEntity, OrbitEntity, Persona, Task, Game, Transaction } from '../types/index';

const API_BASE_URL = 'https://api.elysiumos.com';

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

// Define the endpoints for the Elysium OS API
const ENDPOINTS = {
  AI_ENTITIES: '/ai-entities',
  ORBIT_ENTITIES: '/orbit-entities',
  PERSONAS: '/personas',
  TASKS: '/tasks',
  GAMES: '/games',
  TRANSACTIONS: '/transactions',
};

// Helper function to handle API responses
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }
  return response.json();
};

// Fetch AI entities from the server
export const fetchAIEntities = async (): Promise<AIEntity[]> => {
  const response = await fetch(`${API_BASE_URL}${ENDPOINTS.AI_ENTITIES}`, {
    method: 'GET',
    headers,
  });
  return handleResponse(response);
};

// Fetch Orbit entities from the server
export const fetchOrbitEntities = async (): Promise<OrbitEntity[]> => {
  const response = await fetch(`${API_BASE_URL}${ENDPOINTS.ORBIT_ENTITIES}`, {
    method: 'GET',
    headers,
  });
  return handleResponse(response);
};

// Fetch Personas from the server
export const fetchPersonas = async (): Promise<Persona[]> => {
  const response = await fetch(`${API_BASE_URL}${ENDPOINTS.PERSONAS}`, {
    method: 'GET',
    headers,
  });
  return handleResponse(response);
};

// Fetch Tasks from the server
export const fetchTasks = async (): Promise<Task[]> => {
  const response = await fetch(`${API_BASE_URL}${ENDPOINTS.TASKS}`, {
    method: 'GET',
    headers,
  });
  return handleResponse(response);
};

// Fetch Games from the server
export const fetchGames = async (): Promise<Game[]> => {
  const response = await fetch(`${API_BASE_URL}${ENDPOINTS.GAMES}`, {
    method: 'GET',
    headers,
  });
  return handleResponse(response);
};

// Fetch Transactions from the server
export const fetchTransactions = async (): Promise<Transaction[]> => {
  const response = await fetch(`${API_BASE_URL}${ENDPOINTS.TRANSACTIONS}`, {
    method: 'GET',
    headers,
  });
  return handleResponse(response);
};

// Add more API functions as needed for creating, updating, and deleting entities
```
