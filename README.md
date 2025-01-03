# Student Management UI

Student Management System

## Overview

The Student Management System is a web application designed to simplify student data management. It provides the following functionalities:
1. Create Student Form - A form view to add new students to the system.
2. Search and View All Students - A search-enabled view that lists all students with dynamic loading and filtering capabilities.

## Features

1. Create Student Form
    A user-friendly form to input and save student details.
    Validates the form inputs before submission to ensure data integrity.
2. Student Search and Listing View
    1. Search Functionality:
        1. A search bar to filter students by name.
        2. Implements a debounced search mechanism to reduce unnecessary server requests during typing.
    2. Infinite Scrolling:
        1. Initially loads the first 20 students.
        2. Dynamically loads 20 more students as you scroll down.
        3. Optimized for performance to handle large datasets.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository or download the template.
2. Install the dependencies by running `npm install` or `yarn install`.
3. Start the development server by running `npm run dev` or `yarn dev`.
