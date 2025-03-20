import {FC} from "react";
import styles from './course.module.css';
type Props = {
    value: string;
}

const Course: FC<Props> = ({value}) => {
    return (
        <li className={styles.nameOfCourse}>{value}</li>
    );
};

export default Course;