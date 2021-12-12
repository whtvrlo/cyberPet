class alien {
  constructor(name) { // set all to 100 when testing is done,except age
    this.name = name
    this.hunger = 10
    this.thirst = 10
    this.happiness = 10
    this.energy = 10
    this.toilet = 10
    this.hygiene = 10
    this.age = 0 //
    this.knowledge = 0
  }

  sleep() {
    this.energy -= 10
    this.hygiene -= 30
    this.thirst -= 20
    this.hunger -= 40
    this.toilet -= 40
    this.happiness += 50


  }

  drink() {
    this.thirst += 20
  }

  feed() {
    this.hunger += 30
    this.energy += 10

  }

  clean() {
    this.hygiene += 40
    this.happiness -= 50
  }

  time() {
    this.thirst -= 5
    this.hunger -= 5
    this.energy -= 5
    this.hygiene -= 5
    this.happiness -= 5
  }

  teach() {
    this.knowledge += 1
    this.energy -= 20
    this.hunger += 30
    this.health += 40
  }

  play() {
    this.happiness += 20
    this.energy -= 20
    this.hunger =+ 25
    this.hygiene -= 25
    this.thirst -= 20
    this.toilet -= 40

  }

  reset() {
    this.hunger = 10
    this.thirst = 10
    this.happiness = 10
    this.energy = 10
    this.toilet = 10
    this.hygiene = 10
    this.age = 0 
  }

}

export class Planet_Teagardens_Star_B extends alien {
  constructor(name) {
    super(name)
    this.starGaze= 0
    this.etConnect = 0
  }

  starGaze() {
    this.happiness += 25
    this.energy -= 20
    this.hunger =+ 25
    this.hygiene -= 25
    this.thirst -= 20
    this.toilet -= 40

  }

}

export class Planet_Wolf_1061c extends alien {
  constructor(name) {
    super(name)
    this.teachEarthlingsThings = 0
    this.meditate = 0
  }
}

export class Planet_TRAPPIST_1d extends alien {
  constructor(name) {
    super(name)
    this.starGaze = 0
    this.tellStory = 0
    this.copyHumans = 0
  }

  starGaze() {
    this.happiness -= 30 // makes this alien 'homesick'
    this.energy -= 20
    this.hunger =+ 25
    this.hygiene -= 25
    this.thirst -= 20
    this.toilet -= 40

  }
}