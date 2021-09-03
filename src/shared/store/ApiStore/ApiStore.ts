import qs from "qs";

import {
  StatusHTTP,
  IApiStore,
  ApiResponse,
  RequestParams,
  HTTPMethod,
} from "./types";
export default class ApiStore implements IApiStore {
  readonly baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private getRequestData<ReqT>(
    params: RequestParams<ReqT>
  ): [string, RequestInit] {
    let endpont = `${this.baseUrl}${params.endpoint}`;

    const req: RequestInit = {};

    if (params.method === HTTPMethod.GET) {
      endpont = `${endpont}?${qs.stringify(params.data)}`;
    }
    if (params.method === HTTPMethod.POST) {
      req.body = JSON.stringify(params.data);
      req.headers = { ...params.headers };
      req.headers["Content type"] = "text/plain; charset=UTF-8";
    }
    return [endpont, req];
  }

  async request<SuccessT, ErrorT = any, ReqT = {}>(
    params: RequestParams<ReqT>
  ): Promise<ApiResponse<SuccessT, ErrorT>> {
    try {
      const response: Response = await fetch(...this.getRequestData(params));

      if (response.ok) {
        return {
          success: true,
          data: await response.json(),
          status: response.status,
        };
      }
      return {
        success: false,
        status: response.status,
        data: await response.json(),
      };
    } catch (e) {
      return {
        success: false,
        status: StatusHTTP.UNEXPECTED_ERROR,
        data: e,
      };
    }
  }
}
