let demo = document.querySelector("#demo");
let style=document.querySelector("#style");

let string = `/*你好，我是一名前端新人
接下来我要加入css样式
我要加的样式是*/
/*body{
*    color:red;
}*/
/*接下来我演示一下我的前端功底
首先给我一个div*/
#div1{
    border:1px solid black;
    width:200px;
    height:200px;
}
/*接下来我把div变成一个八卦图
* 注意看好了
* 首先，把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
} 
/*八卦是阴阳形成的
* 一黑一白
*/
#div1{
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个球*/
#div1:before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:black;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1:after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:white;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`
//定位div1的位置
//背景渐变解决八卦
//伪元素生成小圆

//js自动滚动条
//实现回车
//string=string.replaceAll('\n','<br>');
//发现会打出回车，思路错误
//缓存结果
let string2 = '';

let n = 0;//从0开始可以做下标

//demo.innerHTML=string[n];不要一个一个
//demo.innerHTML=string.substring(0,n);
/*setInterval(()=>{
    n=n+1;
    demo.innerHTML=n;
},1000);*/
//只会响一次
//老手用setTimeout的递归，好处是可以控制停止
/*
let step=()=>{
    setTimeout(()=>{
        n=n+1;
        demo.innerHTML=n;
        step();//step做完后，再此调用step()
    },1000);
}
*/
//最终代码
let step = () => {
    setTimeout(() => {
        if (n < string.length) {

            if (string[n] === '\n') {
                string2 = string2 + "<br>";
            } else if(string[n] === ' ') {//如果是空格，改成&nbsp,一个一个改
                string2=string2+'&nbsp';
            }else{//如果不是回车照搬
                string2 = string2 + string[n];
            }//is-else 可以简化
            demo.innerHTML = string2;
            style.innerHTML=string.substring(0,n);
            n = n + 1;
//n=string.length时不会进入if判断
            //js实现自动滚动
            window.scrollTo(0,9999);
            demo.scrollTo(0,9999);
            step();//step做完后，再次调用step()
        }
    }, 50);
}
 step();//两次step()直接变成3
//添加css
/*
style.innerHTML=`
body{
    color:red;
}`//可以被实时改写*/
