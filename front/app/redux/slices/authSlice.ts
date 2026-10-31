import { AuthState } from "@/app/types/auth";
import { Usuario } from "@/app/types/usuario";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const usuarioRecover = Cookies.get('usuario');
const tokenRecover = Cookies.get('token');

const initialState: AuthState = {
    usuario: usuarioRecover ? JSON.parse(usuarioRecover) as Usuario : null,
    token : tokenRecover ?? ""
}


const authSlice = createSlice({
    name :'auth',
    initialState,
    reducers:{
        login:( state, action: PayloadAction<{token:string, usuario:Usuario}>) =>{
            Cookies.set('token',action.payload.token,{secure: true, expires: 7});
            Cookies.set('usuario', JSON.stringify(action.payload.usuario),{expires: 7});

            state.token = action.payload.token;
            state.usuario = action.payload.usuario;
        },
        logout:(state) =>{
            Cookies.remove('token');
            Cookies.remove('usuario');

            state.token = "";
            state.usuario = null;

        }
    }
});

export const {login,logout} = authSlice.actions;
export default authSlice.reducer;

