import { useDispatch, useSelector } from "react-redux"
import { courseListActions } from "./redux/course-list-slice"
import axios from "axios"

const CourseListHandlers = () => {

    const dispatch = useDispatch()

    const data = [
        
        {
            id:1 ,
            name: "React Native",
            instructor: "John Doe",
            description: "Learn the basics of React Native development and build your first mobile app",
            likes: 10,
            enrollmentStatus: 'closed',
            thumbnail: 'https://1.bp.blogspot.com/-EGmGNsLWQSM/YOfd3u6YfiI/AAAAAAAAABk/Ic0IVkuyFqciP-c17TGhW59o_ffutUWKgCLcBGAsYHQ/s1920/The%2BUltimate%2BReact%2BNative%2BSeries.jpg',
            duration: '8 weeks',
            schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
            location: 'Online',
            prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
            syllabus: [
                {
                    week: 1,
                    topic: 'Introduction to React Native',
                    content: 'Overview of React Native, setting up your development environment.'
                },
                {
                    week: 2,
                    topic: 'Building Your First App',
                    content: 'Creating a simple mobile app using React Native components.'
                },
                // Additional weeks and topics...
            ],
            students: [
                {
                    id: 101,
                    name: 'Alice Johnson',
                    email: 'alice@example.com',
                },
                {
                    id: 102,
                    name: 'Bob Smith',
                    email: 'bob@example.com',
                },
                {
                    id: 103,
                    name: "Charlie",
                    email: "charlie@example.com",
                  },
                
                
                // Additional enrolled students...
            ],
        },
        {
            id: 2,
            name: "Web Development Basics",
            instructor: "kant karinar",
            description: "Explore the core concepts of web development and build dynamic websites.",
            likes: 5,
            enrollmentStatus: 'Open',
            thumbnail: 'https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705536000&semt=ais',
            duration: '10 weeks',
            schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
            location: 'Online',
            prerequisites: ['Basic HTML and CSS knowledge', 'Understanding of JavaScript'],
            syllabus: [
                {
                    week: 1,
                    topic: 'Introduction to Web Development',
                    content: 'Overview of web development, understanding the role of HTML, CSS, and JavaScript.'
                },
                
            ],
            students: [
                {
                    id: 201,
                    name: 'Charlie Brown',
                    email: 'charlie@example.com',
                },
                {
                    id: 202,
                    name: 'Diana Miller',
                    email: 'diana@example.com',
                },
                {
                    id: 103,
                    name: "Charlie",
                    email: "charlie@example.com",
                  },
                
            ],
        },
        {
            id: 3,
            name: "Python Programming Basics",
            instructor: "Adrew mayak",
            description: "Learn the fundamentals of Python programming language and start coding.",
            likes: 5,
            enrollmentStatus: 'Open',
            thumbnail: 'https://www.advanceexcelforum.com/wp-content/uploads/2021/04/Best-Online-Python-Course.jpg',
            duration: '6 weeks',
            schedule: 'Tuesdays and Thursdays, 5:00 PM - 7:00 PM',
            location: 'Online',
            prerequisites: ['No prior programming experience required'],
            syllabus: [
                {
                    week: 1,
                    topic: 'Introduction to Python',
                    content: 'Overview of Python, setting up your development environment.'
                },
                {
                    week: 2,
                    topic: 'Basic Python Syntax',
                    content: 'Understanding variables, data types, and basic syntax in Python.'
                },
                // Additional weeks and topics...
            ],
            students: [
                {
                    id: 301,
                    name: 'modi',
                    email: 'modi@example.com',
                },
                {
                    id: 302,
                    name: 'zakir',
                    email: 'zakir@example.com',
                },
                {
                    id: 103,
                    name: "Charlie",
                    email: "charlie@example.com",
                  },
                // Additional enrolled students...
            ],
        },
        {
            id: 4,
            name: "Data Science Essentials",
            instructor: "hariyak wills",
            description: "Explore the essential concepts of data science and analysis techniques.",
            likes: 8,
            enrollmentStatus: 'Open',
            thumbnail: 'https://www.cdmi.in/courses@1x/data-science.webp',
            duration: '12 weeks',
            schedule: 'Wednesdays and Fridays, 6:30 PM - 8:30 PM',
            location: 'Online',
            prerequisites: ['Basic understanding of mathematics and statistics', 'Familiarity with programming (preferably Python)'],
            syllabus: [
                {
                    week: 1,
                    topic: 'Introduction to Data Science',
                    content: 'Overview of data science, understanding the data science workflow.'
                },
                {
                    week: 2,
                    topic: 'Data Cleaning and Preprocessing',
                    content: 'Techniques for cleaning and preprocessing data for analysis.'
                },
                // Additional weeks and topics...
            ],
            students: [
                {
                    id: 401,
                    name: 'George Davis',
                    email: 'george@example.com',
                },
                {
                    id: 402,
                    name: 'Helen Turner',
                    email: 'helen@example.com',
                },
                {
                    id: 103,
                    name: "Charlie",
                    email: "charlie@example.com",
                  },
                // Additional enrolled students...
            ],
        },
        {
            id: 5,
            name: "Machine Learning Fundamentals",
            instructor: "Jane Smith",
            description:
              "Explore the basics of machine learning algorithms and techniques.",
            likes: 5,
            enrollmentStatus: "Open",
            thumbnail: "https://c4.wallpaperflare.com/wallpaper/544/77/284/programming-programming-language-python-programming-logo-hd-wallpaper-preview.jpg",
            duration: "10 weeks",
            schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
            location: "Online",
            prerequisites: ["Basic knowledge of Python programming"],
            syllabus: [
              {
                week: 1,
                topic: "Introduction to Machine Learning",
                content:
                  "Understanding the fundamentals of machine learning and its applications.",
              },
              {
                week: 2,
                topic: "Supervised Learning",
                content: "Exploring supervised learning algorithms and techniques.",
              },
              // Additional weeks and topics...
            ],
            students: [
              {
                id: 103,
                name: "Charlie",
                email: "charlie@example.com",
              },
              {
                id: 104,
                name: "Karki",
                email: "karki@cdac.in",
              },
              {
                id: 105,
                name: "Diana",
                email: "diana@example.com",
              },
              // Additional enrolled students...
            ],
          },
          {
            id: 6,
            name: "Web Development with Django",
            instructor: "David Brown",
            description:
              "Learn how to build dynamic web applications using Django framework.",
            likes: 8,
            enrollmentStatus: "Open",
            thumbnail:
              "https://www.shutterstock.com/image-photo/django-inscription-against-laptop-code-600nw-1900171027.jpg",
            duration: "12 weeks",
            schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
            location: "Online",
            prerequisites: ["Basic knowledge of HTML, CSS, and Python"],
            syllabus: [
              {
                week: 1,
                topic: "Introduction to Django",
                content:
                  "Understanding the MVC pattern, setting up Django project.",
              },
              {
                week: 2,
                topic: "Building Views and Templates",
                content: "Creating views, templates, and working with URLs.",
              },
              // Additional weeks and topics...
            ],
            students: [
              {
                id: 106,
                name: "Charlie",
                email: "charlie@example.com",
              },
              {
                id: 107,
                name: "Karki",
                email: "karki@cdac.in",
              },
              {
                id: 108,
                name: "Diana",
                email: "diana@example.com",
              },
              // Additional enrolled students...
            ],
          }
    ]

    const courses = useSelector(prevState => prevState.courses)

    const searchTextUpdateHandler = (e) => {
        dispatch(courseListActions.updateSearchText(e.target.value))
    }

    const fetchCoursesHandler = () => {
        dispatch(courseListActions.updateSearchText(""))
        dispatch(courseListActions.toggleIsLoading(true))
        setTimeout(async () => {

            try {
                const response = await axios.get("https://cxfq59-3000.csb.app/courses", {
                    withCredentials: true
                })

                if (response.data) {
                    dispatch(courseListActions.updateCourses(data))
                    dispatch(courseListActions.toggleIsLoading(false))
                }
            } catch (error) {
                // some error message
                dispatch(courseListActions.toggleIsLoading(false))
                dispatch(courseListActions.updateAlert({ status: true, message: error.message, type: "error" }))
            }

        }, 500)
    }

    const searchFromCoursesHandler = (e) => {
        e.preventDefault()
        const updatedCourses = courses.courses.filter(singleCourse => {
            return (singleCourse.name.toLowerCase().includes(courses.searchText.toLowerCase())
                || singleCourse.instructor.toLowerCase().includes(courses.searchText.toLowerCase())
                || singleCourse.description.toLowerCase().includes(courses.searchText.toLowerCase()))
        })
        dispatch(courseListActions.updateDisplayedCourses(updatedCourses))
    }

    return { fetchCoursesHandler, searchTextUpdateHandler, searchFromCoursesHandler }
}

export default CourseListHandlers
