const fs = require("fs");

// Ändere den Textinhalt der Datei "blog1.txt" in “Ich bin ein Webdeveloper”

fs.writeFile("./blog1.txt", "Ich bin ein Webdeveloper!", (err) => {
    if (err)
        return console.log("can not write the File")


})

// Erstelle eine neue Datei "blog2.txt" und trage dort einen beliebigen Text ein.

fs.writeFile("./blog2.txt", "Ich bin immer noch ein Webdeveloper!", (err) => {
    if (err)
        return console.log("can not write the File")

})

// Überprüfe, ob der Ordner "assets" bereits existiert.Falls ja, lösche diesen.



// Erstelle einen neuen Ordner "assets".

if (fs.existsSync("./assets")) {
    fs.rmdirSync("./assets")
    console.log("assets removed successfully")
    if (!fs.existsSync("./assets")) {
        fs.mkdirSync("./assets", (err) => console.log(err))
        console.log("assets created successfully")
    }
} else {
    fs.mkdirSync("./assets", (err) => console.log(err))
    console.log("assets created successfully")
}



// Überprüfe, ob die Datei "delete.txt" bereits existiert.Falls ja, lösche diese.

if (fs.existsSync("./delete.txt")) {
    fs.unlinkSync("./delete.txt", (err) => console.log(err))
    console.log("delete.txt removed successfully")
    if (!fs.existsSync("./delete.txt")) {
        fs.writeFileSync("./delete.txt", "", (err) => console.log(err))
        console.log("delete.txt created successfully")
    }
} else {
    fs.writeFileSync("./delete.txt", "", (err) => console.log(err))
    console.log("delete.txt created successfully")
}

// Erstelle eine Datei namens "Hello.txt" und trage dort einen beliebigen Text ein.Benenne die Datei anschließend in "HelloWorld.txt" um.

fs.writeFileSync("./Hello.txt", "", () => {

    console.log("'Hello.txt' has been created successfully")
})

fs.rename("./Hello.txt", "./HelloWorld.txt", (err) => err ? console.log(err) : null)



