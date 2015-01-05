// before form is load
function before_load() {
     /* console.log("form id:" + document.getElementById('form10').id);
var formObj = document.getElementById('form10');
var elementsObj = formObj.elements;
for (var i = 0; i <= 16; i++) {
var fieldObj = elementsObj.item(i);
console.log("field name on submission:" + fieldObj.name);
console.log("field value on submission:" + fieldObj.value);

}

console.log("size value: " + elementsObj.namedItem("wdform_9_element10").value);
*/
}

// before form submit
function before_submit() {
     var formObj = document.getElementById('form10');
     var elementsObj = formObj.elements;
     for (var i = 0; i <= 16; i++) {
          var fieldObj = elementsObj.item(i);
          console.log("field name on submission:" + fieldObj.name);
          console.log("field value on submission:" + fieldObj.value);
          
     }
     
}

// before form reset
function before_reset() {
     
}