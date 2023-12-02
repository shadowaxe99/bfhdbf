# Elysium Innovations Developer Guide

## 7. Routing and Navigation

Routing in a React application is essential for navigating between different components and views. In the Elysium Innovations Developer Tools, we use React Router for managing the navigation within the Elysium OS ecosystem. This guide will walk you through setting up routing for your AI-driven applications and ensuring seamless transitions within the Orbit.

### 7.1 Setting Up React Router

First, ensure that you have installed `react-router-dom` in your project:

```bash
npm install react-router-dom
```

Next, import the necessary components from `react-router-dom` in your `src/index.tsx` file:

```typescript
import { BrowserRouter as Router } from 'react-router-dom';
```

Wrap your application with the `Router` component to enable routing:

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
```

### 7.2 Configuring Routes

Define your application's routes in `src/config/routes.ts`. This file will export an array of route objects:

```typescript
import { RouteProps } from 'react-router-dom';

const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: require('../components/PersonalAide/PersonalAide').default,
  },
  {
    path: '/arena',
    component: require('../components/TheArena/TheArena').default,
  },
  // Add more routes here
];

export default routes;
```

### 7.3 Using Routes in the App Component

In your `src/App.tsx`, use the `Route` component from `react-router-dom` to render the components based on the current URL:

```typescript
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './config/routes';

const App: React.FC = () => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Switch>
  );
};

export default App;
```

### 7.4 Navigating Between Routes

To navigate between routes, use the `Link` component from `react-router-dom`:

```typescript
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Personal Aide</Link>
        </li>
        <li>
          <Link to="/arena">The Arena</Link>
        </li>
        {/* Add more navigation links here */}
      </ul>
    </nav>
  );
};

export default Navigation;
```

### 7.5 Route Parameters and Query Strings

For dynamic routes, you can use route parameters:

```typescript
{
  path: '/persona/:personaId',
  component: require('../components/UniqueAIPersonas/UniqueAIPersonas').default,
}
```

To access route parameters within your components, use the `useParams` hook:

```typescript
import { useParams } from 'react-router-dom';

const UniqueAIPersonas: React.FC = () => {
  let { personaId } = useParams<{ personaId: string }>();
  // Use personaId to fetch data or perform actions
  return <div>{/* Render your component based on personaId */}</div>;
};

export default UniqueAIPersonas;
```

For query strings, use the `useLocation` hook to access the search property:

```typescript
import { useLocation } from 'react-router-dom';

const SomeComponent: React.FC = () => {
  let location = useLocation();
  let queryParams = new URLSearchParams(location.search);
  // Use queryParams.get('paramName') to access query parameters
  return <div>{/* Render your component based on query parameters */}</div>;
};

export default SomeComponent;
```

### 7.6 Programmatic Navigation

To navigate programmatically, use the `useHistory` hook:

```typescript
import { useHistory } from 'react-router-dom';

const SomeComponent: React.FC = () => {
  let history = useHistory();

  const navigateToHome = () => {
    history.push('/');
  };

  return (
    <button onClick={navigateToHome}>Go Home</button>
  );
};

export default SomeComponent;
```

### 7.7 Protecting Routes

To protect routes and ensure that only authenticated users can access certain parts of the application, you can create a `ProtectedRoute` component:

```typescript
import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
  authenticationPath: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated, authenticationPath, ...routeProps }) => {
  if (isAuthenticated) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={{ pathname: authenticationPath }} />;
  }
};

export default ProtectedRoute;
```

Use `ProtectedRoute` in place of `Route` for any routes that require authentication.

This concludes the routing and navigation section of the Elysium Innovations Developer Guide. By following these steps, you can set up a robust routing system for your AI-driven applications within the Elysium OS ecosystem.