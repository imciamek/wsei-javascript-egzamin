//1

let sample_class = document.getElementsByClassName("sample_class");

function getTagsOfElements(elements) {
    let tags = [];
    for(let i = 0; i < elements.length; i++) {
        tags.push(elements[i].tagName);
    }
    return tags;
}
console.log(getTagsOfElements(sample_class));

//2

var sid = document.getElementById("sample_id");

console.log(sid.classList);

function getClassesofElements(element) {
    var array = [];

    for (let i=0; i< element.length; i++) {
        array.push(element[i]);
    }
    return array;
}
console.log(getClassesofElements(sid.classList));

//3
