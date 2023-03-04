window.onload = function () {
  // login & logout
  const loginForm = document.querySelector("#login-form");
  const logInputId = document.querySelector(".username");
  const Greeting = document.querySelector(".greeting");
  const h1 = document.querySelector("h1");
  const ItemClass = document.querySelector(".item");
  const Body = document.querySelector("body");
  const HiddenClass = "hidden";
  const Username_key = "username";
  const logOut = document.querySelector(".logout");

  function loginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HiddenClass);
    h1.classList.add(HiddenClass);
    ItemClass.classList.add(HiddenClass);
    const username = logInputId.value;
    localStorage.setItem(Username_key, username);
    Greetings(username);
  }

  function Greetings(userValue) {
    Greeting.innerText = `안녕하세요 ${userValue}님 환영합니다.`;
    Greeting.classList.remove(HiddenClass);
    logOut.classList.remove(HiddenClass);
  }

  const savedKey = localStorage.getItem(Username_key);

  if (savedKey === null) {
    loginForm.classList.remove(HiddenClass);
    ItemClass.classList.remove(HiddenClass);
    h1.classList.remove(HiddenClass);
    loginForm.addEventListener("submit", loginSubmit);
  } else {
    Greetings(savedKey);
  }

  function removeStorage() {
    localStorage.removeItem(Username_key);
    window.location.reload();
  }
  logOut.addEventListener("click", removeStorage);

  // pwd show

  const logInputPwd = document.querySelector(".pwd");
  const icon_eye = document.querySelector("i");

  function showText() {
    icon_eye.classList.toggle("on");
    if (icon_eye.classList.contains("on")) {
      logInputPwd.type = "text";
    } else {
      logInputPwd.type = "password";
    }
  }
  icon_eye.addEventListener("click", showText);
};
