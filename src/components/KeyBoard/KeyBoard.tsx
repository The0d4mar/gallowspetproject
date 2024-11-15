import React, { FC } from "react";
import classes from '../../styles/lightVersion/keyboard.module.css';
import KeyButton from "./KeyButton";

interface KeyBoardProps {
    chooseLetter(value: string): void;
    wrongBtn: string[];
    rightBtn: string[];
}

const KeyBoard: FC<KeyBoardProps> = ({ chooseLetter, wrongBtn, rightBtn }) => {
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));

    const clickLetter = (clickedLetter: string) => {
        chooseLetter(clickedLetter); // Вызываем обработчик из App
    };

    return (
        <div className={classes.keyboard}>
            {alphabet.map((letter, index) => {
                const isWrong = wrongBtn.includes(letter.toLowerCase());
                const isRight = rightBtn.includes(letter.toLowerCase());
                return (
                    <KeyButton
                        letter={letter}
                        key={index}
                        onClicked={clickLetter}
                        specialIndex={isWrong ? -1 : isRight ? 1 : 0}
                    />
                );
            })}
        </div>
    );
};

export default KeyBoard;
