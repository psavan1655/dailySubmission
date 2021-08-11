function getResult(score) {
  var gscore;

  switch(true) {
    case (score <= 100 && score >= 90):
       gscore = 'You Obtain A Grade';
        break;
    case (score <= 89 && score >= 80):
        gscore = 'You Obtain B Grade';
         break;
    case (score <= 79 && score >= 70):
        gscore = 'You Obtain C Grade';
         break;
       case (score <= 69 && score >= 60):
        gscore = 'You Obtain D Grade';
         break;
    case (score <= 59 && score >= 0):
        gscore = 'Opps You are FAIL';
        break;

    case (score > 100 && score < 0):
        gscore = 'INVALID SCORE';
        break; 

     case (score <= 2 && score >= 0):
        gscore += '-';
        break; 

      case (score <= 9 && score >= 8):
        gscore += '+';
        break; 

    default:
      return 'INVALID SCORE';
}

  return gscore;
}
console.log(getResult(88));