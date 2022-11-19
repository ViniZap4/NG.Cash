export function Size(text:string, min:number = 0, max:number = 0){
  return (text.length >=min)&& (text.length <=max ) 
}

export function HasUpperCase(text:string){
  return text.toLowerCase() != text
}

export function HasLowerCase(text:string){
  return text.toUpperCase() != text
}

export function HasNumber(text:string){
  var regExp = /\d/;
  return regExp.test(text)
}


export function checkPassword(password: string, comfirmPassword: string){
  if(!Size(password, 8,16)){
    return {"error":"password is lower than 8 characters or more than 16 characters"};
    //throw new Error(errorMessage)
  }else if(!HasUpperCase(password)){
    return {"error":"password need to has a upper case character"};
    //throw new Error(errorMessage)
  } else  if(!HasLowerCase(password)){
    return {"error":"password need to has a lower case character"};
    //throw new Error(errorMessage)
  }else if(!HasNumber(password)){
    return {"error":"password need to has a number"};
    //throw new Error(errorMessage)
  }else if(comfirmPassword !== password){
    return {"error":"passwords don't match"};
  }else{
    return true;
  }
}