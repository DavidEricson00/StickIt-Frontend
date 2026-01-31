"use client"

import { getNoteColorHex } from "@/utils/getNoteColorHex";
import { useEffect, useState } from "react";
import { getNotes, createNote, deleteNote, updateNote } from "@/services/note.service";
import { Note } from "@/types/Note";
import { NoteColor } from "@/types/NoteColor";
import Sidebar from "@/components/SideBar";
import NoteCard from "@/components/NoteCard";
import NoteModal from "@/components/NoteModal";

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedColor, setSelectedColor] = useState<NoteColor>(NoteColor.GREEN)
  const [selectedNote, setSelectedNote] = useState<Note | null>(null)
  const [editedContent, setEditedContent] = useState("")

  useEffect(() => {
    getNotes()
      .then(data => setNotes(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  
  async function handleCreate() {
    try {
      const newNote = await createNote({
        color: selectedColor,
        content: ""
      } as Note )

      setNotes(prev => [newNote, ...prev])
    } catch (error) {
      console.error(error)
    }
  }

  async function handleSave() {
    if (!selectedNote) return

    try {
      const updated = await updateNote (selectedNote.id, {
        ...selectedNote,
        content: editedContent
      })

      setNotes(prev =>
        prev.map(note =>
          note.id == updated.id ? updated : note
        )
      )

      setSelectedNote(null)
    } catch (error) {
      console.error(error)
    }
  }

  async function handleDelete(id: number) {
    try {
      await deleteNote(id)
      setNotes(prev => prev.filter(note => note.id !== id))
    } catch (error) {
      console.error(error)
    }
  }

  async function handleDeleteFromModal() {
    if (!selectedNote) return

    await handleDelete(selectedNote.id)
    setSelectedNote(null)
  }

  if(loading) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <Sidebar
        selectedColor={selectedColor}
        onSelectColor={setSelectedColor}
        onCreate={() => handleCreate()}
      />

      <main className="pl-48 p-16 bg-zinc-50 min-h-screen">
        <div className="mb-8">
          <h1 className="text-4xl font-normal">Minhas Notas</h1>
        </div>

        {notes.length === 0 && <p>Nenhuma nota ainda</p>}

        <ul
          className="
            grid
            grid-cols-[repeat(auto-fill,minmax(16rem,1fr))]
            gap-9
            justify-items-center
          "
        >
          {[...notes]
            .sort((a, b) => b.id - a.id)
            .map(note => (
              <NoteCard
              key={note.id}
              note={note}
              onClick={() => {
                setSelectedNote(note)
                setEditedContent(note.content)
              }}
            />
            ))}
        </ul>
    </main>
    {selectedNote && (
      <NoteModal
        note={selectedNote}
        content={editedContent}
        onChange={setEditedContent}
        onSave={handleSave}
        onDelete={handleDeleteFromModal}
        onClose={() => setSelectedNote(null)}
      />
    )}
    </div>
  );
}
