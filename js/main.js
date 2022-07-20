
let screen = document.getElementById('screen');
let buttons = Array.from(document.getElementsByClassName('num'))
buttons.map( (button) => {
    button.addEventListener('click', (elem) => {
        switch(elem.target.innerText){
            case 'AC':
                screen.innerText = '';
                break;
            case '=':
                screen.innerText = eval(screen.innerText)
                break;
            case '←':
                if (screen.innerText){
                    screen.innerText = screen.innerText.slice(0, -1);
                }
                break;
            case '%':
                screen.innerText = Number(screen.innerText)/100

                break;
            case '+/-':
                screen.innerText =  -(Number(screen.innerText))
                break;
            default:
                screen.innerText += elem.target.innerText;
        }
    });
});