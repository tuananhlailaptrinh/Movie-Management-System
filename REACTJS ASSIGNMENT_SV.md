# REACTJS ASSIGNMENT

## Objective

The purpose of this assignment is to evaluate students' ability to develop a web application using ReactJS. Students are expected to apply the concepts learned throughout the course, including React Components, State Management, React Hooks, Forms, API Integration, and React Router.

Upon completion of this assignment, students should be able to:

- Build reusable React components.
- Manage application state using React Hooks.
- Consume REST APIs using Fetch API or Axios.
- Implement CRUD operations.
- Create and manage forms in React.
- Use React Router for navigation between pages.
- Organize and structure a React application following best practices.
## PART I. APPLICATION DEVELOPMENT (7 POINTS)

### Activity 1: Display Product List from an API (2 Points)

#### Requirements

Develop a Product List page that retrieves product data from a REST API or JSON Server and displays it on the user interface.

Each product should display:

- Product image
- Product name
- Product description
- Original price
- Current price
The application must also handle API errors and loading states appropriately.

#### Technical Requirements

- Functional Components
- Hooks
- Fetch API or Axios
- Rendering lists using map()
| **Requirement** | **Points** |
| --- | --- |
| Successfully fetch data from API | 0.75 |
| Display product list correctly | 0.75 |
| Handle loading and error states | 0.50 |

### Activity 2: Add and Delete Products (3 Points): Implement functionality to add and delete products.

**Add Product:** Create a form containing:

- Product Name
- Description
- Price
- Current Price
After submission:

- A new product should be added to the list.
- The UI should update immediately.
**Delete Product:** Each product should have a Delete button.

When clicked:

- The selected product should be removed.
- The product list should refresh automatically.
#### Technical Requirements

- Controlled Components
- Form Handling
- Event Handling
- State Updates
| **Requirement** | **Points** |
| --- | --- |
| Product form implementation | 0.50 |
| Add product functionality | 1.25 |
| Delete product functionality | 1.00 |
| Correct UI updates after changes | 0.25 |

### Activity 3: Product Detail and Edit Product (2 Points)

#### Product Detail Page

Create a dedicated page displaying detailed information about a selected product.

Displayed information should include:

- Product image
- Product name
- Product description
- Original price
- Current price
#### Edit Product

Provide an Edit button that navigates users to an Edit Product page.

The edit page should:

- Pre-populate existing product information.
- Allow users to update product details.
- Submit updates via a PUT request.
- Redirect back to the Product Detail page after successful updates.
#### Technical Requirements

- React Router
- useParams
- useNavigate
- PUT Requests using Axios or Fetch
| **Requirement** | **Points** |
| --- | --- |
| React Router configuration | 0.50 |
| Product Detail page implementation | 0.50 |
| Edit Product functionality | 0.50 |
| PUT request and navigation | 0.50 |

## PART II. BONUS POINT (1 POINT)

**Redux / Redux Toolkit Implementation:** Students may earn an additional point by implementing global state management using Redux or Redux Toolkit.

#### Requirements

- Create Redux Store
- Manage product data through Redux
- Use Actions and Reducers
- Use Redux Toolkit and Async Thunks (recommended)
| **Requirement** | **Points** |
| --- | --- |
| Proper implementation of Redux / Redux Toolkit | 1.00 |

## PART III. QUESTION & ANSWER (2 POINTS)

### Alternative Assignment Topics

Students may choose **one** of the following project topics. All topics follow the same grading rubric and technical requirements.

| **Topic** | **Description** |
| --- | --- |
| Student Management System | Manage student records, profiles, and academic information |
| Book Management System | Manage books, authors, and pricing information |
| Movie Management System | Manage movies, genres, ratings, and descriptions |
| Employee Management System | Manage employee information and departments |
| Course Management System | Manage training courses and instructors |
| Event Management System | Manage events, schedules, and locations |
| Library Management System | Manage books and borrowing information |
| Recipe Management System | Manage recipes, ingredients, and cooking instructions |
| Travel Destination Management System | Manage travel destinations and tourist information |
| Task Management (To-Do) System | Manage tasks, priorities, and completion status |

### Common Requirements for All Topics

Each project must implement:

- Display data from an API
- Create new records
- Delete existing records
- View detailed information
- Update existing records
- React Router navigation
- Form validation
- Error handling
- Clean project structure