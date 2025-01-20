function setupModal(modalId, triggerSelector, closeSelector) {
    const modal = document.getElementById(modalId);
    const trigger = document.querySelector(triggerSelector);
    const closeButton = modal.querySelector(closeSelector);

    if (trigger) {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}


setupModal('add-event-modal', '.contact-button a', '.close-btn'); 
setupModal('add-event-modal', '.add-ur-event .btn', '.close-btn'); 


const eventsLink = document.querySelector('a[href="#cards-container"]');
if (eventsLink) {
    eventsLink.addEventListener('click', (e) => {
        e.preventDefault();
        const cardsContainer = document.querySelector('.cards-container');
        if (cardsContainer) {
            cardsContainer.scrollIntoView({ behavior: 'smooth' });
        }
    });
}


let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let active = 3;

function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    for (let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

if (items.length > 0) {
    loadShow();

    if (next) {
        next.addEventListener('click', () => {
            active = active + 1 < items.length ? active + 1 : active;
            loadShow();
        });
    }

    if (prev) {
        prev.addEventListener('click', () => {
            active = active - 1 >= 0 ? active - 1 : active;
            loadShow();
        });
    }
}

    const modal = document.getElementById('city-modal');
    const btn = document.querySelector('.btn');
    const closeBtn = document.querySelector('.close-btn');

   
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

   
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

   
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

