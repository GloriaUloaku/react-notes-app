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

       {
       id:nanoid(),
       text: 'This is my 5th note!!',
       date: '30/05/2022',
       },
      
       {
       id:nanoid(),
       text: 'This is my 6th note!!',
       date: '31/05/2022',
       },

       {
       id:nanoid(),
       text: 'This is my 7th note!!',
       date: '01/06/2022',
       },

       {
       id:nanoid(),
       text: 'This is my 8th note!!',
       date: '2/06/2022',
       },

     ]);

     return (
        <div className='container'>
            <NotesList  notes={notes}/>
        </div>
     );
    
};
   
export default App;
 