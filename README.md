# ✅ Personal Task Tracker Web App

A lightweight full-stack **Task Management** web application built with **Flask**, **SQLite**, **SQLAlchemy**, and **Tailwind CSS**. Users can add, edit, delete, filter, and rearrange tasks — all in a responsive, modern interface.

---

## 🛠 Features

- 🔹 Add, edit, and delete personal tasks
- 🔹 Filter by task status: All / Pending / Completed
- 🔹 Dynamic progress bar for completed tasks
- 🔹 Responsive UI with dark mode support
- 🔹 Drag-and-drop reordering of task cards
- 🔹 Built-in SQLite database using SQLAlchemy ORM

---

## 🧰 Tech Stack

- **Backend:** Python, Flask, SQLAlchemy
- **Frontend:** HTML, Tailwind CSS, JavaScript
- **Database:** SQLite

---

## 📁 Project Structure

```
├── app.py                  # Flask application logic and routing
├── templates/              # Jinja2 HTML templates
│   ├── base.html
│   ├── index.html
│   ├── add_task.html
│   └── edit_task.html
├── static/
│   ├── script.js           # Progress bar + drag-and-drop logic
│   └── style.css           # Custom animation + hover effects
├── tasks.db                # SQLite database (auto-generated)
├── requirements.txt        # [Add this if deploying]
└── README.md
```

---

## 🚀 How to Run Locally

1. **Clone the repository**  
   ```bash
   git clone https://github.com/onlynayan/task_tracker.git
   cd task_tracker
   ```

2. **Create a virtual environment (optional but recommended)**  
   ```bash
   python -m venv venv
   source venv/bin/activate  # or venv\Scripts\activate (Windows)
   ```

3. **Install dependencies**  
   ```bash
   pip install flask flask_sqlalchemy
   ```

4. **Run the app**  
   ```bash
   python app.py
   ```

5. **Open in your browser**  
   ```
   http://127.0.0.1:5000/
   ```

---

## 🔧 Functionality Overview

| Route             | Method | Description                     |
|------------------|--------|---------------------------------|
| `/`              | GET    | View all tasks with filter      |
| `/add`           | GET/POST | Add new task                    |
| `/edit/<int:id>` | GET/POST | Edit existing task              |
| `/delete/<int:id>` | GET    | Delete a task by ID             |

---

## ✨ UI Features

- **Tailwind CSS UI**: Clean, responsive, and dark-mode ready
- **Draggable Tasks**: Rearrange task cards via drag-and-drop
- **Progress Bar**: Visual indicator of completion rate
- **Animations**: Smooth transitions and hover effects

---

## 🧑‍💻 Author

**Nayan Das**  
🔗 [GitHub](https://github.com/onlynayan)  
🔗 [Portfolio](https://onlynayan.github.io/portfolio)

---

> 🔐 Note: This app is for local/demo use only and does not include user authentication.
