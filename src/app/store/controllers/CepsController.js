import { config } from 'config/config';

export default class CepsController {

    static index() {
        return new Promise((resolve, reject) => {
            $.get(`${config.apiUrl}/ceps`, data => resolve(data)).fail(() => reject(true));
        })
    }

    static create(send) {
        return new Promise((resolve, reject) => {
            $.post(`${config.apiUrl}/ceps`, Object.assign({}, send))
                .done((data) => resolve(data))
                .fail((data) => reject(true))
        });
    }

    static edit(cepId) {
        return new Promise((resolve, reject) => {
            $.get(`${config.apiUrl}/ceps/${cepId}`, data => resolve(data)).fail(() => reject(true));
        })
    }

    static update(send) {        
        return new Promise((resolve, reject) => {
            $.put(`${config.apiUrl}/ceps/${send.id}`, Object.assign({}, send))
                .done((data) => resolve(data))
                .fail((data) => reject(true))
        });
    }

    static delete(cepId) {
        return new Promise((resolve, reject) => {
            $.delete(`${config.apiUrl}/ceps/${cepId}`)
                .done((data) => resolve(true))
                .fail((data) => reject(true))
        });
    }    
}