/* eslint-disable react/prop-types */
// 2 Skriv sen FFContext.jsx
import { createContext } from 'react';

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  return (
    <FeatureFlagContext.Provider value={{}}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
