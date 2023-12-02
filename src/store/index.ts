```typescript
import { createStore, applyMiddleware, Store, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { aiReducer } from './reducers';
import { orbitReducer } from './reducers';
import { AIState } from './types';
import { OrbitState } from './types';

export interface ApplicationState {
  ai: AIState;
  orbit: OrbitState;
}

const rootReducer = combineReducers<ApplicationState>({
  ai: aiReducer,
  orbit: orbitReducer,
});

export function configureStore(): Store<ApplicationState> {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
}
```