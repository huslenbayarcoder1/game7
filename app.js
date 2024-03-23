//for loop -> davtalt
console.log("Hello");
//for(var i=ehleh_too; i<=tugsuh_too; i++/i--){
//end davtah code bichne
//}
//for(var i=1;i<=10;i++){
    console.log(i+".hello");
//}
//for(var i=10; i>=1;i--){
    console.log(i)
//}
for(var i=0;i<=20;i++){
    if(i%2==0){
        console.log("tegsh:"+i)
    }else{
        console.log("sondgoi:"+i)
    }
}
for(var i=0;i<=100;++i){
    if(i%3==0 && i%5==0){
        console.log("huvaagdana:"+i)
    }
}
var sum=0;
var urjver=1;
var urjver2=5;
for(var i=1;i<=10;++i){
    sum=sum+i;
    urjver=urjver*i;
}
console.log("niilber:"+sum)
console.log("urjver:"+urjver)      
for(var i=1;i<=10;++i){
    urjver=urjver*i
    console.log(urjver2 + "x" +i+ "=" +5*i);
}
var randomNumber=Math.floor(Math.random()*10)+1;
console.log(randomNumber);
var chance=3;
for(var i=1; i<=chance;i++){
    var myNumber=+prompt("1-10 hurleh random toog taana uu");
    if(myNumber==randomNumber){
        alert("Ta hojloo"+i+"dahi udaagaar hojloo");
        break;
    }else if(myNumber=="" || myNumber<0 || myNumber>10){
        alert("buruu utga oruulsan bn");
    }else if(myNumber<randomNumber){
        alert("baga bna")
        alert("tand odo" + ( i-chance) + "ami bn") 
    }else if(myNumber>randomNumber){
        alert("ih bn")
        alert("tand odo" + (i-chance) + "ami bn")
    }if(i==chance){
        alert("ta hojigdloo");
        break;
    }
}