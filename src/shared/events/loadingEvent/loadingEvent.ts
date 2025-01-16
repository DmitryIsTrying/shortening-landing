export const appLoadingEvent = "loadingAppStateChanged";

interface LoadingEventDetail {
  isLoading: boolean;
}

export interface LoadingEvent extends CustomEvent<LoadingEventDetail> {
  type: typeof appLoadingEvent;
}

export function dispatchLoadingEvent(isLoading: boolean) {
  const event = new CustomEvent<LoadingEventDetail>(appLoadingEvent, {
    detail: { isLoading },
    bubbles: true,
    cancelable: true,
  });
  document.dispatchEvent(event);
}
