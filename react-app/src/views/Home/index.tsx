import React from "react"
import { observer } from "mobx-react-lite"
import styled from "@emotion/styled"
import LeftSideBar from "./LeftSideBar"
import Body from "./Body"

const Home: React.FC = observer(() => {
    return <Wrapper><LeftSideBar /><Body /></Wrapper>
})

const Wrapper = styled.div`
margin: 0px;
padding: 0px;
    width: 100vw;
    height: 100vh;
    display: flex;
    .body {
        margin: 0px;
        padding: 0px;
    }
`;

export default Home