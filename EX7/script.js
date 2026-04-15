const displayArea = document.getElementById('display-area');
const messageArea = document.getElementById('message');

let consecutiveErrors = 0; 

function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

document.addEventListener('keydown', function(event) {
    let currentText = displayArea.textContent;
    let targetChar = currentText.charAt(0);
    let typedChar = event.key;

    if (typedChar.length !== 1 || !typedChar.match(/[a-z]/i)) return;

    if (typedChar.toLowerCase() === targetChar.toLowerCase()) {
        consecutiveErrors = 0; 
        messageArea.textContent = "正確";
        displayArea.textContent = currentText.substring(1); 
    } else {
        consecutiveErrors++; 
        
        let penaltyString = generateRandomString(1); 
        
        if (consecutiveErrors >= 3) {
            messageArea.textContent = "連續錯誤 3 次額外增加 3 個字元";
            penaltyString += generateRandomString(3); 
            consecutiveErrors = 0; 
        } else {
            messageArea.textContent = `打錯了連續錯誤次數: ${consecutiveErrors}`;
        }

        displayArea.textContent = currentText + penaltyString; 
    }
});
