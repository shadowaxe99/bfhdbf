import { RootState } from './types';

// AI Selectors
export const selectAIEntities = (state: RootState) => state.AIStore.entities;
export const selectAICurrentEntity = (state: RootState) => state.AIStore.currentEntity;
export const selectAIError = (state: RootState) => state.AIStore.error;
export const selectAIIsLoading = (state: RootState) => state.AIStore.isLoading;

// Orbit Selectors
export const selectOrbitData = (state: RootState) => state.OrbitStore.data;
export const selectOrbitError = (state: RootState) => state.OrbitStore.error;
export const selectOrbitIsLoading = (state: RootState) => state.OrbitStore.isLoading;

// Personal Aide Selectors
export const selectTasks = (state: RootState) => state.PersonalAideStore.tasks;
export const selectTaskError = (state: RootState) => state.PersonalAideStore.error;
export const selectTasksIsLoading = (state: RootState) => state.PersonalAideStore.isLoading;

// The Arena Selectors
export const selectGames = (state: RootState) => state.TheArenaStore.games;
export const selectGamesError = (state: RootState) => state.TheArenaStore.error;
export const selectGamesIsLoading = (state: RootState) => state.TheArenaStore.isLoading;

// Automation Station Selectors
export const selectAutomations = (state: RootState) => state.AutomationStationStore.automations;
export const selectAutomationsError = (state: RootState) => state.AutomationStationStore.error;
export const selectAutomationsIsLoading = (state: RootState) => state.AutomationStationStore.isLoading;

// Secure Trading System Selectors
export const selectTransactions = (state: RootState) => state.SecureTradingSystemStore.transactions;
export const selectTransactionsError = (state: RootState) => state.SecureTradingSystemStore.error;
export const selectTransactionsIsLoading = (state: RootState) => state.SecureTradingSystemStore.isLoading;

// Unique AI Personas Selectors
export const selectPersonas = (state: RootState) => state.UniqueAIPersonasStore.personas;
export const selectPersonasError = (state: RootState) => state.UniqueAIPersonasStore.error;
export const selectPersonasIsLoading = (state: RootState) => state.UniqueAIPersonasStore.isLoading;

// Immersive 3D Environments Selectors
export const selectEnvironments = (state: RootState) => state.Immersive3DEnvironmentsStore.environments;
export const selectEnvironmentsError = (state: RootState) => state.Immersive3DEnvironmentsStore.error;
export const selectEnvironmentsIsLoading = (state: RootState) => state.Immersive3DEnvironmentsStore.isLoading;

// Web App Selectors
export const selectWebAppStatus = (state: RootState) => state.WebAppStore.isOnline;
export const selectWebAppError = (state: RootState) => state.WebAppStore.error;