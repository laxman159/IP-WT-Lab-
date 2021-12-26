const FirstMail = "Lax@gmail.com";
const SecondMail = "lax.com";

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if (FirstMail.match(emailRegex)) {
  console.log(FirstMail + " is a valid email address");
} else {
  console.log(FirstMail + " is not a valid email address");
}

if (SecondMail.match(emailRegex)) {
  console.log(SecondMail + " is a valid email address");
} else {
  console.log(SecondMail + " is not a valid email address");
}
