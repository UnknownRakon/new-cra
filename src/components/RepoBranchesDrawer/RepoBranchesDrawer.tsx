import { Drawer } from 'antd';
import React, { useState } from "react"
import { RepoItem } from 'src/store/GitHubStore/types';

interface RepoBranchesDrawerProps {
    selectedRepo: RepoItem | null,
    visible: boolean,
    onClose: () => void
}

const RepoBranchesDrawer: React.FC<RepoBranchesDrawerProps> = ({selectedRepo, visible, onClose}) =>{
    return(
        <Drawer title={selectedRepo?.name} placement="right" onClose={onClose} visible={visible}/>
    )
}
export default RepoBranchesDrawer