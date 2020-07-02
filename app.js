document.addEventListener("DOMContentLoaded", function() {
  let info = document.querySelector('input[name="info"]').value;
  let amount = document.querySelector('input[name="amount"]').value;
  let date = document.querySelector('input[name="date"]').value;
  let transactionMethod = document.querySelector('select[name=type]').value

  document.querySelector("#button")
    .addEventListener("click", (event) => {
    var type_icon;
    let transactionMethod = document.querySelector('select[name=type]').value
    if (transactionMethod == 'card') {
      type_icon = "Credit Card"
    }
    else if (transactionMethod == 'dcard')
    {
      type_icon = "Debit Card"
    }
    else if (transactionMethod == 'cash')
    {
      type_icon = "Cash";
    }
    else if (transactionMethod == 'cryptocoin')
    {
      type_icon = "Crypto";
    }
    else if (transactionMethod == 'other')
    {
      type_icon = "Other";
    }
    else
    {
      type_icon = "N/A";
    }

    let form_validated = true;

    if(form_validated) {
      let info = document.querySelector('input[name="info"]').value;
      let amount = document.querySelector('input[name="amount"]').value;
      let date = document.querySelector('input[name="date"]').value;
      $("table tr:first").after('<tr><td>'+type_icon+'</td><td>'+info+'</td><td>'+date+'</td><td class="amount">$'+amount+'</td></tr>');
      document.getElementById('form').reset();
      document.querySelector("#if-empty").remove();
    };
  });
});
