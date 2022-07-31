import StyledFlex from "./StyledFlex";
import logo from "../logo.svg";
import StyledInput from "./StyledInput";
import {items} from "./Db.js"
import {useState} from "react";
import StyledButton from "./StyledButton";
import StyledText from "./StyledText";
import Api from "./Api"
import {search} from "fast-fuzzy";

export default function Content() {

      // Active shopping items ->
      const [DbArray, setDbArray] = useState([...items]);

      // Delete an item ->
      function handleDelete(itemToBeDeleted) {
            console.log(itemToBeDeleted._id)
            setDbArray(
                DbArray.filter((item) => {
                      return item._id !== itemToBeDeleted._id;
                })
            );
      }

      // api item clicked: Update DB with new item from api ->
      // TODO What happens if item already exists?
      function handleInputEvent(item) {
            console.log(item._id);
            setDbArray([item, ...DbArray]);
      }

      // process search input
      function handleSearchEvent(searchString) {
            console.clear();
            const searchResults = search(searchString, DbArray, {keySelector: (obj) => obj.name.de});
            searchResults.forEach((result) => {
                  console.log(searchString + " -> " + result.name.de);
            });
      }

      return (
          <div>

                <StyledFlex>

                      {DbArray.map((item) => {

                            return (
                                <StyledButton
                                    key={item._id}
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
                          id="textInput"
                          type="text"
                          data-js="searchInput"
                          className="searchField"
                          placeholder="Search..."
                          onChange={(event) => {
                                handleSearchEvent(event.target.value)
                          }}
                      />
                </form>
                <Api onInputEvent={handleInputEvent}/>
          </div>
      );
}