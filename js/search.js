import { Meals } from "./meals.js";
import { ui } from "./ui.js";
export class searchMeals {
  constructor() {
    this.ui = new ui();
    this.ui.displaySearch();
    this.home = new Meals();
    $(".searchName input").keyup(() => {
      this.searchName($(".searchName input").val());
    });
    $(".searchLetter input").keyup(() => {
      this.searchLetter($(".searchLetter input").val());
    });
  }
  async searchName(mealName) {
    let apiRespone = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
    );
    let resultData = await apiRespone.json();
    this.ui.displayMeals(resultData.meals);
    // this.home.sendDetails();
  }
  async searchLetter(mealName) {
    let apiRespone = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${mealName}`
    );
    let resultData = await apiRespone.json();
    this.ui.displayMeals(resultData.meals);
    // this.home.sendDetails();
  }
}
