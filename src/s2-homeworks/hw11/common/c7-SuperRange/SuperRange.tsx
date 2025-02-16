import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import styled from "styled-components";

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        // <Slider
        //     sx={{ // стили для слайдера // пишет студент
        //         color: '#00CC22',
        //         width: '147px',
        //         height: '4px'
        //     }}
        //     {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        // />
        <StyledSlider
            {...props}
            sx={{
                width: '147px',
                height: '4px'
            }}
        />
    )
}

export default SuperRange


const StyledSlider = styled(Slider)({
    '& .MuiSlider-track': {
        color: '#00CC22',
    },
    '& .MuiSlider-thumb': {
        height: 18,
        width: 18,
        backgroundColor: '#fff',
        border: '2px solid #00CC22',
        '&:before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 5,
            height: 5,
            borderRadius: '50%',
            backgroundColor: '#00CC22',
            transform: 'translate(-50%, -50%)',
        },
    },
    '& .MuiSlider-rail': {
        backgroundColor: '#8b8b8b',
    },

})