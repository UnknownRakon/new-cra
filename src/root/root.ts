import GitHubStore from "../store/GitHubStore/GitHubStore";
import { ApiResponse } from "./../shared/store/ApiStore/types";
import { RepoItem } from "./../store/GitHubStore/types";
// Здесь необходимо продемонстрировать создание и использование GitHubStore

const gitHubStore = new GitHubStore();

const EXAMPLE_ORGANIZATION = "ktsstudio";

export default function store() {
  gitHubStore
    .getOrganizationReposList({
      org: EXAMPLE_ORGANIZATION,
    })
    .then((result: ApiResponse<RepoItem[], any>) => {
      return result; // в консоли появится список репозиториев в ktsstudio
    });
}

// В ДЗ 1 Не требуется визуально в разметке отображать результат запроса к сети. Достаточно вывести в console.log
