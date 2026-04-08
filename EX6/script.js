function getRandomChars(min, max) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    const length = Math.floor(Math.random() * (max - min + 1)) + min;
    let result = "";
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    return result;
}

window.onload = function() {
    const container = document.getElementById("container");
    container.innerText = getRandomChars(0, 2);
};

window.addEventListener("keyup", function(e) {
    console.log(e.key);
    
    const container = document.getElementById("container");
    let currentText = container.innerText;

    if (e.key) {
        if (currentText.length > 0 && currentText[0] === e.key) {
            container.innerText = currentText.substring(1);
        }
    }

    add_new_chars();
});

function add_new_chars() {
    const container = document.getElementById("container");
    container.innerText += getRandomChars(1, 3);
}
