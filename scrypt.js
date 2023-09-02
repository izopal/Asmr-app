const alfaBeta = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯабвгґдеєжзиіїйклмнопрстуфхцчшщьюя1234567890-+*/%=_<>[]{}()|\,.;:'`~Ёё!?@#$&%^QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm "

function encryptText(text, key) {
    let encryptedText = "";

    for (let i = 0; i < text.length; i++){
        const textChar = text[i];
        const keyChar  = key[i % key.length];
        
    }
};
