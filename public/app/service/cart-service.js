"use strict";

function CartService($http) {
    const self = this;
    self.getAllItems = () => {
        return $http({
            method: "GET",
            url: "/cart-items"
        });
    };
    self.addItem = (item) => {
        return $http({
            method: "POST",
            url: "/cart-items",
            data: item
        });
    };
    self.removeItem = (id) => {
        return $http({
            method: "DELETE",
            url: `/cart-items/${id}`
        });
    };
    self.updateItem = (item) => {
        return $http({
            method: "PUT",
            url: `/cart-items/${item.id}`,
            data: item
        });
    };
}

angular
    .module("ShoppingCart")
    .service("CartService", CartService);