import { createApp } from 'vue';
import SearchForm from './components/SearchForm.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(SearchForm);
app.use(ElementPlus);
app.mount('#app');
