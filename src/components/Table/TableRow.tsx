import React, {useEffect, useState} from 'react';
import classes from './Table.module.css'
import {tableApi} from '../../api/tableApi';

export type TableType = { [key: string]: string };

type TablePropsType = {
    dataUrl: string
}


export const TableRow: React.FC<TablePropsType> = React.memo(({dataUrl}): React.ReactElement => {

        const [data, setData] = useState<TableType[]>();

        useEffect(() => {
            let dataTable = tableApi.getTable(dataUrl);
            dataTable
                .then(res => setData(res))
                .catch(err => console.log(err));
        }, []);

        return <table className={classes.table}>
            <caption>
                Table example
            </caption>
            <thead>
            <tr>
                {data && data.length && Object.keys(data[0]).map(key => <th key={key}>{key}</th>)}
            </tr>
            </thead>
            <tbody>
            {data && data.map((item, i) => (
                <tr key={i}>
                    {Object.values(item).map(value => {
                        return <td key={value}>{value}</td>
                    })}
                </tr>
            ))}
            </tbody>
        </table>
    }
)
