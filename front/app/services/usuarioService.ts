
import { Usuario } from "../types/usuario";
import api from "./api";



export async function buscarListaUsuarios() : Promise<Usuario[]> {

    const dados = await api.get<Usuario[]>("http://localhost:8080/usuarios");

    if(dados.status == 200){
        return dados.data;
    }

    return [];
    
}


export async function deletarUsuario(id:number) : Promise<number>{

 var dados = await api.delete('http://localhost:8080/usuarios/'+id+'/excluir');
    return dados.status;
}


export async function atualizarStatusUsuario(usuario:Usuario) :Promise<void>{
   
    var novoStatus = {};
    if(usuario.status ==="ATIVO"){
        novoStatus = {status:"BLOQUEADO"}
    }else{
        novoStatus = {status:"ATIVO"}
    }

    var dadosRetorno = await  
    api.patch('http://localhost:8080/usuarios/'+usuario.id+'/status',novoStatus);

    if(dadosRetorno.status==200){
        alert("Atulizado status com sucesso!");
    }else{
        alert(dadosRetorno.data);

        return;
    } 
}

export async function consultaUsuarioPorId(id:number):Promise<Usuario>{
    const valorUsuarioBack = await api.get<Usuario>('http://localhost:8080/usuarios/'+id);
    return valorUsuarioBack.data;

}

export async function  atualizarUsuario (usuario:Usuario): Promise<number>{
    var dadosRetorno = await  
    api.put<number>('http://localhost:8080/usuarios/'+usuario.id,usuario);
    return dadosRetorno.data;
}


export async function  salvarUsuario (usuario:Usuario): Promise<number>{
    var dadosRetorno = await  
    api.post<number>('http://localhost:8080/usuarios',usuario);
    return dadosRetorno.data;
}