import { ref } from 'vue';
import axios from 'axios';

export default {
    setup() {
        const form = ref({
            name: '',
            bedrooms: '',
            bathrooms: '',
            storeys: '',
            garages: '',
            priceMin: '',
            priceMax: '',
        });
        const houses = ref([]);
        const loading = ref(false);
        const searchInitiated = ref(false);

        const searchHouses = async () => {
            loading.value = true;
            searchInitiated.value = true;

            const params = {};
            for (const key in form.value) {
                if (form.value[key] !== '') {
                    params[key] = form.value[key];
                }
            }

            try {
                const response = await axios.get('http://127.0.0.1:8000/api/houses', {
                    params: params,
                });
                houses.value = response.data;
            } catch (error) {
                console.error(error);
            } finally {
                loading.value = false;
            }
        };

        const showAllHouses = async () => {
            loading.value = true;
            searchInitiated.value = true;

            try {
                const response = await axios.get('http://127.0.0.1:8000/api/houses');
                houses.value = response.data;
            } catch (error) {
                console.error(error);
            } finally {
                loading.value = false;
            }
        };

        return {
            form,
            houses,
            loading,
            searchInitiated,
            searchHouses,
            showAllHouses
        };
    },
};
