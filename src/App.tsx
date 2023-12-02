```typescript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { OrbitAIDevelopmentKit } from './components/OrbitAIDevelopmentKit';
import { InteractionFramework } from './components/InteractionFramework';
import { EnhancedReactTSIntegration } from './components/EnhancedReactTSIntegration';
import { SimulationTestingEnvironment } from './components/SimulationTestingEnvironment';
import { DocumentationSupport } from './components/DocumentationSupport';
import { CompatibilityScalability } from './components/CompatibilityScalability';
import { PersonalAide } from './components/PersonalAide';
import { TheArena } from './components/TheArena';
import { AutomationStation } from './components/AutomationStation';
import { SecureTradingSystem } from './components/SecureTradingSystem';
import { UniqueAIPersonas } from './components/UniqueAIPersonas';
import { Immersive3DEnvironments } from './components/Immersive3DEnvironments';
import { WebApp } from './components/WebApp';
import { AIContextProvider } from './context/AIContext';
import { OrbitContextProvider } from './context/OrbitContext';
import './styles/global.css';
import { routes } from './config/routes';

const App: React.FC = () => {
  return (
    <AIContextProvider>
      <OrbitContextProvider>
        <Router>
          <Switch>
            <Route exact path={routes.home} component={OrbitAIDevelopmentKit} />
            <Route path={routes.interactionFramework} component={InteractionFramework} />
            <Route path={routes.enhancedReactTSIntegration} component={EnhancedReactTSIntegration} />
            <Route path={routes.simulationTestingEnvironment} component={SimulationTestingEnvironment} />
            <Route path={routes.documentationSupport} component={DocumentationSupport} />
            <Route path={routes.compatibilityScalability} component={CompatibilityScalability} />
            <Route path={routes.personalAide} component={PersonalAide} />
            <Route path={routes.theArena} component={TheArena} />
            <Route path={routes.automationStation} component={AutomationStation} />
            <Route path={routes.secureTradingSystem} component={SecureTradingSystem} />
            <Route path={routes.uniqueAIPersonas} component={UniqueAIPersonas} />
            <Route path={routes.immersive3DEnvironments} component={Immersive3DEnvironments} />
            <Route path={routes.webApp} component={WebApp} />
          </Switch>
        </Router>
      </OrbitContextProvider>
    </AIContextProvider>
  );
};

export default App;
```