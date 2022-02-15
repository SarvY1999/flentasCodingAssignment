
function perm(test, words){
    var pattern, string;
    let yesnoarr = [];
    for (let i = 0; i < words.length; i+=2) {
        pattern = words[i];
    
    for(let j = 1; j < words.length; j+=2){
            string = words[j]
    }
    if(string.includes(pattern)){ // checking if the given string includes the pattern or not
        yesnoarr.push("YES");
    }
    else if(string.includes(pattern) == false){ // if it does not match then
        let arr = pattern.split("")         // we will split the string into array 
        let pat = arr.reverse().join("")    // then we will reverse the array and convert it to string using join and store in the variable
        if(string.includes(pat)){           // we will again check if the pattern matches with the string or not
            yesnoarr.push("YES");             //  Yes if matched
        }else{
            yesnoarr.push("NO");  //  no if not matched
        }
    }
}
    console.log(yesnoarr);
}

perm(3,["hack", "indiahacks", "code", "eddy", "coder", "iamredoc"]);
