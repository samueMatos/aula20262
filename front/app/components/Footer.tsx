
export default function Footer(){

    const anoAtual = new Date().getFullYear();
    return(
        <footer className="w-full bg-blue-900 border-t border-blue-800 py-6 px-4 text-blue-200">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
                <div className="text-center">
                    <p className="text-sm font-medium tracking-wide">
                        &copy;{anoAtual} 
                        <span className="text-blue-400 font-bold ml-1">Aluaso</span>. 
                        Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );

    }