// IF STATEMENT REVIEW
// Day of the Week: Prompt the user to enter a day of the week (e.g., "Monday") and say whether it's a weekday or the weekend.
let user1 = prompt("what's the day of the week?")
user = user.toLowerCase()
if (user === "saturday"||user === "sunday"){
  console.log("It's the weekend yay!!!")
}else{
console.log("It's a week-day,yay scholl!!!")
}


// Age Group Classifier: Prompt the user to enter their age and categorize them into different age groups (child, teen, adult, senior)
let age = prompt("what is your age?")
age = parent(age)

if(age < 0){
console.log("that's not an age")
}else if(age <= 12){
console.log("your a child")
}else if (age <= 18 ){
console.log("you are a teen")
}else{
console.log("Rip you lived a good life")
}



// WHILE LOOPS
// Print 1 to 5
let i = 1
while(i <= 5){
  console.log(i)
i++
}



// Print from a certain number to 1
let user = prompt ("Enter a Number")
user = parseInt(user)
while(user > 0){
  console.log(user)
  user--
}




// Summing up to 5
let sum = 0
let counter = 0
while(counter <= 5){
  sum = counter +sum
}
console.log("sum of 1-5")


// Using prompt
let msteryStudent ="zyarie"
let user2 = propmt("Enter a student's name").toLowerCase()
while(msteryStudent !== user2){
  user2 =prompt("try again, guess a different studnet")
}
  console.log("Good Job")




 