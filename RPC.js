// let h = document.getElementById("my")
// console.dir(h);

// let div = document.getElementsByClassName("info");
// console.dir(div);

// let p = document.getElementsByTagName("h2");
// console.dir(p);
// console.log(p);

// let newbtn = document.createElement("button");
// newbtn.innerText = "click me";
// newbtn.style.backgroundColor ="red";
// newbtn.style.color ="white";
// document.querySelector("body").append(newbtn);

// let currmode = "light";



// newbtn.addEventListener("click" ,() => {
//     if(currmode === "light"){
//         currmode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";

//     }
//     else{
//         currmode = "light";
//         document.querySelector("body").style.backgroundColor = "white";

//     }
// })

let userScore = 0;
let compScore = 0;
document.getElementById("comp").innerHTML = compScore;
document.getElementById("user").innerHTML = userScore;


const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        const userChoice = box.getAttribute ("id");
        playGame(userChoice);
    });
});


const gencmp = () => {
    const options = ["rock","paper","scissors"];
    const index =   Math.floor(Math.random() * 3);
       return options[index];
}

const showWinner =(compWin, userChoice, compChoice) => {
    if(compWin){
        document.getElementById("move").innerHTML =  `You lose! ${compChoice} beats your ${userChoice}`;
        document.getElementById("move").style.backgroundColor = "red";
    }
    else{
        document.getElementById("move").innerHTML =  `You win! Your ${userChoice} beats ${compChoice}`;
        document.getElementById("move").style.backgroundColor = "green";
    }
}
const draw = () => {
    document.getElementById("move").innerHTML = "Game was Draw";
    document.getElementById("move").style.backgroundColor = "yellow";
    
}
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);

    const  compChoice = gencmp();
    console.log("computer choice = ", compChoice);

    let compWin = true;
    if(userChoice === compChoice){
        draw ();
    } else{
    
        if(userChoice === "rock" && compChoice === "paper"){
            compWin = true;
        }
        else if(userChoice === "paper" && compChoice === "scissors"){
            compWin= true;
        }
        else if(userChoice === "scissors" && compChoice === "rock"){
            compWin= true;
        }
        else{
            compWin = false;
        }
        showWinner(compWin, userChoice, compChoice);
        
    }

    if(compWin){
        compScore +=1;
        document.getElementById("comp").innerHTML = compScore;
    } else {
        userScore +=1;
        document.getElementById("user").innerHTML = userScore;
    }
};
