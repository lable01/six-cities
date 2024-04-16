import { useState } from 'react';

export function useBoolean(initialValue = false) {
  const [isOn, setIsOn] = useState(initialValue);

  return {
    isOn,
    off: () => setIsOn(false),
    toggle: () => setIsOn((prev) => !prev),
  };
}

export default useBoolean;
