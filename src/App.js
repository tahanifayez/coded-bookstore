//import logo from "./logo.svg";
import "./App.css";
import BooksList from "./BooksList";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <BooksList></BooksList>
    </div>
  );
}

export default App;
