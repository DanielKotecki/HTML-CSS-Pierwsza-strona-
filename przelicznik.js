

var btn=document.getElementById("wyslij");
function funkcja() {
  var x=document.getElementById("predkosc_dozwolona").value;
  var y=document.getElementById("predkosc_przekroczona").value;
/*  var mandat=;*/
  var l1,l2,l3;
  l1=parseFloat(x);
  l2=parseFloat(y);
  l3=l2-l1;
  if (l3<6) {
    console.log(" 0 zł");
  }if (l3>=6 && l3<=10) {
    document.getElementById("wy").value="";
  document.getElementById("wy").value=" 50zł";
  }
if (l3>=11 && l3<=20) {document.getElementById("wy").value="";
    document.getElementById("wy").value=" od 50 do 100 zł";
  }
if (l3>=21 && l3<=30) {document.getElementById("wy").value="";
  document.getElementById("wy").value=" od 100 do 200 zł";
  }
if (l3>=31 && l3<=40) {document.getElementById("wy").value="";
  document.getElementById("wy").value=" od 200 do 300 zł";
  }
if (l3>=41 && l3<=50) {document.getElementById("wy").value="";
    document.getElementById("wy").value="  od 300 do 400 zł";
  }
if (l3>=51 ) {document.getElementById("wy").value="";
 document.getElementById("wy").value=" od 400 do 500 zł";
  }


}
