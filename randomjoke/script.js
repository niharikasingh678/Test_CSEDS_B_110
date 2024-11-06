document.addEventListener("DOMContentLoaded", () => {
    const jokeContainer = document.createElement("p");  
    jokeContainer.id = "joke"; 
    document.querySelector(".container1").appendChild(jokeContainer);

    const charCountContainer = document.createElement("span"); 
    charCountContainer.id = "charCount";
    document.querySelector(".container1").appendChild(charCountContainer);

    const jokeButton = document.getElementById("get");
    const clearButton = document.getElementById("clear");

    const getJoke = async () => {
        try {
            const response = await fetch("https://v2.jokeapi.dev/joke/Any");
            const data = await response.json();
            const joke = `${data.setup} ${data.punchline}`;
            jokeContainer.innerText = joke; 
            updateCharCount(joke.length);  
        } catch (error) {
            jokeContainer.innerText = "Cannot get a joke";
            updateCharCount(0);
        }
    };

    const updateCharCount = (count) => {
        charCountContainer.innerText = `Character Count: ${count}`;
    };

    jokeButton.addEventListener("click", getJoke);

    clearButton.addEventListener("click", () => {
        jokeContainer.innerText = "";
        updateCharCount(0); 
    });
});

