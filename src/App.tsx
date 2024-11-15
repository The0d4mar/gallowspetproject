import React, { useEffect, useState } from 'react';
import { generate } from "random-words";
import WordPage from './components/WordPage/WordPage';
import KeyBoard from './components/KeyBoard/KeyBoard';
import Header from './components/Header/Header';

function App() {
  const [genereateWord, setGenerateWord] = useState<string>('');
  const [letter, setLetter] = useState<string>('');
  const [hardlevel, setHardLevel] = useState<number>(5);
  const [wrongkeyBtn, setWrongKeyBtn] = useState<string[]>([]);
  const [rightkeyBtn, setRightKeyBtn] = useState<string[]>([]);

  const chooseLetter = (chosenLetter: string) => {
    setLetter(chosenLetter.toLocaleLowerCase());
  };

  const startFunc = (level: number) => {
    setHardLevel(level);
    aWorld(); // Сгенерировать новое слово
    setWrongKeyBtn([]); // Сбросить неправильные буквы
    setRightKeyBtn([]); // Сбросить правильные буквы
};


  const addWrongBtn = (letter: string) => {
    setWrongKeyBtn((prev) => [...prev, letter.toLocaleLowerCase()]);
};

const addRightBtn = (letter: string) => {
    setRightKeyBtn((prev) => [...prev, letter.toLocaleLowerCase()]);
};


  const aWorld = () => {
    const word = generate({ minLength: hardlevel, maxLength: hardlevel});
    setGenerateWord(Array.isArray(word) ? word.join(', ') : word); // Преобразование массива в строку
  }

  return (
    <div className="App">
      <Header startFunc = {startFunc}/>
      {genereateWord != '' ? <WordPage inputWord={genereateWord} chosenLetter = {letter} addWrongBtn = {addWrongBtn} addRightBtn = {addRightBtn}/>: null}
      <KeyBoard chooseLetter={chooseLetter} wrongBtn = {wrongkeyBtn} rightBtn = {rightkeyBtn}/>
    </div>
  );
}

export default App;
