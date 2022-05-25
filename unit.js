// create an Array
var meter = document.getElementById("meter");
var centim = document.getElementById("cm");

// accessing an array
    meter.addEventListener('input',function(){
        let m = this.value;
        let c = m*100;
        if(!Number.isInteger(c)){
            c= c.toFixed(3);
        }
        centim.value = c;
    })

    centim.addEventListener('input',function(){
        let c = this.value;
        let m = c/100;
        if(!Number.isInteger(m)){
             
            m= m.toFixed(3);
        }
        meter.value = m;
    })



