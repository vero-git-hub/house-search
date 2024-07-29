<template>
    <div class="search-form">
        <h2>Search Houses</h2>
        <form @submit.prevent="searchHouses">
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="form.name">
            </div>
            <div>
                <label for="bedrooms">Bedrooms:</label>
                <input type="number" id="bedrooms" v-model="form.bedrooms">
            </div>
            <div>
                <label for="bathrooms">Bathrooms:</label>
                <input type="number" id="bathrooms" v-model="form.bathrooms">
            </div>
            <div>
                <label for="storeys">Storeys:</label>
                <input type="number" id="storeys" v-model="form.storeys">
            </div>
            <div>
                <label for="garages">Garages:</label>
                <input type="number" id="garages" v-model="form.garages">
            </div>
            <div>
                <label for="priceMin">Price Min:</label>
                <input type="number" id="priceMin" v-model="form.priceMin">
            </div>
            <div>
                <label for="priceMax">Price Max:</label>
                <input type="number" id="priceMax" v-model="form.priceMax">
            </div>
            <button type="submit">Search</button>
        </form>

        <div v-if="loading">Loading...</div>

        <div v-if="houses.length > 0">
            <h3>Search Results:</h3>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Bedrooms</th>
                    <th>Bathrooms</th>
                    <th>Storeys</th>
                    <th>Garages</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="house in houses" :key="house.id">
                    <td>{{ house.name }}</td>
                    <td>{{ house.price }}</td>
                    <td>{{ house.bedrooms }}</td>
                    <td>{{ house.bathrooms }}</td>
                    <td>{{ house.storeys }}</td>
                    <td>{{ house.garages }}</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div v-if="!loading && houses.length === 0">No results found.</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                bedrooms: '',
                bathrooms: '',
                storeys: '',
                garages: '',
                priceMin: '',
                priceMax: '',
            },
            houses: [],
            loading: false,
        };
    },
    methods: {
        async searchHouses() {
            this.loading = true;
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/houses?name=${this.form.name}&bedrooms=${this.form.bedrooms}&bathrooms=${this.form.bathrooms}&storeys=${this.form.storeys}&garages=${this.form.garages}&priceMin=${this.form.priceMin}&priceMax=${this.form.priceMax}`);
                this.houses = await response.json();
            } catch (error) {
                console.error('Error fetching houses:', error);
            } finally {
                this.loading = false;
            }
        },
    },
};
</script>

<style scoped>
.search-form {
    max-width: 600px;
    margin: 0 auto;
}

.search-form form {
    display: flex;
    flex-direction: column;
}

.search-form form div {
    margin-bottom: 10px;
}

.search-form form label {
    margin-right: 10px;
}

.search-form form input {
    padding: 5px;
}

.search-form form button {
    padding: 10px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

table, th, td {
    border: 1px solid black;
}

th, td {
    padding: 10px;
    text-align: left;
}
</style>
