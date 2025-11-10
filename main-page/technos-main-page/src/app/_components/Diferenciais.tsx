export default function Diferenciais(){
    return(
         <section className="py-24 mt-0" id='diferenciais'>
                <div className="container mx-auto px-4">
                    <h1 className="uppercase text-center text-3xl md:text-[54px] md:leading-[60px] font-bold text-transparent bg-gradient-to-b from-teal-300 via-teal-500 to-teal-700 bg-clip-text">Diferenciais</h1>
                    <div className='lg:flex flex-row gap-6 max-w-4xl mx-auto'>
                        <div className="flex-1 p-6 sm:p-8 lg:p-10 m-4 border border-teal-200 rounded-2xl shadow-1xl shadow-lg shadow-teal-600/20">
                            <div className='flex flex-col items-center justify-center'>
                                <h4 className='text-lg text-white font-medium text-center uppercase'>Por que escolher uma empresa junior?</h4>
                                <div>
                                    <ul className="text-gray-300 text-[20px] list-disc list-inside">
                                        <li>Preços mais acessíveis</li>
                                        <li>Impacto Social</li>
                                        <li>Serviço de Qualidade</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 p-6 sm:p-8 lg:p-10 m-4 border border-teal-200 rounded-2xl shadow-1xl shadow-lg shadow-teal-600/20">
                            <div className='flex flex-col items-center justify-center'>
                                <h4 className='text-lg font-medium text-center text-white uppercase'>Qual o principal diferencial da Technos?</h4>
                                <div>
                                    <ul className="text-gray-300 text-[20px] list-disc list-inside">
                                        <li>Inovação e Criatividade</li>
                                        <li>Acompanhamento personalizado</li>
                                        <li>Cultura de melhoria contínua</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}