# House Search Application

This project is a web application that allows users to search for houses based on various criteria. The data for this project is sourced from a CSV file, and the data is migrated and seeded into a database.

| ![Search Form](/data/house-search_1.png) | ![Search Results](/data/house-search_2.png) |
|:----------------------------------------:|:-------------------------------------------:|
|               Search Form                |               Search Results                |

## Technologies
### Backend:
PHP >= 8.2, Laravel v11, MySQL, Composer v2.5.8, Node.js & npm

### Frontend:
Vue.js, HTML, CSS, Element-Plus, Vite, Blade

### Tools:
Git, PHPStorm, Postman

## Functions
1. API for data search: Provides the ability to search for house data based on various criteria such as name, number of bedrooms, bathrooms, storeys, garages, and price range.
2. Migrations and seeders: Migrations create the database structure, and seeders populate the database with initial data from the CSV file.
3. Search form on the frontend: Implements the interface for entering search criteria and displays the search results.
4. AJAX requests to the API: Performs asynchronous requests to the API to search for data and displays the results on the frontend.
5. Loading indicator: Displays a loading indicator while the search is being performed.

## Usage
1. Open your browser and navigate to http://127.0.0.1:8000/.
2. Use the search form to find houses based on different criteria.
3. Results will be displayed in a table below the form.

... or using Postman send GET-request to http://127.0.0.1:8000/api/houses?name=Emerald&bedrooms=3.

## License
This project is licensed under the MIT License.
