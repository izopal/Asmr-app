const alfavit = "АБВГҐДЕЄЖЗИIiЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯабвгґдеєжзиїйклмнопрстуфхцчшщьюя1234567890-+*/%=_<>[]{}()|\,.;:'`~Ёё!?@#$&%^QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm ";

// фукція шифрування тексту методом, який називається "шифр Цезаря" або "зсувний шифр"
function encryptText(text, key) {
    
    let encryptedText = "";

    for (let i = 0; i < text.length; i++){
        const textChar  = text[i];                     //визначаємо позицію символа в тексті
        const keyChar   = key[i % key.length];      

        const textIndex = alfavit.indexOf(textChar);
        const keyIndex  = alfavit.indexOf(keyChar); 
        
        if(textIndex === -1){
            encryptedText  += textChar;
        }else{
            let newIndexs = (textIndex + keyIndex) % alfavit.length;
            encryptedText  += alfavit[newIndexs];
        }
    }
    return encryptedText;
};

//функція розшифрування тексту
function decryptText (text, key){

    let decryptedText = "";

    for (let i = 0; i < text.length; i++){
        const textChar  = text[i];                     //визначаємо позицію символа в тексті
        const keyChar   = key[i % key.length];      

        const textIndex  = alfavit.indexOf(textChar);
        const keyIndex   = alfavit.indexOf(keyChar); 
        
        if(textIndex  === -1){
            decryptedText += textChar;
        }else{
            let newIndexs = textIndex - keyIndex;
            if(newIndexs < 0) newIndexs  += alfavit.length;
            decryptedText += alfavit[newIndexs];
        }
    }
    return decryptedText;
}

// функція виведу тексту
function updateResultat(isEncrypting){
    const text    = document.getElementById('message').value;
    const key     = document.getElementById('key').value;
    const resultText  = document.getElementById('result');

    let result = "";
    result = isEncrypting ? encryptText(text, key) : decryptText(text, key);
   
    resultText.textContent = result;
}

// додаємо події на кнопки
const encBtn = document.getElementById('enc-btn');
const decBtn = document.getElementById('dec-btn');

encBtn.addEventListener('click', () => {updateResultat(true)});
decBtn.addEventListener('click', () => {updateResultat(false)});




