export default class TestServices {
    _apiBase = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

    _transformData = (data) => {
        const formData = new FormData();
        formData.append('name', data.username);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('position_id', data.radio);
        formData.append('photo', data.file[0]);
        return formData
    }

    async getResource(url) {
        try {
            const res = await fetch(`${this._apiBase}${url}`);
            if (!res.ok) {
                throw new Error(`Could not fetch ${url}, received ${res.status}`);
            }
            return await res.json();
        } catch (error) {
            console.error('An error occurred while fetching the resource:', error);
            return null;
        }
    }

    async getPageResource(page, count) {
        const res = await this.getResource(`users?page=${page}&count=${count}`)
        return res;
    }

    async getToken() {
        const res = await this.getResource('token/')
        return res;
    }

    async getPositionResource() {
        const res = await this.getResource('positions')
        return res.positions;
    }

    async submitForm(data, token) {
        const dataForm = this._transformData(data);

        const response = await fetch(`${this._apiBase}users`, {
            method: 'POST',
            headers: {
                'Token': token,
            },
            body: dataForm,
        });

        return await response.json();
    }
}
