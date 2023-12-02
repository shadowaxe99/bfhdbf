```typescript
import React, { createContext, useReducer, useContext, Dispatch } from 'react';
import { AIAction, aiReducer, AIState, initialAIState } from '../store/AIStore';

// Define the shape of the context for TypeScript
interface AIContextProps {
  state: AIState;
  dispatch: Dispatch<AIAction>;
}

// Create the context with a default value
const AIContext = createContext<AIContextProps>({
  state: initialAIState,
  dispatch: () => null,
});

// Define a provider component that wraps its children in the AI context provider
export const AIProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(aiReducer, initialAIState);

  return (
    <AIContext.Provider value={{ state, dispatch }}>
      {children}
    </AIContext.Provider>
  );
};

// Custom hook to use the AI context
export const useAIContext = () => {
  const context = useContext(AIContext);
  if (context === undefined) {
    throw new Error('useAIContext must be used within a AIProvider');
  }
  return context;
};
```