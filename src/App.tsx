import './App.css';
import {coursesTitleArray} from './data.ts';
import Course from "./components/Course/Course.tsx";
import './App.css';

function App() {
    return (
        <ul className={'ulCoursesContainer'}>
            {
                coursesTitleArray.map((course, index) => <Course key={index} value={course}/>)
            }
        </ul>
    )
}

export default App
