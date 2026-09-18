

export default function Header(){

    return (
        <header className="w-full bg-blue-900 border-b border-blue-800 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-blue-100 shadow-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        className="w-6 h-6" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                    </div>
                    <span 
                    className="text-blue-100 font-medium text-sm sm:text-base">
                        Usuário Samuel matos</span>
                </div>
                <button 
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm rounded-lg transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Sair</button>
            </div>
        </header>
    );

}