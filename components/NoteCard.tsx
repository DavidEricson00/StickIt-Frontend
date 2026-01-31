"use client"

import { Note } from "@/types/Note"
import { getNoteColorHex } from "@/utils/getNoteColorHex"

type NoteCardProps = {
    note: Note
    onClick?: () => void
}

export default function NoteCard({ note, onClick }: NoteCardProps){
    return (
        <div 
            onClick={onClick}
            className="
                w-64 h-50
                rounded-xs
                shadow-sm
                cursor-pointer
                p-4
                text-zinc-900
                hover:shadow-lg
                transition-shadow
            "
            style={{
                backgroundColor: getNoteColorHex(note.color)
            }}
        >
            <p
                className="
                    text-sm
                    leading-relaxed
                    overflow-hidden
                    text-ellipsis
                    line-clamp-6
                    font-light
                "
            >
                {note.content}
            </p>
        </div>
    )
}