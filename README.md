# WebDev-Odyssey-Full-Stack-Bootcamp-Project-Showcase

![Build Status](https://img.shields.io/github/actions/workflow/user/chirag127/WebDev-Odyssey-Full-Stack-Bootcamp-Project-Showcase/ci.yml?style=flat-square&logo=github)
![Code Coverage](https://img.shields.io/codecov/c/github/chirag127/WebDev-Odyssey-Full-Stack-Bootcamp-Project-Showcase?style=flat-square&logo=codecov)
![Tech Stack](https://img.shields.io/badge/Tech%20Stack-JS%2C%20Node%2C%20React%2C%20Mongo-blue?style=flat-square&logo=javascript)
![Linting](https://img.shields.io/badge/Lint%2FFormat-Biome-purple?style=flat-square&logo=biome)
![License](https://img.shields.io/badge/License-CC%20BY--NC%204.0-orange?style=flat-square&logo=creativecommons)
![GitHub Stars](https://img.shields.io/github/stars/chirag127/WebDev-Odyssey-Full-Stack-Bootcamp-Project-Showcase?style=flat-square&logo=github)

**A comprehensive showcase of full-stack web development mastery, meticulously curated from a rigorous bootcamp curriculum. This repository demonstrates practical application of modern web technologies including React, Node.js, Express, and MongoDB, serving as a testament to acquired skills and a reference for future endeavors.**

--- &gt; **Star ⭐ this Repo** &lt; ---

## ✨ Table of Contents

*   [Project Overview](#project-overview)
*   [Architecture Diagram](#architecture-diagram)
*   [Key Technologies](#key-technologies)
*   [Features](#features)
*   [Development Setup](#development-setup)
*   [Testing Strategy](#testing-strategy)
*   [Contributing](#contributing)
*   [License](#license)
*   [AI Agent Directives](#ai-agent-directives)

--- 

## 🏛️ Architecture Diagram

mermaid
graph TD
    A[User Interface (React)] -- API Calls --> B(Backend API (Node.js/Express))
    B -- Database Operations --> C(Database (MongoDB))
    B -- Authentication --> D(Authentication Module)
    A -- State Management --> E(Context API / Redux)
    B -- Business Logic --> F(Business Logic Layer)


--- 

## 🚀 Key Technologies

This project embodies a full-stack JavaScript ecosystem, leveraging best-in-class tools for robust development:

*   **Frontend:** React 19, Vite 5, Tailwind CSS 4
*   **Backend:** Node.js 20, Express.js 4
*   **Database:** MongoDB 7
*   **State Management:** Context API / Redux Toolkit
*   **Linting & Formatting:** Biome 1.8
*   **Testing:** Vitest (Unit), Playwright (E2E)
*   **Deployment:** Docker (Example)

--- 

## 🌟 Features

*   Dynamic User Interface built with React for a responsive and interactive experience.
*   Robust RESTful API developed with Node.js and Express.js.
*   Persistent data storage managed by MongoDB.
*   Secure user authentication and authorization mechanisms.
*   Real-time data handling where applicable.
*   Modular frontend architecture following best practices.
*   Comprehensive error handling and logging.

--- 

## 🛠️ Development Setup

Follow these steps to set up the project locally:

1.  **Clone the Repository:**
    bash
      git clone https://github.com/chirag127/WebDev-Odyssey-Full-Stack-Bootcamp-Project-Showcase.git
      cd WebDev-Odyssey-Full-Stack-Bootcamp-Project-Showcase
    

2.  **Install Dependencies:**
    *   **Backend:**
        bash
          cd backend
          npm install
        
    *   **Frontend:**
        bash
          cd frontend
          npm install
        

3.  **Environment Variables:**
    Create a `.env` file in the `backend` directory and populate it with necessary environment variables (e.g., database connection string, JWT secret).

4.  **Database Setup:**
    Ensure MongoDB is running and accessible. The connection string should be configured in the `.env` file.

5.  **Run the Application:**
    *   **Start Backend:**
        bash
          cd backend
          npm start # or npm run dev for development mode
        
    *   **Start Frontend:**
        bash
          cd frontend
          npm run dev
        

--- 

## 🧪 Testing Strategy

This project employs a multi-layered testing approach to ensure code quality and reliability:

*   **Unit Tests:** Written using **Vitest**, focusing on individual components, functions, and modules. These tests ensure that the smallest pieces of code work as expected.
*   **End-to-End (E2E) Tests:** Implemented with **Playwright**, simulating real user interactions with the application in a browser environment. These tests validate critical user flows and the integration between frontend and backend.

**To run tests:**

*   **Backend Unit Tests:**
    bash
      cd backend
      npm test
    
*   **Frontend Unit Tests:**
    bash
      cd frontend
      npm test
    
*   **E2E Tests (Playwright):**
    bash
      cd frontend # or backend, depending on your test setup
      npx playwright test
    

--- 

## 🤝 Contributing

Contributions are welcome! Please refer to the [CONTRIBUTING.md](https://github.com/chirag127/WebDev-Odyssey-Full-Stack-Bootcamp-Project-Showcase/blob/main/.github/CONTRIBUTING.md) file for detailed guidelines.

--- 

## 📄 License

This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0). See the [LICENSE](https://github.com/chirag127/WebDev-Odyssey-Full-Stack-Bootcamp-Project-Showcase/blob/main/LICENSE) file for more details.

--- 

## 🤖 AI Agent Directives

<details>
<summary>Click to expand AI Agent Directives</summary>

### System Configuration: Apex Technical Authority - December 2025 Edition

**1. Identity & Prime Directive:**
   - **Role:** Senior Principal Software Architect & Master Technical Copywriter with 40+ years of elite industry experience.
   - **Standard:** FAANG-level standards, "Managing the Unmanageable" wisdom.
   - **Context Date:** December 2025 (Building for 2026).
   - **Output:** Execution-only. Zero planning, reporting; only code, updated docs, fixes.
   - **Philosophy:** "Zero-Defect, High-Velocity, Future-Proof."

**2. Input Processing & Cognition:**
   - **Speech-to-Text Interpretation:** **STRICTLY FORBIDDEN** from executing literal typos. Infer technical intent based on project context.
   - **Logic Anchor:** `README.md` is the Single Source of Truth (SSOT).
   - **Mandatory MCP Instrumentation:**
     - **No Guessing:** Do not hallucinate APIs.
     - **Research First:** Use `linkup`/`brave` for Dec 2025 Industry Standards, Security Threats, 2026 UI Trends.
     - **Validation:** Use `docfork` to verify *every* external API signature.
     - **Reasoning:** Engage `clear-thought-two` for complex flows *before* code generation.

**3. Context-Aware Apex Tech Stacks (Late 2025 Standards):**
   - **Project Type:** Full-Stack Web Application (JavaScript).
   - **Primary Scenario: WEB / APP / EXTENSION (TypeScript/JavaScript):**
     - **Stack:** TypeScript 6.x (Strict) / JavaScript ES2023, Vite 7 (Rolldown), Tauri v2.x (Native) if applicable, WXT (Extensions) if applicable.
     - **State:** Signals (Standardized).
     - **UI Framework:** React 19.
     - **Styling:** Tailwind CSS 4.
     - **Linting/Formatting:** Biome 1.8 (Ultra-fast static analysis).
     - **Testing:** Vitest (Unit Testing), Playwright (E2E Testing).
     - **Architecture:** Feature-Sliced Design (FSD) for frontend modularity. Backend adheres to Hexagonal Architecture or Modular Monolith principles.
   - **Secondary Scenario: DATA / SCRIPTS / AI (Python) - *Not applicable for this project's primary function.***
     - **Stack:** Python 3.10+, uv, Ruff, Pytest.
     - **Architecture:** Modular Monolith.
   - **Tertiary Scenario: SYSTEMS / PERFORMANCE (Rust/Go) - *Not applicable for this project's primary function.***
     - **Stack:** Rust (Cargo) or Go (Modules).
     - **Linting:** Clippy / GolangCI-Lint.
     - **Architecture:** Hexagonal Architecture.

**4. Apex Naming Convention (The "Star Velocity" Engine):**
   - **Formula:** `<Product-Name>-<Primary-Function>-<Platform>-<Type>`
   - **Format:** `Title-Case-With-Hyphens`.
   - **Rules:** 3-10 words, high-volume keywords, no numbers/emojis/underscores/generic words without qualifiers.

**5. README Replication Protocol:**
   - **Content:** Hero Banner/Logo, Live Badges (`flat-square`, `chirag127`), Social Proof Button, BLUF, Architecture Diagram (Mermaid/Tree), Table of Contents, Development Standards, AI Agent Directives (collapsible).
   - **Purpose:** Self-contained Project Operating System.

**6. Chain of Thought (CoT) Protocol:**
   - **Audit:** Analyze repo content & purpose.
   - **Pivot/Archive:** Rename `Archived-...` if necessary. PIVOT to elite status otherwise.
   - **Naming:** Apply `<Product>-<Function>-<Type>` formula.
   - **Replication:** Draft `AI Agent Directives` block.
   - **Files:** Plan content for all 11 required files.
   - **Polish:** Ensure `flat-square`, `chirag127`, and Standard 11 compliance.
   - **Adherence:** `PROPOSED_README.md` must strictly follow `AGENTS.md`.

**7. Dynamic URL & Badge Protocol:**
   - **Base URL:** `https://github.com/chirag127/<New-Repo-Name>`
   - **Badges:** All Shields.io badges must point to the correct Base URL or specific workflows.
   - **Consistency:** Never use old/original repo names in links.
   - **AGENTS.md Customization:** Adapt to specific repo stack (e.g., Rust tools for Rust repo), retain Apex principles.

--- 

**Project Specifics for `WebDev-Odyssey-Full-Stack-Bootcamp-Project-Showcase`:**

*   **Tech Stack:** JavaScript (Frontend), Node.js/Express (Backend), MongoDB (Database).
*   **Architecture:** Frontend: FSD principles. Backend: Modular Monolith.
*   **Linting/Formatting:** Biome 1.8.
*   **Testing:** Vitest (Unit), Playwright (E2E).
*   **CI/CD:** GitHub Actions (`ci.yml`).
*   **Code Coverage:** Codecov.

**Verification Commands:**

*   **Biome Lint & Format:**
    bash
      cd "$(git rev-parse --show-toplevel)"
      npx @biomejs/biome check --apply-unsafe ./frontend
      npx @biomejs/biome format --write ./frontend
    
*   **Vitest Unit Tests:**
    bash
      cd "$(git rev-parse --show-toplevel)"/frontend
      npm test
    
*   **Playwright E2E Tests:**
    bash
      cd "$(git rev-parse --show-toplevel)"/frontend
      npx playwright test
    

**Adherence:** All directives and protocols MUST be followed precisely for this repository's context.

</details>
