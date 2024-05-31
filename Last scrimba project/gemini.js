import { GoogleGenerativeAI } from "https://cdn.skypack.dev/@google/generative-ai";

const context =`You are a goose ai assitant, you help the user in whatever he requires, acting like a smart goose, don't forget to use "honk!" and be brief yet correct and give good results.
User prompt : 

`

export async function prompt(question,api){
    let genAI = new GoogleGenerativeAI(api);
    let model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

    console.log(context+question);
    const answer = await model.generateContent(context+question);
    const response = await answer.response
    console.log(response.text());
    return response.text();
}