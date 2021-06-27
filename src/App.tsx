import React, {FormEvent, useEffect, useState} from 'react';
import './App.css';
import {Table, TableType} from './components/Table/Table';
import {tableApi} from './api/tableApi';

function App() {
    const [url, setUrl] = useState<string>('https://trycode.pw/c/29R5W.json');
    const [data, setData] = useState<TableType[]>([]);

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [value, setValue] = useState<string>('https://trycode.pw/c/76FXB.json');

    useEffect(() => {
        let dataTable = tableApi.getTable(url);
        dataTable
            .then(res => setData([...data, res]))
            .catch(err => console.log(err));
    }, [url]);

    const changeVisibleHandler = () => {
        setIsOpen(true);
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (value) {
            setUrl(value);
            setValue('https://trycode.pw/c/76FXB.json');
            setIsOpen(false);
        } else {
            console.log('Введите URL');
        }
    }

    return (
        <>
            <div className="App">
                {isOpen ?
                    <form onSubmit={onSubmit}><label htmlFor="url">Введите Url :</label><input id={'url'} type="text"
                                                                                               value={value}
                                                                                               onChange={e => setValue(e.currentTarget.value)}/>
                        {/*<button onClick={addTableUrlHandler}>Добавить</button>*/}
                    </form> :
                    <button onClick={changeVisibleHandler} className={'button'}>Добавить таблицу</button>}
                {
                    data.map((table, i) => <Table key={i} dataUrl={table}/>)
                }
            </div>
        </>
    );
}

export default App;
