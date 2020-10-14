const databaseOfCommonCharges = [
    { company: "NES", link: "https://www.nespower.com/content.aspx?page=autotransfer" },
    { company: "comcast", link: "https://www.xfinity.com/support/articles/setting-up-auto-payments" },
    { company: "New York Times", link: "https://help.nytimes.com/hc/en-us/articles/115014911008-Billing-Help" }
]


let fromStorage = localStorage.getItem(`charges`)
let listOfCharges = JSON.parse(fromStorage)
console.log(fromStorage)

let arrayOfLinks = []


function findRightLink(arrayFromCharges, arrayFromDatabase) {
    for (i = 0; i < arrayFromDatabase.length; i++) {
        for (j = 0; j < arrayFromCharges.length; j++) {
            if (arrayFromCharges[j] == arrayFromDatabase[i].company) {
                arrayOfLinks.push(arrayFromDatabase[i].link)
            }
        }
    }
    console.log(arrayOfLinks)
}

findRightLink(listOfCharges, databaseOfCommonCharges)







function displayLists(array, arrayOfLinks) {

    let myString = ""
    for (i = 0; i < array.length; i++) {
        myString +=
            `<a class=links href=` + arrayOfLinks[i] + `>` + array[i] + `</a> <br></br>`



    }
    $("#displayList").html(myString)
}



displayLists(listOfCharges, arrayOfLinks);
