import { ui } from "./ui.js";
export class Meals {
  constructor() {
    this.homeUi = new ui();
  }
  async getMeals() {
    let apiRespone = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    );
    let resultData = await apiRespone.json();
    this.homeUi.displayMeals(resultData.meals);
    this.sendMealDetails();
  }
  sendMealDetails() {
    $(".uiCardItem").click((e) => {
      this.getDetails(
        $($(e.target).parents(".uiCardItem")).attr("data-id")
      );
    });
  }
  async getDetails(mealId) {
    let apiRespone = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    let resultData = await apiRespone.json();
    this.homeUi.displayMealDetailes(resultData.meals[0]);
  }
}
