import React from 'react';

interface FilterProps {
    filterState: string;
    setFilterState: (state: string) => void;
}

export const Filter: React.FC<FilterProps> = ({ filterState, setFilterState }) => {
    const buttonClasses = (state: string) =>
        `px-4 py-2 mt-2 rounded-lg transition-colors duration-300 ${filterState === state
            ? 'bg-blue-500 text-white font-bold'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`;

    return (
        <div className="mb-4 items-center space-x-2">
            <p className="mr-4 text-gray-700 font-medium">Filtrar por Estado:</p>
            <button
                className={buttonClasses("Todas")}
                onClick={() => setFilterState("Todas")}
            >
                Todas
            </button>
            <button
                className={buttonClasses("Exitosa")}
                onClick={() => setFilterState("Exitosa")}
            >
                Exitosa
            </button>
            <button
                className={buttonClasses("Fallida")}
                onClick={() => setFilterState("Fallida")}
            >
                Fallida
            </button>
            <button
                className={buttonClasses("En Proceso")}
                onClick={() => setFilterState("En Proceso")}
            >
                En Proceso
            </button>
        </div>
    );
};