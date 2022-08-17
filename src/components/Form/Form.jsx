import React, { Component } from "react";
import s from "./Form.module.css";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInputChange = (e) => {
    this.setState({ name: e.currentTarget.value });
  };

  handleInputChangeNumber = (e) => {
    this.setState({ number: e.currentTarget.value });
  };

 
  handleSubmit = (e) => {
    e.preventDefault();
     const { name, number } = this.state;
    const contact = {
      id: nanoid(),
      name: name,
      number:number,
    };

    this.props.onSubmit(contact);

    this.resetForm();
  };
  resetForm = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor={this.id}>Name</label>
        </div>
        <div>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.id}
            value={name}
            onChange={this.handleInputChange}
          />
        </div>
        <br></br>
        <div>
          <label htmlFor={this.id}>Number</label>
        </div>
        <div>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.id}
            value={number}
            onChange={this.handleInputChangeNumber}
          />
        </div>
        <br></br>
        <div>
          <label>
            <button className={s.button} type="submit" >
              add Contact {}
            </button>
          </label>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;