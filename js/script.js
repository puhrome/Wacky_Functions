/**
 * Wacky Functions Created by puhrome on 5/29/14.
 */


//Using Else If Conditional Statement with at least 1 logical operator
/*var eggHatch = Number(prompt("Enter your age"));
alert("Please enter a valid age");
if (eggHatch >= 0 && eggHatch <= 20){
    console.log("Sorry guys, you're still an egg")
}else if ((eggHatch >= 0 && eggHatch <= 2)|| (eggHatch >= 21 && eggHatch <=23)){
    console.log("Welcome to the world, little chickadees!")
}
while (eggHatch >= 23){
    console.log("You're long overdue!");
    eggHatch--;
}*/

var eggHatch = function (age, maturity){
    var age = (prompt("Please enter how old the egg is"));
    alert ("Please enter a valid age of the egg");
    var maturity = 22;
    var babyChicks = age * maturity;
    return babyChicks;
}
console.log(eggHatch);
