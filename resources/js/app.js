import { createApp } from 'vue';
import SearchForm from './components/SearchForm.vue';

const app = createApp({});
app.component('search-form', SearchForm);
app.mount('#app');
