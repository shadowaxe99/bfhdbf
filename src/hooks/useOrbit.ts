import { useContext, useCallback } from 'react';
import { OrbitContext } from '../context/OrbitContext';
import { OrbitState, OrbitActions } from '../store/OrbitStore';
import { ActionType } from '../store/types';

export function useOrbit() {
  const { state, dispatch } = useContext(OrbitContext);

  const initializeOrbit = useCallback(() => {
    dispatch({ type: ActionType.INITIALIZE_ORBIT });
  }, [dispatch]);

  const fetchAIEntities = useCallback(() => {
    // Placeholder for fetching AI entities logic
    // This should be replaced with actual API call logic
    dispatch({ type: ActionType.FETCH_AI_ENTITIES_START });
    try {
      // Simulate API call
      setTimeout(() => {
        const aiEntities = []; // Replace with actual data
        dispatch({
          type: ActionType.FETCH_AI_ENTITIES_SUCCESS,
          payload: aiEntities,
        });
      }, 1000);
    } catch (error) {
      dispatch({
        type: ActionType.FETCH_AI_ENTITIES_FAIL,
        payload: error,
      });
    }
  }, [dispatch]);

  const updateOrbitData = useCallback(
    (updatedData: Partial<OrbitState>) => {
      dispatch({
        type: ActionType.UPDATE_ORBIT_DATA,
        payload: updatedData,
      });
    },
    [dispatch]
  );

  const addAIEntityToOrbit = useCallback(
    (aiEntity: any) => {
      dispatch({
        type: ActionType.ADD_AI_ENTITY,
        payload: aiEntity,
      });
    },
    [dispatch]
  );

  const removeAIEntityFromOrbit = useCallback(
    (aiEntityId: string) => {
      dispatch({
        type: ActionType.REMOVE_AI_ENTITY,
        payload: aiEntityId,
      });
    },
    [dispatch]
  );

  return {
    orbitState: state,
    initializeOrbit,
    fetchAIEntities,
    updateOrbitData,
    addAIEntityToOrbit,
    removeAIEntityFromOrbit,
  };
}