


//add event what will happend when click calcule button----------------------------------
document.getElementById("mysubmit").addEventListener("click" , function(event){
    //stop the page from reload
    event.preventDefault();

    // take the information from the user ----------------------------------------------------
let type = document.getElementById("type").value;
let amount = Number(document.getElementById("amount").value);
let term = Number(document.getElementById("term").value);
let income = Number(document.getElementById("income").value);

// clacule the rate depend of type of the credit
    let rate = 0 ;
    if(type === "house") rate = 0.045;
    else if (type === "apartement") rate = 0.05;
     else if (type === "land") rate = 0.03 ;
      else if (type === "business") rate = 0.07;
       else if (type === "Personal") rate = 0.08 ;


//calculer le credit detaits : bank formulation-------------------------------------------

      let monthlyRate = rate / 12;
      let months = term * 12;
      let monthlyPay = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
      let totalPay = monthlyPay * months;
      let totalinterest = totalPay - amount;



//show the result ----------------------------------------------------------------------------


    document.getElementById("monthly-payment").textContent = monthlyPay.toFixed(2) + " DH/M";
    document.getElementById("total-interest").textContent = totalinterest.toFixed(2) + " DH";


// verfiy if the monthlycome < 40% of salary and display all the ditails about the credit------
   let end = income * 0.4;

   if (end < monthlyPay){
    document.getElementById("warningmsg").textContent = "Your income is too low for this loan amount";
    document.getElementById("warningmsg").style.color="red";
   }

   else{
    document.getElementById("warningmsg").innerHTML = "Type:" + type + "<br>" +
                                                      "Amount:" + amount  + "DH <br>" +
                                                       "Taux: " + (rate * 100) + "%<br>"+
                                                        "Monthly pay:" + monthlyPay.toFixed(2) + "DH <br>" +
                                                        "Total interst" + totalinterest.toFixed(2)+ "DH <br>" +
                                                        "pay Total " + (amount+totalinterest).toFixed(2) +"DH <br>";

    
 
    


    document.getElementById("warningmsg").style.color="green";
   }




}); 
// end of code js have a good day code reader ----------------------------------------------
   
    
