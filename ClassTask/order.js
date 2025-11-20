function getDayName(dayNumber) {
    let dayName;
    
    switch(dayNumber) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            throw new Error("Invalid delivery day! Please select a day between 1 and 7.");
    }
    
    return dayName;
}
function calculateTotalPrice(price, quantity) {
    let totalPrice = 0;
    
    for(let i = 0; i < quantity; i++) {
        totalPrice += price;
    }
    
    return totalPrice;
}

function applyDiscount(totalAmount) {
    let discount = 0;
    let discountPercent = 0;
    
    if(totalAmount >= 2000) {
        discountPercent = 15;
        discount = totalAmount * 0.15;
    } else if(totalAmount >= 1000 && totalAmount < 2000) {
        discountPercent = 10;
        discount = totalAmount * 0.10;
    } else {
        discountPercent = 0;
        discount = 0;
    }
    
    return {
        discount: discount,
        discountPercent: discountPercent,
        finalAmount: totalAmount - discount
    };
}

function processOrder(priceInput, quantityInput, dayInput) {
    try {
        let price = Number(priceInput);
        let quantity = Number(quantityInput);
        let deliveryDay = Number(dayInput);
        
        if(isNaN(price) || price <= 0) {
            throw new Error("Price must be a valid positive number!");
        }
        
        if(isNaN(quantity) || quantity <= 0) {
            throw new Error("Quantity must be a valid positive number!");
        }
        
        if(isNaN(deliveryDay) || deliveryDay < 1 || deliveryDay > 7) {
            throw new Error("Delivery day must be between 1 and 7!");
        }
        let dayName = getDayName(deliveryDay);
        
        let totalPrice = calculateTotalPrice(price, quantity);
        
        debugger;
        
        let billDetails = applyDiscount(totalPrice);
        
        return {
            success: true,
            price: price,
            quantity: quantity,
            dayName: dayName,
            totalPrice: totalPrice,
            discount: billDetails.discount,
            discountPercent: billDetails.discountPercent,
            finalAmount: billDetails.finalAmount
        };
        
    } catch(error) {
        return {
            success: false,
            errorMessage: error.message
        };
    }
}

const orderForm = document.getElementById('orderForm');
const resultDiv = document.getElementById('result');

orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const priceInput = document.getElementById('productPrice').value;
    const quantityInput = document.getElementById('quantity').value;
    const dayInput = document.getElementById('deliveryDay').value;
    
    const result = processOrder(priceInput, quantityInput, dayInput);
    
    if(result.success) {
        resultDiv.innerHTML = `
            <div class="alert alert-success" role="alert">
                <h5 class="alert-heading">Order Processed Successfully!</h5>
                <hr>
                <p><strong>Product Price:</strong> ₹${result.price.toFixed(2)}</p>
                <p><strong>Quantity:</strong> ${result.quantity}</p>
                <p><strong>Subtotal:</strong> ₹${result.totalPrice.toFixed(2)}</p>
                <p><strong>Discount Applied:</strong> ${result.discountPercent}% (-₹${result.discount.toFixed(2)})</p>
                <p><strong>Delivery Day:</strong> ${result.dayName}</p>
                <hr>
                <h5><strong>Final Amount:</strong> ₹${result.finalAmount.toFixed(2)}</h5>
            </div>
        `;
    } else {
        resultDiv.innerHTML = `
            <div class="alert alert-danger" role="alert">
                <strong>Error!</strong> ${result.errorMessage}
            </div>
        `;
    }
});
