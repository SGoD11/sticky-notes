

# Sticky Notes Project

A simple **Sticky Notes** application built using **Motoko** for the backend on the **Internet Computer** (ICP) and **React** for the frontend.

---

## **Table of Contents**

- [Project Overview](#project-overview)
- [Technologies](#technologies)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Steps](#steps)
- [Running Locally](#running-locally)
- [Deployment](#deployment)
- [Directory Structure](#directory-structure)
- [License](#license)

---

## **Project Overview**

This project is a **Sticky Notes** app where users can add, edit, and remove sticky notes. The application is built with:

- **Motoko** backend running on the **Internet Computer**.
- **React** frontend that communicates with the backend using Dfinity's Canister API.

---

## **Technologies**

- **Motoko**: Programming language for building smart contracts (canisters) on the **Internet Computer**.
- **React**: Frontend framework to build the user interface.
- **Dfinity**: Framework for developing on the **Internet Computer** blockchain.
- **Vite**: Frontend bundler for fast development and optimized builds.
- **npm**: JavaScript package manager used for managing dependencies.

---

## **Installation**

### **Prerequisites**

To get started, make sure you have the following installed:

- **Node.js** and **npm**:

  ```sh
  # Install Node.js (includes npm)
  sudo apt install nodejs npm
  ```

- **Dfinity SDK (dfx)**:
  Follow the installation guide here: [https://sdk.dfinity.org/docs/quickstart/local-setup.html](https://sdk.dfinity.org/docs/quickstart/local-setup.html)

- **MongoDB** (for local backend if applicable):

  - Install MongoDB Compass or use `mongod` command to run MongoDB locally.

---

### **Steps to Set Up the Project Locally**

1. **Clone the Repository**:

   ```sh
   git clone <your-repo-url>
   cd sticky_notes
   ```

2. **Install Frontend Dependencies**:
   Navigate to the frontend folder and install the necessary packages:

   ```sh
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**:
   For the Motoko backend, make sure to have `dfx` installed and run:

   ```sh
   dfx start --background
   ```

4. **Build React App**:
   Build the React app to be used as static assets in the deployment:

   ```sh
   npm run build
   ```

5. **Deploy Canisters**:
   Deploy both the frontend and backend canisters to the local Dfinity replica:

   ```sh
   dfx deploy
   ```

---

## **Running Locally**

After you’ve set up the project, follow these steps to run both the frontend and backend locally.

1. **Start the Dfinity Replica**:
   To run the local replica, use:

   ```sh
   dfx start --background
   ```

2. **Start the React Frontend**:
   Inside the **`frontend`** directory, start the React development server:

   ```sh
   npm run dev
   ```

   The app will be available at **[http://localhost:5173](http://localhost:5173)**.

3. **Backend Communication**:
   Your backend canister is running on the local Dfinity replica at `http://127.0.0.1:4943`. The frontend will communicate with it via the Dfinity API.

---

## **Deployment**

To deploy the project on the **Internet Computer**:

1. **Deploy Canisters to the Mainnet**:
   Replace the local network with the main Dfinity network:

   ```sh
   dfx deploy --network ic
   ```

2. **Access the Application**:
   Once deployed, the frontend will be available via the public URL provided by Dfinity.

---

## **Directory Structure**

```
sticky_notes/
├── dfx.json                     # Dfinity configuration
├── package.json                  # Frontend dependencies and scripts
├── package-lock.json
├── tsconfig.json                 # TypeScript configuration for frontend
├── README.md                     # Project documentation
├── node_modules/
├── src/
│   ├── declarations              # Motoko declarations for canisters
│   ├── sticky_notes_backend      # Motoko backend code
│   └── sticky_notes_frontend     # React frontend code
├── frontend/                     # React app source code (created with Vite)
└── backend/                      # Motoko backend code
```

---

## **License**

This project is licensed under the CCO-1.0 License - see the [LICENSE](LICENSE) file for details.

---
