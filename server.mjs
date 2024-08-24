import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the GoogleGenerativeAI with your API key
const genAI = new GoogleGenerativeAI({
  apiKey: "AIzaSyCJMbl0QIGiVSwc5lFK4d71vFo5vLZfAtE",
});

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

let textbar = document.querySelector("#textbar");
let resultDisplay = document.querySelector("#resultDisplay");

async function run() {
  try {
    // Retrieve the value from the text box
    const prompt = textbar.value;

    // Generate content using the model
    const generationResult = await model.generateContent({ prompt });

    // Access the response
    const text = generationResult.content;

    // Display the result in the paragraph
    resultDisplay.innerText = text;
    console.log(text);
  } catch (error) {
    console.error("Error generating content:", error);
    resultDisplay.innerText = "An error occurred. Please try again.";
  }
}

// Add event listener to the button
let getValueBtn = document.querySelector("#getValueBtn");
getValueBtn.addEventListener("click", run);
