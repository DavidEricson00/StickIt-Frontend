import { NOTE_COLOR_MAP } from "@/constants/noteColors";
import { NoteColor } from "@/types/NoteColor";

export function getNoteColorHex(color: NoteColor): string {
    return NOTE_COLOR_MAP[color]
}