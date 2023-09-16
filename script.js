function tampilakanNilaiButton (value){
  document.getElementById("display").value += value;
}

function hitung () {
  let hasilPerhitungan = eval(document.getElementById("display").value);
  document.getElementById("display").value = hasilPerhitungan;
}

function hapus () {
  document.getElementById("display").value = "";
}