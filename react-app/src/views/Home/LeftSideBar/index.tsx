import React from "react"
import styled from "@emotion/styled"
import Increment from "./Increment";
import { observer } from "mobx-react-lite";
import Randomize from "./Randomize";

const LeftSideBar: React.FC = observer(() => {
    return <Wrapper><Increment /><Randomize /></Wrapper>
})

const Wrapper = styled.div`
    width: 256px;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
`;

export default LeftSideBar