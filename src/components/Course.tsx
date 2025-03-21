import {FC} from 'react';
import {ICourse} from "../../models/ICourse.ts";
import Module from "./Module.tsx";

interface ICourseProps {
    value: ICourse
}

const Course: FC<ICourseProps> = ({value}) => {
    const {title, monthDuration, hourDuration, modules} = value;
    return (
        <div>
            <h2>{title}</h2>
            <p>Duration: {monthDuration}</p>
            <p>Hours: {hourDuration}</p>
            <div>
                {modules.map((module, index) => <Module key={index} value={module}/>)}
            </div>
        </div>
    );
};

export default Course;