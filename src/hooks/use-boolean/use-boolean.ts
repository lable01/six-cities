import { useCallback, useMemo, useState } from 'react';

function useBoolean(initialValue = false) {
  const [isOn, setIsOn] = useState(initialValue);

  const off = useCallback(() => setIsOn(false), []);
  const toggle = useCallback(() => setIsOn((prev) => !prev), []);

  return useMemo(
    () => ({
      isOn,
      off,
      toggle,
    }),
    [isOn, off, toggle],
  );
}

export default useBoolean;
