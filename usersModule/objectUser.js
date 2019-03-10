module.exports =  class ObjectUser {
  constructor (newUser) {
    this.newUser = newUser;
  }
  keys() {
  	let randomkay = [];
    let arr = [
      'A', 'a', 'B', 'b' , 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm',
      'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z',
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    ]

    for(let i = 0; i < 16; i++) {
      randomkay += arr[Math.floor(arr.length * Math.random())];
    };
    
    if(randomkay.length == 16) {
      return randomkay;
    };
  };

  user () {
  	let user = {
  	  user: this.newUser,
      registrationDate: new Date,
  	  keyInfo: {
  		key: this.keys(),
  		statusKey: false
  	  }
  	}
  	return user
  }
};