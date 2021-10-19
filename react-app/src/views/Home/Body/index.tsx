import styled from "@emotion/styled";
import { observer } from "mobx-react-lite";
import React from "react"
import countStore from "../../../stores/CountStore";

const Body: React.FC = observer(() => {
    return <Wrapper>{countStore.count}</Wrapper>
})

const Wrapper = styled.div`
    flex: 1;
    height: 100%;
`;

export default Body;