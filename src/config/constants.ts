```typescript
// src/config/constants.ts

export const MAX_ORBIT_COUNT = 10;
export const AI_PERSONA_TYPES = ['Helper', 'Advisor', 'Entertainer', 'Guardian'];
export const THEME_COLORS = {
  primary: '#4a90e2',
  secondary: '#9013fe',
  background: '#f4f4f4',
  foreground: '#ffffff',
  text: '#333333',
  error: '#ff0000',
};

export const ROUTES = {
  HOME: '/',
  ORBIT_DEVELOPMENT_KIT: '/orbit-development-kit',
  INTERACTION_FRAMEWORK: '/interaction-framework',
  ENHANCED_REACT_TS_INTEGRATION: '/enhanced-react-ts-integration',
  SIMULATION_TESTING_ENVIRONMENT: '/simulation-testing-environment',
  DOCUMENTATION_SUPPORT: '/documentation-support',
  COMPATIBILITY_SCALABILITY: '/compatibility-scalability',
  PERSONAL_AIDE: '/personal-aide',
  THE_ARENA: '/the-arena',
  AUTOMATION_STATION: '/automation-station',
  SECURE_TRADING_SYSTEM: '/secure-trading-system',
  UNIQUE_AI_PERSONAS: '/unique-ai-personas',
  IMMERSIVE_3D_ENVIRONMENTS: '/immersive-3d-environments',
  WEB_APP: '/web-app',
};

export const API_ENDPOINTS = {
  FETCH_AI_ENTITIES: '/api/ai-entities',
  UPDATE_PERSONA: '/api/update-persona',
  SIMULATE_ENVIRONMENT: '/api/simulate-environment',
  FETCH_USER_PROFILE: '/api/user-profile',
  EXECUTE_TRANSACTION: '/api/execute-transaction',
};

export const DOM_ELEMENT_IDS = {
  MAIN_LAYOUT: 'main-layout',
  MODAL: 'modal',
  INTERACTIVE_ELEMENT: 'interactive-element',
};

export const MESSAGE_NAMES = {
  ORBIT_INITIALIZED: 'orbit-initialized',
  AI_ENTITY_UPDATED: 'ai-entity-updated',
  USER_PROFILE_LOADED: 'user-profile-loaded',
  TRANSACTION_COMPLETED: 'transaction-completed',
};

export const FUNCTION_NAMES = {
  INITIALIZE_ORBIT: 'initializeOrbit',
  FETCH_AI_ENTITIES: 'fetchAIEntities',
  UPDATE_PERSONA: 'updatePersona',
  SIMULATE_ENVIRONMENT: 'simulateEnvironment',
};

export const DATA_SCHEMAS = {
  AI_ENTITY: {
    id: '',
    type: '',
    status: '',
    capabilities: [],
  },
  USER_PROFILE: {
    id: '',
    name: '',
    preferences: {},
  },
  TASK: {
    id: '',
    description: '',
    dueDate: null,
  },
  GAME: {
    id: '',
    title: '',
    genre: '',
  },
  TRANSACTION: {
    id: '',
    amount: 0,
    currency: '',
    status: '',
  },
  PERSONA: {
    id: '',
    name: '',
    personality: '',
  },
};

export const EXPORTED_VARIABLES = {
  ORBIT_COUNT_LIMIT: MAX_ORBIT_COUNT,
  PERSONA_TYPES: AI_PERSONA_TYPES,
  COLOR_THEME: THEME_COLORS,
};
```