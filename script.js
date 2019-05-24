function myFunction() {
    var number = document.getElementById("array").value;
    number = number.replace(/\s/g, '');
    console.log(number);
    var array = [];
    array = number.split("");
    console.log(array.length);
    var array3 = [];
    for (var i = 0; i < array.length; i++) {
        var array1 = [];
        var array2 = [];
        var number;
        for (var j = 0; j < array.length; j++) {

            var n = array[i] - array[j];
            if (n === 1 || n === 0 || n === -1) {
                var a, b, c;
                if (array[i] === array[j]) {
                    array1.push(array[i]);
                    console.log("array1" + array1);
                }
                else {
                    array2.push(array[j]);
                    if (array2.length > 1) {
                        var temp;
                        var count = 0;
                        var count1 = 0;
                        for (var k = 0; k < array2.length; k++) {
                            for (var l = k + 1; l < array2.length; l++) {
                                if (array2[k] > array2[l]) {
                                    temp = array2[l];
                                    array2[l] = array2[k];
                                    array2[k] = temp;
                                }
                            }
                            console.log("array2 : " + array2);
                            if (array2[k] === array2[0]) {
                                count++;

                            } else {
                                count1++;
                            }
                            a = count;
                            b = count1;
                            console.log("a : " + a + " b : " + b);
                        }
                        c = Math.max(a, b);
                        console.log("Max of a,b " + Math.max(a, b));
                    } else if (array2.length === 1) {
                        c = 1;
                    }
                    number = array1.length + c;
                    array3.push(number);
                }
            } else {
                console.log("else " + array[i]);
            }
        }

    }
    for (var x = 0; x < array3.length; x++) {
        for (var y = x + 1; y < array3.length; y++) {

            if (array3[x] < array3[y]) {
                var temp1 = array3[y];
                array3[y] = array3[x];
                array3[x] = temp1;
            }
        }
    }
    console.log("Final : " + array3[0]);
    document.getElementById("demo").innerHTML = array3[0];
}