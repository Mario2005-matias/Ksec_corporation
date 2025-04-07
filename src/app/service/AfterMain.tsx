import React from 'react';
import { Shield, Lock, AlertTriangle, Eye } from 'lucide-react';

const CyberSecurityFeatures = () => {
  return (
    <div style={{ backgroundColor: '#09090b' }} className="text-white w-full py-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-700">
          
          {/* Primeiro item: Proteção Total */}
          <div className="flex flex-col items-center justify-center px-4 py-6">
            <Shield size={24} className="text-green-500 mb-2" />
            <h3 className="font-bold text-center">Proteção Total</h3>
            <p className="text-xs text-gray-400 text-center">Defesa contra malware</p>
          </div>
          
          {/* Segundo item: Acesso Seguro */}
          <div className="flex flex-col items-center justify-center px-4 py-6">
            <Lock size={24} className="text-green-500 mb-2" />
            <h3 className="font-bold text-center">Acesso Seguro</h3>
            <p className="text-xs text-gray-400 text-center">Autenticação em 2 fatores</p>
          </div>
          
          {/* Terceiro item: Detecção Avançada */}
          <div className="flex flex-col items-center justify-center px-4 py-6">
            <AlertTriangle size={24} className="text-green-500 mb-2" />
            <h3 className="font-bold text-center">Detecção Avançada</h3>
            <p className="text-xs text-gray-400 text-center">Alerta de ameaças em tempo real</p>
          </div>
          
          {/* Quarto item: Monitoramento 24/7 */}
          <div className="flex flex-col items-center justify-center px-4 py-6">
            <Eye size={24} className="text-green-500 mb-2" />
            <h3 className="font-bold text-center">Monitoramento 24/7</h3>
            <p className="text-xs text-gray-400 text-center">Vigilância constante da rede</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CyberSecurityFeatures;