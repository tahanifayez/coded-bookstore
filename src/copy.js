import products from "../products";
import App from "./Home";
const BookItems = (book) => {
  function App() {
    const productsList = products.map((book) => {
      return (
        <div>
          <h1>{book.name}</h1>
          <h4>{book.price}</h4>
          <img src={book.img} width={"200px"} />
        </div>
      );
    });
    return (
      <div className="App">
        <h1>Life..</h1>
        <h2>Reading a book adds another life to your life.</h2>
        <img src="https://cdn.al-ain.com/images/2019/3/20/153-041534-house-wisdom-scientific-intellectual-center_700x400.jpeg"></img>
        {productsList}
      </div>
    );
  }
};
export default App;
