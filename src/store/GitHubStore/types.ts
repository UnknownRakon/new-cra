import { ApiResponse } from "./../../shared/store/ApiStore/types";
/** Интерфейс класса для работы с GitHub API
 * названия getSomeData и postSomeData
 * (а также типов GetSomeDataParams и PostSomeDataPrams)
 * поменяйте в соответствии с выполняемым запросом.
 * Выберите любой запрос из публичного API GitHub.
 */
// enum RepoTypes {
//     'all',
//     'public',
//     'private',
//     'forks',
//     'sources',
//     'member',
//     'internal'
// }
// enum RepoSorts{
//     'created',
//     'updated',
//     'pushed',
//     'full_name',
// }
export interface GetOrganizationReposListParams {
  // accept: string;
  org: string;
  // type: RepoTypes;
  // sort: RepoSorts;
  // direction: 'asc' | 'desc';
  // per_page: number;
  // page: number
}
export interface GitHubRepoOwner {
  id: number;
  html_url: string;
  avatar_url: string;
  login: string;
}

export interface RepoItem {
  id: number;
  html_url: string;
  name: string;
  stargazers_count: number;
  owner: GitHubRepoOwner;
  updated_at: string
}

export interface IGitHubStore {
  getOrganizationReposList: (
    params: GetOrganizationReposListParams
  ) => Promise<ApiResponse<RepoItem[], any>>;
  
}
