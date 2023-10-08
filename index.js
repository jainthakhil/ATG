const accountPage = document.getElementById("account-page");
const create = document.getElementById("create");
const signinBtn = document.getElementById("signin-btn");
const logged = document.getElementById("logged");
const groupBtn = document.getElementById("group-btn");
const joinBtn = document.getElementById("join-btn");
const joinBtnImg = document.getElementById("join-btn-img");
const joinBtnPara = document.getElementById("join-btn-para");
const rightLoc = document.getElementById("right-loc");
const editImg = document.getElementById("edit-img");
const rightGroup = document.getElementById("right-group");
const mainForm = document.querySelectorAll(".main-form");
const signin = document.getElementById("signin");
const signup = document.getElementById("signup");
const signupPage = document.getElementById("signup-form");
const signinPage = document.getElementById("signin-form");
const eye = document.getElementById("eye");
const password = document.getElementById("password");
const eyeBtn = document.getElementsByClassName("password-eye");
const createHead = document.getElementById("create-head");
const signinHead = document.getElementById("signin-head");
const accountPara1 = document.getElementById("accountpara1");
const accountPara2 = document.getElementById("accountpara2");
const phoneCreate = document.getElementById("small-create");
const phoneSignin = document.getElementById("small-signin");

// function for signup and sigin window
function accountAction(event) {
  event.preventDefault();
  accountPage.style.display = "flex";
}

// function for sigin button
function signinBtnAction(event) {
  event.preventDefault();
  logged.style.display = "flex";
  create.style.display = "none";
  rightLoc.innerHTML = "| Enter your location";
  editImg.src = "images/mult.png";
  rightGroup.style.display = "block";
  accountPage.style.display = "none";
}

const loggedArrow = document.getElementById("logged-arrow");
loggedArrow.addEventListener("click", function (event) {
  event.preventDefault();
  accountPage.style.display = "flex";
});

// function for cross button
function crossBtnAction(event) {
  event.preventDefault();
  accountPage.style.display = "none";
}

// function for join and leave button on navbar
function groupBtnAction(event) {
  event.preventDefault();
  if (groupBtn.innerHTML === "Join group") {
    accountPage.style.display = "flex";
    groupBtn.innerHTML = "Leave group";
  } else {
    groupBtn.innerHTML = "Join group";
  }
}

signin.addEventListener("click", function (event) {
  event.preventDefault();
  signupPage.style.display = "none";
  signinPage.style.display = "block";
  eye.style.transform = "translateY(40%)";
});

signup.addEventListener("click", function (event) {
  event.preventDefault();
  signupPage.style.display = "block";
  signinPage.style.display = "none";
  signupPage.style.backgroudColor = "red";
});
phoneCreate.addEventListener("click", function (event) {
  event.preventDefault();
  signupPage.style.display = "block";
  signinPage.style.display = "none";
  createHead.style.marginLeft = "25px";
  eye.style.transform = "translateY(40%)";
});

phoneSignin.addEventListener("click", function (event) {
  event.preventDefault();
  signupPage.style.display = "none";
  signinPage.style.display = "block";
  eye.style.transform = "translateY(40%)";
  signinHead.innerHTML = "Welcome back!";
  signinHead.style.marginLeft = "25px";
});

const tabLinks = document.querySelectorAll(".tab-link");

tabLinks.forEach(function (item) {
  item.addEventListener("click", function (event) {
    event.preventDefault();

    tabLinks.forEach(function (otherLink) {
      otherLink.classList.remove("active");
    });
    item.classList.add("active");
  });
});

// changing the color of follow btn
const followBtns = document.getElementsByClassName("follow-btn");
for (const element of followBtns) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    if (element.innerHTML === "Following") {
      element.innerHTML = "Follow";
      element.style.width = "80px";
      element.style.color = "#000";
      element.style.backgroundColor = "#edeef0";
    } else {
      element.innerHTML = "Following";
      element.style.width = "110px";
      element.style.color = "#fff";
      element.style.backgroundColor = "#000";
    }
  });
}
const lens = document.getElementById("lens");
const searchInput = document.getElementById("search-input");

// function to hide image and placeholder in search bar
function hideSearchImgNText() {
  lens.style.display = "none";
  searchInput.removeAttribute("placeholder");
}
function showSearchImgNText() {
  lens.style.display = "block";
  searchInput.setAttribute(
    "placeholder",
    "Search for your favourite group in  ATG"
  );
}

// function for join-btn
function joinBtnAction(event) {
  event.preventDefault();
  if (joinBtnPara.innerHTML === "Join Group") {
    joinBtnPara.innerHTML = "Leave Group";
    joinBtn.style.backgroundColor = "#fff";
    joinBtn.style.color = "#6a6a6b";
    joinBtn.style.border = "0.8px solid #989899";
    joinBtnImg.src = "images/exit.png";
  } else {
    joinBtnPara.innerHTML = "Join Group";
    joinBtn.style.backgroundColor = "#2F6CE5";
    joinBtn.style.color = "#fff";
    joinBtn.style.border = "none";
    joinBtnImg.src = "images/add.png";
  }
}
