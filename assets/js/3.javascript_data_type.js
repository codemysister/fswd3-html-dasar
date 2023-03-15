// Tipe Data

// Primitive

    // Number
    let umur = 20;
    let bil = 8.32; //decimal
    let bigInt = 1128735182357153712835178235871n;

    // String
    let nama = "Deva Apriana" // double quote 
    let alamat = 'Purwokerto' // single quote 
    let kampus = `Telkom
                  Purwokerto` // backtick 

    // Boolean
    let isAdmin = true;
    let isLogin = false;

    // Null
    let hati = null;

    // Undifined
    let name;
    console.log(name)

    // Symbol
    let gender = Symbol('pria');
    console.log(gender);
    console.log(gender.description);



// Non Primitive

    // Object
    let employee = {
        name: "Deva",
        age: 20,
        job: "Web Developer",
        isMarried: false,
        hobies: ["Fishing", "Camping"],
    };

    console.log(`His name is ${employee.name}`);