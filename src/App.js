import React from 'react';
import './App.css';
import BooksList from './components/BooksList'
import axios from 'axios'
import BookFilter from './components/BookFilter'
import AddBook from './components/AddBook'


class App extends React.Component {
  state={
    books:[]
  }


  componentDidMount(){
    axios.get(`http://localhost:8082/api/posts`)
    .then(response=>this.setState({books:response.data}))
  }

  filterBook =book =>{
    axios.post(`http://localhost:8082/api/posts`, book)
    .then(response => this.setState({books: [...this.state.books, response.data]}))

  }
  addBook=book=>{
    axios.post(`http://localhost:8082/api/posts`, book)
    .then(response => this.setState({books: [...this.state.books, response.data]}))
  }
  render() {
    return (
      <div className="App">
      <BookFilter filterBookFun={this.filterBook}/>
      <BooksList books={this.state.books}/>
      <AddBook addbookFunc={this.addBook}/>

      </div>
    );
  }
}

export default App;
