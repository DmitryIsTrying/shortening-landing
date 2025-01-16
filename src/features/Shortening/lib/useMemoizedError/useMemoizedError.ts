import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useMemo } from "react";

export const useMemoizedError = (
  error: FetchBaseQueryError | SerializedError | undefined
): string | undefined => {
  return useMemo(() => {
    if (typeof error === "string") return error;

    if (error) {
      if ("status" in error) {
        return typeof error.data === "object" && error.data !== null && "error" in error.data
          ? (error.data as { error: string }).error
          : "An unknown error occurred";
      } else {
        return error.message || "An unknown error occurred";
      }
    }
    return undefined;
  }, [error]);
};
