```typescript
import { SimulationEnvironment } from "../types/index";

class EnvironmentService {
  private static instance: EnvironmentService;
  private environments: SimulationEnvironment[] = [];

  private constructor() {}

  public static getInstance(): EnvironmentService {
    if (!EnvironmentService.instance) {
      EnvironmentService.instance = new EnvironmentService();
    }
    return EnvironmentService.instance;
  }

  public createEnvironment(environmentData: Partial<SimulationEnvironment>): SimulationEnvironment {
    const newEnvironment: SimulationEnvironment = {
      id: this.environments.length + 1,
      name: environmentData.name || `Environment ${this.environments.length + 1}`,
      description: environmentData.description || '',
      active: environmentData.active || false,
      entities: environmentData.entities || [],
    };
    this.environments.push(newEnvironment);
    return newEnvironment;
  }

  public getEnvironmentById(id: number): SimulationEnvironment | undefined {
    return this.environments.find(env => env.id === id);
  }

  public getAllEnvironments(): SimulationEnvironment[] {
    return this.environments;
  }

  public updateEnvironment(id: number, updates: Partial<SimulationEnvironment>): SimulationEnvironment | undefined {
    const environmentIndex = this.environments.findIndex(env => env.id === id);
    if (environmentIndex === -1) return undefined;

    const updatedEnvironment = { ...this.environments[environmentIndex], ...updates };
    this.environments[environmentIndex] = updatedEnvironment;
    return updatedEnvironment;
  }

  public deleteEnvironment(id: number): boolean {
    const environmentIndex = this.environments.findIndex(env => env.id === id);
    if (environmentIndex === -1) return false;

    this.environments.splice(environmentIndex, 1);
    return true;
  }

  public activateEnvironment(id: number): boolean {
    const environment = this.getEnvironmentById(id);
    if (!environment) return false;

    environment.active = true;
    return true;
  }

  public deactivateEnvironment(id: number): boolean {
    const environment = this.getEnvironmentById(id);
    if (!environment) return false;

    environment.active = false;
    return true;
  }
}

export default EnvironmentService;
```