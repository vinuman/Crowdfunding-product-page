//DEFINING ELEMENTS
const bookmark = document.querySelector('.bookmark-btn');
const backProjectButton = document.querySelector('.back-btn');
const modalWindow = document.getElementById('create-post-modal');
const modalCloseButton = document.querySelector('.close');
const slider = document.querySelector('.my-slider');
const modalCardContent = document.querySelectorAll('.model-cards');
const hiddenElement = document.querySelectorAll('.hide');
const hiddenPara = document.querySelectorAll('.hide-para');
const radio = document.querySelectorAll('.custom-radio');
const rewardButton = document.querySelectorAll('.select-reward:not(.inactive)');
const modalWindowTwo = document.querySelector('.modal2');
const gotItButton = document.querySelector('.got-it');
const continueButton = document.querySelectorAll('.continue');
const leftTextOnMainCard = document.querySelectorAll('.left1');
const leftTextOnModalCard = document.querySelectorAll('.left2');
let percent = (slider.value - slider.min) / (slider.max - slider.min);
let bg = `linear-gradient(to right, #3CB3AB 0%, #3CB3AB ${percent*100}%, #979797 ${percent*100}%, #979797 100%)`;
const navContainer = document.querySelector('#container-nav');
const mobModal = navContainer.querySelector('.modal-mobile');



//HAMBURGER WINDOW FOR SCREEN WIDTH LESS THAN 700
window.addEventListener('DOMContentLoaded', ()=>{
    
    if(window.innerWidth <=700){
        navContainer.innerHTML = `
        <div class="hamburger">
        <div></div>
        <div></div>
        <div></div>
        </div>
        <div class="modal-mobile">
          <div class="modal-content-mobile">
            <a href="#">About</a>
            <a href="#">Discover</a>
            <a href="#">Get started</a>
          </div>
        </div>
        `;
    } else{
        navContainer.innerHTML = '';
    }
    const hamburgerButton = document.querySelector('.hamburger');
    hamburgerButton.addEventListener('click', ()=>{
    const mobModal = navContainer.querySelector('.modal-mobile');
    mobModal.classList.toggle('show');
    if(mobModal.classList.contains('show')){
        hamburgerButton.innerHTML = `
        <div class=axis-1></div>
        <div class=axis-2></div>
        `;
    } else{
        hamburgerButton.innerHTML = `
        <div></div>
        <div></div>
        <div></div>
        `;
    }
});

});

//HAMBURGER WINDOW ON RESIZE
window.addEventListener('resize', ()=>{
    
    if(window.innerWidth <=700){
        navContainer.innerHTML = `
        <div class="hamburger">
        <div></div>
        <div></div>
        <div></div>
        </div>
        <div class="modal-mobile">
          <div class="modal-content-mobile">
            <a href="#">About</a>
            <a href="#">Discover</a>
            <a href="#">Get started</a>
          </div>
        </div>
        `;
    } else{
        navContainer.innerHTML = '';
    }
    const hamburgerButton = document.querySelector('.hamburger');
    hamburgerButton.addEventListener('click', ()=>{
    const mobModal = navContainer.querySelector('.modal-mobile');
    mobModal.classList.toggle('show');
    if(mobModal.classList.contains('show')){
        hamburgerButton.innerHTML = `
        <div class=axis-1></div>
        <div class=axis-2></div>
        `;
    } else{
        hamburgerButton.innerHTML = `
        <div></div>
        <div></div>
        <div></div>
        `;
    }
});

});


//PROGRESS BAR ON PAGELOAD
document.addEventListener('DOMContentLoaded', ()=>{
    slider.style.background = bg;
});


//BOOKMARK BUTTON
bookmark.addEventListener('click', ()=>{
   bookmark.classList.toggle('book-marked');
   if(document.querySelector('.bookmark-text').textContent === 'Bookmark'){
    document.querySelector('.bookmark-text').textContent = 'Saved';
    document.querySelector('.bookmark-text').style.right = '8%';
   } else{
    document.querySelector('.bookmark-text').textContent = 'Bookmark';
    document.querySelector('.bookmark-text').style.right = '5%';
   }
});

//Back this project button
backProjectButton.addEventListener('click',()=>{
    modalWindow.classList.add('show');
   
});

//Modal window close button
modalCloseButton.addEventListener('click', ()=>{
    modalWindow.classList.remove('show');
});

