import { useState } from "react";
import axios from 'axios';
import SearchBar from './SearchBar';
import Word from "./Word.js";

function SearchWordPanel() {
    const [wordData, setWordData] = useState(null);

    const getWordDefinitions = async (value) => {
        await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`)
            .then(response => {
                setWordData(response.data[0]);
            })
            .catch(error => {
                console.log("error");
            })
    };

    const handleSearch = (value) => {
        getWordDefinitions(value);
    };

    const handleIcon = () => {
        let dataArray = JSON.parse(localStorage.getItem("Data")) || [];
        dataArray.push(wordData);
        localStorage.setItem("Data", JSON.stringify(dataArray));
    };

    return (
        <>
            <div className='search__container'>
                <SearchBar onClickForGetValue={handleSearch} />

            </div>
            {
                wordData &&
                <Word
                    word={wordData.word}
                    meanings={wordData.meanings[0]}
                    onClick={handleIcon}
                />
            }
        </>
    );
}

export default SearchWordPanel;