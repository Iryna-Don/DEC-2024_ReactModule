import {FC} from 'react';
import {ICourse} from "../../models/ICourse.ts";
import Module from "./Module.tsx";
import styles from './course.module.css';

interface ICourseProps {
    value: ICourse
}

const Course: FC<ICourseProps> = ({value}) => {
    const {title, monthDuration, hourDuration, modules} = value;
    return (
        <div className={styles.course}>
            <h2>{title}</h2>
            <h3>Duration: {monthDuration}</h3>
            <h3>Hours: {hourDuration}</h3>
            <div className={styles.modulesContainer}>
                {modules.map((module, index) => <Module key={index} value={module}/>)}
            </div>
        </div>
    );
};

export default Course;