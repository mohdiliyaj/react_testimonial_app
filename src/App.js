import Cards from "./components/Cards";
import reviews from "./data"
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      {/* <div>
        <p>Our Testimonal</p>
      </div>
      <div></div> */}

      <Cards reviews={reviews}/>
    </div>
  );
}

export default App;
