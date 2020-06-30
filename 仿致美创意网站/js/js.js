
    function sconfirm(str){
        var r = confirm(str);
        console.log(r+"123");

        if (r == true)
            alert("未找到TIM，请安装最新版TIM");
    }


    window.onload = function () {
        var sa = document.getElementById("sa");
        setInterval(function () {
            var date = new Date();
            var hh = date.getHours();
            var mm = date.getMinutes();
            if(mm<10){
                mm = "0"+String(mm);
            }
            var ss = date.getSeconds();
            sa.innerText = hh+":"+mm+":"+ss;
        },1000);


    }


