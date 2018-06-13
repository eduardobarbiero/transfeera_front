import { config } from 'config/config';

export default class CitiesController {

    static index() {
        return new Promise((resolve, reject) => {
            $.get(`${config.apiUrl}/cities`, data => resolve(data)).fail(() => reject(true));
        })
    }

    static create(send) {
        return new Promise((resolve, reject) => {
            $.post(`${config.apiUrl}/cities`, Object.assign({}, send))
                .done((data) => resolve(data))
                .fail((data) => reject(true))
        });
    }

    static edit(cityId) {
        return new Promise((resolve, reject) => {
            $.get(`${config.apiUrl}/cities/${cityId}`, data => resolve(data)).fail(() => reject(true));
        })
    }

    static update(send) {        
        return new Promise((resolve, reject) => {
            $.put(`${config.apiUrl}/cities/${send.id}`, Object.assign({}, send))
                .done((data) => resolve(data))
                .fail((data) => reject(true))
        });
    }

    static delete(cityId) {
        return new Promise((resolve, reject) => {
            $.delete(`${config.apiUrl}/cities/${cityId}`)
                .done((data) => resolve(true))
                .fail((data) => reject(true))
        });
    }    
}