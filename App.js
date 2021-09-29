var initialprice = document.querySelector("#initialprice")

var Quantityofstock = document.querySelector("#Quantity-of-stock")

var CurrentPrice = document.querySelector("#CurrentPrice")

var btnSubmit = document.querySelector(".btn-submit")

var OutputBox = document.querySelector("#outputbox")


btnSubmit.addEventListener("click", submitHandler);

function submitHandler() {
    var intprice = Number(initialprice.value);

    var qty = Number(Quantityofstock.value);

    var currprice = Number(CurrentPrice.value);

    CalculateProfiltandLoss(intprice, qty, currprice)

}



function CalculateProfiltandLoss(initial, quantity, current) {
    if (initial > current) {
        //loss logic

        var loss = (initial - current) * quantity;
        var losspercentage = (loss / initial) * 100;


        OutputBox.innerHTML = `Hi The loss is ${loss} and the Loss percentage is ${losspercentage}%`

    } else if (current > initial) {
        //profit logic

        var profit = (current - initial) * quantity;
        var profitpercentage = (profit / initial) * 100;

        OutputBox.innerHTML = `Hi The Profit is ${profit.toFixed(2)} and the Profit percentage is ${profitpercentage.toFixed(2)}%`
    } else {
        OutputBox.innerHTML = "No profit No loss";


    }


}