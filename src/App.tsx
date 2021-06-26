import React, {useEffect, useState} from 'react';
import './App.css';
import {DataType, Table} from './components/Table/Table';
import data from './data/data.json'

function App() {
    const [response, setData] = useState<DataType[] | null>(null);


    useEffect(() => {

        // @ts-ignore
        setData(data);

        // const response = fetch(`./data/data.json`);
        // response.then(dataJson =>  {
        //     debugger
        //     return dataJson.json()
        // } )
        //     .then(res => {
        //         debugger
        //         return setData(res)
        //     })
        //     .catch(err=> console.log(err));

    }, []);

    return (
        <>
            <div className="App">
                {
                    response && <Table dataUrl={response}/>
                }
            </div>
        </>
    );
}

export default App;
