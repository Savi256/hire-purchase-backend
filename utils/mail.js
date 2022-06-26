exports.genereateOTP = ()=> {
    let OTP = "";
    for (let index = 0; index < 2; index++) {
      let random = Math.round(Math.random() * 9);
      OTP = random + OTP;
    }
    // return OTP;
  }