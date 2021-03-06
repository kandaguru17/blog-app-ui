## Blog App UI

This is the UI project built using react (create-react-app).

### Dependencies

This project uses :

- axios : To consume the Restful API endpoints
- react-router-dom : To Route between components
- bootstrap/jquery/popper.js: Styling utilities

### Features

- View a list of posts
- View each post in detail with the associated comments
- Pagination
- Search function to filter the post list based on a keyword present in title or body of the post

### Run

To run the application

1. clone the repository `https://github.com/kandaguru17/blog-app-ui.git`
2. move to the directory where package.json is located
3. run `npm install && npm start` on the terminal/cmd ,this would pull all the required dependencies and would start the app automatically in the default browser

##### _Note_:

**In order to run this project make sure the api project is up and running as it consumes the related endpoints from it.
The Api project could be found at `https://github.com/kandaguru17/blog-app-api.git`**.
