"use client";
import React from 'react';
import { useState } from "react"

const PaymentToggle = () => {
  const [activeOption, setActiveOption] = useState('anual');

  return (
    <div className="bg-[#09090b] p-4 rounded-lg">
      <div className="flex rounded-md overflow-hidden border border-gray-700 w-fit">
        <button 
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeOption === 'anual' 
              ? 'bg-green-600 text-white' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
          onClick={() => setActiveOption('anual')}
        >
          Pago anualmente
        </button>
        
        <button 
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeOption === 'mensal' 
              ? 'bg-green-600 text-white' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
          onClick={() => setActiveOption('mensal')}
        >
          Pago mensalmente
        </button>
      </div>
    </div>
  );
};

export default PaymentToggle;