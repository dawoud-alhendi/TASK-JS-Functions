/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printName(){
    let name = "dawoud";
    console.log(name);
}
printName();


/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge (myBirth){
  
 let age = 2023 -1983;
 
 console.log(`i am ${age} years`);



    
}
printAge(1983);

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

function printHello (name , language){
    if (language === "en"){
        console.log(`hello ${name}`)

    }
    else if (language === "es"){
        console.log(`hola ${name}`)

    }
    else if (language === "fr"){
        console.log(`Bonjour ${name}`)

    }
    else if (language === "tr"){
        console.log(`Merhaba ${name}`)

    }




}
printHello("dawoud","en");
printHello("dawoud","es");
printHello("dawoud","fr");
printHello("dawoud","tr");




/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax (number1 , number2){
 if (number1 > number2){
    console.log(number1)

 }
 else if (number1 < number2){
    console.log(number2)

 }
}
printMax(8,13);