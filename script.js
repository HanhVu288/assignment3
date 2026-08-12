function handleSumit() {
  // lay gt input email va chuyen sang in thuong
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  // lay element hien thi loi
  const errorEmail = document.getElementById("error-email");
  //dieu kien kiem tra email hop le
  const checkMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //dung match de kiem tra email hop le
  const check = emailValue.match(checkMail);
  //lay phan chua thong tin ca nhan
  const sectionContent = document.querySelector(".section-content");
  //lay element de kiem soat nut submit
  const submitControl = document.querySelector(".submit-email");
  if (check) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập email hợp lệ";
  }
}

function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".view-more");
  const lessMore = element.querySelector(".less-more");

  if (element.classList.contains("open")) {
    lessMore.style.display = "inline-block";
  } else {
    viewMore.style.display = "inline-block";
  }
}
function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".view-more");
  const lessMore = element.querySelector(".less-more");

  viewMore.style.display = "none";
  lessMore.style.display = "none";
}
const viewMoreButtons = document.querySelectorAll(".view-more");

viewMoreButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const section = this.closest(".section");

    const sectionContent = section.querySelector(".section-content");

    const lessMore = section.querySelector(".less-more");

    sectionContent.style.display = "block";

    section.classList.add("open");

    this.style.display = "none";

    lessMore.style.display = "inline-block";
  });
});
const lessMoreButtons = document.querySelectorAll(".less-more");

lessMoreButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const section = this.closest(".section");

    const sectionContent = section.querySelector(".section-content");
    const viewMore = section.querySelector(".view-more");

    sectionContent.style.display = "none";

    section.classList.remove("open");

    this.style.display = "none";

    viewMore.style.display = "inline-block";
  });
});
