const createHome = () => {
    const mainDiv = document.getElementById("content");
    const element = document.createElement("div");
    const quoteElement = document.createElement("p");

    mainDiv.innerHTML = '';

    element.classList.add("page");
    quoteElement.classList.add("quote");

    quoteElement.innerHTML = '"A spectacular dining experience, one to remember for the ages." - Gordon Ramsay, probably';

    element.appendChild(quoteElement);
    mainDiv.appendChild(element);

    return element;
}

export default createHome;