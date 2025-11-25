async function getMeaning() {
    const word = document.getElementById("wordInput").value.trim();
    const resultBox = document.getElementById("result");

    if (!word) {
        resultBox.innerText = "Please enter a word!";
        return;
    }

    resultBox.innerText = "Searching...";

    try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        
        if (!res.ok) {
            resultBox.innerText = "No meaning found!";
            return;
        }

        const data = await res.json();
        const meaning = data[0].meanings[0].definitions[0].definition;

        resultBox.innerText = meaning;

    } catch (error) {
        resultBox.innerText = "Error connecting to API!";
    }
}
