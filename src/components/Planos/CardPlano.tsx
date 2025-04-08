import React from 'react';

const CardPlano = () => {
  // Custom SVG checkmark component instead of using react-icons/fa
  const CheckIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 20 20" 
      fill="currentColor" 
      className="w-4 h-4 text-green-500"
    >
      <path 
        fillRule="evenodd" 
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
        clipRule="evenodd" 
      />
    </svg>
  );

  return (
    <div className="w-72 bg-black rounded-lg shadow-lg overflow-hidden border border-gray-800">
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-white">Premium+</h2>
          <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-sm">Melhor opção</span>
        </div>
        
        <p className="text-sm text-gray-400 mb-4">Para profissionais que buscam o máximo</p>
        
        <div className="flex items-baseline mb-1">
          <span className="text-sm text-gray-500 line-through mr-2">34 EUR</span>
          <span className="text-3xl font-bold text-white">21 EUR</span>
          <span className="text-gray-400 text-sm ml-1">/mês</span>
        </div>
        
        <p className="text-xs text-gray-500 mb-4">252 EUR, Pagamento anual</p>
        
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium mb-6 transition duration-200">
          Obter Premium+
        </button>
        
        <p className="text-sm text-gray-300 mb-3">Além de tudo incluído no Premium:</p>
        
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="mr-2 mt-1"><CheckIcon /></span>
            <span className="text-sm text-gray-300">
              540.000 créditos para IA/ano: até 108.000 imagens ou 3.600 vídeos, dependendo do modo
            </span>
          </li>
          
          <li className="flex items-start">
            <span className="mr-2 mt-1"><CheckIcon /></span>
            <span className="text-sm text-gray-300">
              Acesso total a todos os modos de geração de vídeo, imagem e áudio
            </span>
          </li>
          
          <li className="flex items-start">
            <span className="mr-2 mt-1"><CheckIcon /></span>
            <span className="text-sm text-gray-300">
              Treinar a IA para várias finalidades: estilos, objetos, cores e personagens
            </span>
          </li>
          
          {/*<li className="flex items-start">
            <span className="mr-2 mt-1"><CheckIcon /></span>
            <span className="text-sm text-gray-300">
              Acesso prioritário ao Google Veo 2 e ao Google Image 3 para gerar vídeos e imagens, respectivamente
            </span>
          </li>
          
          <li className="flex items-start">
            <span className="mr-2 mt-1"><CheckIcon /></span>
            <span className="text-sm text-gray-300">
              Melhorar a qualidade das imagens em uma resolução de até 10K com o Magnific e a qualidade dos vídeos em até 4K com o Topaz
            </span>
          </li>
          
          <li className="flex items-start">
            <span className="mr-2 mt-1"><CheckIcon /></span>
            <span className="text-sm text-gray-300">
              Comprar créditos extras com descontos
            </span>
          </li>
          
          <li className="flex items-start">
            <span className="mr-2 mt-1"><CheckIcon /></span>
            <span className="text-sm text-gray-300">
              Acesso antecipado a toda a personalidades de IA
            </span>
          </li>*/}
        </ul>
      </div>
    </div>
  );
};

export default CardPlano;