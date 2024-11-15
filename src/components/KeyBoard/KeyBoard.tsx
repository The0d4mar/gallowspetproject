import { FC, useEffect, useState } from "react";
import classes from '../../styles/lightVersion/keyboard.module.css'
import KeyButton from "./KeyButton";

interface KeyBoardProps{
    chooseLetter (value: string): void;
    wrongBtn: string[];
    rightBtn: string[];
}

const KeyBoard: FC<KeyBoardProps> = ({ chooseLetter, wrongBtn, rightBtn }) => {
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));

    const clickLetter = (clikedLetter: string) => {
        chooseLetter(clikedLetter);
    };

    return (
        <div className={classes.keyboard}>
            {alphabet.map((letter, index) =>
                wrongBtn.includes(letter.toLocaleLowerCase())
                    ? <KeyButton letter={letter} key={index} onClicked={clickLetter} specialIndex={-1} />
                    : rightBtn.includes(letter.toLocaleLowerCase())
                        ? <KeyButton letter={letter} key={index} onClicked={clickLetter} specialIndex={1} />
                        : <KeyButton letter={letter} key={index} onClicked={clickLetter} specialIndex={0} />
            )}
        </div>
    );
};

export default KeyBoard;