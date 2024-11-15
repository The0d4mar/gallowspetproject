import { FC, useState, useEffect } from "react";
import classes from '../../styles/lightVersion/wordPage.module.css';

interface WordPageProps {
    inputWord: string;
    chosenLetter: string;
    addWrongBtn(value: string): void 
    addRightBtn(value: string): void
}

const WordPage: FC<WordPageProps> = ({ inputWord, chosenLetter ='', addWrongBtn, addRightBtn}) => {
    const [word, setWord] = useState<string>(inputWord);
    const [inputLetter, setInputLetter] = useState<string>(chosenLetter);
    const [closedWordArray, setClosedWordArray] = useState<string[]>([]); // Храним состояние закрытого слова
    const [lifes, setLifes] = useState<any>(6)
    const [wrongLetter, setWrongLetter] = useState<string[]>([]);

    useEffect(() => {
        setWord(inputWord);
        setInputLetter(chosenLetter);
        
    }, [inputWord, chosenLetter]);

    useEffect(() => {
        // Вызываем findLetters при каждом изменении inputLetter или inputWord
        findLetters(inputLetter);
        
    }, [inputLetter, word]);

    useEffect(() =>{
        setWord(inputWord);
        setClosedWordArray(Array(inputWord.length).fill('*'));
        setLifes(6);
    }, [inputWord])


    const wordArray = word.split('');
    const wordArrayLength = wordArray.length;


    const findLetters = (inputLetter: string) => {
        if(wordArray.indexOf(inputLetter) == -1 && inputLetter != '' && lifes > 0){
            if(wrongLetter.indexOf(inputLetter) == -1){
            setLifes(lifes - 1);
            setWrongLetter([...wrongLetter, inputLetter]);
            addWrongBtn(inputLetter);
            }
        }
        if(wordArray.indexOf(inputLetter) != -1 && inputLetter != '' && lifes > 0){
            addRightBtn(inputLetter);
        }
        let updatedArray = wordArray.map(item =>
            item === ' ' ? ' ' : (item === inputLetter ? item : '*')
        );
        if(inputLetter != ''){
            for(let i = 0; i < wordArrayLength; i++){
                if(closedWordArray[i] != '*' && closedWordArray[i] != ' '){
                    updatedArray[i] = closedWordArray[i]
                }
            }
            if(updatedArray.indexOf('*') == -1){
                setLifes('Вы победили')
            }
        }


        setClosedWordArray(updatedArray); // Обновляем состояние закрытого слова
    };

    if(lifes <= 0){
        setLifes('Вы проиграли')
        setClosedWordArray(wordArray);
    }



    return (
        <div className={classes.wordBlock}>
            <div className={classes.word}>
                {closedWordArray.map((letter, index) =>
                    <div className={classes.letterBLock} key={index}>
                        <div className={classes.letter}>
                            {letter}
                        </div>
                        <div className={classes.letterUnderlining}>
                            {letter === ' ' ? ' ' : '_'}
                        </div>
                    </div>
                )}
            </div>
            <div className={classes.errorCount}>
                {lifes != 'Вы победили' && lifes != 'Вы проиграли' ? `Количество жизней: ${lifes}` : lifes}
            </div>
        </div>
    );
}

export default WordPage;
