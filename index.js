const form=document.querySelector("form");
//console.log(form);
form.addEventListener("submit", function(event){
    event.preventDefault();
    //console.log(event.target.category.value)
    //const newLi=document.createElement('li');
    const ul=document.querySelector("ul");
    //ul.innerHTML=ul.innerHTML+`<li></li>`;
    const newLi=document.createElement('li');
    newLi.innerHTML=event.target.amount.value +"-"+event.target.category.value+"-"+event.target.description.value;
    ul.append(newLi);
    const deleteButton=document.createElement('button');
    deleteButton.innerHTML="Delete Expense";
    const editButton=document.createElement('button');
    editButton.innerHTML="Edit Expense";
    newLi.append(deleteButton);
    newLi.append(editButton);

    const myObj = {
        amount: event.target.amount.value,
        category: event.target.category.value,
        description: event.target.description.value,
      };
      
      localStorage.setItem(event.target.description.value, JSON.stringify(myObj));
      deleteButton.addEventListener("click", function (event) {
        //console.log(event.target.parentElement)
        //const email1 = document.getElementById("email");
        event.target.parentElement.remove();
        localStorage.removeItem(myObj.description);
        
      });
      editButton.addEventListener("click", function (event) {
        //console.log(event.target.parentElement)
        const amount1 = document.getElementById("amount");
        const category1 = document.getElementById("category");
        const description1 = document.getElementById("description");
        event.target.parentElement.remove();
        localStorage.removeItem(myObj.description);
        //email="afdaf";
        //console.log(email);
        amount1.value = myObj.amount;
        category1.value = myObj.category;
        description1.value = myObj.description;
      });
    //console.log(li);
})