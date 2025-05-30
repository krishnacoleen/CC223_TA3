# 📘 TUPM Student Handbook Chatbot  
**CC223 Terminal Assessment 3 — Final Capstone Project**

An AI-powered chatbot that helps students get instant answers from the TUP Manila Student Handbook. Built using React, Express, OpenRouter API, and Firebase Firestore. Deployed via Render and Firebase Hosting.

---

## 🛠 Tech Stack

- 💻 **Frontend**: React
- 🌐 **Backend**: Node.js + Express
- 🧠 **AI API**: OpenRouter (GPT-3.5-turbo)
- ☁️ **Database**: Firebase Firestore
- 🚀 **Hosting**:  
  - Backend: Render  
  - Frontend: Firebase Hosting

---

## 📁 Folder Structure

student-handbook-chatbot/
├── frontend/ # React App
│ ├── src/
│ └── public/
├── backend/ # Express Server
│ ├── index.js
│ ├── handbook.json
│ ├── .env (local only)
│ └── firebase-key.json (local only)
├── .gitignore
└── README.md

---

## 🚀 How to Run the Project Locally

### 🔧 Backend Setup

```bash
cd backend
npm install

Then, create a .env file inside the /backend folder:
OPENROUTER_API_KEY=your_openrouter_key_here
FIREBASE_KEY_PATH=./firebase-key.json
PORT=3001

Also, place your firebase-key.json file in the backend folder.
Note: These files are not pushed to GitHub for security reasons.

Start the backend server:
node index.js

💻 Frontend Setup
cd frontend
npm install
npm start

The React app will run at: http://localhost:3000

---

🌍 Live Deployment
🔗 Backend (Render):
https://tupm-student-handbook-chatbot.onrender.com

🔗 Frontend (Firebase Hosting):
https://tup-student-handbook-chatbot.web.app

---

✨ Features
✅ Chatbot answers based only on the Student Handbook
✅ AI-generated responses via OpenRouter
✅ Firestore logging of all questions & answers
✅ Clean UI with suggestions at startup
✅ Mobile-responsive and fully deployed

---

🔐 Security Note
.env and firebase-key.json are intentionally excluded from version control
These are required to run the app locally

---

👩‍💻 Author
Coleen Vengua
Technological University of the Philippines – Manila
CC223 Web App Development
Terminal Assessment 3


