const createAbout = () => {
    const mainDiv = document.getElementById("content");
    const element = document.createElement("div");
    const aboutUs = document.createElement("p");
    const infoElement = document.createElement("p");

    mainDiv.innerHTML = '';

    element.classList.add("page");

    aboutUs.innerHTML = 'About Us';
    infoElement.innerHTML = '8 Michelin stars for 5 years in a row. Quite possibly the greatest restaurant there is and ever was.';

    element.appendChild(aboutUs);
    element.appendChild(infoElement);
    mainDiv.appendChild(element);

    return element;
}

export default createAbout;