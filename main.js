//khalid khamis Alzahrani
//Question 1
function reverseNum(num)
{
	num=num+"";
	return Number(num.split("").reverse().join(""));
}
console.log("//Question 1")
console.log(reverseNum(98765));

//-------------------------------------------------------------------

//Question 2

function uppercase(str)
{
   let array =str.split(' ') ;
    let index =0;

    while( index <= array.length-1){

        array[index]= array[index].charAt(0).toUpperCase() + array[index].slice(1);
index++
    } 
    
    return array.join(' ');;
}
console.log("//Question 2")
console.log(uppercase('tuwaiq academy '));
//-------------------------------------------------------------------

//Question 3
function countVowels(s){
let count =0;
        for(let i =0;i<s.length;i++){
        
            switch(s.charAt(i)) {
                case 'A':
                case 'a':

                case 'E':
                case 'e':

                case 'I':
                case 'i':

                 case 'U':
                 case 'u':

                case 'O':
                case 'o':
                count++
                  break;
                default:
                    break;
              }

        }
 return count;
}
console.log("//Question 3")
console.log(countVowels('Javascript is awesome'));
//-------------------------------------------------------------------

//Question 4

function Isprime(num)
{


    switch(num){
        case 1:
            return false;
           
        case 2:
            return true;
            
        default:
            for(let i = 2; i < num; i++)
            {
              if(num % i === 0)
              {
                return false;
              }
            }
            return true;  
            
    }

}
console.log("//Question 4")
console.log(Isprime(2));
console.log(Isprime(20));
//-------------------------------------------------------------------

//Question 5
function longestWord(s){
    let array =s.split(' ') ;
    let index =0;

    let big =' ';
    while( index <= array.length-1){
        if(big.length < array[index].length){
            big=array[index];
        }
        index++

    }
    return big;

}
console.log("//Question 5")
console.log(longestWord('Kingdom of Saudi arabia'));
//-------------------------------------------------------------------

//Question 6
 function Alphab(s){

return s.split('').sort().join('');
  
}
console.log("//Question 6")
console.log( Alphab('webmaster'));
//-------------------------------------------------------------------

//Question 7
function sum(num1,num2){

    return num1 + num2;
}
console.log("//Question 7")
console.log(sum(3,2));
//-------------------------------------------------------------------

//Question 8

function ageDay(num){
    const year= 365;
    return num * year;
}
console.log("//Question 8")
console.log(ageDay(65));
//-------------------------------------------------------------------

//Question 9
function HouToSec(num){
    const sec = 3600;
    return num * sec ;
}
console.log("//Question 9")
console.log(HouToSec(2));
//-------------------------------------------------------------------

//Question 10
function leesZero(num){

    if(num >0){
    return false;
    }
    else if(num <=0){
        return true;
    }
}
console.log("//Question 10")
console.log(leesZero(5));
console.log(leesZero(0));
console.log(leesZero(-2));
//-------------------------------------------------------------------

//Question 11
function digit(num){
num=num+"";

return num.length;

}
console.log("//Question 11")
console.log(digit(1000));
console.log(digit(12));
 //-------------------------------------------------------------------

//Question 12


//-------------------------------------------------------------------

//Question 13
function path(num){

    let fact=1;
    for (let index = 1; index <= num; index++) {
        
        fact= fact*index;
        
    }
    return fact;
}
console.log("//Question 13")
console.log(path(4));
console.log(path(1));
//-------------------------------------------------------------------

//Question 14
function doubleLetters(str){  
    for (let index = 0; index < str.length -1; index++) {
        
        if(str.charAt(index)===str.charAt(index+1)){
        return true;
        }
        
    }
    return false;
}
console.log("//Question 14")
console.log(doubleLetters('loop'));
console.log(doubleLetters('orange'));
console.log(doubleLetters('munchkin'));
//-------------------------------------------------------------------

//Question 15
function dateNow(){
    const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; 
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

return mm+'-'+dd+'-'+yyyy+ ' , '+ mm + '/' + dd + '/' + yyyy +' or \n '
+dd+'-'+mm+'-'+yyyy+ ' , '+ dd + '/' + mm + '/' + yyyy;
}
console.log("//Question 15")
console.log(dateNow());
//-------------------------------------------------------------------

//Question 16
function getdaye(d1,d2){
let date1 = new Date(d1).getTime();
let date2 = new Date(d2).getTime();

DifTime = date2 - date1;
DifDay = DifTime / (1000 * 3600 * 24);

return DifDay

}
console.log("//Question 16")
console.log(getdaye('12-14-2020','12-20-2020'));
//-------------------------------------------------------------------

//Question 17


//-------------------------------------------------------------------

//Question 18
function max(num1,num2){

    if(num1>= num2)
    return num1
    else
    return num2
}
console.log("//Question 18")
console.log(max(8,9));
console.log(max(10,9));
//-------------------------------------------------------------------

//Question 19
function price(arr){


}

//-------------------------------------------------------------------

//Question 20


