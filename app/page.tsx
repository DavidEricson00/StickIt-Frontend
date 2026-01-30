"use client"

import { useEffect, useState } from "react";
import { getNotes, createNote, deleteNote } from "@/services/note.service";
import { Note } from "@/types/Note";


export default function Home() {
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getNotes()
      .then(data => setNotes(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  async function handleDelete(id: number) {
    try {
      await deleteNote(id)
      setNotes(prev => prev.filter(note => note.id !== id))
    } catch (error) {
      console.error(error)
    }
  }

  if(loading) {
    return <p>Carregando...</p>
  }

  return (
    <main className="p-32">
      <h1>StickIt!</h1>

      {notes.length === 0 && <p>Nenhuma nota ainda</p>}
    
      <ul>
        {notes.map(note => (
          <li key={note.id} className="mb-16">
            <h3>{note.title}</h3>
            <p>{note.content}</p>

            <button onClick={() => handleDelete(note.id)} className="cursor-pointer">
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
