import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import classes from './Table.module.css'
import {tableApi} from '../../api/tableApi';

export type TableType = { [key: string]: string };

type TablePropsType = {
    dataUrl: string
}

export const TableRow: React.FC<TablePropsType> = React.memo(({dataUrl}): React.ReactElement => {
        const [data, setData] = useState<TableType[]>();
        const tableRef = useRef<HTMLTableElement>(null) ;

        useEffect(() => {
            let dataTable = tableApi.getTable(dataUrl);
            dataTable
                .then(res => setData(res))
                .catch(err => console.warn(err));

            const handleScroll = () => {
                const transformHeaders = ({top, bottom}:any) => {
                    let translate;

                    //@ts-ignore
                    let captionHeight = tableRef.current.querySelector('caption').getBoundingClientRect().height;
                    //@ts-ignore
                    let cellHeight = tableRef.current.querySelector('td').getBoundingClientRect().height;

                    // bottom > cellHeight проверка - чтобы перед последней ячейкой таблицы - заголовок прокручивался
                    // вверх

                    if (-top > captionHeight && bottom > cellHeight) {
                        translate = 'translate(0,' + (-top - captionHeight) + 'px)';
                    }

                    // @ts-ignore
                    tableRef.current.querySelector('thead').style.transform = translate;
                }

                transformHeaders(tableRef && tableRef.current && tableRef.current.getBoundingClientRect());
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);

        return <div className={classes.tableWrapper}>
            <table className={classes.table} ref={tableRef}>
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
                            if (typeof value === 'string') {
                                return <td key={value}>{value}</td>
                            } else {
                                return <td key={value}>Не строка</td>
                            }
                        })}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    }
)
