function precio1() {
    // Get the checkbox
    var checkBox1 = document.getElementById("lavadoExterior");
    // Get the output text
    var val1 = document.getElementById("valor1");
  
    // If the checkbox is checked, display the output text
    if (checkBox1.checked == true){
      val1.style.display = "block";
    } else {
      val1.style.display = "none";
    }
}

function precio2() {
    // Get the checkbox
    var checkBox2 = document.getElementById("lavadoMotor");
    // Get the output text
    var val2 = document.getElementById("valor2");
  
    // If the checkbox is checked, display the output text
    if (checkBox2.checked == true){
      val2.style.display = "block";
    } else {
      val2.style.display = "none";
    }
}




/*<div class="col-2" style="border: solid 1px grey;">
<h5>Servicios</h5>
<div class="form-check">
    <input class="form-check-input valores" name="valores" type="checkbox" value="precio1" id="lavadoExterior" onclick="precio1()">
    <label class="form-check-label" for="flexCheckDefault">
        Lavado ext e int
    </label>
</div>
<div class="form-check">
    <input class="form-check-input valores" name="valores" type="checkbox" value="precio2" id="lavadoMotor" onclick="precio2()">
    <label class="form-check-label" for="flexCheckDefault">
        Lavado de motor
    </label>
</div>

<div class="valor my-2">
    <p id="valor1">Valor: $7.000</p>
    <p id="valor2">Valor: $15.000</p>
    <p id="valor3">Valor total: $22.000</p>
</div>

<div class="print-values">
    <p id="valueList"></p>
</div>
</div>