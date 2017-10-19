/*
1. create a div, OK 
2. give it the CSS className "box", OK
3. add your username as text, OK
4. append the div to the element with the id "boxes", OK
5. add three event listeners. The listeners it needs are a click listener, a mouseover listener, and a mouseout listener. OK
6. The mouseover and mouseout functions will toggle a CSS className called "highlight". OK
7. Your click function should change the color of your border and the background-color of the box. OK
*/
var GUZE0001 = {
    init: function () {
        let childDiv = document.createElement("div");
        childDiv.classList.add("box");
        childDiv.textContent = "guze0001";
        let boxesDiv = document.querySelector("#boxes");
        childDiv.addEventListener("click", GUZE0001.boxesClick);
        childDiv.addEventListener("mouseover", GUZE0001.boxesMouseOver);
        childDiv.addEventListener("mouseout", GUZE0001.boxesMouseOut);
        boxesDiv.appendChild(childDiv);
    },
    boxesClick: function (ev) {
        ev.currentTarget.style.borderColor = GUZE0001.generateRandomColour() ;
        ev.currentTarget.style.backgroundColor = GUZE0001.generateRandomColour();
    },
    boxesMouseOver: function (ev) {
        ev.currentTarget.classList.toggle("highlight");
    },
     boxesMouseOut: function (ev) {
         ev.currentTarget.style= null;
        ev.currentTarget.classList.toggle("highlight");
    },
    generateRandomColour : function(){
        let letters = "0123456789ABCDEF";
        let colourCode= "#";
        for (let i = 0 ; i<6; i++ )
            {
                let num= Math.floor(Math.random()*16);
                colourCode += letters[num];
            }
        return colourCode;
    }
}
