$(".navbar-toggle").click(function(){
    $("ul").slideToggle();
})


function data(){
    var userfName = document.getElementById("fname").value;
    var userEmail = document.getElementById("email").value;
    var useroption = document.getElementsByName("option")
    var optn
    for(let i=0;i<useroption.length;i++){
        if(useroption[i].selected){
            optn=useroption[i].value;
        }
    }
    var userMsg = document.getElementById("cmt").value;

    window.alert("\n"+userfName+"\n"+userEmail+"\n"+optn+"\n"+userMsg)

}