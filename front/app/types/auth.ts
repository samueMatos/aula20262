import { Usuario } from "./usuario"

export interface LoginResponse{
    token:string
}


export interface AuthState {
    usuario: Usuario | null
    token : string
}