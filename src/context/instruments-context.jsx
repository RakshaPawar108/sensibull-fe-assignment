import { createContext, useContext, useEffect, useState } from "react";
import { getInstruments } from "../utils";

const InstrumentContext = createContext(null);

const InstrumentProvider = ({ children }) => {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    getInstruments(setInstruments);
  }, []);

  return (
    <InstrumentContext.Provider value={instruments}>
      {children}
    </InstrumentContext.Provider>
  );
};

const useInstruments = () => useContext(InstrumentContext);

export { InstrumentProvider, useInstruments };
