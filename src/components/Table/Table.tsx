import React from 'react';
import classes from './Table.module.css'

type CellType = {
    text: string
    cellId: number
}
export type DataType = {
    rowId: number
    cells: Array<CellType>
}
export type TableType = Array<DataType>;
type TablePropsType = {
    dataUrl: TableType
}

let headers: Array<string> = ['title1', 'title2', 'title3', 'title4', 'title5', 'title6', 'title7', 'title8', 'title9', 'title10', 'title11', 'title12', 'title13',]

export const Table: React.FC<TablePropsType> = React.memo(({dataUrl}): React.ReactElement => {
        return <table className={classes.table}>
            <caption>
                Table example
            </caption>
            <thead>
            <tr>
                {headers.map((header, i) => <th key={i}>{header}</th>)}
            </tr>
            </thead>
            <tbody>
            {dataUrl.map(item => (
                <tr key={item.rowId}>
                    {item.cells.map((cell, i) => {
                        if (typeof cell.text === 'string') {
                            return <td key={cell.cellId}>{cell.text}</td>
                        } else return <td key={cell.cellId}>Не строка</td>
                    })}
                </tr>
            ))}
            </tbody>
        </table>
    }
)
