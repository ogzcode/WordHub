import { useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
    const [value, setValue] = useState("");

    const handleValueChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = () => {
        if (value !== "") {
            props.onClickForGetValue(value);
            setValue("");
        }
    };

    return (
        <div className='search__bar'>
            <input type="text" value={value} onChange={(e) => handleValueChange(e)} placeholder="Enter word..." />
            <button onClick={() => handleSubmit()}>Search</button>
        </div>
    );
}

export default SearchBar;