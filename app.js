// 1. Days of the Week

// a. Create a variable called dayOfWeek assign it a value of the string ‘Monday’.

// b. Print this variable to the console

// c. On a following line, change the value of dayOfWeek so that it has the value ‘Friday’.

// d. Print the statement ‘I can’t wait for Friday!” using the dayOfWeek variable

// e. Put down a breakpoint on the first line of your code in the browser and run your code with the debugger. Use the Step Into button to go from line to line. Hover your mouse over the dayOfWeek variable every place it is used to see its current value change from Monday to Friday before it is printed.

function practiceOne() {
    let dayOfWeek = 'Monday'
    console.log(dayOfWeek)
    dayOfWeek = 'Friday'
    console.log("I cant wait for" + " " + dayOfWeek)
}

// practiceOne()

function practiceTwo() {
    let animalInput = prompt("What is your favorite animal?")
    let colorInput = prompt("What is your favorite color?")
    console.log ("I've never seen a" + " " + colorInput + " " + animalInput + "!")
}

// practiceTwo()

// Eggs and sausage, Pizza, Lasagna 

function practiceThree(){
        let timeOfDay = 1200
        mealChosen = ""
    if (timeOfDay < 1200){
        mealChosen = "Eggs and sausage"
        }
    if(timeOfDay >= 1200 && timeOfDay <= 1700){
        mealChosen = "Pizza"
        }
    if(timeOfDay > 1700){
        mealChosen = "Lasagna"
    }
    console.log(mealChosen)
}

// practiceThree()

function practiceFour() {
    let arrayOne = [0,1,2,3,4,5,6,7,8,9,10]
    let randomNumber = arrayOne[Math.floor(Math.random()*arrayOne.length)];
    console.log(randomNumber)
    if(randomNumber >= 0 && randomNumber <= 2){
        console.log("Beatles")
    }
    if(randomNumber >= 3 && randomNumber <= 5){
        console.log("Stones")
    }
    if(randomNumber >= 6 && randomNumber <= 8){
        console.log("Floyd")
    }
    if(randomNumber >= 9 && randomNumber <= 10){
        console.log("Hendrix")
    }
}

// practiceFour()

function practiceFive(){
    for(let i = 0; i < 7; i++){
        console.log("JavaScript is cool! " + (i+1))
    }
    for(let i = 0; i < 11; i++){
        console.log(i)
    }
    for(let i = 0; i < 10; i++){
        if((i % 2) == 0){
            console.log("hello")
        }
        if((i % 2) != 0){
            console.log("goodbye")
        }
    }
}

// practiceFive()

function printMovieName(){
    favoriteMovie = "Dude, Where's My Car?"
    console.log(favoriteMovie)
}

// printMovieName()

function favoriteBand(){
    bandInput = prompt("What is your favorite band?")
    console.log(bandInput)
    return(bandInput)
}

// favoriteBand()

function concertDisplay(musicalAct){
    myStreetInput = prompt("What street do you live on?")
    console.log("It would be great if " + musicalAct + " played on " + myStreetInput + "!")
}

// concertDisplay(favoriteBand())

function desktopDesk(){
    desktopItems = ["Desk", "Lamp", "Mouse", "Laptop"]
    console.log(desktopItems[1])
    desktopItems.push("Infinity Gauntlet")
    console.log(desktopItems[4])
    for(i = 0; i < desktopItems.length; i++)
        console.log(desktopItems[i])
}

// desktopDesk()

function magicNumberFunction(){
    let magicNumber = Math.floor(Math.random() * 100)
    guess = 0
    while(guess != magicNumber){
        guess = prompt("Guess my number between 1 and 100!")
        if(guess < magicNumber){
            console.log("Too low!")
            if(guess > (magicNumber-10)){
                console.log("Getting closer!")
            }
        }
        if(guess > magicNumber){
            console.log("Too high!")
            if(guess < (magicNumber+10)){
                console.log("Getting closer!")
            }
        }
        console.log(guess)
    }
    console.log("You guessed it!!")
}

magicNumberFunction()