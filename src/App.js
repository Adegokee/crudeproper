
import './App.css';
import Form from './components/Form';
import List from './List';
import GetContext from './ReviewContext';

function App() {
  return (
    <div className="App">
   <GetContext>
    <Form />
    <List/>
   </GetContext>
    </div>
  );
}

export default App;
