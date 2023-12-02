# Elysium Innovations Developer Guide

## 2. Setup

This section provides a detailed guide on setting up your development environment for building AI agents within the Elysium OS ecosystem using the Elysium Innovations Developer Tools.

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (LTS version)
- npm (comes with Node.js)
- Git
- A code editor of your choice (we recommend Visual Studio Code)

### Getting Started

1. **Clone the Repository**

   Use Git to clone the project repository to your local machine:

   ```bash
   git clone https://github.com/ElysiumInnovations/elysium-os-developer-tools.git
   cd elysium-os-developer-tools
   ```

2. **Install Dependencies**

   Navigate to the project directory and install the necessary dependencies:

   ```bash
   npm install
   ```

3. **Environment Configuration**

   Copy the `.env.example` file to a new file named `.env` and fill in the necessary environment variables:

   ```bash
   cp .env.example .env
   # Edit the .env file with your environment-specific values
   ```

4. **TypeScript Configuration**

   Ensure the `tsconfig.json` file is present in the root of the project with the following configuration:

   ```json
   {
     "compilerOptions": {
       "target": "es5",
       "lib": ["dom", "dom.iterable", "esnext"],
       "allowJs": true,
       "skipLibCheck": true,
       "esModuleInterop": true,
       "allowSyntheticDefaultImports": true,
       "strict": true,
       "forceConsistentCasingInFileNames": true,
       "module": "esnext",
       "moduleResolution": "node",
       "resolveJsonModule": true,
       "isolatedModules": true,
       "noEmit": true,
       "jsx": "react-jsx"
     },
     "include": ["src"]
   }
   ```

5. **Start the Development Server**

   Run the development server:

   ```bash
   npm start
   ```

   This will start the React development server and open the application in your default web browser.

6. **Verify Installation**

   Ensure that the application is running correctly and you can see the default landing page.

### Directory Structure

The project follows a specific directory structure for organization:

- `src/`: Contains all the TypeScript and React component files.
- `src/components/`: Contains all the reusable React components.
- `src/services/`: Contains services for interacting with backend APIs.
- `src/store/`: Contains state management files using Redux.
- `src/hooks/`: Contains custom React hooks.
- `src/context/`: Contains React context providers.
- `src/utils/`: Contains utility functions.
- `src/types/`: Contains TypeScript type definitions.
- `src/config/`: Contains configuration files like constants and routes.
- `src/styles/`: Contains global styles and CSS modules.
- `docs/`: Contains the developer guide and API reference documentation.
- `public/`: Contains static assets like HTML, images, and manifest files.

### Next Steps

After setting up your development environment, proceed to the next section of the developer guide to understand the architecture of the Elysium Innovations Developer Tools.

[3. Architecture](3-architecture.md)

### Troubleshooting

If you encounter any issues during the setup, please refer to the [11. Troubleshooting](11-troubleshooting.md) section of this guide for common problems and solutions.