"use strict";

const cartList = {
    templateUrl: "app/components/cart-list/cart-list.html",
    controller: ["CartService", function (CartService) {
        const vm = this;

        CartService.getAllItems().then((response) => {
            vm.cart = response.data;
        });
    }]
}

angular
    .module("ShoppingCart")
    .component("cartList", cartList);