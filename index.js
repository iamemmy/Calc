let display = document.querySelector('.result');
        let buttons = document.querySelectorAll('button');
        // console.log(buttons);
        
        buttons.forEach( btn=> {
            btn.addEventListener('click', (e) => {
                // console.log(e);
                switch(e.target.innerText){
                    case 'AC':
                        display.innerText = '';
                        break;
                    case '=':
                        try{
                            display.innerText = eval(display.innerText);
                        } catch {
                            display.innerText = "Error"
                        }
                        break;
                    case 'DEL':
                        if (display.innerText){
                        display.innerText = display.innerText.slice(0, -1);
                        }
                        break;
                    default:
                        display.innerText += e.target.innerText;
                }
            })
        })
