# Employee Management Software

A simple **Employee Management Software** built using the **MERN Stack**. This application helps to manage employee information such as personal details, contact details, and employment details.

## 🛠️ Technologies Used

* React.js
* Node.js
* Express.js
* MongoDB
* Mongoose
* Axios

## ✨ Features

* Add Employee
* View Employees
* View Employee Details
* Update Employee
* Delete Employee
* Manage Employee Personal Details
* Manage Employee Employment Details

## 📂 Project Structure

```text
Employee-Management/
│
├── frontend/
│   ├── src/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## ⚙️ Installation

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

## 🔐 Environment Variables

Create a `.env` file in the backend:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## 🔗 API Endpoints

| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| POST   | `/api/employee`     | Create Employee   |
| GET    | `/api/employee`     | Get All Employees |
| GET    | `/api/employee/:id` | Get Employee      |
| PUT    | `/api/employee/:id` | Update Employee   |
| DELETE | `/api/employee/:id` | Delete Employee   |

## 👨‍💻 Author

**Vishva Perumal**

MERN Stack Developer
