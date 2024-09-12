'use client'

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Definindo a interface para o valor do contexto
interface SearchContextType {
  searchActive: boolean;
  setSearchActive: Dispatch<SetStateAction<boolean>>;
}

interface SearchContextProviderProps {
  children: ReactNode;
}

// Inicializando o contexto com um valor padrão
const defaultValue: SearchContextType = {
  searchActive: false,
  setSearchActive: () => {}
};

export const SearchContext = createContext<SearchContextType>(defaultValue);

export const SearchContextProvider: React.FC<SearchContextProviderProps> = ({ children }) => {
  const [searchActive, setSearchActive] = useState<boolean>(false);

  return (
    <SearchContext.Provider value={{ searchActive, setSearchActive }}>
      {children}
    </SearchContext.Provider>
  );
}

// Hook para usar o contexto de forma mais simples e com tipagem adequada
export const useSearchContext = (): SearchContextType => {
  return useContext(SearchContext);
}