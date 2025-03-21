import {FC} from 'react';
import styles from './module.module.css'
// interface Props {
//     value: string;
// }
// const Module:FC<Props> = ({value}) => {
// --------------------------------------- OR ----------------------------------------------
const Module:FC<{ value:string }> = ({value}) => {

    return (
            <p className={styles.roundModule}>{value}</p>
    );
};

export default Module;