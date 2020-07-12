//Checking if every option is chosen
function formCheck() {

    //Creating variables used to check the values
    var text = document.getElementById("text").value

    //Creating Booleans for deep check
    var select = true
    var change = false

    //Check if every option is selected and displaying a message if not
    if (text == `` || text == null) {
        document.getElementById("txtErr").innerHTML = `Please enter a message`
        select = false
    }
    else
        document.getElementById("txtErr").innerHTML = ``


    //Checking if every option was selected
    if (select == true) {

        //Checking if the source code was altered in order to give an out of range answer
        if (text.length > 100) {
            change = true
        }

        //Passing variables to the link generation function
        linkChange(text, change)
    }

    //If not every option was selected page automatically scrolls back to the top
    else
        window.scrollTo(0, 0)
}

//Link generation function
function linkChange(t, ch) {

    //If the source code was altered a message will be displayed
    if (ch == true) {

        //In one of three cases the visitor will be redirected to Never Gonna Give You up instead of recieving a message
        if (Math.floor(Math.random() * 3) == 0)
            window.location.replace(`https://youtu.be/dQw4w9WgXcQ`)

        //The visitor will recieve a message
        else {
            document.getElementById("resLink").innerHTML = `Funny man you are, changing HTML source code you do.`
            document.getElementById("resLink").removeAttribute("href")
        }
    }

    //Generate Link and enter it into the result bar
    else {
        var link = `${window.location.href}/view?title=${encodeURIComponent(t)}`
        document.getElementById("resLink").innerHTML = link
        document.getElementById("resLink").href = link
    }
}
