import React from "react";

import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <>
      <h3>Your Order</h3>
      <p>Ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        Total: <strong>${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
    </>
  );
};

export default orderSummary;
