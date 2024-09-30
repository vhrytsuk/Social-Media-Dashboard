# Social Media Dashboard (TypeScript + React)

This is a social media dashboard built with React, TypeScript, Redux, Material-UI, and Vite. The project uses `json-server` to mock API responses, and it supports a modern front-end development environment with Vite.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the Project](#running-the-project)
  - [1. Start JSON Server](#1-start-json-server)
  - [2. Start the Vite Development Server](#2-start-the-vite-development-server)
  - [3. Build for Production](#3-build-for-production)
  - [4. Preview Production Build](#4-preview-production-build)
- [Linting and Formatting](#linting-and-formatting)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)

## Getting Started

To run this project locally, ensure you have the following tools installed on your machine:

- **Node.js**: Version 16.x or higher
- **npm** or **yarn**

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/social-media-dashboard-ts.git

   ```

2. **Navigate into the project directory**:

   ```bash
   cd social-media-dashboard-ts

   ```

3. **Install project dependencies**:
   ```bash
   npm install or yarn install
   ```

## Running the Project

This project uses **Vite** as the front-end bundler and **json-server** to mock API responses. Follow these steps to get the project running.

### 1. Start JSON Server

`json-server` is used to simulate a REST API by serving data from `db.json`. Run the following command to start the JSON server:

```md
## Running the Project

This project uses **Vite** as the front-end bundler and **json-server** to mock API responses. Follow these steps to get the project running.
```

### 1. Start JSON Server

`json-server` is used to simulate a REST API by serving data from `db.json`. Run the following command to start the JSON server:

```bash
npx json-server --watch src/db/db.json --port 3000
```

### 7. **Start Vite Development Server**

````md
### 2. Start the Vite Development Server

Once the JSON server is running, you can start the Vite development server to serve the front-end.

```bash
npm run de
```
````

### 8. **Build for Production**

````md
### 3. Build for Production

To create an optimized production build of the project:

```bash
npm run build
```
````

## Dependencies

### Core Dependencies:

- **React**: Front-end library
- **React-DOM**: DOM rendering for React
- **React-Router-DOM**: For routing
- **Redux Toolkit**: For state management
- **Material-UI**: Component library
- **Formik & Yup**: Form handling and validation
- **Axios**: HTTP client for API calls

### Dev Dependencies:

- **Vite**: Front-end build tool
- **TypeScript**: TypeScript support
- **ESLint**: Linting tool
- **Prettier**: Code formatter
- **json-server**: Mock REST API

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
