import ApiStore from '../../shared/store/ApiStore';
import {IGitHubStore, GetOrganizationReposListParams, ApiResp} from "./types";
import {HTTPMethod} from '../../shared/store/ApiStore/types'

export default class GitHubStore implements IGitHubStore {
    private readonly apiStore = new ApiStore('https://api.github.com/'); // TODO: не забудьте передать baseUrl в конструктор
    async getOrganizationReposList<RepoItem = {}>(params: GetOrganizationReposListParams): Promise<ApiResp<RepoItem[]>> {
        const response = await this.apiStore.request({
            method: HTTPMethod.GET,
            endpoint: `orgs/${params.org}/repos`,
            headers: {'Content-Type': 'application/json'},
            data: {}
        })
        return response.data
        // TODO: Здесь сделайте вызов из this.apiStore и верните результат
        // Документация github: https://docs.github.com/en/rest/reference/repos#list-organization-repositories
    }
}