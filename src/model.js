import mongoose from 'mongoose'

var Schema = mongoose.Schema({
    date: Date,
    pasut: Number
})
var notifSchema = mongoose.Schema({
    date: String,
    ketinggian: Number,
    lokasi: String,
    desc: String
})
var Lokasi = mongoose.Schema({
    nama: String,
    latitude: Number,
    longitude: Number
})
var Delta = mongoose.Schema({
    centerlat: Number,
    centerlon: Number,
    latitude: Number,
    longitude: Number
})

const deltamaps = mongoose.model('Delta', Delta)
const lokasi = mongoose.model('Lokasi', Lokasi)
const notif = mongoose.model('Notif', notifSchema)
const site = mongoose.model('Site', Schema)

export {
    deltamaps,
    lokasi,
    notif,
    site,
}

// convert date to JSON => var d = new Date()
// d.toJSON()