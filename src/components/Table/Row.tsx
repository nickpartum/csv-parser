import React, {FC} from "react"
import {TableValues} from "./Table";

type RowPropsType = {
    data: Array<TableValues>
}
const Row: FC<RowPropsType> = ({data}) => {
    const elements = data.map((element, key) => {
        return (
            <td key={key} className={element.hasError ? 'warning' : ''}>
                {element.value}
            </td>
        )
    })
    return <tr>{elements}</tr>
}

export default Row
