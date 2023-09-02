import { ui } from "./ui.js";
export class Contact {
  constructor() {
    this.ui = new ui();
    this.ui.displayContact();
    this.name = $("#name");
    this.email = $("#email");
    this.phone = $("#phone");
    this.age = $("#age");
    this.pass = $("#pass");
    this.rePass = $("#rePass");
    this.name.keyup(() => {
      this.validateName();
      this.checkFinish();
    });
    this.email.keyup(() => {
      this.validateEmail();
      this.checkFinish();
    });
    this.phone.keyup(() => {
      this.validatePhone();
      this.checkFinish();
    });
    this.age.keyup(() => {
      this.validateAge();
      this.checkFinish();
    });
    this.pass.keyup(() => {
      this.validatePass();
      this.checkFinish();
    });
    this.rePass.keyup(() => {
      this.validateRePass();
      this.checkFinish();
    });
    $("#sumbitBtn").click(() => {
      this.clear();
    });
  }
  validateName() {
    let regex = /^[A-Za-z ]{2,}$/;
    if (!regex.test(this.name.val())) {
      this.name.addClass("is-invalid");
      this.name.removeClass("is-valid");
      $(".nameHint").addClass("d-block");
      $(".nameHint").removeClass("d-none");
    } else {
      this.name.addClass("is-valid");
      this.name.removeClass("is-invalid");
      $(".nameHint").addClass("d-none");
      $(".nameHint").removeClass("d-block");
    }
    return regex.test(this.name.val());
  }
  validateEmail() {
    let regex = /^\w{3,}@[a-z]{4,}\.[a-z]{3,}$/;
    if (!regex.test(this.email.val())) {
      this.email.addClass("is-invalid");
      this.email.removeClass("is-valid");
      $(".emailHint").addClass("d-block");
      $(".emailHint").removeClass("d-none");
    } else {
      this.email.addClass("is-valid");
      this.email.removeClass("is-invalid");
      $(".emailHint").addClass("d-none");
      $(".emailHint").removeClass("d-block");
    }
    return regex.test(this.email.val());
  }
  validatePhone() {
    let regex = /^2?01[0125][0-9]{8}$/;
    if (!regex.test(this.phone.val())) {
      this.phone.addClass("is-invalid");
      this.phone.removeClass("is-valid");
      $(".phoneHint").addClass("d-block");
      $(".phoneHint").removeClass("d-none");
    } else {
      this.phone.addClass("is-valid");
      this.phone.removeClass("is-invalid");
      $(".phoneHint").addClass("d-none")
      $(".phoneHint").removeClass("d-block")
    }
    return regex.test(this.phone.val());
  }
  validateAge() {
    if (this.age.val() > 0 && this.age.val() <= 100) {
      this.age.addClass("is-valid");
      this.age.removeClass("is-invalid");
      $(".ageHint").addClass("d-none");
      $(".ageHint").removeClass("d-block");
      return true;
    } else {
      this.age.addClass("is-invalid");
      this.age.removeClass("is-valid");
      $(".ageHint").addClass("d-block");
      $(".ageHint").removeClass("d-none");
      return false;
    }
  }
  validatePass() {
    let regex = /^[A-Z][\w|$#!]{7,24}$/;
    if (!regex.test(this.pass.val())) {
      this.pass.addClass("is-invalid");
      this.pass.removeClass("is-valid");
      $(".passHint").addClass("d-block");
      $(".passHint").removeClass("d-none");
    } else {
      this.pass.addClass("is-valid");
      this.pass.removeClass("is-invalid");
      $(".passHint").addClass("d-none")
      $(".passHint").removeClass("d-block")
    }
    return regex.test(this.pass.val());
  }
  validateRePass() {
    if (this.rePass.val() != this.pass.val()) {
      this.rePass.addClass("is-invalid");
      this.rePass.removeClass("is-valid");
      $(".rePassHint").addClass("d-block");
      $(".rePassHint").removeClass("d-none");
      return false;
    } else if (this.rePass.val() == this.pass.val() && this.validatePass()) {
      this.rePass.addClass("is-valid");
      this.rePass.removeClass("is-invalid");
      $(".rePassHint").addClass("d-none")
      $(".rePassHint").removeClass("d-block")
      return true;
    }
  }
  checkFinish() {
    if (
      this.name.val() != "" &&
      this.email.val() != "" &&
      this.phone.val() != "" &&
      this.age.val() != "" &&
      this.pass.val() != "" &&
      this.rePass.val() != ""
    ) {
      if (
        this.validateName() &&
        this.validateEmail() &&
        this.validatePhone() &&
        this.validateAge() &&
        this.validatePass() &&
        this.validateRePass()
      ) {
        $("#sumbitBtn").removeAttr("disabled");
      }
    }
  }
  clear() {
    this.ui.displayContact();
  }
}
