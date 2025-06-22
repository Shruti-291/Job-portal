# 💼 Job Portal Application

A full-stack job portal web application where companies can post jobs and manage applications, while candidates can register, browse jobs, and apply with their resumes. This project is built using the MERN stack, with secure authentication, AI-friendly UI, and cloud-based resume handling.

---

## 🚀 Features

### 🏢 Company Panel
- Secure registration & login with JWT + bcrypt
- Create and delete job postings
- View applicants for each job
- Accept or reject applications
- Resume viewing/download support

### 👨‍💻 Candidate Panel
- Register and login securely
- Browse job listings with search functionality
- Upload resume and apply to jobs
- Track applied jobs 

---

## 🛠 Tech Stack

- **Frontend**: React.js, Tailwind CSS,Vite 
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB
- **Authentication**: JWT , bcrypt.js
- **File Handling**: Multer (for resume uploads)   
- **Formatting**: moment.js (date), k-convert (salary)  
- **Deployment**: Vercel 

---

## 🔐 Authentication

- Passwords are hashed using **bcrypt** before being stored.
- Authenticated sessions are managed using **JWT tokens**.
- Tokens are sent with each API request in headers and validated by backend middleware.
- Role-based access ensures companies and candidates access their own dashboards only.

---

## ⚙️ How It Works

### For Companies
1. Register/Login with credentials.
2. Post job listings (title, description, salary, location).
3. View applicants for each job.
4. View or download uploaded resumes.
5. Accept or reject applications.

### For Candidates
1. Register/Login securely.
2. Browse or search for job listings.
3. Upload resume and apply to jobs.
4. View the jobs you have applied to .


