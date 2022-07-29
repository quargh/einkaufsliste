import StyledFlex from "./StyledFlex";
import logo from "../logo.svg";
import StyledInput from "./StyledInput";
import {items} from "./Db.js"
import {useState} from "react";
import StyledButton from "./StyledButton";
import StyledText from "./StyledText";
import Api from "./Api"

export default function Content() {

      const [DbArray, setDbArray] = useState([...items]);

      // Delete a color ->
      function handleDelete(itemToBeDeleted) {
            console.log(itemToBeDeleted._id)
            setDbArray(
                DbArray.filter((item) => {
                      return item._id !== itemToBeDeleted._id;
                })
            );
      }


      return (
          <div>



                <StyledFlex>

                      {DbArray.map((item) => {

                            return (
                                <StyledButton
                                    variant={"save"}
                                    onClick={(event) => {
                                    handleDelete(item);
                                }}>
                                      {item.name.de}
                                </StyledButton>
                            )

                      })}

                </StyledFlex>
                <img src={logo} className="App-logo" alt="logo"/>
                <StyledText>What do you want to buy?</StyledText>

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

                <Api/>
          </div>
      );
}