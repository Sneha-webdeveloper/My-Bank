


//.........create an account register a new account........

function register(){
//1.fetch values from html
uname=reg_name.value
acno=reg_acno.value
pswd=reg_psw.value

console.log(acno,uname,pswd);

//2. create accountnoDetails object
accountDetails={
    acno,
    uname,
    pswd,
    balance:0
}

//3.check if acno laready presnt in local storage
if(acno in localStorage){
    alert("User already registered")
}else
{
    //To set details in localStorage
    localStorage.setItem(acno,JSON.stringify(accountDetails))
    //redirect to login page
    window.location="./login.html"
    
}}



//_________________login_______________________

function login(){
    //1. fetch the details
    acno=log_acno.value
    pswd=log_pswd.value
    console.log(acno,pswd);

    //2.check if acno is present in local storage

    if(acno in localStorage){
        accountDetails=JSON.parse(localStorage.getItem(acno));
        if(pswd==accountDetails.pswd){
            alert("Login Successful")
            window.location="./deposit.html"
        }else{
            alert("Incorrect password")
        }
    }else{
        alert("Invalid account number")
    }
}

//___________________Deposit___________________

// let balance=0;
let amnt=0;
let withdraw=0;
let totalBalance=0;
let pswd='';


function deposit(){
    amnt=dep_amount.value;
    acno=dep_acno.value;
    amnt=Math.floor(amnt);

if(acno in localStorage){
    accountDetails=JSON.parse(localStorage.getItem(acno));
    if(acno==accountDetails.acno && amnt<=0){
        alert("Value cannot be empty or negative")
    }else{
        accountDetails.balance+=amnt;
        // alert(accountDetails.balance)
        localStorage.setItem(acno,JSON.stringify(accountDetails))

        alert("Your amount is successfully added");
        document.getElementById("bal_amount").innerHTML=`<div class="text-white fw-bolder mt-2 fs-5 text-center shadow-lg">Your Current Balance is :  ₹  ${accountDetails.balance}</div>`
    }
}else{
    alert("Incorrect account number")
}    

}





//__________________withdraw___________________

function withdrawal(){
    withdrawAmnt=wd_amount.value
    acno=wd_acno.value
    withdrawAmnt=Math.floor(withdrawAmnt)

    if(acno in localStorage){
        accountDetails=JSON.parse(localStorage.getItem(acno));
        if(acno==accountDetails.acno && withdrawAmnt<=0){

           alert("please enter amount")
        }else if(withdrawAmnt>accountDetails.balance){
alert("Insufficient funds...!")
        }
        else{
            
            alert("Bank balance before withdrawal : "+ accountDetails.balance)

            alert("withdrawal amount:"+ withdrawAmnt)

            accountDetails.balance-=  withdrawAmnt;
            alert("Your amount is successfully added");
            localStorage.setItem(acno,JSON.stringify(accountDetails));

            alert("After withdrawal balance : "+ accountDetails.balance)
            document.getElementById("withdraw_amount").innerHTML=`<div class="text-white fs-5 fw-bold mt-2 text-center shadow ">Your Current Balance is :  <span class=" fw-bolder"> ₹ ${accountDetails.balance}</span></div>`
           
        }
    }else{
        alert("Incorrect account number")
    } 

    }


//logout
function logout() {
    localStorage.clear();
    window.location.href = "./index.html";
}
