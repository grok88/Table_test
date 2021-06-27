import React, {FormEvent, useEffect, useState} from 'react';
import './App.css';
import {DataType, Table} from './components/Table/Table';
import {tableApi} from './api/tableApi';

function App() {
    console.log('app')
    const [url, setUrl] = useState<string>('https://trycode.pw/c/29R5W.json');
    const [response, setData] = useState<DataType[] | null>(null);

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [value, setValue] = useState<string>('https://trycode.pw/c/76FXB.json');

    useEffect(() => {
        let dataTable = tableApi.getTable(url);
        dataTable.then(res => setData(res))
            .catch(err => console.log(err));

    }, [url]);

    const changeVisibleHandler = () => {
        setIsOpen(true);
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (value) {
            setUrl(value);
            setIsOpen(false);
        } else {
            console.log('Введите URL');
        }
    }

    return (
        <>
            <div className="App">
                {isOpen ? <form onSubmit={onSubmit}><input type="text" value={value}
                                                           onChange={e => setValue(e.currentTarget.value)}/>
                        {/*<button onClick={addTableUrlHandler}>Добавить</button>*/}
                    </form> :
                    <button onClick={changeVisibleHandler}>Добавить таблицу</button>}
                {
                    response && <Table dataUrl={response}/>
                }
            </div>
        </>
    );
}

export default App;
