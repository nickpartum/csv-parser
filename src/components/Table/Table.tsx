import React, {FC} from "react"
import Row from "./Row"
import './table.css'

export type TableValues = {
    value: string,
    hasError?: boolean,
}

export type TablePropsType = {
    headers: Array<string>,
    data: Array<Array<TableValues>>
}

const Table: FC<TablePropsType> = ({headers, data}) => {
    if (headers.length === 0 || data.length === 0) {
        return <div>Data Empty</div>
    }

    const headersElements = headers.map((element, key) => {
        return <th key={key}>{element}</th>
    })

    const bodyElements = data.map((element, key) => {
        return <Row key={key} data={element}/>
    })

    return (
        <table className={'table'}>
            <thead>
            <tr>
                {headersElements}
            </tr>
            </thead>
            <tbody>
                {bodyElements}
            </tbody>
        </table>
    )
}

export default Table
