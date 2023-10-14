class Login {
  constructor(name, email, pass) {
    this.user.name = name;
    this.user.email = email;
    this.user.pass = pass;
  }
  user = {
    email: "",
    name: "",
    pass: "",
  };
  regUser(name, email, pass) {
    this.pass = pass;
    this.email = email;
    this.name = name;
  }
}

const login = new Login("Luiz", "gui@gmail.com", "12345678");
console.log(login);
