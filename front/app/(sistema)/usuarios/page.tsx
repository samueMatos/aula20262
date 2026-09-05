import Link from "@/node_modules/next/link";

export default function Usuarios(){

    return(
    
    <div>
        <div>
            <h1>
                Gestao de usuarios
            </h1>
            <Link href="/usuarios/novo"></Link>
        </div>

        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Samuel
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
       
         
         
    </div>)

}