// L O G I C A L  O P E R A T O R S . . .

//  OR ||  ,   AND && . This are the logical operators and we can use it on a statements, for example 
// for a password, we want to include two conditions, minimun longer and the # simbol includes on the
// password, Lets go.

let pass='p#ss';
let pass2='password1234'
let pass3='p#ssword1234'
//  In this example if we use the first variable we're going to the else step, because the password is
// not longer available and dont includes the symbol '#'
if(pass.length>=12 && pass.includes('#')){
    console.log('The password is secure!');
}else{
    console.log('The password is not secure!')
}

// The same with the second, here we complete the first condition because the longer are equal ore more
// than 12, but dont includes the symbol.
if(pass2.length>=12 && pass2.includes('#')){
    console.log('The password is secure!');
}else{
    console.log('The password is not secure!')
}
// Sohere the two conditions are true so its enter on the if brackets.
if(pass3.length>=12 && pass3.includes('#')){
    console.log('The password is secure!');
}else{
    console.log('The password is not secure!')
}

// Lets see another example with the logical operator || (or) now its enter on the first validation 
// because one of the conditions are true

if(pass.length>=12 || pass.includes('#')){
    console.log('The password is secure!');
}else{
    console.log('The password is not secure!')
}
// If any condtion its true, goes to the else code.
if(pass.length>=12 || pass.includes('@')){
    console.log('The password is secure!');
}else{
    console.log('The password is not secure!') 
}

//  L O G I C A L  N O T 
let user = false;
// I f we want to evaluate a condition if its false the only thing we have to push its an exclmation
// in front
if(!user){
    console.log('You must to logged in');
}
// But when we put an exlamation in front of a boolean true or false the exlamation its change from true
// to false and from false to true. 

console.log(!true);
console.log(!false);

// B R E A K  &  C O N T I N U E



const score =[43, 72, 23, 0, 120, 150, 45, 78, 9, 113 ];
// Here we have a simple for loop iterating allthe array. 
for (let i = 0; i < score.length; i++) {
    console.log(score[i]);
}
// But imagin this is a counter of puntuation of a game and you want to stop it when  arrives to the 
// highest score and then dont show any thing more. When you put a break you finish inmediatly the loop

for(let i=0;i<score.length;i++){
    console.log("You're score is:", score[i])
    if(score[i]===150){
        console.log("Congrats the maximous puntuation!")
        break;
    }
}

// And what happens if you want to ignore some embarassing puntuation like a 0... You can with the 
// reserved word continue. Here we put a statement continue what is saying is ignore the resto of the 
// og this interation ans starts at the next variable. So you'll not see the next lines an its starts 
// with the loop again in th enext element.
for (let i = 0; i < score.length; i++) {
    if(score[i]===0){
        console.log("Nothing happens here...")
        continue;
    }
    console.log("You're score is:", score[i])
    
    if(score[i]===150){
        console.log("Congrats the maximous puntuation!")
        break;
    }
    
}
