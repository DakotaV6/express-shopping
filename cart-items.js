"use strict";

const express = require("express");
const cartItems = express.Router();
const pool = require("./pg-connection-pool.js");

cartItems.get("/cart-items", (req, res) => {
    pool.query("SELECT * FROM shoppingcart ORDER BY id").then((result) => {
        res.json(result.rows);
    });
});

cartItems.post("/cart-items", (req, res) => {
    pool.query("INSERT INTO shoppingcart(product, price, quantity) VALUES($1::text, $2::float, $3::int)", [req.body.product, req.body.price, req.body.quantity]).then(() => {
        pool.query("SELECT * FROM shoppingcart ORDER BY id").then((result) => {
        res.json(result.rows);
        });
    });
});

cartItems.delete("/cart-items/:id", (req, res) => {
    pool.query("DELETE FROM shoppingcart WHERE id=$1::int", [req.params.id]).then(() => {
        pool.query("SELECT * FROM shoppingcart ORDER BY id").then((result) => {
            res.json(result.rows);
        });
    });
});

cartItems.put("/cart-items/:id", (req, res) => {
    pool.query("UPDATE shoppingcart SET product=$1::text, price=$2::float, quantity=$3::int WHERE id=$4::int", [req.body.product, req.body.price, req.body.quantity, req.params.id]).then(() => {
        pool.query("SELECT * FROM shoppingcart ORDER BY id").then((result) => {
            res.json(result.rows);
        });
    });
});

module.exports = cartItems;