'use client'

import axios from "@/node_modules/axios/index";
import { useRouter } from "@/node_modules/next/navigation";
import { LoginResponse } from "../types/auth";


export default function Login(){
    const router = useRouter();

    const handleLogin = async(formData:FormData) =>{
        try {
            debugger;
            const emailTela = formData.get("email")?.toString() ?? "";
            const senhaTela = formData.get("senha")?.toString() ?? "";

            var loginResposta = await axios.post<LoginResponse>("http://localhost:8080/auth/login",
            {email:emailTela,senha:senhaTela});

            if(loginResposta.status==200){
                router.push("/home")
            }else{
                alert("Login ou senha Invalido!")
            }
        } catch (error) {
            alert("Login ou senha Invalido!")
        }
    }



    return(
        <div className="min-h-screen w-full flex items-center justify-center bg-slate-950 px-4">
            <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8 space-y-6">
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold tracking-tight text-white">
                        Entrar no sistema
                    </h1>
                    <p className="text-sm text-slate-400">Insira suas credenciais para acessar o painel</p>
                </div>
                <form action={handleLogin} className="space-y-4" >
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">
                            E-Mail
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="seu@email.com"
                            className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        >
                        </input>
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">
                            senha
                        </label>
                        <input
                            name="senha"
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        >
                        </input>
                    </div>
                    <button 
                        type="submit"
                        className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg shadow-lg shadow-blue-900/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-slate-900"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}