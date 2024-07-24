import React from 'react';
import './Todo.css';
import classNames from 'classnames';

const TodoFilter = ({ setCurrentFilter, currentFilter, filterMap }) => {
    const filterNames = Object.keys(filterMap);

    return (
        <div className="filter">
            {filterNames.map((filterName) => (
                <button
                    key={filterName}
                    onClick={() => setCurrentFilter(filterName)}
                    className={classNames({ current: currentFilter === filterName })}
                >
                    {filterName}
                </button>
            ))}
        </div>
    );
}

export default TodoFilter;