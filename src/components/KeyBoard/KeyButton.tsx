import { FC, useEffect, useState } from "react";
import classes from '../../styles/lightVersion/keyboard.module.css';

interface KeyButtonProps {
    letter: string;
    onClicked(value: string): void;
    specialIndex: number;
}

const KeyButton: FC<KeyButtonProps> = ({ letter, onClicked, specialIndex }) => {
    const [index, setIndex] = useState(specialIndex);

    useEffect(() => {
        setIndex(specialIndex);
    }, [specialIndex]);
    // Изменяем тип параметра 'clicked' на 'React.MouseEvent<HTMLButtonElement>'
    function clicked(event: React.MouseEvent<HTMLButtonElement>) {
        onClicked(letter); // передаем 'letter' при клике
        console.log(specialIndex)
    }

    return (
        index == -1?
        (<button className={classes.keyButtonWrong} onClick={clicked}>
            {letter}
        </button>) : 
        index == 1 ?(<button className={classes.keyButtonRignt} onClick={clicked}> {letter} </button>): 
        (<button className={classes.keyButton} onClick={clicked}>{letter} </button>)  
    );
}

export default KeyButton;
