import React from "react";

function Product(props) {
  return <div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">{props.data.productname}</a>
        </h4>
        <h5>${props.data.price}</h5>
        <p class="card-text">{props.data.description}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">★ ★ ★ ★ ☆</small>
        <button class="btn btn-warning" onClick={() =>
          props.handleAddtoCart(props.data)
        }>Add to Cart</button>
        {props.data.isDisabled}
      </div>
    </div>
  </div>

}

export default Product