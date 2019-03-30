import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.inputValue = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.inputValue.current;

    if (!value) return // blokowanie pustych wpisów
    this.props.setValue(value)

    this.inputValue.current.value = ''  // resetujemy input
  }

  render () {
      return (
          <form onSubmit={this.handleSubmit}>
            <input ref={this.inputValue}/>
            <input type='submit'/>
          </form>
      )
  }
}

export default Form;