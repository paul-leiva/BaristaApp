import React, {Component, useState} from "react";

const onNewDrink = () => {
    
};

const onCheckAnswer = () => {
  
};

const BaristaForm = () => {
    return(
        <div>
            <h2>Hi, I'd like to order a:</h2>

            <form>

            </form>
            <button type="button submit" onClick={onCheckAnswer}>
                Check Answer
            </button>
            <button type="new-drink-button" className="button newdrink" onClick={onNewDrink}>New Drink</button>
        </div>
    );
};

export default BaristaForm;