const loginArea = document.getElementById('logingArea');
const submitBtn = document.getElementById('submitBtn');
const transctionArea = document.getElementById('transction');
submitBtn.addEventListener('click', function(){
    loginArea.style.display = 'none';
    transctionArea.style.display = 'block';
});


const dipositBtn = document.getElementById('dipositBtn');
dipositBtn.addEventListener('click', function(){
    const dipositInput = document.getElementById('depositInput').value;
    const dipositAmount = parseFloat(dipositInput);
    const displayOldDiposit = document.getElementById('currentDiposit').innerText;
    const oldDipositAmount = parseFloat(displayOldDiposit);
    const totalDiposit = dipositAmount+oldDipositAmount;
    document.getElementById('currentDiposit').innerText = totalDiposit;
    document.getElementById('depositInput').value="";
    const balance = document.getElementById('balanceAmount').innerText;
    const balanceAmount = parseFloat(balance);
    const balanceAfterDiposit = balanceAmount + dipositAmount;
    document.getElementById('balanceAmount').innerText= balanceAfterDiposit;
});

const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdrawInput').value;
    const withdrawAmount = parseFloat(withdrawInput);
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

});