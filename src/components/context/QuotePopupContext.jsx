import React, { createContext, useContext, useState } from "react";
import PopUp from "../common/PopUp";

const QuotePopupContext = createContext();

export const QuotePopupProvider = ({ children }) => {
  // IMPORTANT: undefined keeps your autoShow logic intact
  const [isOpen, setIsOpen] = useState(undefined);

  const openQuotePopup = () => {
    setIsOpen(true);
  };

  const closeQuotePopup = () => {
    setIsOpen(false);
  };

  return (
    <QuotePopupContext.Provider value={{ openQuotePopup, closeQuotePopup }}>
      {children}

      {/* Single global popup using YOUR original component */}
      <PopUp
        isOpen={isOpen}
        onClose={closeQuotePopup}
        autoShow={true} // keeps reload auto popup behavior
      />
    </QuotePopupContext.Provider>
  );
};

export const useQuotePopup = () => useContext(QuotePopupContext);
