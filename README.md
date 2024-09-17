# Backend Developer Assessment: Voice AI Agent

## Project Overview

**Task:** Develop a backend system for a Voice AI Agent. The system will handle audio input, process it, and generate responses using AI. This project is designed to be completed within 5-10 hours with basic functionality, but the bonus tasks offer a chance to demonstrate advanced skills.

**Timeline:** 16/09/2024 to 23/09/2024 (British Time)

**Languages/Frameworks:** 
- **Frontend:** Next.js, TypeScript, HTML, CSS (provided template)
- **Backend:** Any backend language that easily integrates with Next.js/TypeScript (e.g., Node.js with Express, Python with Flask/Django, etc.)

**Deployment:** Use a free cloud provider (e.g., Heroku free tier) or run locally.

## Core Requirements

### 1. Audio Input Processing

- **Endpoint:** `POST /upload`
  - **Description:** Accepts audio files (.wav or .mp3) from the user.
  - **Request:**
    ```json
    {
      "file": "audio_file.wav"
    }
    ```
  - **Response:**
    ```json
    {
      "transcription": "Transcribed text goes here."
    }
    ```
  - **Service:** Integrate with a Speech-to-Text API, such as Google Cloud Speech-to-Text or AWS Transcribe.

### 2. AI-Based Response Generation

- **Endpoint:** `POST /response`
  - **Description:** Generates a response based on the transcribed text.
  - **Request:**
    ```json
    {
      "text": "Transcribed text goes here."
    }
    ```
  - **Response:**
    ```json
    {
      "response": "AI-generated response text goes here."
    }
    ```
  - **Service:** Integrate with an NLP API like OpenAI’s GPT-3 or GPT-4.

### 3. Basic Authentication (Optional)

- **Endpoint:** `POST /login`
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

- **Middleware:** Implement JWT authentication for `/upload` and `/response` endpoints.

### 4. Deployment

- **Instructions:** Deploy to a free cloud provider such as Heroku or run locally. Ensure the backend is functional and accessible.

### 5. Architecture/Design Documentation

- **Task:** Provide a detailed architecture and design document for your backend system.
  - **Requirements:**
    - **System Architecture Diagram:** Show how different components (e.g., API endpoints, third-party services) interact.
    - **Data Flow Diagram:** Illustrate the flow of data from user input to response generation.
    - **Design Decisions:** Describe any key design decisions made, including why certain technologies or approaches were chosen.
  - **Format:** Include diagrams and descriptions in your GitHub repository or as a separate document.

## Bonus Tasks (Optional but encouraged)

1. **Context Management:**
   - Implement advanced context management to handle multiple sessions and maintain conversation state over time.
   - Store and manage session history to allow the AI agent to have contextually aware conversations.
   - **Example:** Maintain a conversation history for each user session, allowing the AI to reference previous interactions.

2. **Multi-Language Support:**
   - Integrate multilingual support for both speech-to-text and text-to-speech services.
   - Ensure the system can process and respond in multiple languages based on user input.
   - **Example:** Use language detection to switch between supported languages and provide responses in the detected language.

3. **Customizable Voice Agent Personality:**
   - Allow users to select different "personalities" for the voice agent, such as formal, casual, or humorous.
   - Customize the AI responses based on the selected personality to make interactions more engaging.
   - **Example:** Provide a configuration endpoint where users can set their preferred personality, and modify response generation logic accordingly.

4. **CI/CD Integration:**
   - Set up a comprehensive CI/CD pipeline to automate testing and deployment.
   - Use a platform like GitHub Actions or CircleCI to automate build, test, and deployment processes.
   - **Example:** Create workflows for automated testing, linting, and deployment to a staging environment before production.

## User Stories

1. **Audio Input Processing:** 
   - "As a user, I can upload an audio file, and the system will convert my speech to text."

2. **AI Response Generation:**
   - "As a user, after my speech is converted to text, I receive a response from the AI agent based on my input."

3. **Real-Time Interaction:**
   - "As a user, I can have a real-time conversation with the AI agent, where my audio is processed, and the system responds quickly."

4. **Authentication:**
   - "As a user, I must authenticate before interacting with the AI agent to ensure my session is private."

## Frontend Flow (Basic UI)

### 1. Audio Input

- **Microphone Button:** A button to start and stop audio recording.
- **Upload Button:** Option to upload an audio file if recording is not preferred.
- **Audio Recorder UI:** Displays recording status with visual feedback (e.g., waveform or indicator).

### 2. Interaction Display

- **Transcription Display:** Shows the transcribed text from the user's audio input.
- **AI Response Display:** Area to display the AI’s response text.
- **Audio Playback (Optional):** Plays back the AI’s response if text-to-speech is implemented.

### Example Frontend Flow

1. **User accesses the landing page.**
2. **They click the microphone button to start recording.**
3. **The audio is sent to the backend for processing.**
4. **The transcribed text is displayed on the UI.**
5. **The AI’s response is displayed, and optionally, audio playback is provided.**

## What You Should Provide

1. **GitHub Repository:**
   - Create a repository with your code and necessary documentation.
   - Push your changes before the deadline.

2. **Project Instructions:**
   - **Overview:** General description of the project.
   - **Requirements:** Detailed features and functionality.
   - **Timeline:** Deadline for project submission.

3. **Design/API Documentation:**
   - Provide links or documentation for the Speech-to-Text and NLP APIs used.
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

