import React, {useContext} from "react";
import PropTypes from "prop-types";
import Context from "../../context";

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem, 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem',
  },

  input: {
    marginRight: '1rem'
  },
}

function TodoItem(props) {
  const {removeTodo} = useContext(Context)
  console.log(props.todo);
  const classes = [];

  if (props.todo.completed) {
    classes.push('done')
  }
  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input
          style={styles.input}
          type="checkbox"
          checked={props.todo.completed}
          onChange={() => props.onChange(props.todo.id)}/>

        <strong>{props.index + 1}</strong>
        &nbsp;
        {props.todo.title}
       </span>
      <button className="button button__item" onClick={() => removeTodo(props.todo.id)}>&times;</button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}
export default TodoItem;


