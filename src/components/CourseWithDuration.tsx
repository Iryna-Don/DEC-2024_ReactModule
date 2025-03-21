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
interface CourseWithDurationProps {
    value: ICourseAndDuration;
}

const CourseWithDuration: FC<CourseWithDurationProps> = ({value}) => {
    return (
        <>
            <p>{value.title}</p>
            <p>{value.monthDuration}</p>
        </>
    );
};

export default CourseWithDuration;