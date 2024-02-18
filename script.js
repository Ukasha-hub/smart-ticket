const buttons = document.getElementsByClassName('seat');
let seatLeft= 40;
let chooseCount=0;
for(const i of buttons) {
    i.addEventListener('click', function() {
        i.style.backgroundColor='green';
        const buttonText = i.innerText;
        const item= document.getElementById('seatList');

        const newDiv= document.createElement('div');
        newDiv.innerHTML= `
        <div style='display: flex; flex-direction: row; justify-content: space-between'>
        <div>`+buttonText+`</div>
        <div>Economy</div>
        <div>550</div>
        </div>
        `;
        item.appendChild(newDiv);
        const booked= document.getElementById('booked');
        const left= document.getElementById('left');
        chooseCount+=1;
        seatLeft-=1;
        booked.innerText=chooseCount;
        left.innerText= seatLeft;
    });
};