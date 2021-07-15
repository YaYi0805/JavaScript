document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('idSelectYear').addEventListener("change", addDate);
    document.getElementById('idSelectMonth').addEventListener("change", addDate);
    document.getElementById('idSelectDay').addEventListener("change", printdate);

    for (let i = 2010; i <= 2025; i++) {   //新增月 
        let opt = document.createElement("option");  //<option></option>
        // opt.setAttribute("value", i);  //<option value="1"></option>
        // let optTxt = document.createTextNode(i);  //1
        // opt.appendChild(optTxt);  //<option value="1">1</option>
        opt.value = i;
        opt.innerHTML = i;
        document.getElementById('idSelectYear').appendChild(opt);
        //<select id="idSelectYear"><option value="1">1</option></select>
    }
    for (let i = 1; i <= 12; i++) {   //新增月 
        let opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = i;
        document.getElementById('idSelectMonth').appendChild(opt);
    }
});

let yy, mm, day;

function addDate() {
    yy = document.getElementById('idSelectYear').value;
    mm = document.getElementById('idSelectMonth').value;
    let d = new Date(yy, mm, 0);
    day = d.getDate();
    for (let i = 1; i <= day; i++) {   //新增日
        let opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = i;
        document.getElementById('idSelectDay').appendChild(opt);
    }
}

function printdate(){
    let dd=document.getElementById('idSelectDay').value;
    document.getElementById("printdate").innerHTML=`<span>您選的日期是${yy}年${mm}月${dd}日</span>`
}