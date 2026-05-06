import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { DataGrid } from '@material-ui/data-grid';


const MultiButton = () => {
  var output = [];
  output.push(
    <IconButton color="primary" aria-label="add to shopping cart" key="cart">
      <AddShoppingCartIcon />
    </IconButton>
  );
  output.push(
    <IconButton color="primary" aria-label="delete" key="delete">
      <DeleteIcon />
    </IconButton>
  );
  output.push(
    <IconButton color="primary" aria-label="add an alarm" key="alarm">
      <AlarmIcon />
    </IconButton>
  );
  return <div>{output}</div>;
};


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
  {
    field: 'fullName',
    headerName: 'Full name',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
];

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>ex#11 React + Material Kit</h2>
            <h3>Page 48 練習</h3>
      <MultiButton />
      
      <br /><br />

      <h3>Page 50 練習</h3>
      <div style={{ height: 400, width: '100%', backgroundColor: '#121212' }}>

        <DataGrid 
          rows={rows} 
          columns={columns} 
          pageSize={5} 
          checkboxSelection 
          style={{ color: 'white' }} 
        />
      </div>
    </div>
  );
}
