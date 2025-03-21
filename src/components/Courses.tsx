import {FC} from 'react';
import {coursesArray} from '../data.ts';
import Course from "./Course.tsx";
import styles from './courses.module.css';

const Courses: FC = () => {
    return (
        <div className={styles.coursesBlock}>
            {coursesArray.map((course, index) =><Course key={index} value={course}/>)
            }
        </div>
    );
};

export default Courses;