let formSubmit = document.getElementById("formSubmit");

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let comment = document.getElementById("comment");

  if (name.value == "" || email.value == "" || comment.value == "") {
    //kondisi tidak terpenuhi
    alert("Form cannot be empty");
  } else {
     //kondisi terpenuhi
    alert("This form has been successfully submitted!");
    console.log(
      `List Form \n Name :  ${name.value} \n Email :  ${email.value} \n Message : ${comment.value}`
    );

    name.value = "";
    email.value = "";
    comment.value = "";
  }
});