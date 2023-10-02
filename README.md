# Movie Search Application

This repository contains a web-based user interface for searching a database of movie metadata. The application provides an intuitive UI to query movie information based on a given input, fetches results from a backend API, and presents them to the user.

## Features

- **Search Input**: A text input field for users to enter their search queries.
- **Search Results**: Results are displayed with the following details:
  - Movie Title
  - Description
  - Genres
  - Duration (in minutes)
- **Autocomplete**: As users type in the search box, the application suggests up to 5 movie titles based on the current input. Selecting a title from this list will auto-fill the search box and execute the search.

## Backend API

The application fetches movie details from the provided backend API:

- **API Endpoint**: [https://movies-mock-api-s7oiqxtmzq-lz.a.run.app/api/movies](https://movies-mock-api-s7oiqxtmzq-lz.a.run.app/api/movies)

  - To query movie titles, use the `q` query parameter. For example:

    ```
    https://movies-mock-api-s7oiqxtmzq-lz.a.run.app/api/movies?q=godfather
    ```

    This fetches all movies containing the string "godfather" in their title.

- **API Documentation**: Detailed information about the backend API can be accessed [here](https://movies-mock-api-s7oiqxtmzq-lz.a.run.app).

## Getting Started

### Prerequisites

Ensure you have `node` and `npm` installed on your machine.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/zakaria-ahmed/movie-search.git

    cd movie-search
    ```

2. **Install Dependencies**:

3. ```bash
   npm install
   ```

4. **Start the Application**:

   ```bash
    npm start
    ```

5. **Open the Application**:

6. ```bash
   http://localhost:3000
   ```

7. **Run Tests**:

   ```bash
    npm test
    ```

    or cypress tests

    ```bash
    npm run cypress:open
    ```

8. **Build the Application**:

9. ```bash
   npm run build
   ```
