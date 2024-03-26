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
      setLoading(true);
      // data.js dummy call to simulate API call
      const reponse = await getFeatureFlags();
      console.log(reponse);
      setEnabledFlags(reponse);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error('Error fetching feature flags.');
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
