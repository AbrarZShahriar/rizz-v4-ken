import { useCallback, useEffect, useState } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';

type ColorScheme = 'light' | 'dark';

export function useColorScheme() {
  const [hasHydrated, setHasHydrated] = useState(false);
  const [selectedColorScheme, setSelectedColorScheme] = useState<ColorScheme | null>(null);
  const nativeColorScheme = useRNColorScheme() ?? 'light';

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const setColorScheme = useCallback(async (scheme: ColorScheme) => {
    setSelectedColorScheme(scheme);
  }, []);

  const resetColorScheme = useCallback(async () => {
    setSelectedColorScheme(null);
  }, []);

  return {
    colorScheme: selectedColorScheme ?? (hasHydrated ? nativeColorScheme : 'light'),
    setColorScheme,
    resetColorScheme,
  };
}
