import React, { useState, useEffect } from "react";
import "./SearchComponent.css"

export interface SearchProps {
    fetchSearchResults: (debouncedQuery: string) => void
}

export const SearchComponent = (props: SearchProps) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);


  useEffect(() => {
    props.fetchSearchResults(debouncedQuery);
  }, [debouncedQuery]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-view-component"
      />
    </div>
  );
};
