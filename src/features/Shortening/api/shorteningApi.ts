import { baseApi } from "@shared/api";
import { BaseResponse } from "./shorteningApi.types";

export const shorteningApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    setShortLink: builder.mutation<string, string>({
      query: (url) => {
        const shorteningUrl = encodeURIComponent(url);
        console.log(shorteningUrl);

        return {
          method: "POST",
          url: "",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `url=${shorteningUrl}`,
        };
      },
      transformResponse: (response: BaseResponse): string => response.result_url,
    }),
  }),
});

export const { useSetShortLinkMutation } = shorteningApi;
