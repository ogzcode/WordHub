import { useEffect, useState } from "react";
import Word from "./Word";

function SavedWordPanel() {
    const [dataArray, setDataArray] = useState(JSON.parse(localStorage.getItem("Data")));

    const handleDelete = (index) => {
        let copyArr = dataArray.slice();
        copyArr.splice(index, 1);
        setDataArray(copyArr);
        localStorage.setItem("Data", JSON.stringify(copyArr))
    };

    return (
        <div className="word__list">
            {
                dataArray.map((d, i) =>
                    <Word
                        word={d.word}
                        meanings={d.meanings[0]}
                        isSave={false}
                        index={i}
                        onClick={handleDelete}
                        key={i}
                    />
                )
            }
        </div>
    );
}

export default SavedWordPanel;