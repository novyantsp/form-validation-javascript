function validasi_input(form) {
  var vnrp = document.getElementById('NRP').value;
  var vnama = document.getElementById('Nama').value;
  var angka = /^[0-9]+$/;

  if (vnrp == "") {
    alert("NRP masih kosong!");
    return (false);
  }

  if (!vnrp.match(angka)) {
    alert("NRP Hanya Boleh Menggunakan Angka Saja!");
    return (false);
  }

  if (vnama == "") {
    alert("Nama masih kosong!");
    return (false);
  }

  if (vnrp.length != 5) {
    alert("NRP harus 5 digit!!!")
    return false;
  }

  alert("Data Berhasil di Simpan");
  return (true);
}
