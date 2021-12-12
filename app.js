import inquirer from "inquirer"

import { initQuestions, gameQuestion, playAgainQuestion } from "./questions.js"
import { Planet_Teagardens_Star_B, Planet_Wolf_1061c as Planet_Wolf_1061c, Planet_TRAPPIST_1d as Planet_TRAPPIST_1d } from "./classes.js"





const playAgain = async () => {
  let response = await inquirer.prompt(playAgainQuestion)
   if (response.listQuestion === "Yes") {
    console.log("Fetching an egg from the cosmos......");
    console.log("image of space");
    myAlien.reset()
    init()
  } else {
    console.log("end game");
    console.log("pic of space");
  }
}



let gameOver = () => {
  sleep(3000)
  console.log(`R.I.P ${myAlien.name}`)
  myAlien.age = (Math.round(myAlien.age))
  if (myAlien.age == 1) {
    console.log(`${myAlien.age} year old`)
  } else if (myAlien.Age > 1 || my.myAlien.age >= 2) {
    console.log(`${myAlien.age} years old`)
  }
  sleep(3000)
  console.log("👼")

 
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
    `${myAlien.name} | Hunger: ${myAlien.hunger} | Thirst: ${myAlien.thirst} | Energy: ${myAlien.energy} | Hygiene: ${myAlien.hygiene}| Happiness: ${myAlien.happiness} | Knowledge: ${myAlien.knowledge}`
  )




  gameLoop()
}

const gameLoop = async () => {
  try {
    if ((myAlien.hunger >= 100 || myAlien.health <= 0) ||   myAlien.thirst >= 100) {
      console.log("you've overfed your pet")
      await sleep(2000);
      gameOver()
      //return
    // }else if ((myAlien.energy <= 30)){
    //   console.log("Kkkkkkgggggggggggppppssssjjeeeewwwwwww")
    //   console.log("What's that sound!?")
    //   console.log("Warning:")
    //   console.log(`${myAlien.name} is low on energy!`)

    
    }else {
      myAlien.time()
      myAlien.age += 0.2
      // imageOfPet()
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
        `${myAlien.name} | Hunger: ${myAlien.hunger} | Thirst: ${myAlien.thirst} | Energy: ${myAlien.energy} | Hygiene: ${myAlien.hygiene} | Happiness: ${myAlien.happiness} | Knowledge: ${myAlien.knowledge}`
      )
  
      gameLoop()
      
    }
  } catch (error) {
    console.log(error)
  }
}

init()

