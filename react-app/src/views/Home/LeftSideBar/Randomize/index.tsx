import { Button } from "@blueprintjs/core"
import { observer } from "mobx-react-lite"
import { useCallback } from "react"
import countStore from "../../../../stores/CountStore"

const Randomize: React.FC = observer(() => {
    const onClick = useCallback(() => {
        countStore.randomize()
    }, [])

    return <Button text={"Randomize"} onClick={onClick} />
})

export default Randomize;