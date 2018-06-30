var recipes = { margarita: "limes" };

function updateObjectWithKeyAndValue(recipes, key, value) {

}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  Object.assign({}, { key: "value" });
  return recipes;
}

function deleteFromObjectByKey(recipes, key) {
  
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  
}