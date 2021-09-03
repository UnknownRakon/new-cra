import Button from "@components/Button"
import Input from "@components/Input"
import SearchIcon from "@components/SearchIcon"
import React, { HtmlHTMLAttributes, useState } from "react"
import GitHubStore from "../../store/GitHubStore/GitHubStore";
import { ApiResponse } from "../../shared/store/ApiStore/types";
import { RepoItem } from "../../store/GitHubStore/types";
import RepoTile from "@components/RepoTile";
import RepoBranchesDrawer from "@components/RepoBranchesDrawer";

const ReposSearchPage = () =>{

    const [text, setText] = useState('')
    const [repos, setRepos] = useState<RepoItem[] | []>([])
    const [isLoading, setIsLoading] = useState(false)
    const [visible, setVisible] = useState(false);
    const [selectedRepo, setSelectedRepo] = useState<RepoItem | null>(null)
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setText(e.target.value)
    }
    const gitHubStore = new GitHubStore();


    const store = async () => {
        gitHubStore
            .getOrganizationReposList({
            org: text,
            })
            .then((result: ApiResponse<RepoItem[], any>) => {
            setRepos(result.data);
            });
        return;
    }
    const click = async () =>{
        setIsLoading(true)
        await store()
        setIsLoading(false)
        setText('')
    }
    const repoClick = (item: RepoItem) =>{
        setVisible(true)
        setSelectedRepo(item)
    }
    const close = () =>{
        setVisible(false)
    }
    return(
        <>
            <div className="search">
                <Input value={text} onChange={e => {handleChange(e)}}/>
                <Button onClick={click} disabled={isLoading}>
                    <SearchIcon/>
                </Button>
            </div>
            {repos !== [] ? repos.map((item, index)=><RepoTile onClick={() => repoClick(item)} key={index} item={item}/>) : null}
            <RepoBranchesDrawer onClose={close} visible={visible} selectedRepo={selectedRepo}/>
        </>
    )
}
export default ReposSearchPage