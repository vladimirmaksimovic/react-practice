import React from "react";

class Form extends React.Component {
  initialState = {
    name: "",
    job: "",
  };

  state = this.initialState;

  // handle change method
  handleChange = (event) => {
    // console.log(event)
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  // submit form method
  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    return (
      <form className='employee-form'>
        <h3>Add New Employee</h3>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor='job'>Job</label>
        <input
          type='text'
          name='job'
          id='job'
          value={this.state.job}
          onChange={this.handleChange}
        />
        <input type='button' value='Submit' onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
