import React from 'react';
class AddBook extends React.Component{
  state={
    author:'',
    content:'',
    title:'',
    img_url:''
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addbookFunc(this.state)
  }
  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <p>
          Author:
          <input
            type="text"
            onChange={e => this.setState({ author: e.target.value})}
            value={this.state.author}
        /></p>
        <p>
          Content:
          <input
            type="text"
            onChange={e => this.setState({ content: e.target.value})}
            value={this.state.content}
        /></p>
        <p>
          Title:
          <input
            type="text"
            onChange={e => this.setState({ title: e.target.value})}
            value={this.state.title}
        /></p>
        <p>
          Image Url:
          <input
            type="text"
            onChange={e => this.setState({ img_url: e.target.value})}
            value={this.state.img_url}
        /></p>
        <button type="submit">Submit</button>
      </form>
      </div>
    )
  }
}
export default AddBook;
