import "./Word.css";

function Word({ word, meanings, isSave = true, onClick , index = 0}) {
    let partOfSpeech = meanings.partOfSpeech;
    let definition = meanings.definitions[0].definition;
    let example = meanings.definitions[0].example;

    const handleClickIcon = () => {
        isSave ? onClick() : onClick(index); 
    };
    return (
        <div className='word__box'>
            <div className='word'>
                <div className='header'>
                    <p className='word__text'>{word}</p>
                    <button className="icon__btn" onClick={() => handleClickIcon()}>
                        {
                            isSave ? <i class="bi bi-save"></i> : <i class="bi bi-trash"></i>
                        }
                    </button>
                </div>
                <div className='type__box'>
                    <span className='type'>{partOfSpeech}</span>
                </div>
                <p className='definitions'>{definition}</p>
                {
                    example && <p className='example'>{example}</p>
                }
            </div>
        </div>
    );
}

export default Word;