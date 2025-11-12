import React from 'react';
import { PROPERTYLISTINGSAMPLE } from '../constants';
import type { PropertyProps } from '../interfaces';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Find Your Dream Home</h1>
          <p className="text-xl mb-6">Discover the perfect accommodation for your next adventure</p>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold transition duration-300">
            Start Exploring
          </button>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white hover:bg-blue-50 px-6 py-2 rounded-full shadow-md transition duration-300">
              All
            </button>
            <button className="bg-white hover:bg-blue-50 px-6 py-2 rounded-full shadow-md transition duration-300">
              Rooms
            </button>
            <button className="bg-white hover:bg-blue-50 px-6 py-2 rounded-full shadow-md transition duration-300">
              Mansion
            </button>
            <button className="bg-white hover:bg-blue-50 px-6 py-2 rounded-full shadow-md transition duration-300">
              Countryside
            </button>
          </div>
        </div>
      </section>

      {/* Listing Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Properties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, index: number) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                <img 
                  src={property.image} 
                  alt={property.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{property.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{property.address.city}, {property.address.state}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-bold text-xl">${property.price}/night</span>
                    <span className="text-yellow-500 font-semibold">⭐ {property.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
