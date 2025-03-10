import React from 'react';

const PostCard: React.FC = () => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">

            <div className="relative">

                <img
                    className="w-full h-48 object-cover"
                    src="https://via.placeholder.com/400x200"
                    alt="Imagen de la publicación"
                />

                <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                    </svg>
                </button>
            </div>

            <div className="p-4">

                <h2 className="font-bold text-xl mb-2">Título de la publicación</h2>

                <p className="text-gray-700 text-base">
                    Esta es una descripción breve de la publicación. Puede contener detalles
                    adicionales sobre el contenido.
                </p>
            </div>
        </div>
    );
};

export default PostCard;