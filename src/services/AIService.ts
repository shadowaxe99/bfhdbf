```typescript
import { AIEntity, AITask, AIResponse } from '../types/index.d.ts';
import { MAX_ORBIT_COUNT, AI_PERSONA_TYPES } from '../config/constants';

interface IAIService {
  fetchAIEntities: () => Promise<AIEntity[]>;
  createAIEntity: (data: AIEntity) => Promise<AIEntity>;
  updateAIEntity: (id: string, data: Partial<AIEntity>) => Promise<AIEntity>;
  deleteAIEntity: (id: string) => Promise<void>;
  assignTaskToEntity: (entityId: string, task: AITask) => Promise<AIEntity>;
  simulateAIResponse: (entityId: string, input: string) => Promise<AIResponse>;
}

class AIService implements IAIService {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  async fetchAIEntities(): Promise<AIEntity[]> {
    try {
      const response = await fetch(`${this.apiUrl}/ai-entities`);
      if (!response.ok) {
        throw new Error('Error fetching AI entities');
      }
      return response.json();
    } catch (error) {
      console.error('AIService.fetchAIEntities:', error);
      throw error;
    }
  }

  async createAIEntity(data: AIEntity): Promise<AIEntity> {
    try {
      const response = await fetch(`${this.apiUrl}/ai-entities`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Error creating AI entity');
      }
      return response.json();
    } catch (error) {
      console.error('AIService.createAIEntity:', error);
      throw error;
    }
  }

  async updateAIEntity(id: string, data: Partial<AIEntity>): Promise<AIEntity> {
    try {
      const response = await fetch(`${this.apiUrl}/ai-entities/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Error updating AI entity');
      }
      return response.json();
    } catch (error) {
      console.error('AIService.updateAIEntity:', error);
      throw error;
    }
  }

  async deleteAIEntity(id: string): Promise<void> {
    try {
      const response = await fetch(`${this.apiUrl}/ai-entities/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Error deleting AI entity');
      }
    } catch (error) {
      console.error('AIService.deleteAIEntity:', error);
      throw error;
    }
  }

  async assignTaskToEntity(entityId: string, task: AITask): Promise<AIEntity> {
    try {
      const response = await fetch(`${this.apiUrl}/ai-entities/${entityId}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
      if (!response.ok) {
        throw new Error('Error assigning task to AI entity');
      }
      return response.json();
    } catch (error) {
      console.error('AIService.assignTaskToEntity:', error);
      throw error;
    }
  }

  async simulateAIResponse(entityId: string, input: string): Promise<AIResponse> {
    try {
      const response = await fetch(`${this.apiUrl}/ai-entities/${entityId}/simulate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input }),
      });
      if (!response.ok) {
        throw new Error('Error simulating AI response');
      }
      return response.json();
    } catch (error) {
      console.error('AIService.simulateAIResponse:', error);
      throw error;
    }
  }
}

export default AIService;
```