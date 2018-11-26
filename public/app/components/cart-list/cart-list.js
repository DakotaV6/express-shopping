"use strict";

const cartList = {
    templateUrl: "app/components/cart-list/cart-list.html",
    controller: ["CartService", function (CartService) {
        const vm = this;

        function updateCart(result) {
            vm.cart = result.data;
          };

        CartService.getAllItems().then(updateCart);
        vm.removeItem = (id) => {
            CartService.removeItem(id).then(updateCart);
        };
        vm.addItem = (item) => {
            CartService.addItem(item).then(updateCart);
        };
        vm.updateQuantity = (item) => {
            CartService.updateItem(item).then(updateCart);
        };
    }]
}

angular
    .module("ShoppingCart")
    .component("cartList", cartList);