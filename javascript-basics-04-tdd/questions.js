
const stringSize = (text) => {
    return text.length;
   };
   const replaceCharacterE = (text) => {
   return text.replace("e", " ");
   }
const concatString = (text1, text2) => {
return(text1+text2);
}
function showChar5(text) {
     return text.charAt(4);
}
const showChar9 = (text) => {
    return text.slice(0,9);
}
const toCapitals = (text) => {
    return text.toUpperCase();

}
const toLowerCase = (text) => {
    return text.toLowerCase();

}
const removeSpaces = (text) => {
 return text.trim();

}
const IsString = (text) => {
return typeof text == "string";
}

const getExtension = (text) => {
// return getExtension(text);
let split = text.split(".") ;
return split[split.length-1];

}
const countSpaces = (text) => {
    return text.split(' ').length - 1;
}
const InverseString = (text) => {
    return text.split("").reverse().join("");
}

const power = (x, y) => {
return Math.pow(x, y);
}
const absoluteValue = (num) => {
     return Math.abs(num);
}
const absoluteValueArray = (array) => {
   return array.map(Math.abs);
}
const circleSurface = (radius) => {
    return Math.round(Math.PI * radius * radius);
}
const hypothenuse = (ab, ac) => {
return Math.hypot(ab, ac);
}
const BMI = (weight, height) => {
    let bmi =Math.round(weight / (height*height)*100)/100;
    return bmi;
}

const createLanguagesArray = () => {
return ["Html","CSS","Java","PHP"];
}

const createNumbersArray = () => {
    return [0,1,2,3,4,5];
}

const replaceElement = (languages) => {
    let a = ["Html", "CSS", "Java", "PHP"];
    a[2] = "Javascript";
    return a;
}

const addElement = (languages) => {
    let ar = ["Html", "CSS", "Javascript", "PHP"];
  ar.push("Ruby", "Python");
  return ar;
}

const addNumberElement = (numbers) => {
let a = [0,1,2,3,4,5];
a.unshift(-2,-1);
return a;
}

const removeFirst = (languages) => {
    languages = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
    languages.shift();
    return languages;
}

const removeLast = (languages) => {
    let ar = ["CSS", "Javascript", "PHP", "Ruby", "Python"];
  ar.pop();
  return ar;
}

const convertStrToArr = (social_arr) => {
    let array1 = social_arr.split(',');
    return array1;
}

const convertArrToStr = (languages) => {
//  let languages = ['CSS', 'Javascript', 'PHP', 'Ruby'];
return languages.join(",");
}

const sortArr = (social_arr) => {
   return social_arr.sort();
}

const invertArr = (social_arr) => {
return social_arr.reverse();
}