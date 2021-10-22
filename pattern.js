function pattern(row){
   
    for(let i=1;i<=row;i++){
        let pattern1='';
        for(let j=0;j<i;j++){
            pattern1+='*';
        }
    pattern1+=' ';
    console.log(pattern1);
    }
}
pattern(5);