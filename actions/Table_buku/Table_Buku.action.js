const Table_buku = require("../../models/table _buku.models");

class CreateBook {
    constructor(req) {
        (this.idBuku = req.body.idBuku),
            (this.judulBuku = req.body.judulBuku),
            (this.author = req.body.author),
            (this.penerbit = req.body.penerbit),
            (this.harga = req.body.harga),
            (this.stok = req.body.stok)

    }
    async exec() {
        try {
            let data = new Table_buku({
                idBuku: this.idBuku,
                judulBuku: this.judulBuku,
                author: this.author,
                penerbit: this.penerbit,
                harga: this.harga,
                stok: this.stok,
                created_at: Date.now()

            })
            await data.save()
            return data

        } catch (err) {
            throw err
        }
    }
}


class BookDetails {
    constructor(req) {
        this.query = req.query
    }
    async exec() {
        try {
            let { idBuku, judulBuku, author, penerbit } = this.query
            let params = { deleted_at: null }
            if (judulBuku) {
                params.judulBuku = { $regex: judulBuku, $options: '$i' }
            } if (author) {
                params.author = author
            } if (idBuku) {
                params.idBuku = idBuku
            } if (penerbit) {
                params.penerbit = penerbit
            }

            let newQuery = await Table_buku.findOne(params).exec()
            return newQuery
        } catch (err) {
            throw err
        }
    }
}

class AllBook {
    constructor(req) {
        this.query = req.query
    }

    async exec() {
        try {
            let { idBuku, judulBuku, author, penerbit } = this.query
            let params = { deleted_at: null }
            if (judulBuku) {
                params.judulBuku = { $regex: judulBuku, $options: '$i' }
            } if (author) {
                params.author = author
            } if (idBuku) {
                params.idBuku = idBuku
            } if (penerbit) {
                params.penerbit = penerbit
            }

            let newQuery = await Table_buku.find(params).exec()
            return newQuery
        } catch (err) {
            throw err
        }
    }
}


class UpdateBook {
    constructor(req) {
        (this.idBuku = req.body.idBuku),
            (this.judulBuku = req.body.judulBuku),
            (this.author = req.body.author),
            (this.penerbit = req.body.penerbit),
            (this.harga = req.body.harga),
            (this.stok = req.body.stok),
            (this.id = id)
    }
    async update() {
        try {
            let data = new Table_buku({
                idBuku: this.idBuku,
                judulBuku: this.judulBuku,
                author: this.author,
                penerbit: this.penerbit,
                harga: this.harga,
                stok: this.stok,
                updated_at: Date.now()
            })

            let query = await Table_buku.findByIdAndUpdate({
                _id: this.id
            }, data, {
                new: true
            }).exec()
            return query
        } catch (err) {
            throw err
        }

    }
}


class DeleteBook {
    constructor(id) {
        this.id = id
    }

    async delete() {
        try {
            let query = await Table_buku.findByIdAndUpdate(
                { _id: this.id },
                { deleted_at: Date.now() },
                { new: true }).exec()
            return query
        } catch (err) {
            throw err
        }
    }
}

module.exports = { CreateBook, AllBook, BookDetails, UpdateBook, DeleteBook }

