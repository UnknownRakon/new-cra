import { Drawer } from 'antd';
import React, { useState, useEffect } from "react"
import { BrunchItem, RepoItem } from 'src/store/GitHubStore/types';
import { ApiResponse } from "../../shared/store/ApiStore/types";
import GitHubStore from "../../store/GitHubStore/GitHubStore";

interface RepoBranchesDrawerProps {
    selectedRepo: RepoItem | null,
    visible: boolean,
    onClose: () => void
}

const RepoBranchesDrawer: React.FC<RepoBranchesDrawerProps> = ({selectedRepo, visible, onClose}) =>{
    
    const[brunches, setBrunches] = useState<BrunchItem[] | []>([])

    useEffect(()=>{
        const gitHubStore = new GitHubStore();
        gitHubStore
        .getRepoBranches({
        owner: selectedRepo?.owner.login,
        repo: selectedRepo?.name
        })
        .then((result: ApiResponse<BrunchItem[], any>) => {
            if(result.success){
                setBrunches(result.data)
            }
        });
    return;
    },[visible])
    return(
        <Drawer title={selectedRepo?.name} placement="right" onClose={onClose} visible={visible}>
        {brunches !== [] ? brunches.map((item, index) => <p key={index}>{item.name}</p>) : null}
        </Drawer>
    )
}
export default RepoBranchesDrawer