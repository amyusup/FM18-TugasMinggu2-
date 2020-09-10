let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  hobby: ["Basketball", "Baseball"],
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};
const newData = {
  ...data,
  name: "Ahmad Maulana Yusup",
  email: "amyusup26@gmail.com",
  hobby: ["Badminton", "Volley"],
};

var {
  address: { street, city },
} = newData;

console.log(street + "\n" + city);
