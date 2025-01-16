import { baseApi } from "@shared/api";
import { BaseResponse, Urls } from "./shorteningApi.types";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const shorteningApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    setShortLink: builder.mutation<Urls, string>({
      query: (destination) => {
        return {
          method: "POST",
          url: "",
          headers: {
            "Content-Type": "application/json",
          },
          body: { destination },
        };
      },
      transformResponse: (response: BaseResponse): Urls => ({
        originalUrl: response.data.destination,
        shortedUrl: `https://${response.data.id}`,
      }),
      transformErrorResponse: (response: FetchBaseQueryError): string => {
        // Проверяем, что response.data существует и содержит ошибку
        if (response.data && typeof response.data === "object" && "error" in response.data) {
          return (response.data as { error: string }).error;
        }
        // Возвращаем общее сообщение об ошибке, если структура не соответствует ожидаемой
        return "An unknown error occurred";
      },
    }),
  }),
});

export const { useSetShortLinkMutation } = shorteningApi;
