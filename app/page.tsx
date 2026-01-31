"use client"

import { getNoteColorHex } from "@/utils/getNoteColorHex";
import { useEffect, useState } from "react";
import { getNotes, createNote, deleteNote } from "@/services/note.service";
import { Note } from "@/types/Note";
import { NoteColor } from "@/types/NoteColor";
import Sidebar from "@/components/SideBar";


export default function Home() {
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedColor, setSelectedColor] = useState<NoteColor>(NoteColor.YELLOW)

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
    <div>
      <Sidebar
        selectedColor={selectedColor}
        onSelectColor={setSelectedColor}
        onCreate={() => console.log("criar nota com " + selectedColor )}
      />

      <main className="pl-48 p-16 bg-zinc-100 min-h-screen">
        <div className="mb-8">
          <h1 className="text-4xl">Minhas notas</h1>
        </div>

        {notes.length === 0 && <p>Nenhuma nota ainda</p>}

        <div className="flex">
          <ul>
            {notes.map(note => (
              <li key={note.id} className="mb-16">
                <p className="text-black" style={{ backgroundColor: getNoteColorHex(note.color) }}>{note.content}</p>

                <button onClick={() => handleDelete(note.id)} className="cursor-pointer">
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        </div>

    </main>
    </div>

  );
}
