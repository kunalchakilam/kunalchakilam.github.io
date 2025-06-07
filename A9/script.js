const users = [];
let user = {};

const showLogin = () => {
  let str = `
    <div>
      <h1>Login Form</h1>
      <p><div id="dvMsg"></div></p>
      <p><input type="text" id="txtEmail" placeholder="Email"></p>
      <p><input type="password" id="txtPass" placeholder="Password"></p>
      <p><button onclick='validateUser()'>Log In</button></p>
      <p><button onclick='showRegister()'>Create Account</button></p>
    </div>
  `;
  root.innerHTML = str;
};

const showRegister = () => {
  let str = `
    <h1>Register Form</h1>
    <p><input type="text" id="txtName" placeholder="Name"></p>
    <p><input type="text" id="txtEmail" placeholder="Email"></p>
    <p><input type="password" id="txtPass" placeholder="Password"></p>
    <button onclick='addUser()'>Register</button>
    <hr>
    <button onclick='showLogin()'>Already a Member? Login here...</button>
  `;
  root.innerHTML = str;
};

const showHome = (msg = "") => {
  let str = `
    <h1>Welcome ${user.name}</h1>
    <hr>
    <p>
      <select id="action" onchange="toggleReceiverField()">
        <option value="0">--select--</option>
        <option value="1">Deposit</option>
        <option value="2">Withdraw</option>
        <option value="3">Transfer</option>
      </select>
    </p>
    <p><input type='number' id='txtAmount' placeholder="Enter Amount"></p>

    <p id="receiverField" style="display:none;">
      <input type="text" id="txtReceiver" placeholder="Enter Receiver's Name">
    </p>

    <p>
      <button onclick="processTransaction()">Submit</button>
      <button onclick='showLogin()'>Logout</button>
    </p>
    <hr>
    <p>Current balance: ₹${user.balance}</p>
    <p id="msg">${msg}</p>
  `;
  root.innerHTML = str;
};

const toggleReceiverField = () => {
  const action = document.getElementById("action").value;
  const receiverField = document.getElementById("receiverField");
  receiverField.style.display = (action === "3") ? "block" : "none";
};

const addUser = () => {
  const obj = {
    name: document.getElementById("txtName").value,
    email: document.getElementById("txtEmail").value,
    pass: document.getElementById("txtPass").value,
    balance: 0
  };
  users.push(obj);
  showLogin();
};

const validateUser = () => {
  let email = document.getElementById("txtEmail").value;
  let pass = document.getElementById("txtPass").value;
  user = users.find((e) => e.email === email && e.pass === pass);
  if (user) {
    showHome();
  } else {
    dvMsg.innerHTML = "Access Denied";
  }
};

const processTransaction = () => {
  const action = document.getElementById("action").value;
  const amount = Number(document.getElementById("txtAmount").value);
  let message = "";

  if (action === "1") {
    user.balance += amount;
    message = `₹${amount} deposited successfully.`;

  } else if (action === "2") {
    if (user.balance >= amount) {
      user.balance -= amount;
      message = `₹${amount} withdrawn successfully.`;
    } else {
      message = `Insufficient balance!`;
    }

  } else if (action === "3") {
    const receiverName = document.getElementById("txtReceiver").value;
    const receiver = users.find(u => u.name === receiverName && u.email !== user.email);

    if (!receiver) {
      message = `Receiver not found!`;
    } else if (user.balance < amount) {
      message = `Insufficient balance for transfer!`;
    } else {
      user.balance -= amount;
      receiver.balance += amount;
      message = `₹${amount} transferred to ${receiver.name} successfully.`;
    }

  } else {
    message = `Please select a valid action.`;
  }

  showHome(message);
};
