

let donationBtn = document.getElementById('dontaion_btn');
let historyBtn = document.getElementById('history_btn');
let blogBtn = document.getElementById('nab_btn');

let donationCards = idFunction('dontaion__cards');
let historySection = idFunction('history__details');

let modal = document.getElementById('my_modal_5');

let mainBalance = parseFloat(document.getElementById('balance').innerText);









blogBtn.addEventListener('click', function(){
     window.location.href = '/blog.html'
})


// ! history button
historyBtn.addEventListener('click', function(){




     historyBtn.classList.add(
        "px-10,py-4","bg-[#B4F461]","rounded-md","text-md","capitalize","font-semibold"
    )

    donationBtn.classList.remove(
        "px-10,py-4","bg-[#B4F461]","rounded-md","text-md","capitalize","font-semibold"
    )

    donationBtn.classList.add(
        "px-10","py-4","rounded-md","text-md","capitalize","border-2","text-[#111111B3]"
    )

    donationCards.classList.add('hidden');
    historySection.classList.remove('hidden')


     
})
// ! dontaion button

donationBtn.addEventListener('click', function(){
    donationBtn.classList.add(
        "px-10,py-4","bg-[#B4F461]","rounded-md","text-md","capitalize","font-semibold"
    );

    historyBtn.classList.remove(
        "px-10,py-4","bg-[#B4F461]","rounded-md","text-md","capitalize","font-semibold"
    );



    donationCards.classList.remove('hidden');
    historySection.classList.add('hidden')

})
  

// ! card -1 section 
let donateBtnFirst = idFunction('donate_btn_1');
    


donateBtnFirst.addEventListener('click', function(){

    let dontateInputOne = getInputValue('amount_1');


     if(dontateInputOne >=0  && isNaN(dontateInputOne) == false && dontateInputOne < mainBalance){

    modal.showModal();

        let newDonateAmount =    document.getElementById('donate_amount_1').innerText = dontateInputOne ;

        let newMainBalance = mainBalance - newDonateAmount;
   
       let getMainBalance = document.getElementById('balance').innerText = newMainBalance;

// * dynamic history card

let cardOneHistoryDetails = idFunction('history__details');



let historyCardOne = document.createElement('div');
historyCardOne.className = 'w-full border p-3 mb-4 rounded-md';

historyCardOne.innerHTML = 
 `    
 <h4 class="my-3 font-semibold capitalize"> ${newDonateAmount} taka is donated for flood at noakhali, bangladesh </h4>
 <p> ${new Date().toLocaleDateString() }   </p>
 
 `;

 cardOneHistoryDetails.insertBefore(historyCardOne, cardOneHistoryDetails.firstChild)

   
     }

     else if( dontateInputOne > mainBalance){
         alert("you don't have suffician balance ");
         return;
     }



    else{
         alert('write a positive number');
         return;
    }

 

     document.getElementById('amount_1').value = '';




})


// ! card - 2 section 

let donateBtnSecond = idFunction('donate_btn_2');


 





donateBtnSecond.addEventListener('click', function(){

    let dontateSecondInput = getInputValue('amount_2');
    let nowMainBalance = document.getElementById('balance').innerText;

    if(dontateSecondInput >= 0  && isNaN(dontateSecondInput) == false &&  dontateSecondInput < mainBalance){


        modal.showModal();
     
 let newDonateAmount =    document.getElementById('donate_amount_2').innerText = dontateSecondInput ;

 let newMainBalance = nowMainBalance - newDonateAmount;

let getMainBalance = document.getElementById('balance').innerText = newMainBalance;


// dynamic card 

let cardOneHistoryDetails = idFunction('history__details');



let historyCardOne = document.createElement('div');
historyCardOne.className = 'w-full border p-3 mb-4 rounded-md';

historyCardOne.innerHTML = 
 `    
 <h4 class="my-3 font-semibold capitalize"> ${newDonateAmount} taka is donated for flood relief in feni, bangladesh </h4>
 <p> ${new Date().toLocaleDateString() }   </p>
 
 `;

 cardOneHistoryDetails.insertBefore(historyCardOne, cardOneHistoryDetails.firstChild);

    }



    else if(  dontateSecondInput > mainBalance){
        alert("you don't have suffician balance ");
  
    }




   else{
        alert('write a positive number');
  
   }



          document.getElementById('amount_2').value = ''



})


// ! card -3 section 


let donateBtnThird = idFunction('donate_btn_3');




donateBtnThird.addEventListener('click', function(){
    let nowMainBalance = document.getElementById('balance').innerText;
 
    let donatethirdInput = getInputValue('amount_3');

    if(donatethirdInput >= 0 && isNaN(donatethirdInput) == false && donatethirdInput < mainBalance){
         
        modal.showModal();
 let newDonateAmount =    document.getElementById('donate_amount_3').innerText = donatethirdInput ;

 let newMainBalance = nowMainBalance - newDonateAmount;

let getMainBalance = document.getElementById('balance').innerText = newMainBalance;

    // dynamic card
    let cardOneHistoryDetails = idFunction('history__details');



   let historyCardOne = document.createElement('div');
   historyCardOne.className = 'w-full border p-3 mb-4 rounded-md';

   historyCardOne.innerHTML = 
    `    
    <h4 class="my-3 font-semibold capitalize"> ${newDonateAmount} taka is donated Aid for Injured in the Quota Movement, bangladesh </h4>
    <p> ${new Date().toLocaleDateString() }   </p>
    
    `;

    cardOneHistoryDetails.insertBefore(historyCardOne, cardOneHistoryDetails.firstChild)

    }


    else if(  donatethirdInput > mainBalance){
        alert("you don't have suffician balance ");
  
    }




   else{
        alert('write a positive number');
  
   }





    document.getElementById('amount_3').value = '';

})



