export class ui {
  constructor() {}
  displayMeals(meal) {
    this.meals = ``;
    if (meal == null) {
      return;
    }
    for (let i = 0; i < meal.length; i++) {
      this.meals += `
<div class="col-xxl-3 col-lg-4 col-md-6">
<div class="uiCardItem meals rounded-3 overflow-hidden" data-id=${meal[i].idMeal}>
    <div class="cardImage position-relative">
        <img class="w-100" src= ${meal[i].strMealThumb} alt="">
        <div class="cardLayer opacity-0 d-flex align-items-center position-absolute bottom-0 start-0 end-0 bg-white bg-opacity-75">
            <h3 class="text-black ps-3">${meal[i].strMeal}</h3>
        </div>
    </div>
</div>
</div>`;
    }
    $("main .row.mainRow").html(this.meals);
    $("main .row.mainRow .uiCardItem.meals").ready(() => {
      this.displayPageLoaded();
    });
  }
  displayMealDetailes(mealDetails) {
    this.tags = ``;
    this.recipes = ``;
    for (let i = 1; i <= 20; i++) {
      if (mealDetails["strIngredient" + i] != "")
        this.recipes += `<span class="rounded-3 d-inline-block p-1 m-1">${
          mealDetails["strMeasure" + i]
        } ${mealDetails["strIngredient" + i]}</span>`;
    }
    if (mealDetails.strTags != null) {
      let split = mealDetails.strTags.split(",");
      for (let i = 0; i < split.length; i++) {
        this.tags += `<span class="rounded-3 px-3 py-1 d-inline-block m-1">${split[i]}</span>`;
      }
    } else {
      this.tags = ``;
    }
    $("main .row.mainRow").html(`
    <div class="col-md-4">
    <div class="image mb-2 rounded-3 overflow-hidden">
        <img class="w-100" src=${mealDetails.strMealThumb}
            alt="">
    </div>
    <h3>${mealDetails.strMeal}</h3>
</div>
<div class="col-md-8">
<div class="header textGray d-flex justify-content-between">
                    <h3>Instructions</h3>
                    <button class="close border-0 bg-transparent"><i class=" fs-3 fa fa-xmark"></i></button>
                </div>
    <p>${mealDetails.strInstructions}</p>
    <div class="infoItem fs-4 fw-semibold mb-2">
        <span>Area : </span><span>${mealDetails.strArea}</span>
    </div>
    <div class="infoItem fs-4 fw-semibold mb-2">
        <span>Category : </span><span>${mealDetails.strCategory}</span>
    </div>
    <div class="recipes infoItem mb-2">
        <div class="fs-4 fw-semibold d-inline-block">Recipes : </div>
        ${this.recipes}
    </div>
    <div class="tags infoItem mb-4">
        <div class="fs-4 fw-semibold mb-1">Tags  : </div> ${this.tags}
    </div>
    <div class="linksBtn">
    <button onclick="window.open('${mealDetails.strSource}')" class="btn btn-success">Source</button>
    <button onclick="window.open('${mealDetails.strYoutube}')" class="btn btn-danger">Youtube</button>
    </div>
</div>
    `);
    $("main .row.mainRow").ready(() => {
      this.displayPageLoaded();
    });
  }
  displaySearch() {
    $("main .row.mainRow").html("");
    $("main .row.searchInputs").html(`
  <div class="col-6">
    <div class="searchName mb-3">
     <input type="text" class="form-control text-white bg-transparent" id="exampleFormControlInput1"
     placeholder="Search By Name">
    </div>
   </div>
   <div class="col-6">
    <div class="searchLetter mb-3">
     <input type="text" class="form-control text-white bg-transparent" id="exampleFormControlInput1"
      placeholder="Search By First Letter"  maxlength="1">
    </div>
   </div>`);
    $("main .row.searchInputs").ready(() => {
      this.displayPageLoaded();
    });
  }
  displayCategories(categories) {
    this.categoriesContainer = ``;
    for (let i = 0; i < categories.length; i++) {
      this.categoriesContainer += `
<div class="col-xxl-3 col-lg-4 col-md-6">
<div class="uiCardItem category rounded-3 overflow-hidden" data-category=${
        categories[i].strCategory
      }>
    <div class="cardImage position-relative">
        <img class="w-100" src= ${categories[i].strCategoryThumb} alt="">
        <div class="cardLayer p-3 text-center text-black opacity-0 d-flex flex-column justify-content-center align-items-center position-absolute bottom-0 start-0 end-0 bg-white bg-opacity-75">
            <h3>${categories[i].strCategory}</h3>
            <p class="fs-7 text-black">${
              categories[i].strCategoryDescription.split(".")[0]
            }</p>
        </div>
    </div>
</div>
</div>`;
    }
    $("main .row.mainRow").html(this.categoriesContainer);
    $("main .row.mainRow .uiCardItem").ready(() => {
      this.displayPageLoaded();
    });
  }
  displayAreas(areas) {
    this.areasContainer = ``;
    for (let i = 0; i < areas.length; i++) {
      this.areasContainer += `
<div class="col-xxl-3 col-lg-4 col-md-6">
<div class="areaCardItem text-center rounded-3 overflow-hidden" data-area=${areas[i].strArea}>
    <div class="cardIcon mb-2">
    <i class="fa-solid fa-house-flag"></i> </div>
       <h3>${areas[i].strArea}</h3>     
       
</div>
</div>`;
    }
    $("main .row.mainRow").html(this.areasContainer);
    $("main .row.mainRow .areaCardItem").ready(() => {
      this.displayPageLoaded();
    });
  }
  displayIngredients(ingredients) {
    this.ingredientsContainer = ``;
    for (let i = 0; i < ingredients.length; i++) {
      this.ingredientsContainer += `
<div class="col-xxl-3 col-lg-4 col-md-6">
<div class="ingredientsCardItem text-center rounded-3 overflow-hidden" data-ingredients=${ingredients[i].strIngredient}>
    <div class="cardIcon mb-2">
    <i class="fa-solid fa-drumstick-bite"></i>
    </div>
       <h3>${ingredients[i].strIngredient}</h3>
</div>
</div>`;
    }
    $("main .row.mainRow").html(this.ingredientsContainer);
    $("main .row.mainRow .ingredientsCardItem").ready(() => {
      this.displayPageLoaded();
    });
  }
  displayContact() {
    $("main .row.mainRow").html(`
    <div class="contactContainer vh-100 d-flex flex-column align-items-center justify-content-center">
    <div class="row mb-2 gy-2">
        <div class="col-md-6">
            <div class="mb-3">
                <input id="name" type="text" class="form-control" id="exampleFormControlInput1"
                    placeholder="Enter Your Name">
                    <div class="nameHint hint d-none mt-2 text-center rounded-3 p-2 w-100">
                    <small class="text-danger">Please Enter Vaild Name</small>
                    </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="mb-3">
                <input id="email" type="email" class="form-control" id="exampleFormControlInput1"
                    placeholder="Enter Your Email">
                    <div class="emailHint hint d-none mt-2 text-center rounded-3 p-2 w-100">
                    <small class="text-danger">Email not valid *exemple@yyyy.com</small>
                    </div>
            </div>
            
        </div>
        <div class="col-md-6">
            <div class="mb-3">
                <input id="phone" type="text" class="form-control" id="exampleFormControlInput1"
                    placeholder="Enter Your Phone">
                    <div class="phoneHint hint d-none mt-2 text-center rounded-3 p-2 w-100">
                     <small class="text-danger">Enter valid Phone Number</small>
                    </div>
             </div>
            </div>
            
        <div class="col-md-6">
            <div class="mb-3 ">
                <input id="age" min="0" max="100" type="number" class="form-control" id="exampleFormControlInput1"
                    placeholder="Enter Your Age">
                    <div class="ageHint hint d-none mt-2 text-center rounded-3 p-2 w-100">
                     <small class="text-danger">Enter valid age</small>
                    </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="mb-3">
                <input id="pass" type="password" class="form-control" id="exampleFormControlInput1"
                    placeholder="Enter Your Password">
                    <div class="passHint hint d-none mt-2 text-center rounded-3 p-2 w-100">
                     <small class="text-danger">Enter valid password *Minimum eight characters, at least one Captilize letter*</small>
                    </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="mb-3">
                <input id="rePass" type="password" class="form-control" id="exampleFormControlInput1"
                    placeholder="RePassword">
                     <div class="rePassHint hint d-none mt-2 text-center rounded-3 p-2 w-100">
                      <small class="text-danger">Enter valid repassword</small>
                     </div>
            </div>
        </div>
    </div>
    <button id="sumbitBtn" class="btn btn-danger" disabled >Sumbit</button>
</div>
    `);
    $("main .contactContainer").ready(() => {
      this.displayPageLoaded();
    });
  }
  displayLoadPage() {
    $(".loading").fadeIn();
    $(".spinner").fadeIn();
    $(".loading").addClass("d-flex");
    $(".loading").removeClass("d-none");
    $("body").css("overflow", "hidden");
  }
  displayPageLoaded() {
    $(".spinner").fadeOut(900, function () {
      $(".loading").fadeOut(1000, function () {
        $("body").css("overflow", "auto");
        $(".loading").removeClass("d-flex");
        $(".loading").addClass("d-none");
      });
    });
  }
}
