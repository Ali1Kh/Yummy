import { Meals } from "./meals.js";
import { ui } from "./ui.js";
export class Ingredients {
  constructor() {
    this.homeUi = new ui();
    this.homeUi.displayLoadPage();
    this.getIngredients();
    this.meals = new Meals();
  }
  async getIngredients() {
    this.homeUi.displayLoadPage();
    let apiRespone = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
    let resultData = await apiRespone.json();
    this.homeUi.displayIngredients(resultData.meals);
    this.sendIngredients();
  }
  sendIngredients() {
    $(".ingredientsCardItem").click((e) => {
      this.getIngredientsMeals(
        $($(e.target).parents(".ingredientsCardItem")).attr("data-ingredients")
      );
    });
  }
  async getIngredientsMeals(ingredientsName) {
    this.homeUi.displayLoadPage();
    let apiRespone = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientsName}`
    );
    let resultData = await apiRespone.json();
    this.homeUi.displayMeals(resultData.meals);
    this.meals.sendMealDetails();
  }
}
