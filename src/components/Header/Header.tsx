import { FC, useState, useEffect } from "react";
import classes from '../../styles/lightVersion/header.module.css'
interface HeaderProps{
    startFunc (value: number): void
}

const Header:FC<HeaderProps> = ({startFunc}) =>{
    const [value, setValue] = useState<string>('5')

    const changeValue = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value)
    }

    const startHandler = () =>{
        startFunc(Number(value));
    }
    return(
        <div className={classes.headerBlock}>
            <h1 className={classes.headerTitleBlock}>
                Hangman Game
            </h1>
            <div className={classes.headerGameSettings}>
                <div className={classes.headerLevelChoose}>
                    <input type="range" min={5} max={20} value={value} onChange={changeValue}/>
                    <div className={classes.headerLevelNum}>
                        Level: <span className={classes.levelValue}>{value}</span>
                    </div>

                </div>
                    <button onClick={startHandler} className={classes.startGame}>Start</button>
            </div>

        </div>
    )
}

export default Header;