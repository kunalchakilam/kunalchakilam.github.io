const showLogin = () => {
    let str = `
    <h1>Login Form</h1>
    <p>Email Id:<input type="text" placeholder="Enter Email Id" id="txtEmail"></p>
    <p>Password:<input type="password" placeholder="Enter Password" id="textPass"></p>
    <p><button>Log In</button></p>
    <p><button onclick='showRegister()'>Create New Account</button></p>
    `
    root.innerHTML = str
}

const showRegister = () => {
    let str = `
    <h1>Create a New Account</h1>
    <p>Name:<input type="text" placeholder="Enter Name" id="txtName"></p>
    <p>Email Id:<input type="text" placeholder="Enter Email Id" id="txtEmail"></p>
    <p>Password:<input type="password" placeholder="Enter Password" id="textPass"></p>
    <p><button>Sign Up</button></p>
    <p><button onclick='showLogin()'>Already have an Account? Log In</button></p>
    `
    root.innerHTML = str
}