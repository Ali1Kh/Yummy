import { Meals } from "./meals.js";
import { ui } from "./ui.js";
export class Areas {
  constructor() {
    this.homeUi = new ui();
    this.homeUi.displayLoadPage();
    this.getAreas();
    this.meals = new Meals();
  }
  async getAreas() {
    this.homeUi.displayLoadPage();
    let apiRespone = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );
    let resultData = await apiRespone.json();
    this.homeUi.displayAreas(resultData.meals);
    this.sendArea();
  }
  sendArea() {
    $(".areaCardItem").click((e) => {
      this.getAreaMeals(
        $($(e.target).parents(".areaCardItem")).attr("data-area")
      );
    });
  }
  async getAreaMeals(areaName) {
    this.homeUi.displayLoadPage();
    let apiRespone = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`
    );
    let resultData = await apiRespone.json();
    this.homeUi.displayMeals(resultData.meals);
    this.meals.sendMealDetails();
  }
}
