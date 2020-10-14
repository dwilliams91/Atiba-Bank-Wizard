$("#reoccuringCharges").toggle()

var actualCharges = []
const myFakeBankDatabase = [
    { description: "postmates", amount: 51, date: "9/14" },
    { description: "NES", amount: 127, date: "9/13" },
    { description: "xbox", amount: 59, date: "9/10" },
    { description: "comcast", amount: 192, date: "9/05" },
    { description: "fanduel", amount: 159, date: "9/04" },
    { description: "postmates", amount: 45, date: "8/27" },
    { description: "NES", amount: 136, date: "8/13" },
    { description: "comcast", amount: 186, date: "8/05" },
    { description: "New York Times", amount: 10, date: "8/03" }
]

let bankString = ``
function displayLists(array, displayArea) {
    let bankString = ``
    for (i = 0; i < array.length; i++) {
        bankString +=
            `
  <tr>
      <th scope="row">`+ (i + 1) + `</th>
      <td>`+ array[i].description + `</td>
      <td>`+ array[i].amount + `</td>
      <td>`+ array[i].date + `</td>
   </tr>
      `
        $("#bankTable").html(bankString)

    }
}
//   end of displaying lists

var listArea = "#bankTable"
displayLists(myFakeBankDatabase, listArea);

let similarCharges = []
// this searches the database
function searchDataBase(myArray) {
    for (i = 0; i < myArray.length; i++) {
        for (j = i + 1; j < myArray.length; j++) {
            let firstVar = myArray[i].description
            let secondVar = myArray[j].description
            if (firstVar == secondVar) {
                similarCharges.push(myArray[i].description)
            }
        }
    }
    $("#outputArea").text(similarCharges)
}
searchDataBase(myFakeBankDatabase)

console.log(similarCharges)
// this creates the checkboxes



$(document).ready(function () {
    $('#submit').click(function () {
        $('#submit').toggle()
        $("#reoccuringCharges").toggle()

        var instructionsText = "<h3 id=theInstruction>Below are common reoccuring charges. Please select which ones are accounts set up by auto-pay then click submit</>"
        $("#instructions").html(instructionsText)
        for (var value of similarCharges) {
            $('#possibleReoccuringChargesArea')
                .append(`<input type="checkbox" class="checks" id="${value}" name="interest" value="${value}">`)
                .append(`<label for="${value}">${value}</label></div>`)
                .append(`<br>`);
        }

        // $(`#container`)
        // .append(`<button id=reoccuringCharges> submit </button`)
    })
});
// this is the checkbox stuff
$(document).ready(function () {
    $("#reoccuringCharges").click(function () {
        var actualCharges = []
        var checks = document.getElementsByClassName('checks');
        for (i = 0; i < similarCharges.length; i++) {
            if (checks[i].checked === true) {
                actualCharges.push(checks[i].value);
            }
        }
        console.log(actualCharges)

        var JSONreadyCharges = JSON.stringify(actualCharges)

        localStorage.setItem(`charges`, JSONreadyCharges)


    })
})

