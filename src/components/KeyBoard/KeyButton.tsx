import React, { FC } from "react";
import classes from '../../styles/lightVersion/keyboard.module.css';

interface KeyButtonProps {
    letter: string;
    onClicked(value: string): void;
    specialIndex: number;
}

const KeyButton: FC<KeyButtonProps> = ({ letter, onClicked, specialIndex }) => {
    // Класс кнопки определяется только на основе пропсов
    const buttonClass =
        specialIndex === -1
            ? classes.keyButtonWrong
            : specialIndex === 1
            ? classes.keyButtonRignt
            : classes.keyButton;

    const clicked = () => {
        onClicked(letter); // Всегда вызываем onClicked при нажатии
    };

    return (
        <button className={buttonClass} onClick={clicked}>
            {letter}
        </button>
    );
};

export default KeyButton;

