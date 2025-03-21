import {FC} from 'react';
// interface Props {
//     value: string;
// }
// const Module:FC<Props> = ({value}) => {
// --------------------------------------- OR ----------------------------------------------
const Module:FC<{ value:string }> = ({value}) => {

    return (
        <div>
            <p>{value}</p>
        </div>
    );
};

export default Module;