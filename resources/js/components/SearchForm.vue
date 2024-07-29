<template>
    <div class="search-form">
        <el-card class="search-card">
            <el-divider>
                <h2>Search Houses</h2>
            </el-divider>
            <el-form @submit.prevent="searchHouses" :model="form" label-width="120px" label-position="left">
                <el-form-item label="Name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="Bedrooms">
                    <el-input type="number" v-model="form.bedrooms"></el-input>
                </el-form-item>
                <el-form-item label="Bathrooms">
                    <el-input type="number" v-model="form.bathrooms"></el-input>
                </el-form-item>
                <el-form-item label="Storeys">
                    <el-input type="number" v-model="form.storeys"></el-input>
                </el-form-item>
                <el-form-item label="Garages">
                    <el-input type="number" v-model="form.garages"></el-input>
                </el-form-item>
                <el-form-item label="Price Min">
                    <el-input type="number" v-model="form.priceMin"></el-input>
                </el-form-item>
                <el-form-item label="Price Max">
                    <el-input type="number" v-model="form.priceMax"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="searchHouses">Search</el-button>
                    <el-button @click="showAllHouses">Show All</el-button>
                </el-form-item>
            </el-form>
        </el-card>

        <div v-if="loading" class="loader"></div>
        <div v-if="houses.length > 0">
            <h3>Search Results:</h3>
            <el-table :data="houses" border style="width: 100%">
                <el-table-column prop="name" label="Name"></el-table-column>
                <el-table-column prop="bedrooms" label="Bedrooms"></el-table-column>
                <el-table-column prop="bathrooms" label="Bathrooms"></el-table-column>
                <el-table-column prop="storeys" label="Storeys"></el-table-column>
                <el-table-column prop="garages" label="Garages"></el-table-column>
                <el-table-column prop="price" label="Price"></el-table-column>
            </el-table>
        </div>

        <div v-if="searchInitiated && !loading && houses.length === 0" class="no-results">No results found.</div>
    </div>
</template>

<script src="./SearchForm.js"></script>
<style src="./SearchForm.css"></style>
