"use client"

import { useEffect, useState } from "react";
import { getNotes, createNote, deleteNote } from "@/services/note.service";
import { Note } from "@/types/Note";


export default function Home() {
  const [note, setNotes] = useState<Note[]>([])
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

  return (
    <>
    <p>A</p>
    </>
  );
}
