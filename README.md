Describe(ui)

Test: "It should prevent default"
Code: ui(e)
Expected Output: "default prevented!"

Test: "It should return userInput"
Code: const userInput = 3
Expected Output: 3

Describe(numberGenerator)

Test: "It should return array counting up to userInput"
Code: const userInput = 3
Expected Output: [0, 1, 2, 3]

Describe(beepBoopGenerator)

Test: "It should return array replacing numbers containing 1 with Beep!"
Code: const userInput = 3
Expected Output: [0, Beep!, 2, 3]