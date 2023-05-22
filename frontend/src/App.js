import { useState } from 'react';
import './App.css';
import EditPage from './Components/Edit/EditPage';
import Header from './Components/Header/Header';
import { useSelector } from 'react-redux';
import Footer from './Components/Footer/Footer';
import MakePost from './Components/Post/MakePost';

// isOpenPost true thi render
function App() {
  //state dieu khien edit
  const [isEdit, setEdit] = useState(false);
  const [isOpenPost, setOpen] = useState(false);
  const pending = useSelector((state)=>state.user.pending);
  const error = useSelector((state)=>state.user.error);
  return (
    <div className="App">
      { isEdit ? <EditPage setEdit={setEdit} /> : <Header setEdit={setEdit}/>  }
      {pending && <p className='loading'>Loading...</p>}
      {!isEdit && error && (
        <p className="error">Error when fetching data from server!!!</p>
      )}
      <Footer isOpenPost={isOpenPost} setOpen={setOpen} />
      {isOpenPost && <MakePost setOpen={setOpen} />}
      
    </div>
  );
}

export default App;
