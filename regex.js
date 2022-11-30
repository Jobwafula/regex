// user inputs a phone number
// should match ###-###-####
// but # <=9 & >0
function isPattern(userInput){
    if(typeof userInput !== 'string' || userInput.length !== 12){
        return false;
    }
    for(let i = 0;i<userInput.length;i++){
        let c = userInput[i];
        switch (i){
            case 0:
                case 1:
                    case 2:
                        case 4:
                            case 5:
                                case 6:
                                    case 8:
                                        case 9:
                                            case 10:
                                                case 11:
                                                    if(c<0 || c>9)
                                                        return false;

                                                    
                                                    break;
                                                    case 3:
                                                        case 7:
                                                            if(c !=='-')
                                                            return false;
                                                            break;


                                    
                
        }

    }



}
console.log(isPattern(112-234-3333));