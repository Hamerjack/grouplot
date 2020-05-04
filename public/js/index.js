let lotteryTotal = 0;
let clickCounter = 0;

// console.log(document.documentElement.clientHeight);
// console.log(document.body.clientHeight);
// if(document.documentElement.clientHeight > document.body.clientHeight) {
//     let footer = document.getElementsByTagName("footer");
//     footer[0].className += " footer-class";
// }


function handleChange(checkbox) {
    const lotteryType = checkbox.getAttribute("name");

    switch (lotteryType) {
        case "lotto649":
            if (checkbox.checked == true) {
                createRowForTotal("Lotto 649", 156);
                // createGroupSection("group649");
                lotteryTotal = lotteryTotal + 156;
            } else {
                removeRowForTotal("Lotto 649");
                // removeGroupSection("group649");
                lotteryTotal = lotteryTotal - 156;
            }
            break;
        case "max":
            if (checkbox.checked == true) {
                createRowForTotal("Lotto Max", 123);
                lotteryTotal = lotteryTotal + 123;
            } else {
                removeRowForTotal("Lotto Max");
                lotteryTotal = lotteryTotal - 123;
            }
            break;
        case "ccs":
            if (checkbox.checked == true) {
                createRowForTotal("Canadian Cancer Society", 222);
                lotteryTotal = lotteryTotal + 222;
            } else {
                removeRowForTotal("Canadian Cancer Society");
                lotteryTotal = lotteryTotal - 222;
            }
            break;
        case "hsf":
            if (checkbox.checked == true) {
                createRowForTotal("Heart and Stroke Lottery", 153);
                lotteryTotal = lotteryTotal + 153;
            } else {
                removeRowForTotal("Heart and Stroke Lottery");
                lotteryTotal = lotteryTotal - 153;
            }
            break;
        case "pmhl":
            if (checkbox.checked == true) {
                createRowForTotal("Princess Margaret Home Lottery", 153);
                lotteryTotal = lotteryTotal + 153;
            } else {
                removeRowForTotal("Princess Margaret Home Lottery");
                lotteryTotal = lotteryTotal - 153;
            }
            break;
        case "rmbs":
            if (checkbox.checked == true) {
                createRowForTotal("Rotary Dream Home Lottery", 153);
                lotteryTotal = lotteryTotal + 153;
            } else {
                removeRowForTotal("Rotary Dream Home Lottery");
                lotteryTotal = lotteryTotal - 153;
            }
            break;
        case "sickkids":
            if (checkbox.checked == true) {
                createRowForTotal("Sick Kids", 153);
                lotteryTotal = lotteryTotal + 153;
            } else {
                removeRowForTotal("Sick Kids");
                lotteryTotal = lotteryTotal - 153;
            }
            break;
        default:
            break;
    }

    showTotal(lotteryTotal);

}


function createRowForTotal(lotteryType, price) {
    clickCounter = clickCounter + 1;
    if (lotteryType && price) {
        lotteryTypeClass = lotteryType.replace(/ /ig, "-");

        document.getElementById("lottomax").innerHTML += `

        <div class="row p-3 ${lotteryTypeClass}">
            <div class="col text-center">
                <b>
                    ${lotteryType}

                    <input type="hidden" class="form-control" name="lotteryType" value="${lotteryType}"/>
                </b>
            </div>
            <div class="col">
                <input class="form-control" name="lotteryprice" type="text" value="$${price}" placeholder="$${price}" readonly>
            </div>
        </div>
        `;
    }
}

function removeRowForTotal(lotteryTypeClass) {
    clickCounter = clickCounter - 1;

    lotteryTypeClass = lotteryTypeClass.replace(/ /ig, "-");
    if (lotteryTypeClass) {
        const childNode = document.getElementsByClassName(lotteryTypeClass);
        childNode[0].remove();
    }
    if (clickCounter === 0) {
        const childNode = document.getElementsByClassName("lotteryTotal");
        childNode[0].remove();
    }
}

function showTotal(lotteryTotal) {
    if (lotteryTotal > 0) {
        document.getElementById("lotteryTotal").innerHTML = `
            <div class="row p-3 border-top border-bottom bg-light lotteryTotal">
                <div class="col-sm-6 text-center p-3">
                    <span class="text-muted">
                        Registration Fee
                    </span>
                </div>
                <div class="col-sm-6 p-3">
                    <input class="form-control" type="text" placeholder="$10" readonly>
                </div>
                <div class="col-sm-6 text-center">
                    <b>
                        Total
                    </b>
                </div>
                <div class="col-sm-6">
                    <input class="form-control" name="lotterypricetotal" type="text" value="$${lotteryTotal + 10}" placeholder="$${lotteryTotal + 10}" readonly>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-2">
                    <input name="ageconfirm" type="checkbox" />
                </div>
                <div class="col-sm-10">
                    I am 19 years of age or older and I am currently in the province of Ontario.
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                        <button onclick="myReview()" class="btn-primary">Review Order</button>
                    </div>
            </div>
        `;
    }
}

function myReview(){
    document.getElementById('form1').submit();
     //location.replace("./review")
}

function createGroupSection(elementID) {
    document.getElementById(elementID).innerHTML += `
        <div class="col-4 red">
            <span>Apple</span>
        </div>
        <div class="col-4 bg-light">
            <span>Mango</span>
        </div>
        <div class="col-4 bg-light">
            <span>Test</span>
        </div>
    `;
}

// function removeGroupSection(elementID) {
//     const childNode = document.getElementById(elementID);
//     childNode.remove();
// }



function yesnoCheck() {
    if (document.getElementById('yesCheck').checked) {
        document.getElementById('ifYes').style.visibility = 'visible';
    }
    else document.getElementById('ifYes').style.visibility = 'hidden';
}

function lyesnoCheck() {
    if (document.getElementById('lyesCheck').checked) {
        document.getElementById('lifYes').style.visibility = 'visible';
    }
    else document.getElementById('lifYes').style.visibility = 'hidden';
}

function getRndNum(min, max) {
    return [Math.floor(Math.random() * (max - min)) + min, Math.floor(Math.random() * (max - min)) + min , Math.floor(Math.random() * (max - min)) + min, Math.floor(Math.random() * (max - min)) + min,  Math.floor(Math.random() * (max - min)) + min, Math.floor(Math.random() * (max - min)) + min];
}

function getRndNum1(min, max) {
  return [Math.floor(Math.random() * (max - min)) + min, Math.floor(Math.random() * (max - min)) + min , Math.floor(Math.random() * (max - min)) + min, Math.floor(Math.random() * (max - min)) + min,  Math.floor(Math.random() * (max - min)) + min, Math.floor(Math.random() * (max - min)) + min];
}