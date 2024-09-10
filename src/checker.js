export function checker(player, bot) {
    if(player === bot){
        return "drew"
    }else if(
        (player === "rock" && bot === "scissors") ||
        (player === "rock" && bot === "lizard") ||
        (player === "spock" && bot === "scissors") ||
        (player === "spock" && bot === "rock") ||
        (player === "lizard" && bot === "spock") ||
        (player === "lizard" && bot === "paper") ||
        (player === "scissors" && bot === "paper") ||
        (player === "scissors" && bot === "lizard") ||
        (player === "paper" && bot === "rock") ||
        (player === "paper" && bot === "spock") 
    ){
        return "win"
    }else {
        return "lose"
    }
}