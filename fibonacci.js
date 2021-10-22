function fibonacci(num){
    let a=0,b=1,c;
    if(num===0) return a;
    for(i=2;i<=num;i++){
c=a+b;
a=b;
b=c;
}
return b;
}
console.log(fibonacci(9));