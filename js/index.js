 // variable nama siswa
        const tangalLahirSiswa = "30 Feb 2024"; // camel case

        let alamat_siswa = "Jakarta";
        alamat = "Lampung";

        var noHp = "07986457438";
        noHp = "453457253"

        const today = new Date();

        console.log('output dari variabel today: ', today);
        // alert(today);
        document.getElementById("date").innerHTML = today;

        function hitungTotal(value1, value2) {
            let result = value1 + value2
            return result
        }

        function hitungTotalPakaian() {
            const tas = Number(document.getElementById("hargaTas").value);
            const baju = Number(document.getElementById("hargaBaju").value);
            const persen = Number(document.getElementById("persen").value);

            if (tas == 0) {
                document.getElementById("errorTas").innerHTML = "Harga tas tidak boleh kosong.";
            } else if (baju == 0) {
                document.getElementById("errorTas").innerHTML = "Harga baju tidak boleh kosong.";
            } else {
                if (document.getElementById("hargaTas").value.length > 6) {
                    document.getElementById("errorTas").innerHTML = "Harga tas tidak boleh diatas Rp. 999.999.";
                } else {
                    document.getElementById("errorTas").innerHTML = "";
                    const potonganHarga = hitungTotal(tas, baju) * (persen / 100)
                    const total = hitungTotal(tas, baju) - potonganHarga

                    document.getElementById("totalHarga").innerHTML = 'Rp.' + total;
                }

            }

        }

        function hitungTotalMainan() {
            const mobilan = Number(document.getElementById("mobilMainan").value);
            const lego = Number(document.getElementById("lego").value);
            const kodeKupon = document.getElementById("kupon").value;

            if (mobilan == 0) {
                document.getElementById("errorTas").innerHTML = "Harga tas tidak boleh kosong.";
            } else if (lego == 0) {
                document.getElementById("errorTas").innerHTML = "Harga baju tidak boleh kosong.";
            } else {
                console.log(document.getElementById("hargaTas").value.length, 'panjang karakter');

                if (document.getElementById("hargaTas").value.length > 6) {
                    document.getElementById("errorTas").innerHTML = "Harga tas tidak boleh diatas Rp. 999.999.";
                } else {
                    console.log(kodeKupon, 'kodeKuponkodeKupon');
                    
                    if(kodeKupon != ""){
                        const potonganHarga = hitungTotal(mobilan, lego) * 20/100
                        const total = hitungTotal(mobilan, lego) - potonganHarga
                        document.getElementById("totalHargaMainan").innerHTML = 'Rp.' + total;
                    }else{
                        const total = hitungTotal(mobilan, lego)
                        document.getElementById("totalHargaMainan").innerHTML = 'Rp.' + total;
                    }

                }

            }

        }

        const hari = new Date();
        switch (hari.getDay()) {
            case 1:
                console.log('Hari ini hari senin');
                break;
            case 2:
                console.log('Hari ini hari selasa');
                break;
            case 3:
                console.log('Hari ini hari rabu');
                break;
            case 4:
                console.log('Hari ini hari kamis');
                break;
            case 5:
                console.log('Hari ini hari jumat');
                break;
            default:
                console.log('Hari ini hari libur');

                break;
        }

        const fruits = ['Apple', 'Manggo', 'Orange', 'papaya', 'Banana'];
        fruits.push("Salak");

        fruits.splice(2, 2);

        let dataSiswa = {
            nama: "nia",
            alamat: ["Bandung", "Lampung"],
            umur: 22,
        }

        dataSiswa.alamat = "Jakarta"
        delete dataSiswa.umur

        console.log(dataSiswa);
