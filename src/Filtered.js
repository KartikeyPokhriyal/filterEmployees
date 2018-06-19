import React from 'react';

function Filtered(props){

    const list = (
        <ol>
            {props.employees.filter((employee) => employee.name.startsWith(props.data)).map((employee) =>
                <li key={employee.id}>
                    <label> {employee.name}</label>
                </li>
            )}
        </ol>
    );

    return (
        <div>
            {list}

        </div>
    );
}

export default Filtered;
