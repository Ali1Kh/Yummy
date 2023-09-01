import { Meals } from "./meals.js";
import { Categories } from "./categories.js";
import { searchMeals } from "./search.js";
import { Areas } from "./area.js";
import { Ingredients } from "./ingredients.js";
export class Home {
  constructor() {
    new Meals().getMeals();
    // !Sections Buttons
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
    $(".sideBar .sideBarInner li a").click(() => {
      this.closeSideBar();
    });

    $("main").click(() =>{ 
      this.closeSideBar();
    });
  }

  openSideBar() {
    $(".sideBar").animate({ left: "0px" }, 400);
    $(".sideBar .barBtn i").addClass("fa-xmark");
    $(".sideBar .barBtn i").removeClass("fa-bars");
  }
  closeSideBar() {
    $(".sideBar").animate({ left: -this.innerWidth }, 400);
    $(".sideBar .barBtn i").addClass("fa-bars");
    $(".sideBar .barBtn i").removeClass("fa-xmark");
  }
}
