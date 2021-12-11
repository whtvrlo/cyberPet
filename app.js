import inquirer from "inquirer"

import { initQuestions, gameQuestion, playAgainQuestion } from "./questions.js"
import { Planet_Teagardens_Star_B, Planet_Wolf_1061c as Planet_Wolf_1061c, Planet_TRAPPIST_1d as Planet_TRAPPIST_1d } from "./classes.js"




const playAgain = async () => {
  let response = await inquirer.prompt(playAgainQuestion)

  if (response.action === "Yes") {
  console.log("Fetching an egg from the cosmos......")
  console.log("image of space")
  // init()
  // gameLoop()
  } else {
    console.log("end game")
    console.log("pic of space")
  }
}

// const askPlayAgain = () => {
// let inquirer = require('inquirer');
// inquirer
// .prompt([
//   {
//     type: 'list',
//     name: 'list question',
//     message: 'Would you like an alien to be born?',
//     choices:['yes', 'no']
//   },
// ])
// .then(answers => {
//   console.log(answers)

// })
// }


let gameOver = () => {
  console.log(`${myAlien.name} RIP  `)
  sleep(3000)
  // console.log(`         ==
  // <^\()/^>
  //  \/  \/
  //   /  \
  //   `''``)

playAgain()
}


let myAlien
let ui = new inquirer.ui.BottomBar()

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const init = async () => {
  console.log("Fetching an egg from the cosmos......")
  sleep(5000)
  console.log("pic of space")
  sleep(3000);
  let response = await inquirer.prompt(initQuestions)

  if (response.type === "Planet_Teagardens_Star_B") {
    myAlien = new Planet_Teagardens_Star_B(response.name)
    // tigerGameLoop()
    // gameLoop([specific questions])
  } else if (response.type === "Planet_Wolf_1061c") {
    myAlien = new Planet_Wolf_1061c(response.name)
  } else {
    myAlien = new Planet_TRAPPIST_1d(response.name)
  }
  

  ui.log.write(
    `${myAlien.name} | Hunger: ${myAlien.hunger} | Thirst: ${myAlien.thirst} | Energy: ${myAlien.energy} | Hygiene: ${myAlien.hygiene}`
  )




  gameLoop()
}

const gameLoop = async () => {
  try {
    if (myAlien.health >= 100 || myAlien.health <= 0) {
      return
    } else if (myAlien.thirst <=0) {
      console.log("you've overfed your pet")
      await sleep(2000);
      myAlien.thirst += 20 // set to 100 when game is tested
      gameOver()
      
      

    }

    // myPet.time()

    let response = await inquirer.prompt(gameQuestion)

    if (response.action === "drink") {
      myAlien.drink()
    } else if (response.action === "feed") {
      myAlien.feed()
    } else if (response.action === "sleep") {
      myAlien.sleep()
    } else if (response.action === "clean") {
      myAlien.clean()
    }

    ui.log.write(
      `${myAlien.name} | Hunger: ${myAlien.hunger} | Thirst: ${myAlien.thirst} | Energy: ${myAlien.energy} | Hygiene: ${myAlien.hygiene}`
    )

    gameLoop()
  } catch (error) {
    console.log(error)
  }
}

init()
// askPlayAgain()
