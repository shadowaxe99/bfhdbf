```typescript
import { Persona } from "../types/index";
import { api } from "../utils/api";

export class PersonaService {
  private static instance: PersonaService;
  private constructor() {}

  public static getInstance(): PersonaService {
    if (!PersonaService.instance) {
      PersonaService.instance = new PersonaService();
    }
    return PersonaService.instance;
  }

  public async getPersonas(): Promise<Persona[]> {
    try {
      const response = await api.get('/personas');
      return response.data;
    } catch (error) {
      throw new Error('Error fetching personas');
    }
  }

  public async getPersonaById(id: string): Promise<Persona> {
    try {
      const response = await api.get(`/personas/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching persona with id ${id}`);
    }
  }

  public async createPersona(persona: Persona): Promise<Persona> {
    try {
      const response = await api.post('/personas', persona);
      return response.data;
    } catch (error) {
      throw new Error('Error creating new persona');
    }
  }

  public async updatePersona(id: string, persona: Partial<Persona>): Promise<Persona> {
    try {
      const response = await api.put(`/personas/${id}`, persona);
      return response.data;
    } catch (error) {
      throw new Error(`Error updating persona with id ${id}`);
    }
  }

  public async deletePersona(id: string): Promise<void> {
    try {
      await api.delete(`/personas/${id}`);
    } catch (error) {
      throw new Error(`Error deleting persona with id ${id}`);
    }
  }
}
```