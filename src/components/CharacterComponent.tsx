import {FC, ReactNode} from 'react';
import {ISimpsonPerson} from "../data.ts";
import styles from './characterComponent.module.css';

interface ISimpsonPersonProp {
    value: ISimpsonPerson;
    children: ReactNode;
}

const CharacterComponent:FC<ISimpsonPersonProp> = ({value, children}) => {
    const {name, surname, age, photo} = value;
    return (
        <div className={styles.characterCard}>
            <h2>{name} {surname}</h2>
            <p><b>Age:</b> {age}</p>
            <p><b>Info:</b> {children}</p>
            <img src={photo} alt={`${name} ${surname}`}/>
        </div>
    );
};

export default CharacterComponent;