
# City Explorer

This project is a comprehensive City Explorer application that consists of both a backend and a frontend. The backend provides a REST API endpoint to retrieve information about different cities, and the frontend consumes this API to display the data in a user-friendly interface.

## Backend

### Technology Stack
- **Language:** TypeScript
- **Framework:** Express.js
- **Testing:** Jest

### Project Structure
```
backend/
|-- src/
|   |-- controllers/
|       |-- cityController.ts
|   |-- routes/
|       |-- cityRoutes.ts
|   |-- services/
|       |-- cityService.ts
|   |-- app.ts
|-- tests/
|   |-- cityController.test.ts
|   |-- cityService.test.ts
|-- package.json
|-- tsconfig.json
```

### Backend Code Repository
The backend code for this project is available in the following repository: [city-app-backend](https://github.com/LowBP/city-app-backend.git)

### API Endpoint
- **Endpoint:** `/api/cities`
- **Method:** GET
- **Response:** JSON data containing information about cities

### How to Run
1. Install dependencies: `npm install`
2. Run the server: `npm start`
3. Run tests: `npm test`

## Frontend

### Technology Stack
- **Language:** TypeScript
- **Framework:** React.js
- **State Management:** Redux
- **Styling:** Tailwind CSS
- **Testing:** React Testing Library

### Project Structure
```
frontend/
|-- src/
|   |-- components/
|       |-- CityList.tsx
|       |-- CityCard.tsx
|   |-- store/
|       |-- actions.ts
|       |-- reducers.ts
|       |-- store.ts
|   |-- services/
|       |-- cityService.ts
|   |-- App.tsx
|   |-- index.tsx
|-- package.json
|-- tsconfig.json
|-- tailwind.config.js
```

### Styling
- **Framework:** Tailwind CSS
- **Approach:** Utility-first CSS framework for rapid development
- **Configuration:** Tailwind CSS configurations can be found in `tailwind.config.js`

### How to Run
1. Install dependencies: `pnpm install`
2. Run the development server: `pnpm start`
3. Run tests: `pnpm test`

## UX/UI Design

The frontend provides a clean and intuitive user interface for exploring cities. It includes a list of cities with key information displayed on cards. Users can click on a city card to view more details. The design follows modern UI principles for a pleasant user experience.

## Future Improvements
- **Search Functionality:** Improve search functionalities.
- **tests:** Add more testcase.
- **Enhanced Styling:** Improve styling for 320px devices and add responsive design for better mobile experience.

## Additional Considerations  

### Frontend
1. **Redux Actions:** Elaborate on how the city data is fetched and stored in the Redux store.
2. **Service Worker:** Consider implementing a service worker for offline capabilities.
3. **UI Components:** Consider breaking down UI into reusable components for maintainability.

### UX/UI Design
1. **Accessibility:** Ensure the application is accessible, providing alternative text and keyboard navigation.


### Future Improvements
1. **Testing:** Add more tests for both frontend and backend for robustness.
2. **API Documentation:** Provide detailed documentation for API endpoints, including examples.
3. **Sorting:** Improve sorting functionalities 

Overall, your project seems well-organized with thoughtful considerations for future improvements. Tailwind CSS is used for styling, providing a utility-first approach for rapid development. The backend code repository has been provided for reference. If you have any specific questions or need further assistance, feel free to ask. Happy coding!
