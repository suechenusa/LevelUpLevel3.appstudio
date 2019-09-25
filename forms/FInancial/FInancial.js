function carLoanPayment(total,t,r){
  let answer=total*(1+t*(r/100))/t/12
  return answer
  }
  
function  homeLoanPayment(total,t,r){
  let answer=0
  if (t==15){
    answer=total*(1+15*(r/100))/15/12
  }else if(t==30){
    answer=total*(1+30*(r/100))/30/12
  }else{
  answer="No result"
  }
  return answer
 }
  
//main program

//variable to get the answer
let result = 0

for (i=1;i>0;i++){
    //know which function customer want to use
    let choose = prompt("You want to calculate car loan or home loan? Answer 'Car' or 'Home'. If you want to stop this, please return 'Stop'")

    if (choose=='Car'){
      //three argument
      let total = Number(prompt("How much you need pay for total?"))
      let t= Number(prompt("How many year you need to pay the loan? "))
      let r= Number(prompt("What is the interest rate for this loan? ex.'5.7%' input'5.7"))
      result = carLoanPayment(total,t,r)
      alert(`A car loan for $${total} over ${t} years at ${r}% interest would have a monthly payment of $${result}.`)
    }else if (choose == 'Home'){
      //three argument
      let total = Number(prompt("How much you need pay for total?"))
      let t= Number(prompt("How many year you need to pay the loan? Only enter 15 or 30"))
      let r= Number(prompt("What is the interest rate for this loan? ex.'5.7%' input'5.7"))
      result = homeLoanPayment(total,t,r)
      alert(`A home loan for $${total} over ${t} years at ${r}% interest would have a monthly payment of $${result}.`)
    }else if (choose == 'Stop'){
      alert("Thank you for using this program.")
      i=0
      break
    }else{
      alert("Sorry, I don't understand. Please write 'Car'or'Home'or'Stop'")
    }
}
