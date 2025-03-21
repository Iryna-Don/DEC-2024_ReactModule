// import {ICourseAndDuration} from '../data.ts';
// import {FC} from "react";
//
// const CourseWithDuration: FC<ICourseAndDuration> = ({title, monthDuration}) => {
//     return (
//         <>
//             <p>{title}</p>
//             <p>{monthDuration}</p>
//         </>
//     );
// };
//
// export default CourseWithDuration;

import {ICourseAndDuration} from '../data.ts';
import {FC} from "react";
import styles from './courseAndDuration.module.css';

interface CourseWithDurationProps {
    value: ICourseAndDuration;
}

const CourseWithDuration: FC<CourseWithDurationProps> = ({value}) => {
    const {title, monthDuration} = value;
    return (
        <div className={styles.card}>
            <p>{title}</p>
            <p>{monthDuration} months</p>
        </div>
    );
};

export default CourseWithDuration;