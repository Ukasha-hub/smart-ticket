const buttons = document.getElementsByClassName('seat');
let seatLeft= 40;
let chooseCount=0;

const booked= document.getElementById('booked');
const left= document.getElementById('left');
const item= document.getElementById('seatList');

const promo = document.getElementById('promo-button');

const submit= document.getElementById('submit');
const phone= document.getElementById('phone');

phone.addEventListener('keyup', submitValidity);

const total= document.getElementById('total');
const grand = document.getElementById('grand');

let takaTotal=0;
let grandTotal=0;
let discount=0;



for(const i of buttons) {
   
   

    i.addEventListener('click', function() {
        
        
        
        if(i.style.backgroundColor!=='green' ){

           
            
            if(chooseCount>=4){
                alert('You only can select max 4 seats');
                return;
            } 
            
            else if(chooseCount>=3){
                promoActivator()
            }
               
            seatChoosing(i);  
            }
            
        
        
        else{
            
            
            
            promo.setAttribute('disabled', '');
            seatUnchoosing(i);
            
        }
            
        submitValidity();
         

    });

        
    
};







function submitValidity(){ 
    if(chooseCount>=1 && parseInt(phone.value)){
        submit.removeAttribute('disabled');
        submit.addEventListener('click', function(){
            window.location.href='success.html';
        });
    }
    

    else{
        submit.setAttribute('disabled', '');
    }
    return
}







function promoActivator(){
  
    promo.removeAttribute('disabled');
    const code = document.getElementById('code');
    const result = document.getElementById('promo-result');

    promo.addEventListener('click', function(){
        if(code.value==='NEW15' || code.value==='Couple20'){
            promo.classList.add('hidden')
            code.classList.add('hidden')
            result.classList.remove('hidden')
            if(code.value==='NEW15'){
                discount=grandTotal*(15/100);
                grandTotal-=discount;
                discountAfter1=document.createElement('div');
                discountAfter2=document.createElement('div');
                discountAfter1.innerText='Discount =';
                discountAfter2.innerText='BDT '+discount;
                result.appendChild(discountAfter1);
                result.appendChild(discountAfter2);
                result.classList.add('flex', 'flex-row', 'justify-around', 'content-around');
                grand.innerText=grandTotal;
                for(const k of buttons) {
                    k.setAttribute('disabled', '');
                }
            }
            else if(code.value==='Couple20'){
                discount=grandTotal*(20/100);
                grandTotal-=discount;
                discountAfter1=document.createElement('div');
                discountAfter2=document.createElement('div');
                discountAfter1.innerText='Discount =';
                discountAfter2.innerText='BDT '+discount;
                result.appendChild(discountAfter1);
                result.appendChild(discountAfter2);
                result.classList.add('flex', 'flex-row', 'justify-around', 'content-around');
                grand.innerText=grandTotal;
                for(const k of buttons) {
                    k.setAttribute('disabled', '');
                }
            }

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
        takaTotal+=550;
        grandTotal+=550;
        total.innerText=takaTotal;
        grand.innerText=grandTotal;
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
        takaTotal-=550;
        grandTotal-=550;
        total.innerText=takaTotal;
        grand.innerText=grandTotal;
        booked.innerText=chooseCount;
        left.innerText= seatLeft;
        return;
}