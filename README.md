# Backend Developer Assessment: AI-Driven Backend System

## Project Overview

**Task:** Develop a backend system that integrates a database, API, and deployment for an AI-driven application. The system will handle user input, process it using AI, and store relevant data in a database. This project is designed to be completed within 5-10 hours with basic functionality, but the bonus tasks offer a chance to demonstrate advanced skills.

**Timeline:** 08/10/2024 to 11/10/2024 (British Time)

**Languages/Frameworks:** 
- **Frontend:** Next.js, TypeScript, HTML, CSS (provided template)
- **Backend:** Any backend language that easily integrates with Next.js/TypeScript (e.g., Node.js with Express, Python with Flask/Django, etc.)

**Deployment:** Use a free cloud provider (e.g., Heroku free tier) or run locally.

## Core Requirements

### 1. User Input and Data Storage

- **Endpoint:** `POST /api/input`
  - **Description:** Accepts user input and stores it in the database.
  - **Request:**
    ```json
    {
      "userInput": "User's text input goes here."
    }
    ```
  - **Response:**
    ```json
    {
      "message": "Input received and stored."
    }
    ```
  - **Database:** Use a relational or NoSQL database (e.g., PostgreSQL, MongoDB) to store user input and relevant data.

### 2. AI Processing

- **Endpoint:** `POST /api/process`
  - **Description:** Processes the user input using an AI model and generates a response.
  - **Request:**
    ```json
    {
      "inputId": "Unique identifier for user input."
    }
    ```
  - **Response:**
    ```json
    {
      "response": "AI-generated response text goes here."
    }
    ```
  - **Service:** Integrate with an AI API like OpenAI’s GPT-3 or GPT-4 for response generation.

### 3. Basic Authentication (Optional)

- **Endpoint:** `POST /api/login`
  - **Description:** Authenticates the user and provides a JWT token.
  - **Request:**
    ```json
    {
      "username": "user",
      "password": "password"
    }
    ```
  - **Response:**
    ```json
    {
      "token": "JWT token goes here."
    }
    ```
  
- **Middleware:** Implement JWT authentication for `/api/input` and `/api/process` endpoints.

### 4. Deployment

- **Instructions:** Deploy to a free cloud provider such as Heroku or run locally. Ensure the backend is functional and accessible.

### 5. Architecture/Design Documentation

- **Task:** Provide a detailed architecture and design document for your backend system.
  - **Requirements:**
    - **System Architecture Diagram:** Show how different components (e.g., API endpoints, database, third-party services) interact.
    - **Data Flow Diagram:** Illustrate the flow of data from user input to AI processing and storage.
    - **Design Decisions:** Describe any key design decisions made, including why certain technologies or approaches were chosen.
  - **Format:** Include diagrams and descriptions in your GitHub repository or as a separate document.

## Bonus Tasks (Optional but encouraged)

1. **Session Management:**
   - Implement session management to track user interactions and maintain context across multiple requests.
   - Store session data to enable more personalized responses.

2. **Multi-Language Support:**
   - Integrate multilingual support for user inputs and AI responses.
   - Ensure the system can process and respond in multiple languages based on user input.

3. **Custom User Profiles:**
   - Allow users to create and manage profiles, storing preferences for interactions with the AI.
   - Example: Store user preferences for response styles or topics of interest.

4. **CI/CD Integration:**
   - Set up a CI/CD pipeline to automate testing and deployment.
   - Use a platform like GitHub Actions or CircleCI to automate build, test, and deployment processes.

## User Stories

1. **User Input Storage:** 
   - "As a user, I can submit my input, and it will be stored in the database for processing."

2. **AI Response Generation:**
   - "As a user, I can request an AI-generated response based on my stored input."

3. **Session Management:**
   - "As a user, my interactions are remembered, allowing for more personalized responses."

4. **Authentication:**
   - "As a user, I must authenticate before interacting with the AI to ensure my session is secure."

## Frontend Flow (Basic UI)

### 1. User Input

- **Text Input Field:** A field for the user to enter their text input.
- **Submit Button:** A button to submit the input to the backend.
- **Loading Indicator:** Shows when the system is processing the input.

### 2. Interaction Display

- **Response Display:** Area to show the AI’s generated response.
- **Error Handling:** Display messages for any errors or invalid inputs.

### Example Frontend Flow

1. **User accesses the landing page.**
2. **They enter their input in the text field and click the submit button.**
3. **The input is sent to the backend for processing.**
4. **The AI’s response is displayed on the UI.**

## What You Should Provide

1. **GitHub Repository:**
   - Create a repository with your code and necessary documentation.
   - Push your changes before the deadline.

2. **Project Instructions:**
   - **Overview:** General description of the project.
   - **Requirements:** Detailed features and functionality.
   - **Timeline:** Deadline for project submission.

3. **Design/API Documentation:**
   - Provide links or documentation for the AI APIs used.
   - Include basic instructions for testing endpoints.
   - **Architecture/Design Documentation:** Include a system architecture diagram, data flow diagram, and explanations of design decisions.

4. **Setup Instructions:**
   - **Environment Setup:** Instructions for setting up the development environment.
   - **Deployment Instructions:** Guidelines for deploying the solution to a cloud platform or running locally.

5. **Submission Guidelines:**
   - **Code Submission:** Push your code to the GitHub repository before the deadline.
   - **Loom Video:** Record a brief video (5 minutes max) covering:
     - Core functionalities of your backend.
     - How to test the endpoints.
     - Any additional features or considerations.

---

## Stay in Touch

If you need to contact me directly, feel free to connect with me on LinkedIn: (https://www.linkedin.com/in/ude/).

For general questions or project-related discussions, please use GitHub Issues.

---

## Evaluation Criteria

- **Functionality:** Verify that core features work as described.
- **Code Quality:** Assess the cleanliness, readability, and maintainability of the code.
- **Architecture/Design:** Review the provided architecture and design documentation.
- **Deployment:** Ensure the backend is deployed correctly and accessible or runs locally.
- **Testing:** Confirm that basic testing and debugging are completed.

