import axios from 'axios';
import {TableType} from '../components/Table/TableRow';

export const tableApi = {
    getTable(url: string) {
        return axios.get<TableType[]>(url)
            .then(response => response.data);
    }
}