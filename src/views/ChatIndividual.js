import { returnHome } from "../components/ButtonHome.js";
import { footer } from "../components/Footer.js";
import data from '../data/dataset.js';
import { communicateWithOpenAI } from "../Lib/openAIApi.js";

export const chatIndividual = (film) => {
    const viewIndividual = document.createElement("secction");
    viewIndividual.id = "chat-individual";
    const findFil = data.find((filmId) => filmId.id === film.id)
    
    viewIndividual.innerHTML = `
    <div class="headerChat">
    <img src=${findFil.imageUrl} alt="${findFil.name}" class="imgChat">
    <h4>${findFil.name}</h4>
    </div>
    <div class="conversationChat"></div>
    <div class="chat-box">
    <input type="text" id="inputChat" placeholder="Escribe...">
    <button class="sendMes"><i class="fas fa-location-arrow"></i></button>
    </div>
    `
    viewIndividual.appendChild(returnHome());
    viewIndividual.appendChild(footer())

    const inputMessage = viewIndividual.querySelector("#inputChat");
    console.log("🚀 ~ chatIndividual ~ inputMessage:", inputMessage)
    const arrowButton = viewIndividual.querySelector(".sendMes");
    const continerChat = viewIndividual.querySelector(".conversationChat");

    arrowButton.addEventListener("click", function() {
        const contentInput = inputMessage.value;
        
        if(contentInput !== "") {
            const bubbleText = document.createElement("div");
            bubbleText.className = "bubbleSpace";
            bubbleText.innerHTML = contentInput;
            continerChat.appendChild(bubbleText);
            inputMessage.value = "";

            communicateWithOpenAI(contentInput, findFil.name)
            .then((response) => {
                return response.json()
            })

            .then((dataFech) => {
                const bubbleSystem = document.createElement("div");
                bubbleSystem.className = "bubbleSystem";
                bubbleSystem.innerHTML = `${dataFech.choices[0].message.content}`;
                continerChat.appendChild(bubbleSystem);
            })
        }
    });

    return viewIndividual;
};
