import { Component } from "react";
import { nanoid } from "nanoid";
import Form from "./Form/Form";
import { Container } from "./Container/Container";
import { Contacts } from "./Contacts/Contacts";
import FilterInput from "./FilterInput/FilterInput";


class App extends Component {

  state = {
    contacts: [],
    filter: '',
  }
  
  componentDidMount() { 
    const localData = localStorage.getItem('contacts')
    if (localData && JSON.parse(localData).length > 0) {
      this.setState({contacts: JSON.parse(localData)})
    } else this.setState({contacts: []})
   }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }


  

  addContact = (name, number) => {
    if (this.state.contacts.find(el => el.name === name)) {
      return alert(`${name} is already in contact`)
    } 
    if (this.state.contacts.find(el => el.number === number)) {
      return alert(`${number} is already in contact`)
    }

     this.setState(prevState => ({ contacts: [{ id: nanoid(5), name: name, number: number }, ...prevState.contacts] }));
  }

  onFilterHandle = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value})
    
  }

  filterContacts() {
    const { contacts, filter } = this.state;
    return contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
  }


  deleteContact = (id) => {
    this.setState(prevState => { return { contacts: prevState.contacts.filter(el => el.id !==id)}})
  }

  render() {
    const filteredContacts = this.filterContacts();
    return ( 
      <Container>
        <h2>Phonebook</h2>
        <Form addContact={this.addContact}/>

        <FilterInput onChange={e => {this.onFilterHandle(e)}}></FilterInput>

        <Contacts contacts={filteredContacts} deleteContacts={this.deleteContact}></Contacts>

        </Container>
    )
  }

}

export default App