import React, { FC, useEffect, useState } from "react";
import classes from '../../styles/lightVersion/hangman.module.css';

interface HangmanProps {
    mistakes: number; // количество ошибок
    maxMistakes: number; // максимум ошибок
}

const Hangman: FC<HangmanProps> = ({ mistakes, maxMistakes }) => {
    const hangmanStages = [
        // Стадии отрисовки виселицы
        <div key="base" className={classes.hangmanBase}></div>,  // Основание
        <div key="pole" className={classes.hangmanPole}></div>,  // Столб
        <div key="beam" className={classes.hangmanBeam}></div>,  // Перекладина
        <div key="rope" className={classes.hangmanRope}></div>,  // Веревка
        <div key="head" className={classes.hangmanHead}></div>,  // Голова
        <div key="body" className={classes.hangmanBody}></div>,  // Тело
        <div key="leftArm" className={classes.hangmanLeftArm}></div>,  // Левая рука
        <div key="rightArm" className={classes.hangmanRightArm}></div>,  // Правая рука
        <div key="leftLeg" className={classes.hangmanLeftLeg}></div>,  // Левая нога
        <div key="rightLeg" className={classes.hangmanRightLeg}></div>,  // Правая нога
    ];
    const currentStage = hangmanStages.slice(0, mistakes+4);

    return (
        <div className={classes.hangman}>
            {currentStage.map((stage) => stage)}
        </div>
    );
};

export default Hangman;
