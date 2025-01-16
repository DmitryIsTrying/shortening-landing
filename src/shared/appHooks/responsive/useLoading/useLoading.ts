import { appLoadingEvent, LoadingEvent } from "@shared/events";
import { useEffect, useState } from "react";

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleChangeLoading = (event: Event) => {
      const customEvent = event as LoadingEvent;
      setIsLoading(customEvent.detail.isLoading);
    };

    document.addEventListener(appLoadingEvent, handleChangeLoading);

    return () => {
      document.removeEventListener(appLoadingEvent, handleChangeLoading);
    };
  }, []);

  return isLoading;
};
