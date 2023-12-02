/// <reference types="react-scripts" />

// Elysium Innovations - Orbit AI Development Kit Types
declare namespace ElysiumInnovations {
  interface OrbitAIEntity {
    id: string;
    name: string;
    description: string;
    status: 'active' | 'inactive';
    // Additional properties and methods for AI entities can be defined here
  }

  interface UserInteraction {
    userId: string;
    interactionType: string;
    details: any;
    // Additional properties for user interactions can be defined here
  }

  interface AIContextState {
    entities: OrbitAIEntity[];
    addEntity: (entity: OrbitAIEntity) => void;
    removeEntity: (entityId: string) => void;
    // Additional context methods can be defined here
  }

  interface OrbitContextState {
    interactions: UserInteraction[];
    recordInteraction: (interaction: UserInteraction) => void;
    // Additional context methods can be defined here
  }

  // Define additional shared types and interfaces for the Elysium OS ecosystem here
}