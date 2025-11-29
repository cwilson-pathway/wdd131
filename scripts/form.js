const productName = document.querySelector("#products")
const productsList = [
    {
        name: "Camera",
        value: "camera"
    },
    {
        name: "Camera Bag",
        value: "camera-bag"
    },
    {
        name: "microSD Card",
        value: "microsd-card"
    }
];

let productHTML = "";
productsList.forEach(product => {
    const option = document.createElement("option");
    option.setAttribute("value", product.value);
    option.textContent = product.name;
    productName.appendChild(option);
});