function processorder(){
    try{
        let price = Number(document.getElementById("price").value);
        let quantity = Number(document.getElementById("quantity").value);
        let dayNum = Number(document.getElementById("dayNum").value);
        if(isNaN(price) || isNaN(quantity) || isNaN(dayNum)){
            throw new Error("Invalid input: Please enter numeric values for price, quantity, and day number.");
        }
        if(dayNum < 1 || dayNum > 7){
            throw new Error("Invalid day number: Please enter a value between 1 and 7.");
        }
        switch(dayNum){
            case 1: dayNum = "Monday"; break;
            case 2: dayNum = "Tuesday"; break;
            case 3: dayNum = "Wednesday"; break;
            case 4: dayNum = "Thursday"; break;
            case 5: dayNum = "Friday"; break;
            case 6: dayNum = "Saturday"; break;
            case 7: dayNum = "Sunday"; break;
        }
        let total = 0;
        for(i=0; i<quantity;i++){
            total += price;
        }
        debugger;
        let discount=0;
        if(total>500){
            discount = total * 0.1;
        }else if(total>200){
            discount = total * 0.05;
        }
        let finalAmount = total - (total * discount);

        document.getElementById("result").innerHTML =
        `Order processed for ${quantity} items on ${dayNum}.<br>
        Total amount: $${total.toFixed(2)}<br>
        Discount applied: $${discount.toFixed(2)}<br>
        Final amount to pay: $${finalAmount.toFixed(2)}`;
    }catch(error){
        document.getElementById("result").innerHTML = `Error: ${error.message}`;
    }
}