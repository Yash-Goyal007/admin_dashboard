import { Box } from '@mui/material';
import BreakdownChart from 'components/BreakdownChart';
import Header from 'components/Header';
import React from 'react';

const Breakdown = props => {
    return (
        <Box m="1.5rem 2.5rem" >
            <Header title="BREAKDOWN" subtitle="Breakdown of Sales by Category" />
            <Box height="75vh" mt="40px">
                <BreakdownChart />
            </Box>
        </Box>
    );
};

export default Breakdown;