import { useState } from 'react';
import './App.css';
import EditPage from './Components/Edit/EditPage';
import Header from './Components/Header/Header';
import { useSelector } from 'react-redux';

function App() {
  //state dieu khien edit
  const [isEdit, setEdit] = useState(false)
  const pending = useSelector((state)=>state.user.pending);
  const error = useSelector((state)=>state.user.error);
  return (
    <div className="App">
      { isEdit ? <EditPage setEdit={setEdit} /> : <Header setEdit={setEdit}/>  }
      {pending && <p className='loading'>Loading...</p>}
      {!isEdit && error && (
        <p className="error">Error when fetching data from server!!!</p>
      )}
      
    </div>
  );
}

export default App;
