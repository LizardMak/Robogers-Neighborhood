Describe(ui)

Test: "It should prevent default"
Code: ui(e)
Expected Output: "default prevented!"

Test: "It should return userInput"
Code: const userInput = 3
Expected Output: 3

Test: "It should print results to page"
Code: const userInput = 3
Expected Output: 0, Beep!, Boop!, Won't you be my neighbor?

Describe(numberGenerator)

Test: "It should return array counting up to userInput"
Code: const userInput = 3
Expected Output: [0, 1, 2, 3]

Describe(beepBoopGenerator)

Test: "It should return array replacing numbers containing 1 with Beep!"
Code: const userInput = 3
Expected Output: [0, Beep!, 2, 3]

Test: "It should return array replacing numbers containing 1,2,3 with Beep!, Boop!, and Won't you be my neighbor? respectively, being prioritized in a hierarchy of 3>2>1."
Code: const userInput = 23
Expected Output: [0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?, Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Boop!, Boop!, Boop!, Won't you be my neighbor?]