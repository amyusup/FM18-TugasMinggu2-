const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;
let grade = "";

if (
  mtk != null &&
  bahasaIndonesia != null &&
  bahasaInggris != null &&
  ipa != null
) {
  // rata-rata
  let hasil = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
  console.log(`Rata-rata = ${hasil}`);

  //grade
  if (hasil > 90 && hasil <= 100) {
    grade = "A";
  } else if (hasil > 80 && hasil <= 89) {
    grade = "B";
  } else if (hasil > 70 && hasil <= 79) {
    grade = "C";
  } else if (hasil > 60 && hasil <= 69) {
    grade = "D";
  } else if (hasil > 0 && hasil <= 59) {
    grade = "E";
  } else {
    grade = "Angka yang dimasukkan tidak benar";
  }

  console.log(`Grade = ${grade}`);
} else {
  console.log("Semua data harus diisi!");
}
