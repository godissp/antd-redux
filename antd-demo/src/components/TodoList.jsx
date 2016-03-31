import React, { Component, PropTypes } from 'react';
import {Row, Col, Icon} from 'antd';
import Todo from './Todo';

const TodoList   = React.createClass({
  render() {
    return (
      <Row style={{marginTop:20}}>
        <Col span='6'>&nbsp;</Col>
        <Col span='8'>
          <ul>
            {this.props.todos.map((todo, index) =>
                <Todo {...todo}
                  key={index}
                  onClick={() => this.props.onTodoClick(index)} />
            )}
          </ul>
      </Col>
      </Row>
    )
  }
});

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
};
export default TodoList ;