//CLICKING ON ANY CARDS
modalCardContent.forEach((card)=>{
    card.addEventListener('click', (e)=>{
        const target = e.target;

        modalCardContent.forEach((c) => c.classList.remove('border'));
        modalCardContent.forEach((c) => c.style.opacity = '');
        radio.forEach((r) => r.classList.remove('radio-clicked'));
        hiddenElement.forEach((h) => h.classList.remove('show'));

        card.classList.add('border');
        card.style.opacity = '1';
        card.querySelector('.custom-radio').classList.add('radio-clicked');
        card.querySelector('.hide').classList.add('show');
        
    })
});

//REWARD BUTTON FUNCTION
rewardButton.forEach((btn) =>{
    btn.addEventListener('click', ()=>{

        btn.previousElementSibling.querySelector('h4').textContent--;

        const valueContent = document.querySelector('.count-actual').firstElementChild;
        const value = btn.parentElement.parentElement.querySelector('.title').querySelector('p').textContent;
        const valueActual = parseInt(value.match(/\d+/)[0]);

        const totalMoney = document.querySelector('#count-actual').firstElementChild.textContent;
        let totalMoneyActual = parseInt(totalMoney.replace(/,/g, '').match(/\d+/)[0]);
        totalMoneyActual+= valueActual;
        slider.value = totalMoneyActual;
        let percent = (slider.value - slider.min) / (slider.max - slider.min);
        let bg = `linear-gradient(to right, #3CB3AB 0%, #3CB3AB ${percent*100}%, #979797 ${percent*100}%, #979797 100%)`;
        slider.style.background = bg;
        valueContent.textContent = '$' + totalMoneyActual.toLocaleString();

        const totalBackers = document.querySelector('#backers-actual').firstElementChild;
        let totalBackersActual = parseInt(totalBackers.textContent.replace(/,/g, '').match(/\d+/)[0]);
        totalBackersActual++;
        totalBackers.textContent = totalBackersActual.toLocaleString();

        leftTextOnModalCard.forEach((text)=>{
            let number = parseInt(text.textContent.match(/\d+/)[0]);
            
            if(number == parseInt(btn.previousElementSibling.querySelector('h4').textContent) + 1){
                number--;
                console.log(number);
                text.textContent = number + ' left';
            }
        })
        
        modalWindowTwo.classList.add('show');
    })
});

//GOT IT BUTTON ON THE SECOND MODAL WINDOW
gotItButton.addEventListener('click', ()=>{
    modalWindowTwo.classList.remove('show');
});


//CONTINUE BUTTON IN THE FIRST MODAL WINDOW
continueButton.forEach((btn) =>{
    btn.addEventListener('click', ()=>{
        const input = btn.previousElementSibling;
        let actualPledge;
       
        if(input.id === 'any-amount'){
             actualPledge = 1;
        } else{
             const pledge = btn.closest('.model-cards').querySelector('.pledge');
             actualPledge = parseInt(pledge.textContent.match(/\d+/)[0]);

             const leftPara = btn.closest('.model-cards').querySelector('.left');
             let leftParaActual = parseInt(leftPara.textContent.match(/\d+/)[0]);
             leftParaActual--;
             leftPara.textContent = leftParaActual + ' left';

             leftTextOnMainCard.forEach((card) =>{
                
                if(card.querySelector('h4').textContent == leftParaActual+1){
                    card.querySelector('h4').textContent--;
                }
                
             })
        }
       
        if(input.value < actualPledge){
            alert(`Kindly pledge $${actualPledge} or more `);
        } else{
            modalWindow.classList.remove('show');
            modalWindowTwo.classList.add('show');
            const actualInput = parseInt(input.value.replace(/,/g, '').match(/\d+/)[0]);
            const valueContent = document.querySelector('.count-actual').firstElementChild;
            let actualValueContent = parseInt(valueContent.textContent.replace(/,/g, '').match(/\d+/)[0]);
            actualValueContent+= actualInput;
            valueContent.textContent = '$' + actualValueContent.toLocaleString();
            slider.value = actualValueContent;
            let percent = (slider.value - slider.min) / (slider.max - slider.min);
            let bg = `linear-gradient(to right, #3CB3AB 0%, #3CB3AB ${percent*100}%, #979797 ${percent*100}%, #979797 100%)`;
            slider.style.background = bg;
            const totalBackers = document.querySelector('#backers-actual').firstElementChild;
            let totalBackersActual = parseInt(totalBackers.textContent.replace(/,/g, '').match(/\d+/)[0]);
            totalBackersActual++;
            totalBackers.textContent = totalBackersActual.toLocaleString();
        }

    })
})
