import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';

   const App = () => { 
     const [notes, setNotes] = useState([
       {
       id:nanoid(),
       text: 'This is my 1st note!!',
       date: '26/05/2022',
       },

       {
       id:nanoid(),
       text: 'This is my 2nd note!!',
       date: '27/05/2022',
       },

       {
       id:nanoid(),
       text: 'This is my 3rd note!!',
       date: '28/05/2022',
       },

       {
       id:nanoid(),
       text: 'This is my 4th note!!',
       date: '29/05/2022',
       },

       

     ]);

     const addNote = (text) => {
       console.log(text);

     };

     return (
        <div className='container'>
            <NotesList  notes={notes} handleAddNote />
        </div>
     );
    
};
   
export default App;
 