import React from 'react';

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: 'Pike Place Roast',
      type: 'Мелена кава',
      image: '/images/pike-place.jpg',
      color: 'bg-starbucks-green'
    },
    {
      id: 2,
      name: 'Veranda Blend',
      type: 'Цільні зерна',
      image: '/images/veranda.jpg',
      color: 'bg-starbucks-green'
    },
    {
      id: 3,
      name: 'Breakfast Blend',
      type: 'K-Cup® Pods',
      image: '/images/breakfast.jpg',
      color: 'bg-yellow-500'
    }
  ];

  return (
    <section className="py-20 px-4 bg-starbucks-light-green">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Coffee maker */}
          <div className="flex justify-center">
            <div className="w-32 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Кавоварка</span>
            </div>
          </div>
          
          {/* Products */}
          {products.map((product) => (
            <div key={product.id} className="flex justify-center">
              <div className="product-card bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-32 h-40 ${product.color} rounded-lg mb-4 flex items-center justify-center text-white font-bold text-lg mx-auto`}>
                  ★
                </div>
                <h3 className="font-bold text-lg text-center mb-2">{product.name}</h3>
                <p className="text-gray-600 text-center text-sm">{product.type}</p>
              </div>
            </div>
          ))}
          
          {/* Coffee cup */}
          <div className="flex justify-center">
            <div className="w-24 h-32 bg-starbucks-green rounded-lg flex items-center justify-center text-white font-bold text-xl">
              ☕
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;