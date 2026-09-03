# HackBridge

HackBridge is a full-stack inter-college hackathon collaboration platform. It connects students, balanced teams, colleges, mentors, and hackathon opportunities through explainable weighted matching.

## Run locally

1. Create a MySQL database by running `server/sql/schema.sql`.
2. Copy `server/.env.example` to `server/.env` and add your database credentials and JWT secret.
3. Run `npm install`, then `npm run install:all`.
4. Run `npm run dev` for development.

## Production

The client builds into `server/public`, so one Express service serves the API and React application. Configure the MySQL environment variables, run `npm run build`, and start with `npm start`.

## Core modules

- JWT/bcrypt role-based authentication
- Student, mentor, organizer, college and admin-ready data model
- Team creation and team applications
- Hackathon announcements and discovery
- Explainable team–hackathon and team–mentor scoring
- Student/skill search and filtering API
- Notifications, mentorship requests and application tracking schema
- Responsive student workspace with demo mode
