export let initQuestions = [
    {
      type: "list",
      name: "type",
      message: "Which planet do you want your pet from?",
      choices: ["Planet_Teagardens_Star_B", "Planet_Wolf_1061c", "Planet_TRAPPIST_1d"],
    },
    {
      type: "input",
      name: "name",
      message: "Name:",
    },
  ]
  
  export let gameQuestion = [
    {
      type: "list",
      name: "action",
      message: "What do you want to do?",
      choices: ["feed", "drink", "clean", "sleep"],
    },
    
  ]

  export let playAgainQuestion = [
    {
      type: "list",
      name: "list question",          // "action",
      message: "Do you wish a new alien to be born.....?",
      choices: ["Yes", "No"],

    },
  ]