import { createContext, useContext, useEffect, useState } from "react";

// Créez un Contexte pour le count
const CountContext = createContext();

// Créez un fournisseur de contexte personnalisé
export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev < 100 ? prev + 1 : prev));
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Fournissez l'état count à tous les composants enfants
  return (
    <CountContext.Provider value={count}>{children}</CountContext.Provider>
  );
};

// Créez un hook personnalisé pour utiliser le count
export const useCount = () => {
  const context = useContext(CountContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};
