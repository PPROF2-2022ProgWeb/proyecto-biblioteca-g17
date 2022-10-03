import { UsuarioI } from "./usuario.interface";
import { LibroI } from "./libro.interface";

export interface PrestamoI {
    id: number;
    usuario: UsuarioI;
    libro: LibroI;
    fechaSalida: Date;
    fechaDevolucion: Date;
}