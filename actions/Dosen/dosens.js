const Dosen = require("../../models/dosen");
const Matkul = require("../../models/matkul");
const Mahasiswa = require("../../models/mahasiswa");


// 1. Membuat database baru ==============
const buat = async (req) => {
    let {
        nik,
        nama,
        email,
        tlp,
        matkul,
        relasi,
        relasi1
    } = req.body
    tlp = parseInt(tlp)

    var insert_data = {
        nik,
        nama,
        email,
        tlp,
        matkul,
        relasi,
        relasi1
    }

    let data = new Dosen(insert_data)

    try {
        await data.save()

        return data
    } catch (err) {
        throw err
    }
}


// 2. Menampilkan semua data get ==============================
const semua = async () => {
    try {
        let query = await Dosen.find({}).populate([{
                path: 'relasi',
                model: Matkul
            },
            {
                path: 'relasi1',
                model: Mahasiswa
            }
        ]).exec()

        // let data = query.map((v, i) => {
        //     return {
        //         nik: v.nik,
        //         nama: v.nama,
        //         email: v.email,
        //         tlp: v.tlp,
        //         matkul: v.matkul
        //     }            
        // })

        return query
    } catch (err) {
        throw err
    }
}


// 3.  Menampilkan salah satu data ============================================
const detail = async (id) => {
    try {
        let query = await Dosen.findOne({
            _id: id
        }).exec()

        return query
    } catch (err) {
        throw err
    }
}



// 4. Update data ===================================

const ubah = async (id, update_data) => {
    let {
        nik,
        nama,
        email,
        tlp,
        matkul,
        relasi
    } = update_data

    let data = {
        nik,
        nama,
        email,
        tlp,
        matkul,
        relasi
    }

    try {
        let query = await Dosen.findOneAndUpdate({
            _id: id
        }, data).exec()

        return query
    } catch (err) {
        throw err
    }
};


// 5. Menghapus data ================================

const hapus = async (id) => {
    try {
        let query = await Dosen.findOneAndDelete({
            _id: id
        }).exec()

        return query
    } catch (err) {
        throw err
    }
}


module.exports = {
    buat,
    detail,
    semua,
    ubah,
    hapus
}