import React from 'react';
import BookList from './BookList'

const BooksList=(props)=>{
  let listOfBooks=props.books.map(book=>< BookList key={book.id} book={book}/>)
  return(
    <div >  { listOfBooks}

    <span className="addItems">Shopping Cart
    <img src="https://cdn4.iconfinder.com/data/icons/adiante-apps-app-templates-incos-in-grey/512/app_type_shop_512px_GREY.png" className="cart"/></span>

    </div>
  )
}

export default BooksList;
