
const Calculator = {
  calculateBMI(weightKg, heightMeters) {
    if (weightKg <= 0 || heightMeters <= 0) {
      throw new Error("Weight and height must be positive numbers greater than zero.");
    }

    const bmiValue = weightKg / Math.pow(heightMeters, 2);

    return {
      value: Number(bmiValue.toFixed(1)),
      category: this.getBMICategory(bmiValue)
    };
  },

  getBMICategory(bmi) {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25.0) return "Normal weight";
    if (bmi < 30.0) return "Overweight";
    return "Obese";
  }
};

// --- Execution Logic ---
// process.argv[2] takes the 1st number after "node BMI.js"
// process.argv[3] takes the 2nd number after "node BMI.js"
const weight = Number(process.argv[2]);
const height = Number(process.argv[3]);

if (!weight || !height) {
  console.log("Please provide weight and height. Example: node BMI.js 70 1.75");
} else {
  try {
    const result = Calculator.calculateBMI(weight, height);
    console.log(`BMI: ${result.value}`);
    console.log(`Category: ${result.category}`);
  } catch (error) {
    console.error(error.message);
  }
}