import ApiStore from "../../shared/store/ApiStore";
import { HTTPMethod } from "../../shared/store/ApiStore/types";
import { ApiResponse } from "./../../shared/store/ApiStore/types";
import {
  IGitHubStore,
  GetOrganizationReposListParams,
  getRepoBranchesParams,
  RepoItem,
  BrunchItem,
} from "./types";

export default class GitHubStore implements IGitHubStore {
  private readonly apiStore = new ApiStore("https://api.github.com/"); // TODO: не забудьте передать baseUrl в конструктор
  async getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<ApiResponse<RepoItem[], any>> {
    return await this.apiStore.request({
      method: HTTPMethod.GET,
      endpoint: `orgs/${params.org}/repos`,
      headers: {},
      data: {},
    });
  }
  async getRepoBranches (params: getRepoBranchesParams): Promise<ApiResponse<BrunchItem[], any>>{
    return await this.apiStore.request({
      method: HTTPMethod.GET,
      endpoint: `repos/${params.owner}/${params.repo}/branches`,
      headers: {"Authorization" : "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"},
      data: {},
    });
  };

}
