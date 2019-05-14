var moneydisplay = 0;
var money = 0;
var workers = 0;

// end of variables

// beginning of core code

function moneyClick(number) {
    money = money + number;
    document.getElementById("Money").innerHTML = money;
}
function hireworkers(){
    var workerCost = Math.floor(10 * Math.pow(1.1,workers));
    if(money >= workerCost){
        workers = workers + 1;
        cubes = cubes - workers
        document.getElementById('workers').innerHTML = workers
        document.getElementById('money').innerHTML = money
    }
    var nextCost = Math.floor(10 * Math.pow(1.1,workers));
    document.getElementById('moneyCost').innerHTML = nextCost
}


// stack overflow niceness
function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
// end of stack overflow niceness
//depression has comenessed 
setInterval(function(){

    moneyClick(workers/5)
    moneyDisplay = round(money, 0);

}, 200);
