import axios from 'axios';
import {DataType} from '../components/Table/Table';

export const tableApi = {
    getTable(url:string){
        return axios.get<DataType[]>(url)
            .then(response => response.data);
    }
}