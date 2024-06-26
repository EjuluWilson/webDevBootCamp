import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//Step 1: Run the solution.js file without looking at the code.
//Step 2: You can go to the recipe.json file to see the full structure of the recipeJSON below.
const recipeJSON =
  '[{"id": "0001","type": "taco","name": "Chicken Taco","price": 2.99,"ingredients": {"protein": {"name": "Chicken","preparation": "Grilled"},  "salsa": {"name": "Tomato Salsa","spiciness": "Medium"},  "toppings": [{"name": "Lettuce",  "quantity": "1 cup",  "ingredients": ["Iceberg Lettuce"]  },      {"name": "Cheese",  "quantity": "1/2 cup",  "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]  },      {"name": "Guacamole",  "quantity": "2 tablespoons",  "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]  },      {"name": "Sour Cream",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream"]  }      ]    }  },{"id": "0002","type": "taco","name": "Beef Taco","price": 3.49,"ingredients": {"protein": {"name": "Beef","preparation": "Seasoned and Grilled"},  "salsa": {"name": "Salsa Verde","spiciness": "Hot"},  "toppings": [{"name": "Onions",  "quantity": "1/4 cup",  "ingredients": ["White Onion", "Red Onion"]  },      {"name": "Cilantro",  "quantity": "2 tablespoons",  "ingredients": ["Fresh Cilantro"]  },      {"name": "Queso Fresco",  "quantity": "1/4 cup",  "ingredients": ["Queso Fresco"]  }      ]    }  },{"id": "0003","type": "taco","name": "Fish Taco","price": 4.99,"ingredients": {"protein": {"name": "Fish","preparation": "Battered and Fried"},  "salsa": {"name": "Chipotle Mayo","spiciness": "Mild"},  "toppings": [{"name": "Cabbage Slaw",  "quantity": "1 cup",  "ingredients": [    "Shredded Cabbage",    "Carrot",    "Mayonnaise",    "Lime Juice",    "Salt"          ]  },      {"name": "Pico de Gallo",  "quantity": "1/2 cup",  "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]  },      {"name": "Lime Crema",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream", "Lime Juice", "Salt"]  }      ]    }  }]';
const recipeList = JSON.parse(recipeJSON);

let choiceData; // recipeList item

// response object
let choiceResponse = {
  recipename: undefined,
  proteinName: undefined,
  proteinPreparation: undefined,
  salsaName: undefined,
  toppingsList: undefined,
};

// returns a list of toppings from choiceData.toppings object list
function listToppings(toppings) {
  let toppingsList = [];
  toppings.forEach((toppingObject) => {
    toppingObject.ingredients.forEach((ingredient) => {
      toppingsList.push(toppingObject.quantity + " of " + ingredient );
    });
  });
  return toppingsList
}

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/recipe", (req, res) => {
  //Step 3: Write your code here to make this behave like the solution website.
  //Step 4: Add code to views/index.ejs to use the recieved recipe object.
  const choice = req.body.choice;
  switch (choice) {
    case "chicken":
      choiceData = recipeList[0];
      break;
    case "beef":
      choiceData = recipeList[1];
      break;
    case "fish":
      choiceData = recipeList[2];
      break;
    default:
      break;
  }
  choiceResponse.recipename = choiceData.name;
  choiceResponse.proteinName = choiceData.ingredients.protein.name;
  choiceResponse.proteinPreparation =
    choiceData.ingredients.protein.preparation;
  choiceResponse.salsaName = choiceData.ingredients.salsa.name;
  choiceResponse.toppingsList = listToppings(choiceData.ingredients.toppings);

  res.render("index.ejs", choiceResponse);

  console.log(`The toppingsList is: ${choiceResponse.toppingsList}`);
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
