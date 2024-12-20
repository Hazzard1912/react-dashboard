export interface CallData {
    id: number;
    duracion: string;
    estado: "Exitosa" | "Fallida" | "En Proceso";
    fecha: string;
}
