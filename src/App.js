import logo from './logo.svg';
import './App.css';
import StyledButton from "./components/StyledButton";
import StyledInput from "./components/StyledInput";

function App() {
      return (
          <div className="App">
                <header className="App-header">
                      <img src={logo} className="App-logo" alt="logo"/>
                      <p>
                            What do you want to buy?
                      </p>
                      <form
                          className="inputBox"
                          aria-labelledby="user"
                          onSubmit={(event) => {
                                //handleSubmit(event);
                          }}
                      >
                            <StyledInput
                                /*onFocus={(event) => {
                                      clearOnFocus(event);
                                }}
                                onBlur={(event) => {
                                      insertOnBlur(event);
                                }}
                                 */
                                id="textInput"
                                type="text"
                                data-js="searchInput"
                                className="searchField"
                                placeholder="Search..."
                                //value={inputValue}
                                //onChange={handleInputValue}
                            />
                      </form>
                </header>
          </div>
      );
}

export default App;
