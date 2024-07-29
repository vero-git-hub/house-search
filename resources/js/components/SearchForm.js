import { ref } from 'vue';
import axios from 'axios';

export default {
    data() {
        return {
            form: {
                name: '',
                bedrooms: null,
                bathrooms: null,
                storeys: null,
                garages: null,
                priceMin: null,
                priceMax: null,
            },
            houses: [],
            loading: false,
            error: null,
        };
    },
    methods: {
        async searchHouses() {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/houses', {
                    params: this.form,
                });
                this.houses = response.data;
            } catch (error) {
                this.error = 'An error occurred while searching for houses.';
            } finally {
                this.loading = false;
            }
        },
    },
};
