import React from 'react';

const BookList=(props)=>{
  return(
<div>
<p>{props.book.title}</p>
<p ><img src={`${props.book.img_url}` } className="image"/></p>
<p><a href="#">Update</a></p>
<p><a href="#">Remove</a></p>
<form>
<button type="submit">Add To Cart</button>
</form>
</div>

  )
}

export default BookList;
