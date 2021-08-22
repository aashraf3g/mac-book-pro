//reducePrice
function reducePrice(basePrice){

    const currentPrice = 0;
    basePrice.innerText = currentPrice;
}

//reduceTotal
function reduceTotal(total8Price){
    const total8PriceText = parseInt(total8Price.innerText);
    if(total8PriceText>=1399){
        let total8Amount = total8PriceText - 180;
    total8Price.innerText = total8Amount;
    }
}

//increasePrice
function increasePrice(memory16Cost){
    const memory16CostText =parseInt(memory16Cost.innerText);
    const memory16Price = 180;
    const memory16Total = memory16CostText + memory16Price;
    memory16Cost.innerText = memory16Total;
}
//increaseTotal
function increaseTotal(total16Price){
    const total16PriceText = parseInt(total16Price.innerText);
    const total16Amount = total16PriceText + 180;
    total16Price.innerText = total16Amount;
}

//512gb and delivery
function ssdDelibery(ssd){
    const total16PriceText = parseInt(ssd.innerText);
    const total16Amount = total16PriceText + 180;
    ssd.innerText = total16Amount;
}

function Total512gb(total16Price){
    const total16PriceText = parseInt(total16Price.innerText);
    const total16Amount = total16PriceText + 100;
    total16Price.innerText = total16Amount;
}

//delivery function
function increaseDelivery(totalPrice){
    const totalPriceText = parseInt(totalPrice.innerText);
    const totalAmount = totalPriceText + 20;
    totalPrice.innerText = totalAmount;
}

function ssd256(total8Price){
    const total8PriceText = parseInt(total8Price.innerText);
    if(total8PriceText>=1399){
        let total8Amount = total8PriceText - 180;
    total8Price.innerText = total8Amount;
    }
}

function reduce(totalPrice){
    const totalPriceText = parseInt(totalPrice.innerText);
    if(totalPriceText>=1299){
        let totalAmount = totalPriceText - 20;
    totalPrice.innerText = totalAmount;
    }
}



//memory part start

//8gb memory price
document.getElementById('8gb-btn').addEventListener('click',function(){
    const memory8Cost = document.getElementById('extra-memory-cost');
    reducePrice(memory8Cost);

    //update total
    const total8Price = document.getElementById('total-price')
    reduceTotal(total8Price);
    const totalSecond8Price = document.getElementById('total')
    reduceTotal(totalSecond8Price);
})


//16gb memory price
document.getElementById('16gb-btn').addEventListener('click',function(){
    const  memory16Cost = document.getElementById('extra-memory-cost');
    increasePrice(memory16Cost)

    //update total
    const total16Price = document.getElementById('total-price')
    increaseTotal(total16Price)
    const totalSecond16Price = document.getElementById('total')
    increaseTotal(totalSecond16Price)
})

//memory part end

//storage part start

//256gb storage ssd
document.getElementById('256gb').addEventListener('click',function(){
    const torage256Cost = document.getElementById('extra-storage-cost');
    reducePrice(torage256Cost);

    //update total
    const totalPrice = document.getElementById('total-price')
    ssd256(totalPrice);
    const totalSecondPrice = document.getElementById('total')
    ssd256(totalSecondPrice);
})

//512  storage ssd
document.getElementById('512gb').addEventListener('click',function(){
    const  storage512Cost = document.getElementById('extra-storage-cost');
    ssdDelibery(storage512Cost)

    //update total
    const total512Price = document.getElementById('total-price')
    Total512gb(total512Price)
    const totalSecond512Price = document.getElementById('total')
    Total512gb(totalSecond512Price)
})

//1tb storage ssd
document.getElementById('1tb').addEventListener('click',function(){
    const  storage1TbCost = document.getElementById('extra-storage-cost');
    increasePrice(storage1TbCost)

    //update total
    const total1TbPrice = document.getElementById('total-price')
    increaseTotal(total1TbPrice)
    const totalSecond1TbPrice = document.getElementById('total')
    increaseTotal(totalSecond1TbPrice)
})


//delivery option
document.getElementById('delivery-free').addEventListener('click',function(){
    const torageCost = document.getElementById('delivery-charge');
    reducePrice(torageCost);

    //update total
    const totalPrice = document.getElementById('total-price')
    reduce(totalPrice);
    const totalSecondPrice = document.getElementById('total')
    reduce(totalSecondPrice);
})

document.getElementById('delivery-cost').addEventListener('click',function(){
    const totalCost = document.getElementById('delivery-charge');
    let totalCostTest = totalCost.innerText
    totalCostTest = 20;
    totalCost.innerText = totalCostTest; 

    //update total
    const totalPrice = document.getElementById('total-price')
    increaseDelivery(totalPrice)
    const totalSecondPrice = document.getElementById('total')
    increaseDelivery(totalSecondPrice)
})



// cupon
document.getElementById('apply').addEventListener('click',function(){

    const cuponField = document.getElementById('cupon');
    const inputCupon = cuponField.value;

    if(inputCupon == 'stevekaku'){
        const totalPrice = document.getElementById('total')
        const totalPriceText = parseInt(totalPrice.innerText)
        const cuponValue = totalPriceText * .20; //20% discount
        const totalDiscount = totalPriceText - cuponValue;
        totalPrice.innerText = totalDiscount;
    }
    else{
        alert('wrong')
    }
    cuponField.value = '';

})







