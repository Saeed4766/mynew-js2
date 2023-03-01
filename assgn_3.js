function isLeapYear(year){
    if(year % 4===0){
      return true
    }else{
      return false
    }
  }
  
  console.log(isLeapYear(2000))
  console.log(isLeapYear(1998))



  function isSquareOrRectangle(length, bredth){
    if(length===bredth){
      return "This is a square"
      
    }else{
      return "This is a rectangle"
    }
  }
   console.log(isSquareOrRectangle(5,9))
   console.log(isSquareOrRectangle(8,8))


   function shopDiscount(costOfPurchasedQuantity){
    if(costOfPurchasedQuantity > 1000){
      let discount = ((10/100) * costOfPurchasedQuantity)
      let newCostOfPurchase = costOfPurchasedQuantity - discount
      return "Your discount on your purchase is" + " " + newCostOfPurchase  + "," + "thank you for your continious patronage"
      
      }else{
      return "You are not eligble for our discount" 
    }  
  }
  
    console.log(shoppingDiscount(990))
    console.log(shoppingDiscount(9000))


  function profitableGamble(prob, prize, pay){
    if(prob * prize > pay){
      return true
    }else{
      return false
    }
  }
    console.log(profitableGamble(0.2, 50, 9)) 
    console.log(profitableGamble(0.9, 1, 2)) 
    console.log(profitableGamble(0.9, 3, 2)) 


  function makesTen(a,b){
    let sum = a+b
    if(a === 10 || b ===10 || sum ===10){
      return true
    }else{
      return false
    }
  }
  console.log(makesTen(9, 10))
  console.log(makesTen(9, 9))
  console.log(makesTen(1,9))


  function comp(str1, str2){
    if(str1.length===str2.length){
      return true
    }else{
      return false
    }
  }
  
  console.log(comp("AB", "CD"))
  console.log(comp("ABC", "DE"))
  console.log(comp("hello", "edabit"))


  function firstLast(str){
  
  let text = str
  let textOne = text.charAt(0)
  let newText = text.charAt(text.length-1)
  let result =  " \" " + textOne + newText + " \" "
 
    return result
}

  console.log(firstLast("ganesh"))
  console.log(firstLast("kali"))
  console.log(firstLast("shiva"))
  console.log(firstLast("Salman"))
  console.log(firstLast("Adeyemi"))


function acceptIntoMovie(age,isSupervised){
  if( age >=15 || isSupervised ===true){
    return true
  }else{
    return false
  }
}

console.log(acceptIntoMovie(14, true))
console.log(acceptIntoMovie(14, false))
console.log(acceptIntoMovie(16, false))


function oddOrEven(str){
  if(str.length % 2===0){
    return true
  }else{
    return false
  }
}
console.log(oddOrEven("apples"))
console.log(oddOrEven("pears"))
console.log(oddOrEven("cherry"))


function isPlural(text){
  let newText = text.charAt(text.length-1)
  if (newText === "s"){
      return true
  }else{
      return false
  }
}
  console.log(isPlural("changes"))
  console.log(isPlural("change"))
  console.log(isPlural("dudes"))
  console.log(isPlural("magic"))

  function newWord(text){
    let result = " \" " + text.substring(1) + " \" "
    return result
  }
  console.log(newWord("apple")) 
  console.log(newWord("cherry"))
  console.log(newWord("plum"))

  function wumbo(text){
    let newWord = " \" " + text.replace("m", "w") + " \" "
    return newWord 
  }
  console.log(wumbo("I LOVE MAKING CHALLENGES"))
  console.log(wumbo("MEET ME IN WARSAW"))
  console.log(wumbo("WUMBOLOGY"))
  





   
   
    