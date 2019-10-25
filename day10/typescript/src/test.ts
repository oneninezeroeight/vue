function greeter(person:string) {
    return "Hello, " + person;
}

let user:string = 'abc';

document.body.innerHTML = greeter(user);