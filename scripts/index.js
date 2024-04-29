const form = document.querySelector("#mortgage-form");
let monthlyDisplay = document.querySelector("#monthlyPayment");
let interestDisplay = document.querySelector("#interestDisplay");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const object = {
    principal: parseFloat(e.target.principal.value),
    interest: parseFloat(e.target.interest.value) / 100,
    loanLength: parseFloat(e.target.loanLength.value),
  };
  calculateLoan(object);
});

function calculateLoan({ principal, interest, loanLength }) {
  const monthlyInterest = interest / 12;
  const numberOfPayments = loanLength * 12;

  const monthlyPayment =
    (principal *
      (monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments))) /
    (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

  const totalPayment = monthlyPayment * numberOfPayments;
  const totalInterestPaid = totalPayment - principal;

  monthlyDisplay.textContent = `Your montthly payment ${monthlyPayment.toFixed(
    2
  )}`;
  interestDisplay.textContent = `Your total intrest payment ${totalInterestPaid.toFixed(
    2
  )}`;
}
