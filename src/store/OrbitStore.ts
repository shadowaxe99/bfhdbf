```typescript
import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { OrbitState, OrbitActionTypes } from './types';
import { updateOrbit, fetchOrbitData } from './actions';

// Initial state of the Orbit store
const initialState: OrbitState = {
  orbitData: null,
  loading: false,
  error: null,
};

// Orbit reducer to handle state changes based on dispatched actions
function orbitReducer(
  state: OrbitState = initialState,
  action: OrbitActionTypes
): OrbitState {
  switch (action.type) {
    case 'FETCH_ORBIT_DATA_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_ORBIT_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        orbitData: action.payload,
      };
    case 'FETCH_ORBIT_DATA_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'UPDATE_ORBIT_DATA':
      return {
        ...state,
        orbitData: action.payload,
      };
    default:
      return state;
  }
}

// Create and export the Orbit store with thunk middleware for async actions
export const orbitStore: Store<OrbitState, OrbitActionTypes> = createStore(
  orbitReducer,
  applyMiddleware(thunk)
);

// Export action creators for use within components
export { updateOrbit, fetchOrbitData };
```