"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import {playfair, roboto} from "@/app/ui/fonts";
import {useRouter} from "next/navigation";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const router = useRouter();
    const phone = '58668331';
    const message = encodeURIComponent('Hola, me gustaría obtener más información sobre cómo contribuir a las donaciones.')

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const whatsappClick = () => {
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    }

    const navigateClick = (route: string) => {
        router.push(route);
    }

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-2 py-4">
                <div className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={50}
                        height={50}
                        className="mr-2 rounded-3xl"
                    />
                    <h1 className={`${playfair.className} italic text-xl font-bold`}>Dona con Amor</h1>
                </div>

                <nav className="hidden lg:flex space-x-6 ">
                    <button onClick={ () => navigateClick('/')} className={`${roboto.className} hover:text-blue-300`}>Inicio</button>
                    <button onClick={ () => navigateClick('/about')} className={`${roboto.className} hover:text-blue-300`}>Sobre Nosotros</button>
                    <button onClick={ () => navigateClick('/hospital')} className={`${roboto.className} hover:text-blue-300`}>Hospitales Beneficiados</button>
                    <button onClick={ () => navigateClick('/donar')} className={`${roboto.className} hover:text-blue-300`}>Cómo Donar</button>
                </nav>

                <div className={`flex items-center`}>
                    <button className="bg-white text-blue-600 px-3 py-2 rounded-lg font-semibold hover:bg-blue-50 mr-2" onClick={whatsappClick}>
                        Dona Ahora
                    </button>

                    <button onClick={handleClick} className="lg:hidden">
                        <Image
                            src={isOpen ? '/close.svg' : '/open.svg'}
                            alt="Menu"
                            width={30}
                            height={30}
                        />
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-blue-700">
                    <button onClick={ () => navigateClick('/')} className={`${roboto.className} block p-4 hover:bg-blue-600`}>Inicio</button>
                    <button onClick={ () => navigateClick('/about')} className={`${roboto.className} block p-4 hover:bg-blue-600`}>Sobre Nosotros</button>
                    <button onClick={ () => navigateClick('/hospital')} className={`${roboto.className} block p-4 hover:bg-blue-600`}>Hospitales Beneficiados</button>
                    <button onClick={ () => navigateClick('/donar')} className={`${roboto.className} block p-4 hover:bg-blue-600`}>Cómo Donar</button>
                </div>
            )}
        </header>
    );
};

export default Header;