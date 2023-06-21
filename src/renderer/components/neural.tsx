import React from 'react';

function EnActivate() {

    // Training data for logical AND function
    const trainingData: number[][] = [
        [0, 0],
        [1, 0],
        [0, 1],
        [1, 1],
    ];

    // Target labels for logical AND function
    const targetLabels: number[] = [0, 0, 0, 1];

    // Initialize the weights and bias
    let weights: number[] = [0, 0];
    let bias = 0;

    // Define the activation function (step function)
    function activationFunction(x: number): number {
        return x >= 0 ? 1 : 0;
    }

    // Define the perceptron algorithm
    function perceptron(inputs: number[]): number {
        // Compute the weighted sum of inputs
        const weightedSum: number = dotProduct(inputs, weights) + bias;

        // Apply the activation function
        const output: number = activationFunction(weightedSum);

        return output;
    }

    // Training the perceptron
    const learningRate = 0.1;
    const numEpochs = 10;

    for (let epoch = 0; epoch < numEpochs; epoch++) {
        for (let i = 0; i < trainingData.length; i++) {
            const inputs: number[] = trainingData[i];
            const target: number = targetLabels[i];

            // Compute the predicted output
            const prediction: number = perceptron(inputs);

            // Update the weights and bias based on the prediction error
            const error: number = target - prediction;
            weights = weights.map((w, j) => w + learningRate * error * inputs[j]);
            bias += learningRate * error;
        }
    }

    // Use the trained perceptron for prediction
    const testInput: number[] = [1, 1];
    const prediction: number = perceptron(testInput);
    console.log(prediction); // Output: 1

    // Helper function to compute the dot product of two arrays
    function dotProduct(a: number[], b: number[]): number {
        return a.reduce((sum, value, index) => sum + value * b[index], 0);
    }

}

const NeuralActivate: React.FC = () => {
    return (<div><button onClick={EnActivate}>Go Neural</button></div>)
}


export default NeuralActivate;