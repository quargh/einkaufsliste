import StyledInput from "./StyledInput";

export default function InputConverted({onHandleSearchEvent}) {
      return (
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
                          onHandleSearchEvent(event.target.value)
                    }}
                />
          </form>
      );
}