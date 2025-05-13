@echo off

:: Start Backend
start cmd /c "cd backend && node index-1.js"

:: Start Frontend
start cmd /c "cd frontend && npm start"
