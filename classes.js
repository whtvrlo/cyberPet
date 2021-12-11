class alien {
  constructor(name) { // set all to 100 when testing is done
    this.name = name
    this.hunger = 10
    this.thirst = 10
    this.happiness = 10
    this.energy = 10
    this.toilet = 10
    this.hygiene = 10
  }

  sleep() {
    this.energy -= 40
  }

  drink() {
    this.thirst -= 20
  }

  feed() {
    this.hunger -= 20
  }

  clean() {
    this.hygiene -= 40
  }

  time() {
    this.thirst += 5
    this.hunger += 5
    this.energy += 5
    this.hygiene += 5
  }
}

export class Planet_Teagardens_Star_B extends alien {
  constructor(name) {
    super(name)
    this.tigerHunt = 0
    this.tigerGroom = 0
    this.tigerPlay = 0
  }
}

export class Planet_Wolf_1061c extends alien {
  constructor(name) {
    super(name)
    this.seahorsecareOff = 0
    this.seahorseTrain = 0
    this.seahorseChill = 0
  }
}

export class Planet_TRAPPIST_1d extends alien {
  constructor(name) {
    super(name)
    this.slothScratch = 0
    this.slothPaddle = 0
    this.slothHang = 0
  }
}