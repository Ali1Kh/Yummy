import { Meals } from "./meals.js";
import { ui } from "./ui.js";
export class Categories {
  constructor() {
    this.homeUi = new ui();
    this.homeUi.displayLoadPage();
    this.getCategories();
    this.meals = new Meals();
  }
  async getCategories() {
    this.homeUi.displayLoadPage();
    let apiRespone = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    let resultData = await apiRespone.json();
    this.homeUi.displayCategories(resultData.categories);
    this.sendCategory();
  }
  sendCategory() {
    $(".uiCardItem.category").click((e) => {
      this.getCategoryMeals(
        $($(e.target).parents(".uiCardItem.category")).attr("data-category")
      );
    });
  }
  async getCategoryMeals(categoryName) {
    this.homeUi.displayLoadPage();
    let apiRespone = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    );
    let resultData = await apiRespone.json();
    this.homeUi.displayMeals(resultData.meals);
    this.meals.sendMealDetails();
  }
}
