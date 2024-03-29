import { Component } from '@angular/core';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
    productDetails: any = [
        { id: 1, productName: "T-shirt Contrast Pocket", productPrice: 30, productImage: "assets/img/shopping-cart/cart-1.jpg", quantity: 1, totalProductPrice: 30 },
        { id: 2, productName: "Diagonal Textured Shoes", productPrice: 32, productImage: "assets/img/shopping-cart/cart-2.jpg", quantity: 1, totalProductPrice: 32 },
        { id: 3, productName: "Basic Flowing Scarf", productPrice: 45, productImage: "assets/img/shopping-cart/cart-3.jpg", quantity: 1, totalProductPrice: 45 },
        { id: 4, productName: "Grey Bag", productPrice: 35, productImage: "assets/img/shopping-cart/cart-4.jpg", quantity: 1, totalProductPrice: 35 }
    ];

    productTotal: any = 0;

    ngOnInit() {
        var proQty = $('.pro-qty');
        proQty.prepend('<span class="fa fa-angle-up dec qtybtn"></span>');
        proQty.append('<span class="fa fa-angle-down inc qtybtn"></span>');
        proQty.on('click', '.qtybtn', function () {
            var $button = $(this);
            var oldValue: any = $button.parent().find('input').val();
            if ($button.hasClass('inc')) {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                // Don't allow decrementing below zero
                if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 0;
                }
            }
            $button.parent().find('input').val(newVal);
        });

        var proQty = $('.pro-qty-2');
        proQty.prepend('<span class="fa fa-angle-left dec qtybtn"></span>');
        proQty.append('<span class="fa fa-angle-right inc qtybtn"></span>');
        proQty.on('click', '.qtybtn', function () {
            var $button = $(this);
            var oldValue: any = $button.parent().find('input').val();
            if ($button.hasClass('inc')) {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                // Don't allow decrementing below zero
                if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 0;
                }
            }
            $button.parent().find('input').val(newVal);
        });
        this.updateTotalPrice();
    }

    updateTotalPrice(){
        this.productTotal = 0;
        this.productDetails.forEach((product:any) => {
            this.productTotal += product.totalProductPrice;
        });
    }
}
