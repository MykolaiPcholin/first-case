const doc = {
    header: "Document header text",
    body: "Document body text",
    footer: "Document footer text",
    date: "Document date 23/06/2022",

    app: {
        header: "App header text",
        body: "App body text",
        footer: "App footer text",
        date: "App date 23/06/2022",
    },

    show: function () {
        document.write("<header> document.header: " + this.header) + "</header>";
        document.write("</br><body> document.body: " + this.body + "</body>");
        document.write("<div> document.date: " + this.date + "</div>");
        document.write("<footer> document.footer: " + this.footer + "</footer></br>");

        document.write("<div><header> document.app.header: " + this.app.header + "</header></div>");
        document.write("<div><body> document.app.body: " + this.app.body + "</body></div>");
        document.write("<div> document.app.date: " + this.app.date + "</div>");
        document.write("<div><footer> document.app.footer: " + this.app.footer + "</footer></div></br>");    
    },
    showw: function () {
        for (let element in doc) {
            if (typeof doc[element] !== "function") {
                typeof (console.log(doc[element]));
                document.write(doc[element] + "</br>");
            }
        }
    },

    changing: function (property, argument) {
        doc[property] = argument;
    },
}
doc.show();

let property = prompt("Что создаем?");
let argument = prompt("Что в него вносим?");
doc.changing(property, argument); 

doc.changing("fgd", 345);
doc.changing("fgаd", "f345f");

doc.showw();

