import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';

   const App = () => { 
     const [notes, setNotes] = useState([
       {
       id:nanoid(),
       text: 'This is my 1st note!!',
       date: '04/10/2022',
       },

       {
       id:nanoid(),
       text: 'This is my 2nd note!!',
       date: '05/10/2022',
       },

       {
       id:nanoid(),
       text: 'This is my 3rd note!!',
       date: '06/10/2022',
       },

       {
       id:nanoid(),
       text: 'This is my 4th note!!',
       date: '07/10/2022',
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
 