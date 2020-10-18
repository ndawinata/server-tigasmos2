import express from 'express'
import * as controller from './controller'

const Route = express.Router()

Route.route('/site')
    .get(controller.getsite)
    .post(controller.addsite)

Route.route('/notif')
    .get(controller.getnotif)
    .post(controller.addnotif)

Route.route('/site/:id')
    .get(controller.getonesite)
    .put(controller.updatesite)
    .delete(controller.deletesite)

Route.route('/notif/:id')
    .get(controller.getonenotif)
    .put(controller.updatenotif)
    .delete(controller.deletenotif)

Route.route('/delta')
    .get(controller.getdelta)
    .post(controller.adddelta)

Route.route('/lokasi')
    .get(controller.getlokasi)
    .post(controller.addlokasi)

Route.route('/lokasi/:id')
    .put(controller.updatelokasi)
    .delete(controller.deletelokasi)

Route.route('/delta/:id')
    .put(controller.updatedelta)
    .delete(controller.deletedelta)

export default Route