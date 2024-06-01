import {prompt} from "./gemini.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase ,ref,push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSettings={
    databaseURL:"https://goose-search-default-rtdb.europe-west1.firebasedatabase.app/"
}
const app = initializeApp(appSettings);
const database = getDatabase(app);
const promptsInDb = ref(database,"prompts");
const phrases =["Tpoac sucks","Hita is a city in japan","I eat potatoes","Chess gameplay","spoon feeding is bad"]
const inputEl = document.getElementById("input");
const apiEL = document.getElementById("api");
const buttonEl = document.getElementById("submit");
const answerEl = document.getElementById("answer-text");
let isProcessing = false; // Flag to check if a request is being processed
let apiKeyProcessed  = false;
var apikey ;
function handleRequest() {
    if (isProcessing || inputEl.value === ""||!apiKeyProcessed) {
        return;
    }
    isProcessing = true; // Set the flag when a request starts
    prompt(inputEl.value,apikey).then(response => {
        answerEl.textContent = response;
        push(promptsInDb,{
            prompt:inputEl.value,
            response:response
        });
        isProcessing = false; // Clear the flag when the request ends
    });
}
function randomPhrase(){
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}
inputEl.placeholder = randomPhrase();
buttonEl.addEventListener("click", handleRequest);


inputEl.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleRequest();
    }
});

apiEL.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        apikey=apiEL.value;
        event.preventDefault();
        console.log(apikey);
        apiEL.blur();
        apiEL.style.display = "none";
        apiKeyProcessed = true;
    }
})