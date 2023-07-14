import { AxiosRequestConfig, AxiosResponse } from "axios";

type CacheItem = [string, { value: any }];

export function serializeResponse(
  config: AxiosRequestConfig,
  response: AxiosResponse<any, any>
): CacheItem {
  const key = JSON.stringify({ ...config });
  return [
    key,
    {
      value: {
        data: response.data,
        headers: {
          ...response.headers,
        },
        status: response.status,
        statusText: response.statusText,
      },
    },
  ];
}
