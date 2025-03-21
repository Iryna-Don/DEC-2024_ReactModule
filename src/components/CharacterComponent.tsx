import {FC} from 'react';
import {ISimpsonPerson} from "../data.ts";
import styles from './characterComponent.module.css';

interface ISimpsonPersonProp {
    value: ISimpsonPerson;
}

const CharacterComponent:FC<ISimpsonPersonProp> = ({value}) => {
    return (
        <div className={styles.characterCard}>
            <h2>{value.name} {value.surname}</h2>
            <p><b>Age:</b> {value.age}</p>
            <p><b>Info:</b> {value.info}</p>
            <img src={value.photo} alt={`${value.name} ${value.surname}`}/>
        </div>
    );
};

export default CharacterComponent;