import StyledFlex from "./StyledFlex";
import logo from "../logo.svg";
import StyledInput from "./StyledInput";
import {items} from "./Db.js"
import {useState, useEffect} from "react";
import StyledButton from "./StyledButton";
import StyledText from "./StyledText";
import StyledInfoBox from "./StyledInfoBox";
import Api from "./Api"
import {search} from "fast-fuzzy";


export default function Content() {

      // Active shopping items ->
      const [DbArray, setDbArray] = useState([...items]);
      const inputField = document.querySelector('[data-js="searchInput"]');
      const nothingFound = document.querySelector('[data-js="nothingFound"]');


      // Api ---------------------------------------------------------------------->
      const [apiArray, setApiArray] = useState([]);
      const [searchFilterArray, setSearchFilterArray] = useState([]);
      const url = "https://fetch-me.vercel.app/api/shopping/items";


      useEffect(() => {
            //TODO is executed 2 times but should only execute once
            // Solution: StrictMode renders components twice (on dev but not production)
            loadData(url).then(r => console.log("data loaded"));

      }, [url]);

      async function loadData(mUrl) {
            //console.log("func");
            try {
                  const response = await fetch(mUrl);
                  const data = await response.json();
                  setApiArray(data.data);
                  console.log(data.data);

            } catch (error) {
                  console.log("an error has occurred");
            }
      }

      useEffect(() => {
            console.log(DbArray);
            if (inputField) {
                  console.log("DbArray.length after delete: " + DbArray.length)
                  //TODO Update results ---------------------->
                  //Warum funktioniert das nicht?
                  console.log("should handle search event: " + inputField.value);
                  handleSearchEvent(inputField.value);
            }
      }, [DbArray, inputField, handleSearchEvent])

      // End of Api ---------------------------------------------------------------//

      // Delete an item from DB ->
      function handleDelete(itemToBeDeleted) {
            console.clear();
            console.log(itemToBeDeleted._id)
            console.log("DbArray.length before delete: " + DbArray.length)
            setDbArray(
                DbArray.filter((item) => {
                      return item._id !== itemToBeDeleted._id;
                })
            );

            //-----------------------------------------//
      }

      // api item clicked: Update DB with new item from api ->
      function handleInputEvent(item) {
            console.log(item._id);
            setDbArray([item, ...DbArray]);

            //clear the search field
            inputField.value = "";
            handleSearchEvent("");

      }

      // process search input
      function handleSearchEvent(searchString) {
            //console.clear();
            const searchResults = search(searchString, apiArray, {keySelector: (obj) => obj.name.de});
            searchResults.forEach((result) => {
                  console.log(searchString + " -> " + result.name.de);
            });

            console.log("Debug:");
            console.log("searchString: " + searchString)
            console.log("DbArray.length: " + DbArray.length)
            console.log("searchResults.length: " + searchResults.length)
            console.log("End Debug:");

            const filteredResults = searchResults.filter(item => {
                  return !DbArray.filter((innerItem)=>{
                        return item._id === innerItem._id;
                  }).length
            });

            console.log("filteredResults.length: " + filteredResults.length)
            /*
            DbArray.forEach((item) => {
                  searchResults.filter((searchResult) => {
                        return !DbArray.includes(searchResult);
                  });
            });
            const filteredResults = searchResults;
            */

            /*
            const filteredResults = [];
            for (let i = 0; i < searchResults.length; i++) {
                  //console.log("### "+searchResults[i].name.de)
                  if (!DbArray.includes(searchResults[i])) {
                        filteredResults.push(searchResults[i])
                  }
            }
             */

            setSearchFilterArray(filteredResults);

            if (filteredResults.length === 0) {
                  //TODO show nothing found
                  console.log("nothing found");
                  nothingFound.style.display = "block";

            } else {
                  nothingFound.style.display = "none";
            }
      }


      return (
          <StyledFlex flexDirection="column" alignItems="center" gap="0px">

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
                {/* <img src={logo} className="App-logo" alt="logo"/> */}

                <StyledText>What do you want to buy?</StyledText>

                <form
                    autoComplete="off"
                    className="inputBox"
                    aria-labelledby="user"
                    onSubmit={(event) => {
                          //handleSubmit(event);
                    }}
                >
                      <StyledInput
                          autoComplete="off"
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
                <Api searchFilter={searchFilterArray} onInputEvent={handleInputEvent}/>
                <StyledInfoBox data-js="nothingFound">Nothing found!</StyledInfoBox>
          </StyledFlex>
      );
}