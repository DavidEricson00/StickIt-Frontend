"use client"

import { NoteColor } from "@/types/NoteColor"
import { getNoteColorHex } from "@/utils/getNoteColorHex"
import icon from "@/assets/icon.svg";
import Image from "next/image";
import { darkenHex } from "@/utils/darkenHex";

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
            <div className="flex-col items-center justify-center">
                <Image
                    src={icon}
                    alt="App icon"
                    width={64}
                    height={64}
                    quality={100}
                />
                <hr className="w-100% border-zinc-300"/>
            </div>


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
                        className="w-8 h-8 cursor-pointer rounded-full"
                        style={{
                            backgroundColor: getNoteColorHex(color),
                            boxShadow:
                            selectedColor === color
                                ? `0 0 0 3px ${darkenHex(getNoteColorHex(color), 80)}`
                                : "none"
                        }}
                    />
                ))}
            </div>
        </aside>
    )
}