// 1. Create a javascript file

// 2. Use `document.querySelector('.blogPosts')` to create a variable called 
// `blogContainer`

// 3. Use `document.querySelectorAll('.blogArticle')` to create variable called 
// `myArticles`

// console.log each variable. How are they different? Try adding an additional
//  class of "currentBlog" to the elements using `classList.add`. Does it work? 
//  Why or why not? If not, what do you need to do to meet the requirement of 
//  adding a class?

//ONE   element 
const blogContainer = document.querySelector(".blogPosts")
//ONE OR MORE ELEMENTS
const myArticles = document.querySelectorAll(".blogArticle")

console.log(blogContainer)
console.log(myArticles)

blogContainer.classList.add("currentBlog")



console.log(blogContainer)
console.log(myArticles)
//console.log(currentBlog)

for (let i = 0; i < myArticles.length; i++) {
    myArticles[i].classList.add("stuff")
}

let lassie = {
    name: "Lassie",
    type: "dog",
    age: 9
}
lassie.age = 10
//dor notation
console.log("lassie updated value", lassie)
lassie.barksToday = 593
//bracket notation
console.log("lassie's breed", lassie["type"])
lassie["color"] = "brown and white"

let keyToLookUp = "type"
console.log("bracket varriable", lassie[keyToLookUp])

console.log("looping through lassie")

for (let foo in lassie) {
    console.log(`lassie's ${foo}:`, lassie[foo]);
}

//object values can be any data type

lassie.time = "3:15"
lassie.nicknames = ["lass", "pooch", "doggo"]

lassie.family = {owner: "Timmy", personWhoFeeds: "mom", humanWhoThrowsStick: "dad"}
console.log("lassie updated value", lassie)

for (let foo in lassie.family) {
    console.log(lassie.family[foo])
}
console.log(lassie.nicknames[2])

lassie.nicknames = {favNickname: "doggo", leastFav: "pooch", newestNick: "lass"}
console.log(lassie)

//  LIGHTENING EXERCISES BITCHES
// Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.

// Lightning Exercise 2: Output only Andy and Zoe in the console.


const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
console.log(nashvilleSoftwareSchool.instructors.partTime,
    nashvilleSoftwareSchool.instructors.fullTime)

console.log(nashvilleSoftwareSchool.instructors.fullTime[4], 
    nashvilleSoftwareSchool.instructors.partTime[0])


    const beatles = {
        albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", 
        "Revolver", "Magical Mystery Tour", "Something New"],
        history: {
            formed: 1960,
            disbanded: 1970
        },
        members: [
            {
                name: "George Harrison",
                birth: 1943,
                death: 2001
            },
            {
                name: "Paul McCartney",
                birth: 1942,
                death: null
            },
            {
                name: "John Lennon",
                birth: 1940,
                death: 1980
            },
            {
                name: "Ringo Starr",
                birth: 1940,
                death: null
            }
        ]
    }
    // Output the following value to the console.
    
    // Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. 
    //He contributed heavily to the Magical Myster Tour Album.

console.log(beatles.members[1].name, "was in the Beatles from", beatles.history.
formed, "to",beatles.history.disbanded, ". He was born in",beatles.members[1].
birth,". He contributed heavily to the ", beatles.albums[3], "album.")


// Lightning Exercises 1: Use dot notation to output all of the dimensions of the 
// Empire State Building to the console.

// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties 
// to the console. Create 5 variables first with the keys as their values. 
// Use those variables to look up the values.

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(empireStateBuilding)

console.log(empireStateBuilding)

//function practice

function sayHello() {
    console.log("Hello")
}
sayHello()

let result = sayHello()

console.log(result)

function sayHelloName() {
    return "Hello, Fred"
}
console.log(sayHelloName())

let greating = sayHelloName()

console.log(greating)

console.log(`when i see my friend, i say ${sayHelloName()}`)

console.log(`when i see my friend, i say ${greating}`)

function createMessage() {
    return`when i see my friend, i say ${sayHelloName()}`
}
createMessage()

//THE SINGLE RESPONSIBILITY THEORY????

function sayHellos(namess) {
    console.log(`Talk to me, ${namess}`)
}
sayHellos("jake")
sayHellos("sampson")
sayHellos("Milk Toast")
sayHellos(1997)

// Practice: ChickenMonkey
// Write a program that prints the numbers from 1 to 100. But for multiples of
// five (5, 10, 15, etc.) print "Chicken" instead of the number and for the 
//multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are 
//multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7, use the JavaScript 
//remainder operator.

// You can start with this simpler version that outputs even numbers to the 
//console and ignores odd numbers. You need to refactor this code to meet the 
//requirements above.
function chickenMonkey() {
for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("chickenMonkey") // Only 2, 4, 6 will appear
    }
    else if (currentNumber % 5 === 0 ) {
        console.log("chicken") // Only 2, 4, 6 will appear
    }
    else if (currentNumber % 7 === 0) {
        console.log("Monkey")
    }
    else {
        console.log(currentNumber)
    }
  }
}
chickenMonkey()
