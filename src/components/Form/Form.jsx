import { Component } from "react";
import { Label, Btn, Input, FormEl } from "./Form.styled";



class Form extends Component {
    state = {
        name: '',
        number: '',
    };

    reset() {
    this.setState({
      name: '',
      number: '',
    })
     }
    handleChange = ({ target: { value, name } })  => {
    this.setState({ [name]: value})
     }

 
    onSubmitForm = (e) => {
        e.preventDefault()
        const { name, number } = this.state;
        this.props.addContact(name, number)
        this.reset();
    }

    render() {
        return (
            <FormEl onSubmit={this.onSubmitForm}>
                <Label>  {"Name"}
                    <Input
                        onChange={this.handleChange}
                        type="text"
                        name="name"
                        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        value={this.state.name}
                        required>
                    </Input>
                </Label>
                <Label> {"Number"}
                    <Input
                        onChange={this.handleChange}
                        type="tel"
                        name="number"
                        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        value={this.state.number}
                        required>
                    </Input>
                </Label>
                <Btn type="submit" name="submit">Add contact</Btn>
            </FormEl>
        )
    }
}

export default Form;
