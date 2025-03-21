import {coursesAndDurationArray} from './data.ts';
import './App.css'
import CourseWithDuration from "./components/CourseWithDuration.tsx";


function App()  {
    return (
        <>
            <div>
                {coursesAndDurationArray.map((course, index) => <CourseWithDuration key={index} title={course.title} monthDuration={course.monthDuration}/>)
                }        </div>

        </>
    )
}

export default App
