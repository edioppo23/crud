const Matkul = require('../../models/matkul');
const Dosen = require("../../models/dosen")


// 1. Membuat database =========================
const buat = async (req) => {
    let {
        nomatkul,
        namamatkul,
        dosen,
        semester,
        relasi
    } = req.body
    nomatkul = parseInt(nomatkul)

    let masukkan_data = {
        nomatkul,
        namamatkul,
        dosen,
        semester,
        relasi
    }

    let data = new Matkul(masukkan_data)

    try {
        await data.save()

        return data
    } catch (err) {
        throw err
    }

}



//2. Menampilkan semua data get =======================

const semua = async () => {
    try {
        let query = await Matkul.find({}).populate([{
            path: "relasi",
            model: Dosen

        }]).exec()
        // let data = query.map((v, i) => {
        //     return {
        //         nomatkul: v.nomatkul,
        //         namamatkul: v.namamatkul,
        //         dosen: v.dosen,
        //         semester: v.semester
        //     }
        // })

        return query
    } catch (err) {
        throw err
    }
}

// 3. Menampilkan salah satu data =======================
const detail = async (id) => {
    try {
        let query = await Matkul.findOne({
            _id: id
        }).exec()

        return query
    } catch (err) {
        throw err
    }
}

// 4. Update data =============================
const ubah = async (id, update_data) => {
    let {
        nomatkul,
        namamatkul,
        dosen,
        semester
    } = update_data

    let data = {
        nomatkul,
        namamatkul,
        dosen,
        semester
    }

    try {
        let query = Matkul.findONeAndUpdate({
            _id: id
        }, data).exec()

        return query
    } catch (err) {
        throw err
    }
}

// 5. Menghapus data ============================

const hapus = async (id) => {
    try {
        let query = await Matkul.findOneAndDelete({
            _id: id
        }).exec()

        return query
    } catch (err) {
        throw err
    }
}

module.exports = {
    buat,
    semua,
    ubah,
    hapus
}