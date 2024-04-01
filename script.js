const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
// it is a representation of an  html element by id

const btn = document.getElementById("search");

btn.addEventListener("click", () => {
  // it make the button clickable without  clicking the button what it inside the input field wont work
  let inpWord = document.getElementById("input").value;
  // the variable is just representing wat is going value
  fetch(`${url}${inpWord}`)
    // it is fetching the api and wat is inserted to the input field which is the value
    .then((response) => response.json())
    // response should in json format
    .then((data) => {
      // then it should be resave as data
      console.log(data);
      // string interpolation : is an expreesion inserted or placed in the string
      result.innerHTML = `
        <div class="word">
        <h3 class="visible">
            ${inpWord}
        </h3>  
    </div>


    <div class="info">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>${data[0].phonetic}</p>
    </div>

    <p class="word-meaning">
  
    ${data[0].meanings[0].definitions[0].definition}</p>
    </p>

    <p class="antonyms">
        Antonyms:  ${data[0].meanings[0].antonyms || ""}
    </p>
    <p class="synonyms">
      Synonyms:  ${data[0].meanings[0].synonyms || ""}
    </p>
    

    <p class="word-example">
        Example: ${data[0].meanings[0].definitions[0].example || ""}
    </p>`;
    })
    .catch(() => {
      result.innerHTML = `<h2 class="err">Could Not Find Your word </h2>`;
    });
});
