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

        <div v-if="loading" class="loader"></div>
        <div v-if="houses.length > 0">
            <h3>Search Results:</h3>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Bedrooms</th>
                    <th>Bathrooms</th>
                    <th>Storeys</th>
                    <th>Garages</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="house in houses" :key="house.id">
                    <td>{{ house.name }}</td>
                    <td>{{ house.bedrooms }}</td>
                    <td>{{ house.bathrooms }}</td>
                    <td>{{ house.storeys }}</td>
                    <td>{{ house.garages }}</td>
                    <td>{{ house.price }}</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div v-if="searchInitiated && !loading && houses.length === 0" class="no-results">No results found.</div>
    </div>
</template>

<script src="./SearchForm.js"></script>
<style src="./SearchForm.css"></style>
