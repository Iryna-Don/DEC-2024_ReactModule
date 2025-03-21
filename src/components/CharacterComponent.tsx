import {FC} from 'react';
import {ISimpsonPerson} from "../data.ts";
import styles from './characterComponent.module.css';

interface ISimpsonPersonProp {
    value: ISimpsonPerson;
}

const CharacterComponent:FC<ISimpsonPersonProp> = ({value}) => {
    const {name, surname, age, info, photo} = value;
    return (
        <div className={styles.characterCard}>
            <h2>{name} {surname}</h2>
            <p><b>Age:</b> {age}</p>
            <p><b>Info:</b> {info}</p>
            <img src={photo} alt={`${name} ${surname}`}/>
        </div>
    );
};

export default CharacterComponent;