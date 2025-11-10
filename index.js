// variable to get values for the score cards
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homePoints = 0
let guestPoints = 0



function increment(team,points) {
    if(team == "home") {
        homePoints += points
        homeScore.textContent = homePoints
        commentary()
    } else if(team == "guest") {
        guestPoints += points
        guestScore.textContent = guestPoints
        commentary()
    }
}


// function for the commentary section
function commentary() {
    // varibale to get and display the commentary
    let commentary = document.getElementById("commentary")
    if(homePoints == 1 || homePoints == 2 || homePoints == 3) {
        commentary.textContent = "Home Team Scored Their First Points."
    } 
    else if(guestPoints == 1 || guestPoints == 2 || guestPoints == 3) {
        commentary.textContent = "Guest Team Scored Their First Point."
    }
    if(homePoints == 11 || guestPoints == 11) {
        commentary.textContent = "Half Of The Match Is Finished."
    }
    if(homePoints >= 21 && guestPoints < 21) {
        commentary.textContent = "Home Team Won The Match"
    }
    if(guestPoints >= 21 && homePoints < 21) {
        commentary.textContent = "Guest Team Won The Match"
    }
}