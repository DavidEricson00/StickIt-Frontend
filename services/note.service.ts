import { Note } from "@/types/Note";

const API_URL = "http://localhost:8080"

export async function getNotes(): Promise<Note[]> {
    const response = await fetch(`${API_URL}/notes`)

    if(!response.ok) {
        throw new Error("Erro ao buscar notas")
    }

    return response.json()
}

export async function updateNote(id:number, note:Note): Promise<Note> {
    const response = await fetch(`${API_URL}/notes/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: note.title,
            content: note.content
        })
    })

    if(!response.ok) {
        throw new Error("Erro ao atualizar nota")
    }

    return response.json()
}

export async function deleteNote(id: number) {
    const response = await fetch(`${API_URL}/notes/${id}`, { 
        method: "DELETE"
    })

    if(!response.ok) {
        throw new Error("Erro ao deletar nota")
    }
}

export async function createNote(note:Note): Promise<Note> {
    const response = await fetch(`${API_URL}/notes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: note.title,
            content: note.content
        })
    })

    if(!response.ok) {
        throw new Error("Erro ao criar nota")
    }

    return response.json()
}