"use client"

import { Note } from "@/types/Note"
import { getNoteColorHex } from "@/utils/getNoteColorHex"

type NoteModalProps = {
    note: Note
    content: string
    onChange: (value: string) => void
    onSave: () => void
    onDelete: () => void
    onClose: () => void
}

export default function NoteModal({
    note,
    content,
    onChange,
    onSave,
    onDelete,
    onClose
}: NoteModalProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/30"
                onClick={onClose}
            />
            <div
                className="relative w-full max-w-lg rounded-md p-6 shadow-lg"
                style={{ backgroundColor : getNoteColorHex(note.color)}}
            >
                <textarea
                value={content || ""}
                onChange={e => onChange(e.target.value)}
                maxLength={255}
                className="
                    w-full
                    min-h-50
                    bg-transparent
                    resize-none
                    text-zinc-900
                    placeholder:text-zinc-700

                    border-none
                    outline-none
                    focus:outline-none
                    focus:ring-0
                "
                placeholder="Digite sua nota"
                />

                <p className="mt-2 text-xs text-zinc-700 text-right">
                {content.length}/255
                </p>

                <div className="mt-6 flex justify-between items-center">
                    <button
                        onClick={onDelete}
                        className="text-sm text-zinc-900 hover:underline cursor-pointer"
                    >
                        Excluir
                    </button>

                    <div className="flex gap-3">
                        <button
                            onClick={onClose}
                            className="text-sm text-zinc-900 hover:underline cursor-pointer"
                        >
                            Cancelar
                        </button>

                        <button
                            onClick={onSave}
                            className="
                                px-4 py-2
                                rounded-sm
                                bg-zinc-900
                                text-white
                                text-sm
                                hover:bg-zinc-800
                                cursor-pointer
                            "
                        >
                            Salvar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}