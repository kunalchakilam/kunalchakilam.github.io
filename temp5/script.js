function f1(x) {
  if (x < 0) {
    return Promise.reject("Something went wrong");
  } else {
    return Promise.resolve(x);
  }
}

function f2(a) {
  console.log(a);
}
f1(-10)
  .then((v) => {
    f2(v);
  })
  .catch((err) => console.log(err));