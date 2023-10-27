# _{Mr. Roboger's Friendly Neighborhood}_

#### By _**{Hunter Empey}**_

#### _{An application that display a series of numbers and phrases based on input}_

## GitHub Pages Link
[GitHub Pages Deployment](https://lizardmak.github.io/Robogers-Neighborhood/)

## Technologies Used

* _HTML_
* _JavaScript_
* _CSS_
* _VSCode_

## Description

_{This application will display a series of numbers and phrases up to your input. Numbers containing the number 1 will return as 'Beep!', 2 as 'Boop!', 3 as 'Won't you be my neighbor?', 7 as 'Domo', 8 as 'Arigato', 9 as 'Mr. Roboger.' If a number contains multiple of these numbers it will pick one based on the hierarchal order of 3>2>1>7>8>9}_

## Setup/Installation Requirements

* _Ensure that both VSCode and Live Server Extension are installed_
* _Start blank project in VSCode_
* _Clone GitHub repo to VSCode using terminal_
* _Press 'go live' in the bottom right_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _None_

## License

Copyright (c) <2023> <Hunter Empey>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

_{If you run into any issues, questions, concerns, or have ideas, please contact me through my email LizardMak@gmail.com.}_

Copyright (c) _2023_ _Hunter Empey_







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

Test: "It should return array replacing numbers containing 7,8,9 with Domo, Arigato, Mr. Roboger, respectively, being placed after 3>2>1 in the hierarchy in an order of 7>8>9"
Code: const userInput = 9
Expected Output: [0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, Domo, Arigato, Mr. Roboger]