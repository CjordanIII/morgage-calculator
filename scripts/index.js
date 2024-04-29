const form = document.querySelector("#mortgage-form");

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
  const monthlyPayment = principal * (interest / loanLength);
  console.log(monthlyPayment);
}
