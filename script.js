let yes = document.querySelector('.yes');
no = document.querySelector('.no');
body = document.querySelector('body')
count_no = 0

function remove() {
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
}

function Yes() {
    let text = document.createElement('h1')
    text.textContent = '¿En serio?'
    body.appendChild(text)
    setTimeout(function() {
        text.textContent = 'No me lo creo';
    }, 2000);
    setTimeout(function() {
        text.textContent = 'Yeyy'
        body.className = 'say_yes';;
    }, 5000);
    
}


function No() {
    count_no += 1;
    let specificChild = body.querySelector('h1');
    if (count_no == 1) {
        let specificChild = body.querySelector('h1');
        if (specificChild) {
            specificChild.textContent = '¿Cómo que no?🥺';
        }
    } else if (count_no == 2) {
        let specificChild = body.querySelector('h1');
        if (specificChild) {
            specificChild.textContent = 'Oye no🥺';
        }
    } else if (count_no == 3) {
        if (specificChild) {
            specificChild.textContent = 'Por favor di que sí🥺';
        }
    } else if (count_no == 4) {
        if (specificChild) {
            specificChild.textContent = 'No seas mala🥺';
        }
    } else if (count_no == 5) {
        if (specificChild) {
            specificChild.textContent = '¿Por qué no?🥺';
        }
    } else if (count_no == 6) {
        if (specificChild) {
            specificChild.textContent = 'Te lo ruego🥺';
        }
    } else if (count_no == 7) {
        if (specificChild) {
            specificChild.textContent = 'No me hagas esto🥺';
        }
    } else if (count_no == 8) {
        if (specificChild) {
            specificChild.textContent = 'Por favor🥺';
        }
    } else if (count_no == 9) {
        if (specificChild) {
            specificChild.textContent = 'Te lo suplico🥺';
        }
    } else if (count_no == 10) {
        if (specificChild) {
            specificChild.textContent = 'No puedo más🥺';
        }
    } else if (count_no > 10 && count_no < 15) {
        if (specificChild) {
            specificChild.textContent = 'Está bien😔';
            yes.disabled = true;
        }
    }
    else if (count_no > 15 && count_no < 20) {
        if (specificChild) {
            specificChild.textContent = '¿Aún no?🥺';
        }
    } else if (count_no >= 20) {
        if (specificChild) {
            specificChild.textContent = 'Me rindo😔';
            yes.disabled = true;
            no.disabled = true;
        }
    }
}

yes.addEventListener('click', function() {
    remove();
    Yes();
});

no.addEventListener('click', function() {
    No();
})