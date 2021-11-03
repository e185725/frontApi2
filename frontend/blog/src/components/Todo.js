import React from 'react'
import PropTypes from 'prop-types';


const Todo = ({text}) => {
    return <li>{text}</li>
}

Todo.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Todo;

