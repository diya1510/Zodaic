const zodiac = document.getElementById("zodiac");

const body = document.body;
const ChangeBackground=()=>{
    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor="#9BABB8";
            break;
        
        case "tarus":
            body.style.backgroundColor="#D7C0AE";
            break;

        case "gemini":
            body.style.backgroundColor="#B46060";
            break;

        case "cancer":
            body.style.backgroundColor="#4942E4";
            break;
    

        case "leo":
            body.style.backgroundColor="#F6FFA6";
            break;

        case "virgo":
            body.style.backgroundColor="#5C8984";
            break;

        case "libra":
            body.style.backgroundColor="#A2A378";
            break;
        
        case "scorpio":
            body.style.backgroundColor="#F79327";
            break;

        case "sagittarius":
            body.style.backgroundColor="#DDFFBB";
            break;

        case "aquarius":
            body.style.backgroundColor="#F4B183";
            break;

        case "capricon":
            body.style.backgroundColor="#FD841F";
            break;

        case "pisces":
            body.style.backgroundColor="#FFACAC";
            break;

        default:
            body.style.backgroundColor="white";
            break;
    }
};