import React, {useState} from 'react';
import './App.css';
import Message from './components/Message/Message';
import Table, {TablePropsType} from "./components/Table/Table";
import UploadCSV from './components/UploadCSV/UploadCSV';
import {validation} from "./utils/validation";

function App() {
  const [table, setTable] = useState<TablePropsType>({headers: [], data: []})
  const [error, setError] = useState('Select file')

  const handleSuccess = (data: any) => {
    setTable(data)
  }

  const onLoad = (data: Array<Array<string>>) => {
    const required = ['Full Name', 'Phone', 'Email']
    const unique = ['Phone', 'Email']
    validation(data, required, unique, setError, handleSuccess)
  }

  return (
      <div className="App">
        <UploadCSV onLoad={onLoad} onError={setError}/>
        {error && <Message message={error}/>}
        {!error
        && table
        && <Table headers={table.headers} data={table.data}/>
        }
      </div>
  );
}

export default App;
