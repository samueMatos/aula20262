import Link from "@/node_modules/next/link";



export default function UsuarioForm() {
    return (
        <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-blue-200">
                        Nome completo:
                    </label>
                    <input name="nome" className="w-full px-4 py-2.5 bg-blue-950 border border-blue-800 rounded-xl text-blue-100 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 shadow-inner">
                    </input>
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-blue-200">
                        CPF:
                    </label>
                    <input name="CPF" className="w-full px-4 py-2.5 bg-blue-950 border border-blue-800 rounded-xl text-blue-100 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 shadow-inner">
                    </input>
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-blue-200">
                        E-mail
                    </label>
                    <input name="email" className="w-full px-4 py-2.5 bg-blue-950 border border-blue-800 rounded-xl text-blue-100 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 shadow-inner">
                    </input>
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-blue-200">
                        Senha:
                    </label>
                    <input name="Senha" type="password" className="w-full px-4 py-2.5 bg-blue-950 border border-blue-800 rounded-xl text-blue-100 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 shadow-inner">
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