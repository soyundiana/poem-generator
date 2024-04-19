function displayPoem (response) {
   new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true,
  delay: 5,
  cursor: ""
});
}


function generatePoem(event) {
    event.preventDefault();

    let requestInput = document.querySelector("#user-request");
    let apiKey = "3t6dd836d3b2360o01bbc44d5dfa374c";
    let prompt = `Generate an estonian poem about ${requestInput.value}`;
    let context = "You are a very intellegent AI that likes puns in Estonian poems. Please generate a 4 line poem in basic HTML and separate each line with a <br />. Make each line height 2. Do not exceed line height limit. Do not include title to the poem.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `Generating 🇪🇪 Estonian poem about <span class="loading">${requestInput.value}</span>`
    axios.get(apiURL).then(displayPoem);

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

