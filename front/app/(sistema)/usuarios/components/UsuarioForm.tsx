'use client'

import { Usuario, UsuarioFormProps } from "@/app/types/usuario";
import axios from "@/node_modules/axios/index";
import Link from "@/node_modules/next/link";
import { useRouter } from "@/node_modules/next/navigation";
import { useState } from "react";



export default function UsuarioForm({usuarioExistente}:UsuarioFormProps) {
    const router = useRouter();

    const [ usuario,setUsuario ] = useState<Usuario>(
        usuarioExistente ||
        new Usuario(null,"","","ATIVO","","")
    );

    const handlerChange = ( campo: 'nome'|  'email' |'cpf'| 'senha', valor:string) =>{
        setUsuario(valorAnterior => 
            new Usuario(
                valorAnterior.id,
                campo === 'nome' ? valor : valorAnterior.nome,
                campo === 'email' ? valor : valorAnterior.email,
                valorAnterior.status,
                campo === 'cpf' ? valor : valorAnterior.cpf,
                campo === 'senha' ? valor : valorAnterior.senha
            )
        )
    }



    const handlerSalvar = async (formData : FormData) =>{

    if(usuarioExistente){
        var dadosRetorno = await  
        axios.put<number>('http://localhost:8080/usuarios'+usuario.id,usuario);

        if(dadosRetorno.status==200){
            alert("Usuário foi salvo com sucesso!");
        }else{
            alert(dadosRetorno.data);

            return;
        }


    }else{
        var dadosRetorno = await  axios.post<number>('http://localhost:8080/usuarios',usuario)

        if(dadosRetorno.status==200){
            alert("Usuário foi salvo com sucesso!");
        }else{
            alert(dadosRetorno.data);

            return;
        }
    
    }

    router.push("/usuarios");

    }


    return (
        <form action={handlerSalvar} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-blue-200">
                        Nome completo:
                    </label>
                    <input 
                    name="nome" 
                    value={usuario.nome}
                    required
                    onChange={(e)=> handlerChange('nome',e.target.value)}
                    placeholder="João da Silva Sauro"
                    className="w-full px-4 py-2.5 bg-blue-950 border border-blue-800 rounded-xl text-blue-100 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 shadow-inner">
                    </input>
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-blue-200">
                        CPF:
                    </label>
                    <input 
                    name="CPF" 
                    value={usuario.cpf}
                    required
                    placeholder="000.000.000-00"
                    onChange={(e)=> handlerChange('cpf',e.target.value)}
                    className="w-full px-4 py-2.5 bg-blue-950 border border-blue-800 rounded-xl text-blue-100 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 shadow-inner">
                    </input>
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-blue-200">
                        E-mail
                    </label>
                    <input 
                    name="email" 
                    value={usuario.email}
                    required
                    placeholder="EmailDoJoao@SilvaSauro.com.br"
                    onChange={(e)=> handlerChange('email',e.target.value)}
                    className="w-full px-4 py-2.5 bg-blue-950 border border-blue-800 rounded-xl text-blue-100 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 shadow-inner">
                    </input>
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-blue-200">
                        Senha:
                    </label>
                    <input 
                    name="Senha" 
                    value={usuario.senha}
                    required
                    placeholder= "*********************"
                    onChange={(e)=> handlerChange('senha',e.target.value)}
                    type="password" className="w-full px-4 py-2.5 bg-blue-950 border border-blue-800 rounded-xl text-blue-100 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 shadow-inner">
                    </input>
                </div>
            </div>

            <div className="flex items-center justify-end space-x-4 pt-4 border-t border-blue-800/80">
                <Link href="/usuarios" className="px-5 py-2.5 bg-blue-800 hover:bg-blue-700 text-blue-200 hover:text-white font-medium text-sm rounded-xl transition-all duration-200 text-center border border-blue-700"> Cancelar</Link>
                <button type="submit" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"> Salvar</button>
            </div>
        </form>
    );
}