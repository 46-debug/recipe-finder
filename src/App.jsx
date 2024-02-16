import React, { useState, useEffect } from "react";
import Header from "./Header";
import Card from "./Card";
import Info from "./Info";

const App = () => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [dish, setDish] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
      const response = await fetch(url);
      const resJson = await response.json();
      setDish(resJson.meals);
      console.log(resJson.meals);
    };
    fetchApi();
  }, [search]);

  const showInfo = (meal) => {
    setSelectedMeal(meal);
    setIsInfoVisible(true);
  };

  const close = () => {
    setIsInfoVisible(false);
  };

  return (
    <>
      <div className="main_div">
        <div className="div1">
          <Header />
          <div className="inpt_div">
            <input
              type="text"
              placeholder="Search"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>

          <div className="cards_div">
            {!dish ? (
              <p>No Data Found</p>
            ) : (
              dish.map((meal) => (
                <Card
                  key={meal.idMeal}
                  name={meal.strMeal}
                  img={meal.strMealThumb}
                  showInfo={() => showInfo(meal)}
                />
              ))
            )}
          </div>
        </div>

        {isInfoVisible && selectedMeal && (
          <Info
            key={selectedMeal.idMeal}
            Instructions={selectedMeal.strInstructions}
            Ingredient1={selectedMeal.strIngredient1}
            Ingredient2={selectedMeal.strIngredient2}
            Ingredient3={selectedMeal.strIngredient3}
            Ingredient4={selectedMeal.strIngredient4}
            Ingredient5={selectedMeal.strIngredient5}
            Ingredient6={selectedMeal.strIngredient6}
            Ingredient7={selectedMeal.strIngredient7}
            Ingredient8={selectedMeal.strIngredient8}
            Ingredient9={selectedMeal.strIngredient9}
            Ingredient10={selectedMeal.strIngredient10}
            Ingredient11={selectedMeal.strIngredient11}

            Measure1={selectedMeal.strMeasure1}
            Measure2={selectedMeal.strMeasure2}
            Measure3={selectedMeal.strMeasure3}
            Measure4={selectedMeal.strMeasure4}
            Measure5={selectedMeal.strMeasure5}
            Measure6={selectedMeal.strMeasure6}
            Measure7={selectedMeal.strMeasure7}
            Measure8={selectedMeal.strMeasure8}
            Measure9={selectedMeal.strMeasure9}
            Measure10={selectedMeal.strMeasure10}
            Measure11={selectedMeal.strMeasure11}

            close={close}
          />
        )}
      </div>
    </>
  );
};

export default App;

