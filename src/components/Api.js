import {useState, useEffect} from "react";
import StyledFlex from "./StyledFlex";
import StyledButton from "./StyledButton";

export default function Api({searchFilter, onInputEvent}) {
      //console.clear();






      // Lift state up
      function updateLocalDb(item) {
            console.log(item._id);
            //TODO: Why cant I use this below (line 51)?
            onInputEvent(item);
      }

      return (

          <StyledFlex>

                {searchFilter.map((item) => {

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