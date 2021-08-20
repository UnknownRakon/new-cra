import {IApiStore, ApiResponse, RequestParams} from "./types";
const qs = require('qs')

export default class ApiStore implements IApiStore {
    baseUrl: string = 'https://api.github.com/';
    async request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>> {
        try {
            const query = qs.stringify(params.data);
            const url = `${this.baseUrl}${params.endpoint}${query}`;
            const response : Response = await fetch(url, {
                method: params.method,
                headers: params.headers,
                body: JSON.stringify(params.data)
              });
          
            const data = await response.json();
          
            return {
              success: true,
              data,
              status: 200
            };
          } catch (e) {
            return {
              success: false,
              data: e,
              status: 500
            };
        }
    }
}