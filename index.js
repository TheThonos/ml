const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const learningRate = 1;
const bias = 1;

const weights = [Math.random(), Math.random()];

function trainPerceptron(input, expectedOutput){
	let output = 0;

	for(let i of input){
		for(let j of i){
			// Pixel at position x: j, y: i
			// j is an array, [r, g, b]
		}
	}
	
	let error = expectedOutput - output;
	weights[0] += error * input1 * learningRate;
	weights[1] += error * input2 * learningRate;
	console.log(weights);
}

for(let i = 0; i < 1; i++){
	fs.writeFileSync('shape.json', JSON.stringify(weights));
}
console.log(weights);

function perceptron(input1, input2){
	let output = input1 * weights[0] + input2 * weights[1];
	// if(output > 0) output = 1;
	// else output = 0;

	console.log(`${input1} times ${input2} equals ${output}`);

	userInput();
}

function userInput(){
	rl.question('First number: ', input1 => {
		rl.question('Second number: ', input2 => {
			perceptron(input1, input2);
		});
	});
}

userInput();