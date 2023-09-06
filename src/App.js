import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AddTodo from './Components/AddTodo';
import AllTodos from './Components/AllTodos';

function App() {
  console.log(`${JSON.stringify(process.env)}`)
  return (
    <div className="">
      <Navbar />
      {/* <AddProducts /> */}
      <AddTodo />
      <AllTodos />
      <Footer />
    </div>
  );
}

export default App;
