import Link from "@/node_modules/next/link";
import UsuarioForm from "../components/UsuarioForm";

export default function CadastroUsuario(){
    return(
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-blue-900 border border-blue-800 p-6 rounded-2xl shadow-lg">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold tracking-tight text-white flex items-center space-x-2">
                        <span className="w-2.5 h-2.5 bg-blue-400 rounded-full inline-block"></span>
                        <span>Novo Usuário</span>
                    </h1>
                    <p className="text-sm text-blue-200">Preencha os dados para registrar um novo Usuário</p>
                </div>
                <Link href="/usuarios" className="inline-flex items-center justify-center text-sm font-medium text-blue-200 hover:text-white bg-blue-800 hover:bg-blue-700 border border-blue-700 px-4 py-2.5 rounded-xl transition-all duration-200 shadow-sm w-full sm:w-auto">
                    &larr; Voltar para Listagem
                </Link>
            </div>
            <div className="bg-blue-900 border border-blue-800 rounded-2xl p-6 md:p-8 shadow-xl">
                <UsuarioForm/>
            </div>
        </div>
    )

}