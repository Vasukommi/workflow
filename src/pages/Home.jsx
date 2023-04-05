import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService.js';
import { Button } from 'primereact/button';
import Header from '../components/header/Header.jsx';

const Home = () => {
    const [products, setProducts] = useState([]);
    const columns = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Owner' },
        { field: 'quantity', header: 'Last Updated' }
    ];

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    const onEdit = (rowData) => {
        console.log(`Editing row with code ${rowData.code}`);
    }

    const actionTemplate = (rowData) => {
        return (
            <Button style={{ background: 'none', color: '#6230A3', border: 'none'}} icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => onEdit(rowData)} />
        );
    }

    return (
        <>
            <Header />
            <div className="card">
                <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                    {columns.map((col, i) => (
                        <Column key={col.field} field={col.field} header={col.header} sortable={true} />
                    ))}
                    <Column body={actionTemplate} />
                </DataTable>
            </div>
        </>
    );
}

export default Home;