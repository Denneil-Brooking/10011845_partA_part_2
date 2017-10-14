//var homes
let seats = [, false, false, false, false, false, false, false, false, false, false];
let first = 1;
let eco = 6;
let taken = 0;
let another = window.confirm
console.log("var pass");

//function for everything
let Booking = () => {
    let Class = parseInt(document.getElementById("book").Class.value);
    console.log("function open");

    let firstclass = () =>
        console.log("loop start");
    if (taken <= 10) {
        //First class start
        if (Class == 1) {
            if (first <= 5 && seats[first] == 0) {
                alert("Your Seat # is" + " " + first);
                seats[first] = 1;
                ++first;
                ++taken;
                console.log(seats + " last assigned seat: #" + taken);
                console.log("first class pass");

                //First class out of seats book in eco option
            } else if (first > 5 && eco <= 10) {
                let change = window.confirm('First Class is full! Would you like to book in economy? \nSelect "Ok" to book in Economy \nSelect "Cancel" to wait for the next flight.');
                console.log("change from first to eco");
                if (change) {
                    alert("Your seat # is" + " " + eco);
                    seats[eco] = 1;
                    ++eco;
                    ++taken;
                    console.log(seats + " last assigned seat: #" + taken);
                    console.log("change 1 pass");

                } else
                    alert("Flight leaves in 3 hours");
                console.log("section first end");


                //Eco class start
            } else if (Class == 2) {
                if (eco <= 10 && seats[eco] == 0) {
                    alert("Your seat # is" + " " + eco);
                    seats[eco] = 1;
                    ++eco;
                    ++taken;
                    console.log(seats + " last assigned seat: #" + taken);
                    console.log("eco class pass");

                    //Eco class out of seats book in first option
                } else if (eco > 10 && first <= 5) {
                    let change = window.confirm('Economy is full! Would you like to book in First class? \nSelect "Ok" to book in First class \nSelect "Cancel" to wait for the next flight.');
                    console.log("change from eco to first");

                    if (change) {
                        alert("Your seat # is" + " " + first);
                        seats[first] = 1;
                        ++first;
                        ++taken;
                        console.log(seats + " last assigned seat: #" + taken);
                        console.log("change 2 pass");

                    } else
                        alert("Flight leaves in 3 hours");
                    console.log("section eco end");
                }

            }
        }
    }
}

console.log("end");