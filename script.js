const loginArea = document.getElementById('logingArea');
const submitBtn = document.getElementById('submitBtn');
const transctionArea = document.getElementById('transction');
submitBtn.addEventListener('click', function(){
    loginArea.style.display = 'none';
    transctionArea.style.display = 'block';
});


const dipositBtn = document.getElementById('dipositBtn');
dipositBtn.addEventListener('click', function(){

    const Amount = inputNumber('depositInput');

    document.getElementById('depositInput').value="";

    dipositMainBalance('currentDiposit', Amount);
    dipositMainBalance('balanceAmount', Amount);


});
function inputNumber(id){
    const dipositInput = document.getElementById(id).value;
    const number = parseFloat(dipositInput);
    return number;
}
function dipositMainBalance(id,Amount){
    const balance = document.getElementById(id).innerText;
    const balanceAmount = parseFloat(balance);
    const total = balanceAmount + Amount;
    document.getElementById(id).innerText= total;
}

const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function(){
    // const withdrawInput = document.getElementById('withdrawInput').value;
    // const withdrawAmount = parseFloat(withdrawInput);
    const withdrawAmount = inputNumber('withdrawInput');
    // dipositMainBalance('currentWithdraw', withdrawAmount);
    // dipositMainBalance('balanceAmount', -1*withdrawAmount);
    const displayOldWithdraw = document.getElementById('currentWithdraw').innerText;
    const oldWithdrawAmount = parseFloat(displayOldWithdraw);
    const totalWithdraw = withdrawAmount + oldWithdrawAmount;
    const balance = document.getElementById('balanceAmount').innerText;
    const balanceAmount = parseFloat(balance);
    const balanceAfterWithdraw = balanceAmount - withdrawAmount;
    if  ( balanceAmount>=withdrawAmount){
    document.getElementById('balanceAmount').innerText= balanceAfterWithdraw;
    document.getElementById('currentWithdraw').innerText = totalWithdraw;
    document.getElementById('withdrawInput').value="";
    } else{
        alert('Withdraw amount is geterthen Your balance');
    };
    function amount (id, output){
        const withdraw = document.getElementById(id).output;
        const withdrawAmount = parseFloat(withdraw);
        return withdrawAmount;
    };
});