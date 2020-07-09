// Section 9: Coding Exercise 23

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
};


function collectStrings(obj) {
    let stringsFound = [];

    function findStrings(obj) {
        Object.values(obj).forEach(value => {
            if (typeof (value) === 'object') {
                findStrings(value);
            } else if (typeof (value) === 'string') {
                stringsFound.push(value);
            }
        });
        return stringsFound;
    }

    return findStrings(obj);
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"]

//  what I have to know
    // Object.values(myObj) and not myPbj.values()
    
    // Cheking types
        // typeof (myObj) => 'object';
        // typeof (myStr) => 'string';
        // typeof (myNum) => 'number';
    
    // Well see