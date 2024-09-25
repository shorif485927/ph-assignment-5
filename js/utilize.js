

    // ! get input value 

    // let homeBtn = document.getElementById("home_nab_btn");

    // homeBtn.addEventListener('click', function(){
    //     window.location.href = '/index.html'
         
    // })


    function getInputValue(id) {
        let input = document.getElementById(id).value;

        let inputNumber = parseFloat(input);
        let inputValue  = inputNumber.toFixed(2);                                                
       return inputValue ;
    }






    // ! get id


     function  idFunction(id) {
        let getId =  document.getElementById(id);
        return getId;
    }