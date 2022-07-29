import {useState, useEffect} from "react";
import StyledFlex from "./StyledFlex";
import StyledButton from "./StyledButton";
import {nanoid} from 'nanoid';
import {items} from "./Db.js"

export default function Api() {
      console.clear();
      const [apiItems, setApiItems] = useState([...items]);
      const url = "https://fetch-me.vercel.app/api/shopping/items";




      useEffect(() => {
            console.log("start load data");
            const fuck = loadData(url);
      }, [url]);


      async function loadData(mUrl) {
            console.log("func");
            try{
            const response = await fetch(mUrl);
            const data = await response.json();
            setApiItems(data.data);
            console.log(data.data);
            }catch(error){
                  console.log("an error has occurred");
            }

      }
      return(

                <StyledFlex>

                      {apiItems.map((item) => {

                            return (

                                <StyledButton key={item._id}
                                    variant={"reset"}
                                    onClick={(event) => {

                                    }}>
                                      {item.name.de}
                                </StyledButton>

                            )

                      })}

                </StyledFlex>
      );
}