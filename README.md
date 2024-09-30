# Social Media Dashboard (TypeScript + React)

This is a social media dashboard built with React, TypeScript, Redux, Material-UI, and Vite. The project uses `json-server` to mock API responses, and it supports a modern front-end development environment with Vite.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the Project](#running-the-project)
  - [1. Start JSON Server](#1-start-json-server)
  - [2. Start the Vite Development Server](#2-start-the-vite-development-server)
  - [3. Build for Production](#3-build-for-production)
- [Dependencies](#dependencies)
- [Explanation of folder structure](#explanation-of-folder-structure)

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

## **Running the Project**

### 1. Start JSON Server

`json-server` is used to simulate a REST API by serving data from `db.json`. Run the following command to start the JSON server:

```bash
npx json-server --watch src/db/db.json --port 3000
```

This will start a local server at http://localhost:3000 serving the contents of src/db/db.json.

### 2. Start the Vite Development Server

Once the JSON server is running, you can start the Vite development server to serve the front-end.

```bash
npm run dev or yarn run dev
```

This will start the Vite development server at http://localhost:5173. You can access the application in your browser at http://localhost:5173.

### 3. Build for Production

To create an optimized production build of the project:

```bash
   npm run build
```

## **Linting and Formatting**

To maintain code quality and consistent formatting, the project uses **ESLint** and **Prettier**.

- **Lint the code**:
  ```bash
   npm run lint
  ```
  - **Fix linting issues automatically**:
  ```bash
  npm run lint --fix
  ```

## **Dependencies**

### Core Dependencies:

- **React**: Front-end library
- **React-DOM**: DOM rendering for React
- **React-Router-DOM**: For routing
- **Redux Toolkit**: For state management
- **Material-UI**: Component library
- **TailwindCss**: Component library
- **Bootstrap 5 CDN**: Used for layout system
- **Formik & Yup**: Form handling and validation
- **Axios**: HTTP client for API calls

### Dev Dependencies:

- **Vite**: Front-end build tool
- **TypeScript**: TypeScript support
- **ESLint**: Linting tool
- **Prettier**: Code formatter
- **json-server**: Mock REST API

## **Explanation of folder structure**

```
src/
├── components/
│   ├── common/
│   ├── dashboard/
│   ├── forms/
│   ├── layout/
├── db/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── store/
│   ├── api/
│   ├── socialAccount/
├── types/
```

### Detailed Explanation:

#### `components/`

This folder holds reusable components that are categorized into subfolders for organization. The structure is modular, allowing separation by context.

- **`common/`**: Contains general-purpose reusable components like `Loader.tsx`, `PrimaryButton.tsx`, `Logo.tsx`, and `Modal.tsx`. These are utility components that can be used across the entire app.
- **`dashboard/`**: Holds components related to the dashboard view, such as `AddSocialAccount.tsx`, `SocialAccountList.tsx`, and `RecentComments.tsx`. These components build out the core dashboard interface, dealing with social media accounts.
- **`forms/`**: Contains form-related components such as `AddSocialAccountForm.tsx` and `EditSocialAccountForm.tsx`. These components handle user input for managing social accounts.
- **`layout/`**: Contains layout components like `Header.tsx`, `Footer.tsx`, and `SideBar.tsx`. These components are responsible for the structural layout of the application’s main pages.

#### `db/`

Contains `db.json`, which is a mock database used with `json-server` to simulate an API. It provides data like social media accounts during development.

#### `hooks/`

This folder contains custom hooks, such as `useSocialAccountActions.ts` and `useTypedSelector.ts`. These hooks are for accessing the Redux store and managing local state related to modal actions and social account state.

#### `layouts/`

Contains layout components like `Default.tsx`. These layouts are used for page-wide structures like headers, footers, and sidebars that are reused across different pages.

#### `pages/`

Holds page-level components, such as `Dashboard.tsx`. This folder contains the main views of the app, each representing a complete page or route.

#### `routes/`

Contains routing configurations, like `AppRoutes.tsx` and `routesConfig.ts`. These files are responsible for setting up routes in the app, connecting URLs to the corresponding components/pages.

#### `store/`

This folder organizes Redux-related logic and APIs.

- **`api/`**: Contains files for managing API requests, such as `socialNetworkAPI.ts`. It manages all API calls to retrieve data from `json-server` or another backend.
- **`socialAccount/`**: Holds Redux logic (actions, reducers, thunks) related to social media accounts. The file `index.ts` combines and exports the social account slice for easier access in the app.

#### `types/`

This folder contains TypeScript type definitions and interfaces used throughout the application for ensuring type safety.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
