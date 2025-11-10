import { Users } from 'lucide-react';
import { FolderCode } from 'lucide-react';
import { MonitorCheck } from 'lucide-react';
import { Search } from 'lucide-react';

export default function Services(){
    return (
        <section className="py-24 mt-0" id='services'>
                <div className="container mx-auto px-4">
                    <h1 className="uppercase text-center text-3xl md:text-[54px] md:leading-[60px] font-bold text-transparent bg-gradient-to-b from-teal-300 via-teal-500 to-teal-700 bg-clip-text">Serviços</h1>
                    <div className='lg:flex flex-col gap-6'>
                        <div className="p-6 sm:p-8 lg:p-10 m-4 border border-teal-200 rounded-2xl shadow-1xl shadow-lg shadow-teal-600/20">
                            <div className='flex flex-col items-center justify-center'>
                                <MonitorCheck className='text-white'/>
                                <h4 className='text-lg text-white font-medium text-center'>MONTAGEM  E MANUTENÇÃO DE COMPUTADORES</h4>
                                <div>
                                    <h6 className='text-center text-gray-300'>Desempenho otimizado, para sua máquina funcionar sempre como nova</h6>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 sm:p-8 lg:p-10 m-4 border border-teal-200 rounded-2xl shadow-1xl shadow-lg shadow-teal-600/20">
                        <div className='flex flex-col items-center justify-center'>
                            <Users className='text-white' />
                            <h4 className='text-lg font-medium text-center text-white'>CONSULTORIA EM TECNOLOGIA</h4>
                            <div>
                                <h6 className='text-center text-gray-300'>Orientações personalizadas para impulsionar suas soluções digitais com confiança.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 sm:p-8 lg:p-10 m-4 border border-teal-200 rounded-2xl shadow-1xl shadow-lg shadow-teal-600/20">
                        <div className='flex flex-col items-center justify-center'>
                            <FolderCode className='text-white' />
                            <h4 className='text-lg text-white font-medium text-center'>DESENVOLVIMENTO DE SISTEMAS E SOFTWARE</h4>
                            <div>
                                <h6 className='text-center text-gray-300'>Soluções inteligentes e sob medida para transformar suas ideias em realidade digital.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 sm:p-8 lg:p-10 m-4 border border-teal-200 rounded-2xl shadow-1xl shadow-lg shadow-teal-600/20">
                        <div className='flex flex-col items-center justify-center'>
                            <Search className='text-white' />
                            <h4 className='text-lg text-white font-medium text-center'>ENTRE OUTROS SERVIÇOS</h4>
                            <div>
                                <h6 className='text-center text-gray-300'>Serviços personalizados em tecnologia para atender suas necessidades.</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}