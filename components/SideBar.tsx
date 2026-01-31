"use client"

import { NoteColor } from "@/types/NoteColor"
import { getNoteColorHex } from "@/utils/getNoteColorHex"

const COLORS: NoteColor[] = [
  NoteColor.GREEN,
  NoteColor.BLUE,
  NoteColor.YELLOW,
  NoteColor.ORANGE,
  NoteColor.PINK    
]

type SidebarProps = {
    selectedColor: NoteColor
    onSelectColor: (color: NoteColor) => void
    onCreate: () => void
}

export default function Sidebar ({
    selectedColor,
    onSelectColor,
    onCreate
}: SidebarProps) {
    return(
        <aside className="fixed left-0 top-0 h-screen w-24 bg-white border-r border-zinc-200 flex flex-col items-center py-4 gap-8">
            <span className="text-xl font-semibold">StickIt!</span>

            <button
                onClick={onCreate}
                className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-3xl text-white cursor-pointer"
            >
                +
            </button>

            <div className="flex flex-col gap-4">
                {COLORS.map(color =>(
                    <button 
                        key={color}
                        onClick={() => onSelectColor(color)}
                        className={`w-8 h-8 cursor-pointer rounded-full border ${
                            selectedColor === color
                            ? "ring-zinc-400"
                            : "border-zinc-400"
                        }`}
                        style={{
                            backgroundColor: getNoteColorHex(color)
                        }}
                    />
                ))}
            </div>
        </aside>
    )
}