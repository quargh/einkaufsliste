import {useState, useEffect} from "react";
import StyledFlex from "./StyledFlex";
import StyledButton from "./StyledButton";

export default function Api({onFilterEvent, onInputEvent}) {
      //console.clear();


      const [filteredApiArray, setFilteredApiArray] = useState([]);

      function onFilterEvent(){

      }

      const [apiArray, setApiArray] = useState([]);
      const url = "https://fetch-me.vercel.app/api/shopping/items";
      //TODO is executed 2 times but should only execute once
      // Solution: StrictMode renders components twice (on dev but not production)

      useEffect(() => {

            //TODO promise returned from loadData is ignored
            loadData(url);
            console.log("start load data");
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

      // Lift state up
      function updateLocalDb(item) {
            console.log(item._id);
            //TODO: Why cant I use this below (line 51)?
            onInputEvent(item);
      }

      return (

          <StyledFlex>

                {apiArray.map((item) => {

                      return (

                          <StyledButton key={item._id}
                                        variant={"reset"}
                                        onClick={(event) => {
                                              //console.log(item.name.de)
                                              updateLocalDb(item);
                                        }}>
                                {item.name.de}
                          </StyledButton>

                      )

                })}

          </StyledFlex>

      );
}