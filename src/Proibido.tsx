import React from 'react';
import warningSign from './assets/warning-sign.png'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      marquee: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { scrollamount: number };
    }
  }
}

function Proibido() {
  return (
    <div className="flex flex-col w-full">
      <div className="mt-10 mx-12 md:mx-16 lg:mx-32">
        <h1 className="font-black text-5xl md:text-6xl lg:text-7xl text-center mb-10 text-red-500">WEBSITE BLOQUEADO</h1>
        <div className='flex max-w-[1070px] mx-auto flex-col-reverse md:flex-row text-center lg:text-start gap-4 items-center justify-between bg-dark-500/75 p-4 rounded-lg shadow shadow-black/30'>
          <p className="pl-4 font-bold text-xl md:text-2xl lg:text-3xl">ESTE WEBSITE ESTÁ BLOQUEADO POR OFERECER RISCO DE VAZAMENTO DE DADOS. BEM COMO COMPROMETER A REDE LÓGICA DA PREFEITURA.</p>
          <img src={warningSign} width={200} className="bg-red-400/90 rounded-lg" />
        </div>
      </div>
      <marquee scrollamount={12} className="py-1 text-lg font-bold mt-auto mb-4 lg:mt-auto lg:mb-8 bg-zinc-900 shadow-lg shadow-black/20">
        Serviço bloqueado pelo setor de segurança cibernética.
      </marquee>
    </div>
  );
}

Proibido.layout = "dashboard";
export default Proibido;
