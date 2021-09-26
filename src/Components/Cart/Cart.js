import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {count} = props;
    console.log(props);

    let ShowTotal = 0;
    for (const total of count){
        ShowTotal = ShowTotal + total.income;
    }

    let ShowName = "";
    for (const names of count){
        ShowName = ShowName + " " + names.name ;
    }
    return (

        <div className="cart-container">
            <h4>Favourite Youtubers : {props.count.length}</h4>
            <h4>Total income : ${ShowTotal}</h4>
            <h5 className="name-feild">{ShowName}</h5>
        </div>
        
    );
};

export default Cart;