import React from 'react'
import HW1 from '../s2-homeworks/hw01/HW1'
import styled from "styled-components";

function App() {
    return (
        <AppStyle>
            <HW1/>
            {/*раскомментировать по ходу выполнения*/}
            {/*<HW2/>*/}
            {/*<HW3/>*/}
            {/*<HW4/>*/}

            {/*при выполнении дз 5 и более - закомментировать здесь дз 1-4, так как они есть внутри дз 5*/}
            {/*<HW5/>*/}
        </AppStyle>
    )
}

export default App


const AppStyle = styled.div`
    &::before {
        content: "";
        width: 100%;
        height: 1px;
        background-color: #d9d9d9;
        top: 160px;
        position: absolute;
    }
    border-bottom: 1px solid #d9d9d9;
`
