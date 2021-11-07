

let tabs = $(".tabs li");

let text = $("div");

console.log(text);

console.log(tabs);



$(".tabs li").click(function(){

    removeActive();

    $(this).addClass("active");
    
    console.log($(".tabs li").index($(this)))
    
    var index = $(".tabs li").index($(this));
    
    console.log(text[index])
    
    text.removeClass("act");
    
    $(text[index]).addClass("act");
    
});



function removeActive(){
        tabs.removeClass("active");
}






// tabs.forEach(element => {
//     element.addEventListener('click',function(){
//         removeActive();
//         element.classList.add("active");  
//         console.log(element.getAttribute("id"));
//         text.forEach(ele=>{
//             ele.classList.remove("act");
//         })
//         document.getElementsByClassName(element.getAttribute("id"))[0].classList.add("act");
// });
// })


// function removeActive(){
//     tabs.forEach((ele)=>{
//         ele.classList.remove("active");
//     })
// }

