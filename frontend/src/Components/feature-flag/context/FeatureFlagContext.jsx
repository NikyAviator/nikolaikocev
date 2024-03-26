/* eslint-disable react/prop-types */
// 2 Skriv sen FFContext.jsx
// 4. Mkt kod skrevs här efter.
import { createContext, useEffect, useState } from 'react';
import getFeatureFlags from '../data';

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(true);
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      // data.js dummy call to simulate API call
      const reponse = await getFeatureFlags();
      console.log(reponse);
    } catch (error) {
      console.log(error);
      throw new Error('Error fetching feature flags.');
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagContext.Provider value={{}}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
