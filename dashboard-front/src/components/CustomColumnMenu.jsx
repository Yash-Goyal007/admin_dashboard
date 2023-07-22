import { GridColumnMenuContainer, GridColumnMenuFilterItem, GridColumnMenuHideItem } from '@mui/x-data-grid';
import React from 'react';

const CustomColumnMenu = props => {
    const {hideMenu,currentColumn,open} = props;
    return (
        <GridColumnMenuContainer hideMenu={hideMenu} currentColumn={currentColumn} open={open} >
            <GridColumnMenuFilterItem onclick={hideMenu} column={currentColumn} />
            <GridColumnMenuHideItem onClick={hideMenu} column={currentColumn} />
        </GridColumnMenuContainer>
    );
};

export default CustomColumnMenu;