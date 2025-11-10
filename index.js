// variable to get values for the score cards
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homePoints = 0
let guestPoints = 0



function increment(team,points) {
    if(team == "home") {
        homePoints += points
        homeScore.textContent = homePoints
    } else if(team == "guest") {
        guestPoints += points
        guestScore.textContent = guestPoints
    }
}