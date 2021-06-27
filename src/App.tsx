import React, {useEffect, useState} from 'react';
import './App.css';
import {DataType, Table} from './components/Table/Table';
import {tableApi} from './api/tableApi';

function App() {
    console.log('app')
    const [url, setUrl] = useState<string>('https://trycode.pw/c/29R5W.json');
    const [response, setData] = useState<DataType[] | null>(null);



    useEffect(() => {
        let dataTable = tableApi.getTable(url);
        dataTable.then(res => setData(res))
            .catch(err => console.log(err));
    }, [url]);

    return (
        <>
            <div className="App">
                <button>Добавить таблицу</button>
                {
                    response && <Table dataUrl={response}/>
                }
            </div>
        </>
    );
}

export default App;
