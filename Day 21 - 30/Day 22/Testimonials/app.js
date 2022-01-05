(function () {
  const name = document.querySelector(".customer-name");
  const text = document.querySelector(".text");
  const btn = document.querySelectorAll(".btn");

  let index = 0;
  const customers = [];
// making a constructor
  function Customer(nameOfCus, textOfCus) {
    this.nameOfCus = nameOfCus;
    this.textOfCus = textOfCus;
  }

  function creatingCustomer(nameOfCus, textOfCus) {
    let customer = new Customer(nameOfCus, textOfCus);

    customers.push(customer);
  }

  creatingCustomer(
    "Bill Gates",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere alias at omnis expedita molestiae? Molestiae dicta hic labore perferendis exercitationem et ad. A, neque aut saepe voluptate quos corporis laboriosam."
  );
  creatingCustomer(
    "Jeff Bezos",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere alias at omnis expedita molestiae? Molestiae dicta hic labore perferendis exercitationem et ad. A, neque aut saepe voluptate quos corporis laboriosam."
  );
  creatingCustomer(
    "Elon Musk",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere alias at omnis expedita molestiae? Molestiae dicta hic labore perferendis exercitationem et ad. A, neque aut saepe voluptate quos corporis laboriosam."
  );
  creatingCustomer(
    "Mark Zuckerberg",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere alias at omnis expedita molestiae? Molestiae dicta hic labore perferendis exercitationem et ad. A, neque aut saepe voluptate quos corporis laboriosam."
  );
  creatingCustomer(
    "Steve Jobs",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere alias at omnis expedita molestiae? Molestiae dicta hic labore perferendis exercitationem et ad. A, neque aut saepe voluptate quos corporis laboriosam."
  );

  btn.forEach(function (button) {
    button.addEventListener("click", function (e) {
      if (e.target.parentElement.classList.contains("prev")) {
        if (index === 0) {
          index = customers.length;
        }
        index--;
        name.textContent = customers[index].nameOfCus;
        text.textContent = customers[index].textOfCus;
      }
      if (e.target.parentElement.classList.contains("next")) {
        index++;
        if (index === customers.length) {
          index = 0;
        }
        name.textContent = customers[index].nameOfCus;
        text.textContent = customers[index].textOfCus;
      }
    });
  });
})();
