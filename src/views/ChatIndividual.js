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
    <input type="text" class="inputChat" placeholder="Escribe...">
    <button class="sendMes"><i class="fas fa-location-arrow"></i></button>
    </div> `
    viewIndividual.appendChild(returnHome());
    
    const inputMessage = viewIndividual.querySelector(".inputChat");
    const arrowButton = viewIndividual.querySelector(".sendMes");
    const continerChat = viewIndividual.querySelector(".conversationChat");

    arrowButton.addEventListener("click", function() {
        const contentInput = inputMessage.value;
        
        if(contentInput !== "") {
            //Si contentInput no está vacío
            const bubbleText = document.createElement("div");
            bubbleText.className = "bubbleSpace bubble";
            bubbleText.innerHTML = contentInput;
            continerChat.appendChild(bubbleText);
            inputMessage.value = "";
            
            communicateWithOpenAI(contentInput, findFil.name)
            .then((response) => {
                return response;
            })

            .then((dataFech) => {
                const bubbleSystem = document.createElement("div");
                bubbleSystem.className = "bubbleSystem bubble";
                bubbleSystem.innerHTML = dataFech.choices[0].message.content;
                continerChat.appendChild(bubbleSystem);
            })
        }
    });
    viewIndividual.appendChild(footer());
    
    return viewIndividual;
};
