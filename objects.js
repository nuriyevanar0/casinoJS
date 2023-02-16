//numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
//const prompt = require("prompt-sync")(); // nodejs

let bets = [ 
    {number: 0, color: 'sifir'},
    {number: 1, color: 'R'},
    {number: 2, color: 'B'},
    {number: 3, color: 'R'},
    {number: 4, color: 'B'},
    {number: 5, color: 'R'},
    {number: 6, color: 'B'},
    {number: 7, color: 'R'},
    {number: 8, color: 'B'},
    {number: 9, color: 'R'},
    {number: 10, color: 'B'},
    {number: 11, color: 'R'},
    {number: 12, color: 'B'},
    {number: 13, color: 'R'},
    {number: 14, color: 'B'},
    {number: 15, color: 'R'},
    {number: 16, color: 'B'},
    {number: 17, color: 'R'},
    {number: 18, color: 'B'},
    {number: 19, color: 'R'},
    {number: 20, color: 'B'},
    {number: 21, color: 'R'},
    {number: 22, color: 'B'},
    {number: 23, color: 'R'},
    {number: 24, color: 'B'},
    {number: 25, color: 'R'},
    {number: 26, color: 'B'},
    {number: 27, color: 'R'},
    {number: 28, color: 'B'},
    {number: 29, color: 'R'},
    {number: 30, color: 'B'},
    {number: 31, color: 'R'},
    {number: 32, color: 'B'},
    {number: 33, color: 'R'},
    {number: 34, color: 'B'},
    {number: 35, color: 'R'},
    {number: 36, color: 'B'}
]
//alert(list[1].date);
//console.log(bets[0].color)
//console.log(typeof(bets[0].number))


let userBalance = 100;
console.log("Hesabinizdaki Pul: " + userBalance);
let check = true;

//console.log(typeof(userInput)); // nodejs

let betType = prompt("Bet Novu: (N ve ya C) ");


function userBet() {

    switch(betType) {
        case 'N':
            while (check == true) {

                let userInput = Number(prompt("Reqem: "));
                //userInput = parseInt(userInput);
                let betMoney = Number(prompt("Bet Pulu: "));
                if (userBalance >= betMoney) {
                    console.log(userInput + " reqemine " + betMoney + " AZN qoydunuz!");
                    userBalance -= betMoney;
                    check == false;
                    let userBetArray = [userInput, betMoney];
                    return userBetArray;
                    
                } else if (userBalance < betMoney) {
                    console.log("Balansinizda bu qeder pul yoxdur!");
                    console.log("Hesabinizdaki Pul: " + userBalance);
                }
            }
            break;
        case 'C':
            while (check == true) {

                let userInput = prompt("Reng: ");
                let betMoney = Number(prompt("Bet Pulu: "));
                if (userBalance >= betMoney) {
                    console.log(userInput + " rengine " + betMoney + " AZN qoydunuz!");
                    userBalance -= betMoney;
                    check == false;
                    let userBetArray = [userInput, betMoney];
                    return userBetArray;
                    
                } else if (userBalance < betMoney) {
                    console.log("Balansinizda bu qeder pul yoxdur!");
                    console.log("Hesabinizdaki Pul: " + userBalance);
                }
            }
            break;
        default:
            console.log("SADECE N VE YA C YAZIN.")
            break;
    }
}

while (check == true) {
    const reqem = Math.floor(Math.random() * 37);
    //console.log(reqem);

    //console.log(userBet());
    let RuserBetArray = userBet();
    //console.log(RuserBetArray);
    
    if (betType == 'N') {

        let userInput = Number(RuserBetArray[0]);
        let betMoney = Number(RuserBetArray[1]);

        if (userInput == reqem) {
            console.log("HALALDI " + betMoney*36 +  " AZN UDDUNUZ!");
            userBalance += betMoney*36;
            console.log("Hesabinizdaki Pul: " + userBalance);
            //check = false;

        } else if (userInput != reqem) {
            console.log("TEESUFLER OLSUN UDUZDUNUZ...");
            console.log("Hesabinizdaki Pul: " + userBalance);
        }
    } else if (betType == 'C') {

        let userInput = RuserBetArray[0];
        let betMoney = Number(RuserBetArray[1]);

        if (userInput == bets[reqem].color) {
            console.log("HALALDI " + betMoney*2 +  " AZN UDDUNUZ!");
            userBalance += betMoney*2;
            console.log("Hesabinizdaki Pul: " + userBalance);
            //check = false;

        } else if (userInput != bets[reqem].color) {
            console.log("TEESUFLER OLSUN UDUZDUNUZ...");
            console.log("Hesabinizdaki Pul: " + userBalance);
        }

    }
}





