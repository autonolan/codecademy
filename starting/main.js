const prompt = require('prompt-sync')({sigint: true});
const process = require('node:process');
const events = require('node:events');

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const directions = {
    left: -1,
    right: 1,
    up: -1,
    down: 1,
};
class Field {
    constructor(field_array) {
        this.field_array = field_array;
    }
    hatFound = false;
    inAHole = false;
    static generateField(height, width) {
        let fieldValue = ''
        let generatedField = [];
        let seedValues = [hole, fieldCharacter];
        for (let i = 0;i<height; i++) {
            generatedField[i] = []
            for (let j=0; j<width; j++) {
                fieldValue = seedValues[Math.floor((seedValues.length)*Math.random())];
                generatedField[i][j] = fieldValue;
            }
        }
        generatedField[0][0] = pathCharacter;
        generatedField[Math.floor((height-1)*(Math.random())+1)][Math.floor((width-1)*(Math.random())+1)] = hat;
        return generatedField
    }
    print() {
        for (let i = 0;i<this.field_array.length; i++) {
            console.log(`${this.field_array[i].join(' ')}\n`)
        }
    }
    update(row, col) {
        let validUpdate = true;
        if ((row >= this.field_array.length || col >= this.field_array[0].length) || row < 0 || col < 0) {
            validUpdate = false;
        } else if (this.field_array[row][col] === hat){
            this.hatFound = true;
        } else if (this.field_array[row][col] === hole) {
            this.inAHole = true;
        } else {
            this.field_array[row][col] = pathCharacter;
        }
        return validUpdate
    }
}
const col = prompt('Enter a field width or default to use default...');
const row = prompt('Enter a field height or default to use default...');
userGenField = Field.generateField(row, col);
const myField = new Field(userGenField);
let colCounter = 0;
let rowCounter = 0;
let userInput = '';
let continueGame = true;
//User input output
myField.print();
while (continueGame){
    const data = prompt('What direction do you want to move? (or quit/q to exit)');
    userInput = data.toString().trim().toLowerCase();
    if (userInput === "quit" || userInput === "q") {
        process.exit()
    }
    console.log(`You have chosen to move ${userInput}.`);
    if (userInput === "left" || userInput === "right") {
        colCounter += directions[userInput]
    } else {
        rowCounter += directions[userInput]
    }
    validUpdate = myField.update(rowCounter, colCounter)
    if (!validUpdate) {
        console.log("Out out bounds!")
        process.exit()
    } else if (myField.hatFound) {
        console.log("You found your hat! You win!")
        process.exit()
    } else if (myField.inAHole) {
        console.log("You fell in a hole! Womp Womp. Game Over!")
        process.exit()
    } else {
        myField.print()
    }
}
