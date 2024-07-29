import { ref } from 'vue';
import axios from 'axios';

export default {
    setup() {
        const form = ref({
            name: '',
            bedrooms: null,
            bathrooms: null,
            storeys: null,
            garages: null,
            priceMin: null,
            priceMax: null,
        });
        const houses = ref([]);
        const loading = ref(false);

        const searchHouses = async () => {
            loading.value = true;
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/houses', {
                    params: form.value,
                });
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
            searchHouses,
        };
    },
};
