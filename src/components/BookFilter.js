import React from 'react';

class BookFilter extends React.Component{

      state={

        search:''
      }

      handleSubmit = e=>{
        e.preventDefault()
        this.state.filterBookFunc(this.state)
      }


  render(){
    return(
      <div>
      <form  onSubmit={this.handleSubmit}>
      <input type ="text" onChange={e=>this.setState({term:e.target.value})} value={this.state.search}/>
      <button type="submit">Search</button>
      </form>
      </div>
    )
  }
}
export default BookFilter;
