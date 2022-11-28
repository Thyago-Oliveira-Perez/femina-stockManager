import styled from '@emotion/styled';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

export const ButtonGroup = styled(ToggleButtonGroup)({
    background: 'none',
    border: 'none',
});

export const ButtonAction = styled(ToggleButton)({
    border: 'none',
    '&.Mui-selected, &.Mui-selected:hover': {
        color: '#7A0000',
        background: 'none'
    },
    '&:hover': {
        transition: '0.5s ease',
        color: '#7A0000',
        background: 'none'
    }
});
