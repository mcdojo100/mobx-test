import { Button } from "@blueprintjs/core"
import { observer } from "mobx-react-lite"
import { useCallback } from "react"
import countStore from "../../../../stores/CountStore"

const Increment: React.FC = observer(() => {
    const onClick = useCallback(() => {
        countStore.increment()
    }, [])

    return <Button text={"Increment"} onClick={onClick} fill={false} />
})

export default Increment;