import React from "react";
import "./Search.css"
import {debounce} from "lodash"
export default function Search({Searchfn}) {

  const search=debounce((event)=>{
    Searchfn(event.target.value)
  },500)

  return (
    <div className="Search">
      <input placeholder='Search' type="search" onChange={search} />

    </div>
  );
}
