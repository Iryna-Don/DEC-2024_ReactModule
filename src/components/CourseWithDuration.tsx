import {ICourseAndDuration} from '../data.ts';
import {FC} from "react";

const CourseWithDuration: FC<ICourseAndDuration> = ({title, monthDuration}) => {
    return (
        <>
            <p>{title}</p>
            <p>{monthDuration}</p>
        </>
    );
};

export default CourseWithDuration;