const inquirer = require('inquirer');

let playerHealth = 100;
let alienHealth = 27;

function healthCheck() {
    if (playerHealth <= 0) {
        console.log("oh no")
        console.log("--------------------------------")
        console.log('dude...')
        console.log('or dudet...or dudith')
        console.log('pronouns aside you died');
        process.exit();
    }
    if (alienHealth <= 0) {
        console.log('EARTH WARRIOR!!')
        console.log('You have defeated the valiant Alien Scum')
        console.log('CONGRATULATIONS YOU SHALL BE REWARDED WITH SO MUCH KLOUT')
        process.exit();
    }
    playGame();
}

function playGame() {
    function questionOne() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'directionGuess',
                message: 'Choose the right direction to fire at the alien [left, right, inFront, behind]!!',
                choices: ['left', 'right', 'inFront', 'behind']
            }
        ]).then(function (guess) {
            if (playerHealth > 0 && alienHealth > 0) {
                let attackDamage = Math.floor(Math.random() * 10) + 1;
                let alienChoices = ['left', 'right', 'inFront', 'behind'];
                let alienDirection = alienChoices[Math.floor(Math.random() * alienChoices.length)];
                console.log("...");
                console.log("...");
                console.log("Alien was " + alienDirection);
                if (alienDirection === guess.directionGuess) {
                    alienHealth -= attackDamage;
                    console.log('Way to follow your intuition you hit the alien square in the gullet. The hit takes ' + attackDamage + " hp, nice shot m8!");
                    console.log('You have ' + playerHealth + " hp left");
                    healthCheck();
                } else if (alienDirection !== guess.directionGuess) {
                    playerHealth -= attackDamage;
                    console.log('OH NOOOO M8, YOU MADE THE WRONG MOVE!')
                    console.log('The alien scum lacerates your flesh, knocking a whole ' + attackDamage + ' off your health.')
                    console.log(playerHealth + " hp remaining.")
                    healthCheck();
                }

            }
        }).then(function(){
            questionTwo()
        })
    }
    function questionTwo() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'weaponGuess',
                message: 'Choose the right weapon for the aliens weaknesss [gun, knife, grenade, laser]!!',
                choices: ['gun', 'knife', 'grenade', 'laser']
            }
        ]).then(function (guess) {
            if (playerHealth > 0 && alienHealth > 0) {
                let attackDamage = Math.floor(Math.random() * 10) + 1;
                let alienWeakness = ['gun', 'knife', 'grenade', 'laser'];
                let alienWeak = alienWeakness[Math.floor(Math.random() * alienWeakness.length)];
                console.log('This Aliens Weakness was ' + alienWeak);
                if (alienWeak === guess.weaponGuess) {
                    alienHealth -= attackDamage
                    console.log("The " + alienWeak + " was precisely the right instrument to destroy his plasmic composition it took " + attackDamage + "hp away!");
                    console.log("CONGRATS!! " + playerHealth + "hp points remaining, we might just defeat this scum after all!!")
                } else if (alienWeak !== guess.weaponGuess) {
                    playerHealth -= attackDamage
                    console.log('OH NOOOO M8, YOU MADE THE WRONG MOVE!')
                    console.log('The alien scum lacerates your flesh, you lose ' + attackDamage + 'hp off your health.')
                    console.log("Hang in there chap")

                }
            }
        })

    }
    questionOne();
}
playGame();