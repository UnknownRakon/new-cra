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
export type ApiResp<RepoItem> = {
    data: RepoItem
}
export interface IGitHubStore {
    getOrganizationReposList<RepoItem = {}>(params: GetOrganizationReposListParams): Promise<ApiResp<RepoItem[]>>;
}