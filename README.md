# CONCIERGE AI — Personal Intelligence & Executive Assistant

A Next.js starter repository for a multimodal personal assistant dashboard.

## Features in this starter
- Chat-style assistant interface
- Responsive application workspace navigation
- Overview, tasks, calendar, reminders, contacts, notes, documents, email, research, analytics, automations and concierge workspaces
- Local demo interactions and task check-offs
- Dark/light theme toggle
- Clear integration seams for an AI provider and external services

> This is a frontend starter. AI responses and workspace data are demo-only until you connect an AI provider, database and external integrations.

## Requirements
- Node.js 20+
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Suggested next integrations
1. AI model API with server-side tool calling
2. PostgreSQL + Prisma for persistent users, conversations and workspace data
3. Authentication (Auth.js or equivalent)
4. Calendar and email providers
5. Secure file storage and multimodal document/image processing

## Environment
Copy `.env.example` to `.env.local` and fill in values as integrations are added. Never commit secrets.
