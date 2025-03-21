import {FC} from "react";
import {simpsons} from '../data.ts';
import CharacterComponent from "./CharacterComponent.tsx";
import styles from './familyComponent.module.css';

const FamilyComponent:FC = () => {
    return (
        <div className={styles.familyContainer}>
            {simpsons.map((character, index)=><CharacterComponent key={index} value={character}>{character.info}</CharacterComponent>)}
        </div>
    );
};

export default FamilyComponent;