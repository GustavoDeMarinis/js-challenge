import logo from "./logo.svg";
import "./App.css";

function App() {
  const coins = [5, 7, 1, 1, 2, 3, 22];

  const changeHandler = (change) => {
    const sortedChange = change.sort((a, b) => {
      return a - b;
    });
    let aux = 0;
    let counter = 0;
    sortedChange.map((coin) => {
      debugger;
      if (aux > 0 && aux !== counter + 1) {
        if (!coins.find((value) => value + aux === counter + 1)) {
          return aux;
        } else {
          counter++;
          aux += coin;
        }
      } else {
        counter++;
        aux += coin;
      }
    });
  };
  changeHandler(coins);
  return <div className="App"></div>;
}

export default App;
