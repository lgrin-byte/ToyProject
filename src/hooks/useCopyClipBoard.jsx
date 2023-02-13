import { useState } from 'react';



export function useCopyClipBoard() {
  const [isCopy, setIsCopy] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopy(true);

      return true;
    } catch (error) {
      console.error(error);
      setIsCopy(false);

      return false;
    }
  };

  return [isCopy, onCopy];
}
