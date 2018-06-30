var recipes = { margarita: "limes" };

function updateObjectWithKeyAndValue(recipes, key, value) {
  
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  Object.assign({recipes}, { key: "value" });
}

function deleteFromObjectByKey(recipes, key) {
  delete recipes[key];
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  
}