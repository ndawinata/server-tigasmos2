import parseString from 'xml2js'
const parse = parseString.parseString

import {
    notif,
    lokasi,
    deltamaps,
    site
} from './model'

// ------- Get Data ---------

// Get Lokasi Delta
export const getdelta = (request, response) => {
    deltamaps.find().exec((error, datas) => {
        if (error) {
            return response.json({
                'success': false,
                'message': 'Gagal mengambil datas!',
                error
            })
        }
        return response.json({
            'success': true,
            'message': 'Berhasil mengambil datas!',
            datas
        })
    })
}

// Get Lokasi Lokasi
export const getlokasi = (request, response) => {
    lokasi.find().exec((error, datas) => {
        if (error) {
            return response.json({
                'success': false,
                'message': 'Gagal mengambil datas!',
                error
            })
        }
        return response.json({
            'success': true,
            'message': 'Berhasil mengambil datas!',
            datas
        })
    })
}

// Get data site
export const getsite = (request, response) => {
    site.find().exec((error, datas) => {
        if (error) {
            return response.json({
                'success': false,
                'message': 'Gagal mengambil datas!',
                error
            })
        }
        return response.json({
            'success': true,
            'message': 'Berhasil mengambil datas!',
            datas
        })
    })
}

// Get data notif
export const getnotif = (request, response) => {
    notif.find().exec((error, datas) => {
        if (error) {
            return response.json({
                'success': false,
                'message': 'Gagal mengambil datas!',
                error
            })
        }
        return response.json({
            'success': true,
            'message': 'Berhasil mengambil datas!',
            datas
        })
    })
}



// ------- Add Data ---------

// Add data Site
export const addsite = (request, response) => {
    const newData = new site(request.body)

    newData.save((error, data) => {
        global.io.emit('site', data)
        if (error) {
            return response.json({
                'success': false,
                'message': 'Gagal menambah data!',
                error
            })
        }
        return response.json({
            'success': true,
            'message': 'Berhasil Menambahkan data',
            data
        })
    })
}

// Add data Notif
export const addnotif = (request, response) => {
    const newData = new notif(request.body)

    newData.save((error, data) => {
        global.io.emit('notif', data)
        if (error) {
            return response.json({
                'success': false,
                'message': 'Gagal menambah data!',
                error
            })
        }
        return response.json({
            'success': true,
            'message': 'Berhasil Menambahkan data',
            data
        })
    })
}

// Add Delta Maps
export const adddelta = (request, response) => {
    const newData = new deltamaps(request.body)

    newData.save((error, data) => {
        if (error) {
            return response.json({
                'success': false,
                'message': 'Gagal menambah data!',
                error
            })
        }
        return response.json({
            'success': true,
            'message': 'Berhasil Menambahkan data',
            data
        })
    })
}

// Add Lokasi
export const addlokasi = (request, response) => {
    const newData = new lokasi(request.body)

    newData.save((error, data) => {
        if (error) {
            return response.json({
                'success': false,
                'message': 'Gagal menambah data!',
                error
            })
        }
        return response.json({
            'success': true,
            'message': 'Berhasil Menambahkan data',
            data
        })
    })
}

// Put, get by id, delete

// -------------- Delta Maps ------------------
// put
export const updatedelta = (request, response) => {
    deltamaps.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }, (error, data) => {
        if (error) {
            return response.json({
                'success': false,
                'message': 'Gagal mengupdate data!',
                error
            })
        }
        return response.json({
            'success': true,
            'message': 'Berhasil mengupdate data!',
            data
            })
        })
}
// delete
export const deletedelta = (request, response) => {
    deltamaps.findByIdAndRemove({ _id: request.params.id }).exec((error, data) => {
        if (error) {
            return response.json({
                'success': false,
                'message': 'Terjadi error!',
                error
                })
            }
        if (Object.keys(data).length > 0) {
            return response.json({
            'success': true,
            'message': `Berhasil menghapus data Id ${request.params.id}`,
            data
            })
        } else {
            return response.json({
            'success': true,
            'message': `Tidak ada data dengan Id ${request.params.id}`,
            })
        }
    })
}

// -------------- Lokasi ------------------
// put
export const updatelokasi = (request, response) => {
    lokasi.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }, (error, data) => {
        if (error) {
            return response.json({
                'success': false,
                'message': 'Gagal mengupdate data!',
                error
            })
        }
        return response.json({
            'success': true,
            'message': 'Berhasil mengupdate data!',
            data
            })
        })
}
// delete
export const deletelokasi = (request, response) => {
    lokasi.findByIdAndRemove({ _id: request.params.id }).exec((error, data) => {
        if (error) {
            return response.json({
                'success': false,
                'message': 'Terjadi error!',
                error
                })
            }
        if (Object.keys(data).length > 0) {
            return response.json({
            'success': true,
            'message': `Berhasil menghapus data Id ${request.params.id}`,
            data
            })
        } else {
            return response.json({
            'success': true,
            'message': `Tidak ada data dengan Id ${request.params.id}`,
            })
        }
    })
}

// -------------- Site ------------------

// get by id
export const getonesite = (request, response) => {
    site.find({ _id: request.params.id }).exec((error, data) => {
        if (error) {
        return response.json({
            'success': false,
            'message': 'Gagal mengambil data!',
            error
        })
    }
        return response.json({
            'success': true,
            'message': 'Berhasil mengambil data!',
            data
        })
    })
}

// Put / Update

export const updatesite = (request, response) => {
    site.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }, (error, data) => {
        if (error) {
            return response.json({
                'success': false,
                'message': 'Gagal mengupdate data!',
                error
            })
        }
        return response.json({
            'success': true,
            'message': 'Berhasil mengupdate data!',
            data
            })
        })
}

// delete data

export const deletesite = (request, response) => {
    site.findByIdAndRemove({ _id: request.params.id }).exec((error, data) => {
        if (error) {
            return response.json({
                'success': false,
                'message': 'Terjadi error!',
                error
                })
            }
        if (Object.keys(data).length > 0) {
            return response.json({
            'success': true,
            'message': `Berhasil menghapus data Id ${request.params.id}`,
            data
            })
        } else {
            return response.json({
            'success': true,
            'message': `Tidak ada data dengan Id ${request.params.id}`,
            })
        }
    })
}

// -------------- Notif ------------------

// get by id
export const getonenotif = (request, response) => {
    notif.find({ _id: request.params.id }).exec((error, data) => {
        if (error) {
        return response.json({
            'success': false,
            'message': 'Gagal mengambil data!',
            error
        })
    }
        return response.json({
            'success': true,
            'message': 'Berhasil mengambil data!',
            data
        })
    })
}

// Put / Update
export const updatenotif = (request, response) => {
    notif.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }, (error, data) => {
        if (error) {
            return response.json({
                'success': false,
                'message': 'Gagal mengupdate data!',
                error
            })
        }
        return response.json({
            'success': true,
            'message': 'Berhasil mengupdate data!',
            data
            })
        })
}

// delete data

export const deletenotif = (request, response) => {
    notif.findByIdAndRemove({ _id: request.params.id }).exec((error, data) => {
        if (error) {
            return response.json({
                'success': false,
                'message': 'Terjadi error!',
                error
                })
            }
        if (Object.keys(data).length > 0) {
            return response.json({
            'success': true,
            'message': `Berhasil menghapus data Id ${request.params.id}`,
            data
            })
        } else {
            return response.json({
            'success': true,
            'message': `Tidak ada data dengan Id ${request.params.id}`,
            })
        }
    })
}