```typescript
import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { AIAgentState, AIActionTypes } from './types';
import { aiReducer } from './reducers';

// Initial state for the AI store
const initialAIState: AIAgentState = {
  agents: [],
  loading: false,
  error: null,
};

// Configure the AI store with thunk middleware and Redux DevTools
const configureAIStore = (initialState: AIAgentState = initialAIState): Store<AIAgentState, AIActionTypes> => {
  const store = createStore(
    aiReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};

// Create the AI store
const AIStore = configureAIStore();

export default AIStore;
```