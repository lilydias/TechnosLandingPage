import { MapPin } from 'lucide-react';
import { Instagram } from 'lucide-react';

export function Footer(){
    return(
        <section className="bg-black py-16 text-white">
            <footer className="mx-auto m-4 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
                <div>
                    <h3 className="uppercase text-2xl gradient-text mb-2">Technos</h3>
                    <p>Qualidade em serviços de tecnologia</p>
                </div>
                <div>
                    <h3 className="uppercase text-1xl mb-2">Fale Conosco</h3>
                    <p>Email: engcompjr@gmail.com</p>
                    <span className='flex flex-row flex-wrap gap-3'>
                        <MapPin className='text-green-300'></MapPin>
                        <p>CCT - UEMA-Campus Paulo VI</p>
                    </span>
                </div>
                <div>
                    <h3 className="uppercase text-1xl mb-2">Nossas Redes Sociais</h3>
                    <a href='https://www.instagram.com/technosjr?igsh=ZXZramllbHMyZnJ4'>
                        <Instagram></Instagram>
                    </a>
                </div>
            </footer>
            <p className='text-center pb-0 text-xs'>©TECHNOS Empresa Júnior. All rights reserved.</p>
        </section>
    )
}