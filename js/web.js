

let donationBtn = document.getElementById('dontaion_btn');
let historyBtn = document.getElementById('history_btn');
let blogBtn = document.getElementById('nab_btn');



blogBtn.addEventListener('click', function(){
     window.location.href = '/blog.html'
})



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

     
})

donationBtn.addEventListener('click', function(){
    donationBtn.classList.add(
        "px-10,py-4","bg-[#B4F461]","rounded-md","text-md","capitalize","font-semibold"
    );

    historyBtn.classList.remove(
        "px-10,py-4","bg-[#B4F461]","rounded-md","text-md","capitalize","font-semibold"
    )
})
  
