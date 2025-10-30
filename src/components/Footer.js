import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-starbucks-light-green text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Navigation Tabs */}
        <div className="text-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1">
            <button className="px-6 py-2 rounded-full bg-starbucks-green text-white font-medium">
              Кава
            </button>
            <button className="px-6 py-2 rounded-full text-gray-600 font-medium hover:bg-gray-100">
              Рецепти
            </button>
          </div>
        </div>

        {/* Large Starbucks Logo */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 bg-starbucks-green rounded-full flex items-center justify-center text-white text-6xl font-bold mx-auto">
            ★
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-gray-600 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Дізнайтесь про нас</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Наша компанія</a></li>
                <li><a href="#" className="hover:text-white">Наша кава</a></li>
                <li><a href="#" className="hover:text-white">Історії та новини</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Кар'єра</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Культура та цінності</a></li>
                <li><a href="#" className="hover:text-white">Можливості включення</a></li>
                <li><a href="#" className="hover:text-white">Коледж досягнень</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соціальний вплив</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Люди</a></li>
                <li><a href="#" className="hover:text-white">Планета</a></li>
                <li><a href="#" className="hover:text-white">Екологічний вплив</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Для бізнес-партнерів</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Орендодавці</a></li>
                <li><a href="#" className="hover:text-white">Постачальники</a></li>
                <li><a href="#" className="hover:text-white">Корпоративні подарункові картки</a></li>
              </ul>
            </div>
          </div>
          
          <div className="text-center text-xs text-gray-400">
            <p>© 2024 Starbucks Coffee Company. Всі права захищені.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;