"use strict";

const express = require("express");
const cartItems = express.Router();

const items = [
    {
        id: 1,
        product: "Nintendo Switch",
        price: 299.00,
        quantity: 1
    },
    {
        id: 2,
        product: "Kingdom Hearts III (PS4)",
        price: 59.99,
        quantity: 1
    },    
    {
        id: 3,
        product: "Super Mario Party (Switch)",
        price: 56.95,
        quantity: 1
    },
    {
        id: 4,
        product: "Red Bull 24-pack, Green Edition",
        price: 54.04,
        quantity: 1
    }
];

cartItems.get("/cart-items", (req, res) => {
    res.json(items);
});

cartItems.post("/cart-items", (req, res) => {
    items.push(req.body);
    res.json(items);
});

cartItems.delete("/cart-items/:id", (req, res) => {
    items.splice((req.params.id - 1), 1);
    res.json(items);
});

cartItems.put("/cart-items/:id", (req, res) => {
    items[req.params.id - 1] = req.body;
    res.json(items);
});

module.exports = cartItems;