import React, { useState, useEffect } from "react";
import "./SearchComponent.css"
import { debounce } from "../../../utils";

export interface SearchProps {
    fetchSearchResults: (debouncedQuery: string) => void
}

export const SearchComponent = (props: SearchProps) => {
  const [query, setQuery] = useState("");

  const debouncedSearchResults = React.useMemo(
    () => debounce(props.fetchSearchResults, 500),
    [props.fetchSearchResults]
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by Name"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          debouncedSearchResults(e.target.value);
        }}
        className="search-view-component"
      />
    </div>
  );
};
