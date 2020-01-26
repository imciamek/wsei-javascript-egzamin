//1
let sample_class = document.getElementsByClassName("sample_class");

function getTagsOfElements(elements) {
    let tag = [];
    for(let i = 0; i < elements.length; i++) {
        tag.push(elements[i].tagName);
    }
    return tag;
}
console.log(getTagsOfElements(sample_class));


//2
let sid = document.getElementById("sample_id");

console.log(sid.classList);

function getClassesofElements(element) {
    let array = [];

    for (let i=0; i< element.length; i++) {
        array.push(element[i]);
    }
    return array;
}
console.log(getClassesofElements(sid.classList));


//3
const sample_class2 = document.getElementsByClassName("sample_class_2")[0].children[0].children;

function getInnerTextOfElements(elements) {
    let text = [];
    for(let i=0; i<elements.length; i++)
        text.push(elements[i].innerText);
    return text;
}
console.log(getInnerTextOfElements(sample_class2));


//4
const links = document.querySelectorAll("a");

function getAddressesOfElements(elements) {
    let array4 = [];
    for(let i=0; i<elements.length; i++) 
        array4.push(elements[i].getAttribute("href"));

        array4.forEach(element => {
            if(element == null)
                array4.pop(element);
        });
        return array4;
}
console.log(getAddressesOfElements(links));


//5
const child = document.getElementsByClassName("sample_class_3")[0].children;
console.log(getTagsOfElements(child));