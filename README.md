<h1>StickIt</h1>

<p>
  <strong>StickIt</strong> is a web-based sticky notes application. The project was built with a focus on practical learning,
  clean UI design, and full integration between a modern frontend and a RESTful backend.
</p>

<p>
  The frontend is developed using <strong>Next.js</strong>, while the backend is powered by
  <strong>Spring Boot</strong>, following a simple and extensible architecture.
</p>

<h2>✨ Features</h2>
<ul>
  <li>Create new notes with a selected color</li>
  <li>Color-coded notes for better organization</li>
  <li>Edit notes using an in-place modal</li>
  <li>Persist notes through a REST API</li>
  <li>Delete notes</li>
  <li>Responsive grid-based layout</li>
  <li>Instant UI updates without page reloads</li>
  <li>Minimal and intuitive user interface</li>
</ul>

<h2>🧱 Technologies</h2>

<ul>
  <li>Next.js (App Router)</li>
  <li>React</li>
  <li>TypeScript</li>
  <li>Tailwind CSS</li>
  <li>Fetch API</li>
</ul>

<h2>🖼 Screenshots</h2>

<div align="center">
    <img src="https://i.imgur.com/H2ajzWa.png" alt="print1">
</div>

<div align="center">
    <img src="https://i.imgur.com/zDTRXV9.png" alt="print2">
</div>

<div align="center">
    <img src="https://i.imgur.com/KB68jwg.png" alt="print3">
</div>

<h2>📁 Project Structure</h2>
<pre>
src/
├─ app/
│   └─ page.tsx
├─ components/
│   ├─ Sidebar.tsx
│   ├─ NoteCard.tsx
│   └─ NoteModal.tsx
├─ services/
│   └─ note.service.ts
├─ types/
│   ├─ Note.ts
│   └─ NoteColor.ts
└─ utils/
   ├─ getNoteColorHex.ts
   └─ darkenHex.ts
</pre>

<h2>🚀 Getting Started (Frontend)</h2>

<p>First, install the dependencies:</p>

<pre>
npm install
</pre>

<p>Then, run the development server:</p>

<pre>
npm run dev
</pre>

<p>
  Open <a href="http://localhost:3000">http://localhost:3000</a> in your browser to see the application.
</p>

<h2>🔌 Backend Setup</h2>

<p>
  Backend repository:
  <a href="https://github.com/DavidEricson00/StickIt-Backend" target="_blank">
    https://github.com/DavidEricson00/StickIt-Backend
  </a>
</p>

<p>
  The backend is a Spring Boot application that exposes a REST API for managing notes.
  Make sure the backend server is running before using the frontend.
</p>

<p>
  By default, the frontend expects the API to be available at:
</p>

<pre>
http://localhost:8080
</pre>
