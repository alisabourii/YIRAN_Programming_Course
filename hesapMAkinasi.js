function startTime() {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('txt').innerHTML ="Saat: " + h + ":" + m + ":" + s;
        setTimeout(startTime, 1000);
      }
      
function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
      }

function topla(){
        let say1 = parseInt(document.getElementById("num1").value);
        let say2 = parseInt(document.getElementById("num2").value);
        const islem = `${say1}+${say2} =`;
        document.getElementById("sonuc").value = islem+ (say1+say2);
}
function cikart(){
        let say1 = parseInt(document.getElementById("num1").value);
        let say2 = parseInt(document.getElementById("num2").value);
        const islem = `${say1}-${say2} =`;
        document.getElementById("sonuc").value = islem+ ( say1-say2);
}
function carp(){
        let say1 = parseInt(document.getElementById("num1").value);
        let say2 = parseInt(document.getElementById("num2").value);
        const islem = `${say1}X${say2} =`;
        document.getElementById("sonuc").value = islem + (say1*say2);
}
function bol(){
        let say1 = parseInt(document.getElementById("num1").value);
        let say2 = parseInt(document.getElementById("num2").value);
        const islem = `${say1}/${say2} =`;
        document.getElementById("sonuc").value = islem + (say1/say2);
}