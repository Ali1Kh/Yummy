import { Meals } from "./meals.js";
import { ui } from "./ui.js";
export class Ingredients {
  constructor() {
    this.getIngredients();
    this.homeUi = new ui();
    this.meals = new Meals();
  }
  async getIngredients() {
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
    let apiRespone = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientsName}`
    );
    let resultData = await apiRespone.json();
    console.log(ingredientsName);
    this.homeUi.displayMeals(resultData.meals);
    this.meals.sendMealDetails();
  }
}
