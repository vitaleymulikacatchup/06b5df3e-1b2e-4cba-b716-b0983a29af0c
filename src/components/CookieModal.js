import React from 'react';
import { X } from 'lucide-react';

const CookieModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 modal-overlay flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center mb-6">
          <div className="starbucks-logo mx-auto mb-4">
            ★
          </div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            STARBUCKS
          </h2>
        </div>
        
        <div className="text-sm text-gray-600 mb-6 leading-relaxed">
          <p className="mb-3">
            Ми використовуємо файли cookie та подібні технології для покращення вашого досвіду перегляду, персоналізації контенту та реклами, надання функцій соціальних мереж та аналізу нашого трафіку.
          </p>
          <p>
            Натискаючи "Прийняти всі", ви погоджуєтесь на використання файлів cookie відповідно до нашої Політики конфіденційності.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="btn-secondary px-6 py-2 rounded-full font-medium flex-1">
            Налаштувати файли cookie
          </button>
          <button 
            onClick={onClose}
            className="btn-primary px-6 py-2 rounded-full font-medium flex-1"
          >
            Прийняти всі файли cookie
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;