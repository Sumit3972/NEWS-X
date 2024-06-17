# News-X

Welcome to **News-X**, your one-stop destination for the latest news headlines from around the world. News-X aggregates news from various sources and presents them in a clean and easy-to-read format.

![News-X Screenshot](https://news-x-yw64.vercel.app/screenshot.png)

## Features

- **Top Headlines**: Get the latest top headlines from multiple categories.
- **Category-Based News**: Browse news based on specific categories like business, technology, entertainment, and more.
- **Country-Specific News**: Stay updated with news specific to your country.
- **Responsive Design**: Access news seamlessly on both desktop and mobile devices.

## Live Demo

Check out the live demo [here](https://news-x-yw64.vercel.app/).

## Installation

Follow the steps below to set up and run News-X on your local machine.

### Prerequisites

Make sure you have Node.js and npm installed. You can download Node.js from [here](https://nodejs.org/).

### Client Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/news-x.git
    ```

2. Navigate to the client directory:

    ```bash
    cd client
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

5. Open your browser and go to `http://localhost:3000` to see the app in action.

## Environment Variables

To run the app locally, you'll need to set up environment variables. Create a `.env` file in the `client` directory with the following content:

```plaintext
REACT_APP_API_KEY=your_newsapi_key
