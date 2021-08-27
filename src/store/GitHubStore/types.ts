import { ApiResponse } from './../../shared/store/ApiStore/types';
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
export type GetOrganizationReposListParams = {
    // accept: string;
    org: string;
    // type: RepoTypes;
    // sort: RepoSorts;
    // direction: 'asc' | 'desc';
    // per_page: number;
    // page: number
}
export type GitHubRepoOwner = {
    id: number,
    url: string,
    avaatar_url: string,
    login: string,
}

export type RepoItem = {
    id: number,
    url: string,
    name: string,
    stargazers_count: number,
    owner: GitHubRepoOwner
};

export interface IGitHubStore {
    getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResponse<RepoItem[], any>>;
}