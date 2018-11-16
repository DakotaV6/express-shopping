"use strict";

function CartService($http) {
    const self = this;
    self.getAllItems = () => {
        return $http({
            method: "GET",
            url: "/cart-items"
        });
    };
    self.addItem = () => {
        return $http({
            method: "PUT",
            url: `/cart-items/:${XXXX}`,
            data:         
            {
            "id": XXXX,
            "product": XXXX,
            "price": XXXX,
            "quantity": XXXX
            }
        })
    }
}

angular
    .module("ShoppingCart")
    .service("CartService", CartService);