// variable to get values for the score cards
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homePoints = 0
let guestPoints = 0



function increment(team,points) {

    if(homePoints >= 21 || guestPoints >= 21) {
        points = 0
    }
    if(team == "home") {
        homePoints += points
        homeScore.textContent = homePoints
        commentary()
        
    }  
    if(team == "guest") {
        guestPoints += points
        guestScore.textContent = guestPoints
        commentary()
        
    } 
}


// function for the commentary section
function commentary() {
    // varibale to get and display the commentary
    let commentary = document.getElementById("commentary")
    if(homePoints == 1 && guestPoints == 0) {
        commentary.textContent = "Home Team Scoreed the first point."
    } else if(homePoints == 0 && guestPoints == 1) {
        commentary.textContent = "Guest Team scored the first point"
    }
    if((homePoints == 11 && guestPoints <= 11) || (homePoints <= 11 && guestPoints == 11)) {
        commentary.textContent = "Half of the match is finished."
    }
    if(homePoints >= 21 && guestPoints < 21) {
        commentary.textContent = "Home Team Won The Match"
    }
    if(guestPoints >= 21 && homePoints < 21) {
        commentary.textContent = "Guest Team Won The Match"
    }
}



// function to reset the scores
function reset() {
    // set the scores to zero
    if(homePoints >= 21 || guestPoints >= 21) {
         homePoints = 0
        guestPoints = 0
    }
    homeScore.textContent = homePoints
    guestScore.textContent = guestPoints
}


function cancelGame() {
    homePoints = 0
    guestPoints = 0
    homeScore.textContent = homePoints
    guestScore.textContent = guestPoints
}