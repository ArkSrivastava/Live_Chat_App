# Live Chat App

A real-time chat application built with **React** for the frontend and **Node.js** with **Socket.IO** for the backend. This app allows users to send and receive messages in real time.

---

## Features

- **Real-Time Messaging**: Send and receive messages instantly.
- **User Identification**: Messages are labeled with "You" for the sender and "User" for others.
- **Responsive Design**: Works seamlessly on different screen sizes.
- **Modern UI**: Clean and intuitive user interface.

---

## Technologies Used

- **Frontend**: React, Socket.IO Client
- **Backend**: Node.js, Express, Socket.IO
- **Styling**: CSS

---

## Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/live-chat-app.git
cd live-chat-app
```
### 2. Set Up the Backend

Navigate to the backend folder:
```bash
cd backend
```
Install dependencies:
```bash
npm install
```
Start the backend server:
```bash
node index.js
```
The backend will run on http://localhost:5001.
### 3. Set Up the Frontend

Open a new terminal and navigate to the frontend folder:
```bash
cd ../frontend
```
Install dependencies:
```bash
npm install
```
Start the React app:
```bash
npm start
```
The frontend will open in your browser at http://localhost:3000.

---

## Usage
Open the app in two different browser tabs or browsers.
Send messages from one tab and see them appear in real-time in the other tab.

---

## Folder Structure
```
live-chat-app/
├── backend/
│   ├── index.js          # Backend server code
│   ├── package.json      # Backend dependencies
│   └── node_modules/     # Backend installed packages
├── frontend/
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── App.js        # Main React component
│   │   ├── App.css       # Styling for the app
│   │   └── index.js      # React entry point
│   ├── package.json      # Frontend dependencies
│   └── node_modules/     # Frontend installed packages
└── README.md             # Project documentation
```

---

## Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:
- **Fork the repository.**
- **Create a new branch (git checkout -b feature/YourFeatureName).**
- **Commit your changes (git commit -m 'Add some feature').**
- **Push to the branch (git push origin feature/YourFeatureName).**
- **Open a pull request.**

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgments

- **Socket.IO for real-time communication.**
- **React for building the frontend.**
- **Node.js for the backend server.**

---

## Contact
For questions or feedback, feel free to reach out.
