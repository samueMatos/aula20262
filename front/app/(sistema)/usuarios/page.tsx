"use client"
import { Usuario } from "@/app/types/usuario";
import axios from "@/node_modules/axios/index";
import Link from "@/node_modules/next/link";
import { useEffect, useState } from "react";


export default function Usuarios(){

    const [usuarios,setUsuarios] = useState<Usuario[]>([]);

    useEffect(()=>{
        carregarDados();
    },[]);

    const carregarDados = async ()=>{

        try {
            const dados = await axios.get<Usuario[]>("http://localhost:8080/usuarios");

            setUsuarios( dados.data);

        } catch (error) {
            alert("Erro ao carregar dados!")
        }
       

    }

    const handleDeletarUsuario = async(usuario:Usuario) =>{

        var dadosRetorno = await  
        axios.delete('http://localhost:8080/usuarios/'+usuario.id+'/excluir');

        if(dadosRetorno.status==200){
            alert("Excluido com sucesso!");
        }else{
            alert(dadosRetorno.data);

            return;
        }

        carregarDados();

    }

    const handleAlterarStatusUsuario = async(usuario:Usuario) =>{


        var novoStatus = {};
        if(usuario.status ==="ATIVO"){
            novoStatus = {status:"BLOQUEADO"}
        }else{
            novoStatus = {status:"ATIVO"}
        }

        var dadosRetorno = await  
        axios.patch('http://localhost:8080/usuarios/'+usuario.id+'/status',novoStatus);

        if(dadosRetorno.status==200){
            alert("Atulizado status com sucesso!");
        }else{
            alert(dadosRetorno.data);

            return;
        }

        carregarDados();

    }
    

    return (
        <div className="w-full bg-slate-50 p-6 md:p-8 font-sans">
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                    Gestao de usuarios
                </h1>
                <Link 
                    href="/usuarios/novo"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg shadow-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Novo Usuário
                </Link>
            </div>
    
            <div className="w-full">
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden w-full">
                    <div className="overflow-x-auto w-full">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-100/75 border-b border-slate-200">
                                    <th className="px-6 py-3.5 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                                        Código
                                    </th>
                                    <th className="px-6 py-3.5 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                                        Nome
                                    </th>
                                    <th className="px-6 py-3.5 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                                        CPF
                                    </th>
                                    <th className="px-6 py-3.5 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                                        E-mail
                                    </th>
                                    <th className="px-6 py-3.5 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3.5 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                                        Ações
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                               {usuarios.map((usuario)=>(     
                                <tr key={usuario.id} className="hover:bg-blue-50/50 transition-colors duration-150">
                                    <td className="px-6 py-4 text-sm font-medium text-slate-800">
                                        {usuario.id}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-800">
                                        {usuario.nome}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-800">
                                        {usuario.cpf}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-800">
                                        {usuario.email}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-800">
                                        {usuario.status}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-800">
                                        <Link href={`/usuarios/${usuario.id}/editar`}>Editar</Link>
                                       <button onClick = {()=> handleDeletarUsuario(usuario)}
                                       className= "font-medium transition-colors text-red-600 hover:text-red-800">
                                        DELETAR</button>
                                        <button onClick = {()=> handleAlterarStatusUsuario(usuario)}
                                       className= {`font-medium transition-colors ${usuario.status ==='BLOQUEADO'
                                         ?'text-orange-600 hover:text-orange-800' 
                                         :'text-green-600 hover:text-green-800' }`
                                         }>
                                        {usuario.status}</button>
                                    </td>
                                </tr>
                                ))}

                                { usuarios.length === 0 &&
                                (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-12 text-center text-slate-800 italic" >
                                            Nenhum usuario encontrado!
                                        </td>
                                    </tr>
                                )
                                }



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )

}