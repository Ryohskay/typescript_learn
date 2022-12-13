interface User {
    name: string;
    age: number;
    location: string;
}

const user : User = {
    name: "Daniel",
    age: 26,
    location: "Edinburgh"
};

let city : string = user.location.toString();
console.log(city);