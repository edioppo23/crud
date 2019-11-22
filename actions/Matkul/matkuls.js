const Matkul = require('../../models/matkul');

const buat = async (req) => {
    let { nomatkul, namamatkul, dosen, semester, id_dosen } = req.body
    nomatkul = parseInt(nomatkul)

    let masukkan_data = {
        nomatkul, namamatkul, dosen, semester, id_dosen
    }

    let data = new Matkul(masukkan_data)

    try {
        await data.save()
        return data
    } catch (err) {
        throw err
    }

}

const semua = async () => {
    try {
        let query = await Matkul.find({}).exec()
        let data = query.map((v, i) => {
            return {
                nomatkul: v.nomatkul,
                namamatkul: v.namamatkul,
                dosen: v.dosen,
                semester: v.semester
            }
        })
        return data
    } catch (err) {
        throw err
    }
}

module.exports = { buat, semua }






