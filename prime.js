function Prime(value){
 for(let i=2;i<=value;i++){
 isprime=true;
 for(let j=2;j<i;j++){
if(i%j===0){
    isprime=false;
    break;
}}
if(isprime)
    console.log(i);
}}
Prime(100);