
function seletion_changed(){
    
    
    let sheng = document.querySelector("#opq")
    let chizhou = document.querySelector("#chizhou")
    let changsha = document.querySelector("#changsha")
    let hefei=document.querySelector("#hefei")
    let yongzhou=document.querySelector("#yongzhou")
    let wuhu=document.querySelector("#wuhu")
    let yueyang=document.querySelector("#yueyang")
    let shi=document.querySelector("#rst")

    if(sheng.value=="anhui"){
        chizhou.hidden = false;
        hefei.hidden = false;
        wuhu.hidden = false;
        changsha.hidden = true;
        yongzhou.hidden = true;
        yueyang.hidden = true;
        shi.value="chizhou";
    }
    else if(sheng.value=="hunan"){
        chizhou.hidden = true;
        hefei.hidden = true;
        wuhu.hidden = true;
        changsha.hidden = false;
        yongzhou.hidden = false;
        yueyang.hidden = false;
        shi.value="yueyang";
    }
}



function hello(){
    let shi=document.querySelector("#rst")
    console.log("I am at ",shi.value)
}

// function on(){
//     document.querySelector("#img1").src="imgs/2.jpg" 
// }

// let btn=document.querySelector("#btn")
window.onload = function(){
    let s1='23年\"3月'
    let s2=9999
    let person={
        name:"kk",
        age:26,

        eat:function(a){
            console.log(a+"吃饱了")
        },
        study(){
            console.log("学不完");
        }

    }


    person.name="大傻瓜"
    let strrxcdgxcfgh=JSON.stringify(s2)

    let person2=JSON.parse(strrxcdgxcfgh)

    console.log(person2)

    console.log(strrxcdgxcfgh)

    person.eat("康丽琴")
    person.eat("矿务局")

    console.log(s1+s2)
    
    

// var nianfen=prompt("请输入一个年份")
// if(nianfen%4==0&&nianfen%100!=0||nianfen%400==0)
//     {
//         alert("闰年")
//     }
// else{
//     alert("平年")
// }

// var grade1=prompt("请输入你的分数")
// if(grade1>=90){
//     alert("A")
// }
// else if(grade1<90&&grade1>=80){
//     alert("B")
// }
// else if(grade1<80){
//     alert("bujige")
// }
// else{
//     alert("输错了")
// }

// let x=5;
// let y=9;
// tmp=y;
// y=x;
// x=tmp;

// console.log(x);
// console.log(y);

    var arr = [2, 6, 1, 77, 52, 25, 7];

for(var j=0;j<arr.length-1;j++){
    for (var i = j+1; i < arr.length; i++) {
        if (arr[j] < arr[i]) {
            var temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        
    }
    console.log("第"+(j+1).toString()+'最大值为' + arr[j]);
}

console.log(arr)

    // for (var i = 2; i < arr.length; i++) {
    //         if (arr[1] < arr[i]) {
    //             var temp1 = arr[1];
    //             arr[1] = arr[i];
    //             arr[i] = temp1;
    //         }
    // }
    // console.log('第二最大值为' + arr[1]);
//    for (var i = 1; i <= 5; i++) {
//             if (i == 3) {
//                 console.log('这个包子有虫子，扔掉');
//                 continue;
//                 // 跳出本次循环，跳出的是第3次循环 
//             }
//             console.log('我正在吃第' + i + '个包子呢');
//         }

    var i=0
    for(;i<100;){





    i++
    }

// var age11=prompt("请输入1,2,3")
// switch(parseInt(age11)){
//     case 1:
//         alert("chixiangjiao")
//         break;
//     case 2:
//         alert("heshui")
//         break;
//     case 3:
//         alert("vu")
//         break;
//     default:
//         alert("pig")
//         break;
//     }
// 
// var number1=parseInt(prompt("请输入班级总人数"))
// var s11=0;
// var a1=[]
// // var chengji=parseInt(prompt("请输入学生成绩"))
// for(let i=1;i<=number1;i++){
//     var grade2=parseInt(prompt("请输入成绩"))
//     s11=s11+grade2;
//      a1[i-1]=grade2;
// }
// alert(s11/number1)
// alert(a1)

// var n=parseInt(prompt("请给定一个边长（正整数）"))
// var s=''
// for(var j=1;j<=n;j++){
//     for(var i=0;i<j-1;i++){
//         s=s+'\b'}
//         for(var i=1;i<=n-j+1;i++){
//         s=s+"*"
//     }
//     s=s+'\n'
// }
// alert(s)
// console.log(s)


// document.querySelector("#w1").onclick=function on(){
//     document.querySelector("#img1").src="imgs/2.jpg"  
// }






    // let btn=document.querySelector("#btn")
    // btn.onclick=on

    // let btn2=document.querySelector("#btn2")
    // btn2.onclick=function on1(){
    //     document.querySelector("#img1").src="imgs/1.jpg"
    // }

    // let we=document.querySelector("#we")
    // we.onfocus=function tt(){
    //     we.value="klq"
    // }
    // we.onblur=function rr(){
    //     we.value="KLQ"
    // }

    let dianying=document.querySelector("#dianying")
    let lvyou=document.querySelector("#lvyou")
    let youxi=document.querySelector("#youxi")
    document.querySelector("#quanxuan").onclick=function xuan(){
        dianying.checked=true;
        lvyou.checked=true;
        youxi.checked=true;
        document.querySelector("#ww").style.color="red"
        document.querySelector("#ww").style.fontSize="20px"
    }
    document.querySelector("#fanxuan").onclick=function buxuan(){
        dianying.checked = !dianying.checked
        youxi.checked=!youxi.checked
        lvyou.checked=!lvyou.checked
        // if(dianying.checked==true){
        //     dianying.checked=false;
        // }
        // else{
        //     dianying.checked=true;
        // }
        // if(lvyou.checked==true){
        //     lvyou.checked=false;
        // }
        // else{
        //     lvyou.checked=true;
        // }
        // if(youxi.checked==true){
        //     youxi.checked=false;
        // }
        // else{
        //     youxi.checked=true;
        // }
        document.querySelector("#ww").style.color="blue"
    }
}

// var num1=parseInt(prompt("请输入人数"))
// var s=0
// for(var i=1;i<=num1;i++){
//     var grade1=parseInt(prompt("请输入分数"));
//     s=s+grade1;
// }
// alert(s/num1);
// var a=0
// while(a<=100){
//     a++
//     alert(a);}