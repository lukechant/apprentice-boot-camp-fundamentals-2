function bowl(rolls) {
    let score = 0;
    for(let i = 0; i < rolls.length; i += 2){
        if(rolls[i] === 10){
            score += 10 + rolls[i + 2] + rolls[i + 3];
        } else if(rolls[i] + rolls[i + 1] === 10){
            score += 10 + rolls[i + 2];
        } else {
        score += rolls[i] + rolls[i + 1];
    }
    }
    return score;
}

module.exports = bowl;