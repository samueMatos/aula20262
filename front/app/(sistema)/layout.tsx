'use client'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SistemaLayout({children}){

    const usuario = useSelector((state:RootState)=> state.auth.usuario);

    const router = useRouter();

    useEffect(()=>{
        if(usuario == null){
            router.push("/login");
        }
    })

    return (
        <div className="flex min-h-screen bg-blue-50">
            <Sidebar /> 
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto bg-blue-50 p-6 text-blue-900">
                    {children}
                </main>
                 <Footer /> 
            </div>
        </div>);
}