import React, { ReactElement } from "react";
import { FormControl, InputGroup } from "react-bootstrap";

interface Props {
  onSearch: (searchTerm: string) => void;
}

const SearchBox = ({ onSearch }: Props): ReactElement => {
  return (
    <>
      <InputGroup className="my-3 px-3 w-70">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">
            <i className="fa fa-search" />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          onChange={event => onSearch(event.target.value)}
          placeholder="Search"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </>
  );
};
export default SearchBox;
