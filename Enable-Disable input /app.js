function Enable(){
 let x=document.querySelector("input")
 
 x.removeAttribute("disabled")
 x.style.cursor="pointer";
 x.setAttribute("class","btn1")
 window.alert("Thank you for unblocking")


}
function Disable(){
    let x=document.querySelector("input")
    x.style.cursor="not-allowed";
    x.setAttribute("disabled","disabled")
    x.removeAttribute("class")
    window.alert("don't block me")
}