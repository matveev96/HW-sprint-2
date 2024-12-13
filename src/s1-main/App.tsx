import React from 'react'
import HW1 from '../s2-homeworks/hw01/HW1'
import styled from "styled-components";
import HW2 from "../s2-homeworks/hw02/HW2";

function App() {
    return (
        <AppStyle>
            <HW1/>
            {/*раскомментировать по ходу выполнения*/}
            <HW2/>
            {/*<HW3/>*/}
            {/*<HW4/>*/}

            {/*при выполнении дз 5 и более - закомментировать здесь дз 1-4, так как они есть внутри дз 5*/}
            {/*<HW5/>*/}
        </AppStyle>
    )
}

export default App


const AppStyle = styled.div`

`
