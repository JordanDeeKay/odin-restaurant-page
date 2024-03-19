const createMenu = () => {
    const mainDiv = document.getElementById("content");
    const menuDiv = document.createElement("div");
    const menuList = document.createElement("ul");

    mainDiv.innerHTML = '';

    menuDiv.classList.add("page");

    const menu = ['Beef Wellington', 'Fish and Chips', 'Salmon', 'Roast Chicken', 'Pulled Pork Sliders'];

    for (let i = 0; i < menu.length; i++) {
        const menuItem = document.createElement("li");
        menuItem.innerHTML = menu[i];

        menuList.appendChild(menuItem);
    }

    menuDiv.appendChild(menuList);
    mainDiv.appendChild(menuDiv);

    return menuDiv;
}

export default createMenu;