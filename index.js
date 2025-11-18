console.log(1 === 1);
//true
console.log(1 === 2);
//false
console.log(3==3);
//true
console.log(2==3);
//false
console.log(1 == '1');
//konverterer typene, 1 og ´1´ blir like,true
console.log(2 === '2');
//krever lik datatype,false
    // == sammenligner bare verdi
    // === sammenlogner begge verdi og datatype
console.log(1==1 && 2==2);	
//begge er true	  true
console.log(1=== '1' && 2===2);
//første er false, andre er true	false
console.log(1===1 && '2' === 2);	
//første true, andre false	false
console.log(1=='1' && 2==='2');
//første true, andre er false   false
console.log(1==='1' || 2===2); 
//første er false, andre er true  true
console.log(2=="2" || 1==="1");
//første er true, andre er false  true
console.log(2===2 || 1===1 || 3==="3");
//første er true, andre er true, tredje er false    true
console.log(1 !== 1);
//en er like en, så pga "NOT" blir det false
console.log(2 !== 1);
//to er ikke lik en så pga "NOT" blir det true
console.log(2 !== 1 && 1 === 1)
//to er ikke lik en så pga "NOT" blir det true og den andre er true   true
console.log(2 !== "2" && 1=== "1" || 2=="2");
//første er false, andre er false, tredje er true     true
