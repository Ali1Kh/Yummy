import { Meals } from "./meals.js";
import { Categories } from "./categories.js";
import { searchMeals } from "./search.js";
import { Areas } from "./area.js";
import { Ingredients } from "./ingredients.js";
import { ui } from "./ui.js";
import { Contact } from "./contact.js";
export class Home {
  constructor() {
    new Meals().getMeals();
    this.ui = new ui();
    // !Sections Buttons
    $(".sideBar .sideBarInner li a").click(() => {
      this.closeSideBar();
    });
    $(".searchBtn").click(() => {
      new searchMeals();
    });
    $(".categoriesBtn").click(() => {
      new Categories();
    });
    $(".areaBtn").click(() => {
      new Areas();
    });
    $(".ingredientsBtn").click(() => {
      new Ingredients();
    });
    $(".contactBtn").click(() => {
      new Contact();
    });
    //?Remove search inputs
    $($(".searchBtn").parent().siblings()).click(() => {
      $("main .row.searchInputs").html("");
    });
    //! Side Bar Toggle
    this.innerWidth = $(".sideBarInner").innerWidth();
    $(".sideBar").css("left", -this.innerWidth);
    $(".sideBar .barBtn").click(() => {
      if ($(".sideBar").css("left") == "0px") {
        this.closeSideBar();
      } else {
        this.openSideBar();
      }
    });
    $("main").click(() => {
      this.closeSideBar();
    });
  }
  openSideBar() {
    $(".sideBar").animate({ left: "0px" }, 400);
    $(".sideBar .barBtn #menuIcon").addClass("fa-xmark");
    $(".sideBar .barBtn #menuIcon").removeClass("fa-bars");
    // ? Animate list
    $(".sideBar .sideBarInner li")
      .eq(0)
      .addClass("animate__fadeInUp animate__delay-150ms");
    $(".sideBar .sideBarInner li")
      .eq(1)
      .addClass("animate__fadeInUp animate__delay-200ms");
    $(".sideBar .sideBarInner li")
      .eq(2)
      .addClass("animate__fadeInUp animate__delay-250ms");
    $(".sideBar .sideBarInner li")
      .eq(3)
      .addClass("animate__fadeInUp animate__delay-300ms");
    $(".sideBar .sideBarInner li")
      .eq(4)
      .addClass("animate__fadeInUp animate__delay-350ms");
  }
  closeSideBar() {
    $(".sideBar").animate({ left: -this.innerWidth }, 400);
    $(".sideBar .barBtn #menuIcon").addClass("fa-bars");
    $(".sideBar .barBtn #menuIcon").removeClass("fa-xmark");
    $(".sideBar .sideBarInner li").removeClass("animate__fadeInUp");
  }
}
