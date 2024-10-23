# MemoPing(메모핑) Frontend 📒✨

> 메모를 간단히 기록할 수 있는 메모핑! 메모가 어렵다구? 메모핑과 함께 간단하고 쉽게 메모할 수 있어!  
실시간 동기화를 통해 누구나 쉽게 메모를 관리할 수 있는 간단한 웹 애플리케이션입니다.  
프로젝트를 시작한 계기: https://devpearl.tistory.com/15 

## Overview

MemoPing is a simple memo web application built with Next.js and NodeJS (Express), PostgreSQL + Prisma. It allows users to create, read, update, and delete memos in real-time using a Test-Driven Development (TDD) approach.


## Current Version
- **v0.0.1**: Basic CRUD functionality implemented and tested.
  - For more details, see the [CHANGELOG.md](./CHANGELOG.md).

## Version Roadmap

| Version    | Key Milestone                                | Target Completion |
|------------|----------------------------------------------|-------------------|
| **V0.0.1** | Core Frontend CRUD (TDD)                     | `2024-10-15`      |
| **Extra**  | Learning Node.js, MongoDB (for backend setup) | `2024-10-22`      |
| **V0.0.2** | Backend Setup (Express server)               | `2024-`           |
| **V0.0.3** | CSS Styling & UI Enhancements                | `2024-`           |
| **V0.0.4** | Full E2E Testing                             | `2024-`           |
| **V0.0.5** | Deployment & Performance Optimization        | `2024-`           |
| **V0.0.6** | Feedback-based Improvements                  | `2024-`           |
| **V1.0.1** | Authentication UI (Login/Signup)             | `2024-`           |
| **V1.0.2** | Redux State Management                       | `2024-`           |
| **V1.0.3** | WebSocket-based Real-time Synchronization    | `2024-`           |
| **V1.0.4** | GraphQL Integration                          | `2024-`           |

## Features

- ✏️ **Create Memo**: Add new memos using a simple input form.
- 📝 **Update Memo**: Modify existing memos and save changes.
- 📄 **Read Memo**: View a real-time synchronized list of memos.
- 🗑️ **Delete Memo**: Easily remove memos with one click.
- 🔄 **Real-time Synchronization**: All changes are synchronized for all users via PostgreSQL and Prisma.
- ✅ **Test-Driven Development (TDD)**: All functionality is verified through unit tests with Vitest.

## Tech Stack

- **Frontend**: Next.js, TypeScript
- **Backend**: Node.js, Express
- **Database**: PostgreSQL + Prisma
- **Testing**: Vitest
- **Styling**: Tailwind CSS, Next UI

## **Project Timeline**

### **V0.0.1: Core CRUD Features Implemented**
> **Goal**: Implement core memo CRUD functionality with basic UI and state management logic. Ensure everything is validated through TDD with Vitest.
- **Implemented Features**:
  - UI for memo creation, reading, updating, and deleting.
  - Unit tests for each feature (Vitest).
  - Developed using TDD, writing tests before implementing features.
- **Completion Target**: `2024-10-15`
- **Development Period**: `2024-10-12 ~ 2024-10-15`

---

### **V0.0.3: CSS Styling and UI Enhancements**
> **Goal**: Apply basic styling using Tailwind CSS and Next UI to improve user experience and add responsiveness.
- **Features**:
  - Styling for memo list and form.
  - Responsive design for mobile, tablet, and desktop.
  - Interactive elements (hover, active states).
  - Migrate to Next UI components for a more polished UI.
  - Write UI-specific tests.
- **Completion Target**: `2024-`

---

### **V0.0.4: Full E2E Testing**
> **Goal**: Write and validate full end-to-end tests using Playwright or Cypress to cover user flows and core functionalities.
- **Features**:
  - Write scenarios for memo creation, update, and deletion.
  - Set up Playwright or Cypress for E2E testing.
  - Automate E2E tests using CI/CD pipeline integration.
- **Completion Target**: `2024-`

---

### **V0.0.5: Deployment and Performance Optimization**
> **Goal**: Deploy the application on Vercel or AWS and optimize performance.
- **Features**:
  - Deploy Next.js frontend with Express server integration.
  - Implement performance optimizations.
- **Completion Target**: `2024-`

---

### **V0.0.6: Feedback-based Improvements and Features**
> **Goal**: Implement feedback-based enhancements and new features to improve user experience.
- **Features**:
  - UI/UX improvements based on user feedback.
  - Add memo search functionality.
  - Implement real-time notifications for memo updates or deletions.
  - Write and validate tests for new features.
- **Completion Target**: `2024-`

---

### **V1.0.1: User Authentication (Login/Signup)**
> **Goal**: Implement user authentication (login and signup) UI with form validation.
- **Features**:
  - Design and develop login/signup UI.
  - Add input validation and error messages.
  - Write tests for login/signup flows (Vitest).
- **Completion Target**: `2024-`

---

### **V1.0.2: State Management with Redux**
> **Goal**: Integrate Redux for global state management and handle user authentication state and memo data efficiently.
- **Features**:
  - Set up Redux store for managing global state.
  - Handle user info and memo list states.
  - Write tests for Redux-related state management.
- **Completion Target**: `2024-`

---

### **V1.0.3: Real-time UI Synchronization with WebSocket**
> **Goal**: Use WebSocket for real-time UI updates during memo creation, update, or deletion.
- **Features**:
  - Implement WebSocket client and server connection.
  - Synchronize memo data changes across all connected users.
  - Write WebSocket-specific tests.
- **Completion Target**: `2024-`

---

### **V1.0.4: GraphQL Client Integration**
> **Goal**: Optimize data requests using GraphQL for flexible and efficient data queries.
- **Features**:
  - Set up Apollo Client for handling GraphQL requests.
  - Implement CRUD operations with GraphQL.
  - Write tests for GraphQL-related components.
- **Completion Target**: `2024-`

---

## Version

- **v0.0.1**: Basic CRUD functionality implemented and tested.
  - For more details, see the [CHANGELOG.md](./CHANGELOG.md).
