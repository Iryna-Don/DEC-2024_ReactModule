import {FC} from 'react';
import {coursesArray} from '../data.ts';
import Course from "./Course.tsx";

const Courses: FC = () => {
    return (
        <div>
            {coursesArray.map((course, index) =><Course key={index} value={course}/>)
            }
        </div>
    );
};

export default Courses;