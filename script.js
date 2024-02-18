const buttons = document.getElementsByClassName('seat');
let seatLeft= 40;
let chooseCount=0;

const booked= document.getElementById('booked');
const left= document.getElementById('left');
const item= document.getElementById('seatList');

const submit= document.getElementById('submit');
const phone= document.getElementById('phone');

for(const i of buttons) {
    i.addEventListener('click', function() {
        
        if(phone.value!=='' && chooseCount>=0){
            console.log('1')
            submit.removeAttribute('disabled');
        } 

        else{
            submit.setAttribute('disabled', '');
            console.log('2')
        }
        
        if(i.style.backgroundColor!=='green' ){

            console.log('3')
            
            if(chooseCount>=4){
                limitFour();
            } 
            
            else if(chooseCount>=3){
                promoActivator()
            }
               
            seatChoosing(i);  
            }
            
        
        
        else{
            
            console.log('4')
                seatUnchoosing(i);
        }
            
          

    });

        
    
};






function limitFour(){

   
    alert('You only can select max 4 seats');

    for(const j of buttons){
        if(j.style.backgroundColor!=='green'){
            j.setAttribute('disabled');
            
        }

        else{
            j.removeAttribute('disabled');
            
        }

       
    
        
        
    };

    
    return
}


function promoActivator(){
    const promo = document.getElementById('promo-button');
    promo.removeAttribute('disabled');
    const code = document.getElementById('code');
    const result = document.getElementById('promo-result');

    promo.addEventListener('click', function(){
        if(code.value==='NEW15' || code.value==='Couple20'){
            promo.classList.add('hidden')
            code.classList.add('hidden')
            result.classList.remove('hidden')
        }

        else{
            alert('Wrong promo code given');
            code.value= '';

        }
        return
    });
   
}

function seatChoosing(i){
    i.style.backgroundColor='green';
        const buttonText = i.innerText;
       

        const newDiv= document.createElement('div');
        newDiv.id=i.innerText;
        newDiv.innerHTML= `
        <div style='display: flex; flex-direction: row; justify-content: space-between'>
        <div >`+buttonText+`</div>
        <div>Economy</div>
        <div>550</div>
        </div>
        `;
        item.appendChild(newDiv);
        
        chooseCount+=1;
        seatLeft-=1;
        booked.innerText=chooseCount;
        left.innerText= seatLeft;
        return ;
}


function seatUnchoosing(i){
            i.style.backgroundColor='';
            const deleteText = document.getElementById(i.innerText);
            item.removeChild(deleteText);
            
        chooseCount-=1;
        seatLeft+=1;
        booked.innerText=chooseCount;
        left.innerText= seatLeft;
        return;
}