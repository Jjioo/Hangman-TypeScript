import readline from 'readline'
let rl = readline.createInterface({

    input : process.stdin,
    output : process.stdout
})

let words = ["banana","apple","duck"]
let word = words[Math.floor(Math.random()*words.length)]
let guess = "*".repeat(word.length);

console.log(guess);
let chances = 5


let game = (word:string,guess:string,chances:number)=>{
rl.question("enter your guess letter  :> ", user_input =>{
    if(!word.includes(user_input)){
        chances--
        console.log(chances);
        
   
    if(chances===0){
        console.log("you lose");
        rl.close()
        return
    }}

  
    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) === user_input) {
          guess = guess.substring(0, i) + user_input + guess.substring(i + 1);
          console.log(guess);
          if(guess===word){
            console.log("you win !");
            rl.close()
            return;
            
        }
        }       
      }
    game(word,guess,chances)
})
}
game(word,guess,5)