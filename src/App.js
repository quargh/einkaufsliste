import './App.css';



import GlobalStyle from "./GlobalStyle";
import Content from "./components/Content";

function App() {

      return (
          <div className="App">

                <>
                      <header className="App-header">Shopping List</header>
                      <GlobalStyle/>
                      <Content/>
                </>
          </div>
      );
}

export default App;
