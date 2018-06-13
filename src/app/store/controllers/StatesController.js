import { config } from 'config/config';

export default class StatesController {

    static index() {
        return new Promise((resolve, reject) => {
            $.get(`${config.apiUrl}/states`, data => resolve(data)).fail(() => reject(true));
        })
    }

    static create(send) {
        return new Promise((resolve, reject) => {
            $.post(`${config.apiUrl}/states`, Object.assign({}, send))
                .done((data) => resolve(data))
                .fail((data) => reject(true))
        });
    }

    static edit(stateId) {
        return new Promise((resolve, reject) => {
            $.get(`${config.apiUrl}/states/${stateId}`, data => resolve(data)).fail(() => reject(true));
        })
    }

    static update(send) {        
        return new Promise((resolve, reject) => {
            $.put(`${config.apiUrl}/states/${send.id}`, Object.assign({}, send))
                .done((data) => resolve(data))
                .fail((data) => reject(true))
        });
    }

    static delete(stateId) {
        return new Promise((resolve, reject) => {
            $.delete(`${config.apiUrl}/states/${stateId}`)
                .done((data) => resolve(true))
                .fail((data) => reject(true))
        });
    }    
}