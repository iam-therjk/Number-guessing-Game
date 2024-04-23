const max = prompt("Enter the maximum number") ;
const random = Math.floor(Math.random() * max) + 1 ;

let guess = prompt("Guess the number ") ;

while(true) {
    if(guess == "quit") {
        console.log("User quit") ;
        break ; 
    }

    if(guess == random) {
        console.log("congrats , you find it !" , random) ;
        break ;
    } else if(guess < random) {
        guess = prompt("you enter too small number , please try again") ;
    } else {
        guess = prompt("you enter too large number , please try again") ;
    }
}