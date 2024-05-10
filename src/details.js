const education = [
    {
        'name': 'Master of Technology in Remote Sensing and GIS',
        'institution': 'Indian Institute of Remote Sensing',
        'from': 'August 2023',
        'to': 'June 2025',
        'remarks': 'Specializing in Satellite Image Analysis and Photogrammetry'
    },
    {
        'name': 'Bachelor of Technology in Computer Science',
        'institution': 'Cochin University of Science and Technology',
        'from': 'August 2019',
        'to': 'June 2023',
        'remarks': 'CGPA: 9.48'
    },
    {
        'name': 'CBSE 12th Standard (AISSCE)',
        'institution': 'Bhavans Vidya Mandir, Eroor',
        'from': 'April 2018',
        'to': 'May 2019',
        'remarks': 'Passed with 93.4% marks.'
    },
    {
        'name': 'CBSE 10th Standard (AISSE)',
        'institution': 'Toc-H (R) Public School, Thiruvankulam',
        'from': 'April 2016',
        'to': 'May 2017',
        'remarks': 'Passed with 93.1% marks.'
    }
]

const workExperience = [
    {
        'position': 'Project Intern',
        'company': 'INAI, IIIT-H',
        'from': 'October 2022',
        'to': 'March 2024',
        'description': "Worked as an intern. Retrained an AI based helmet detection model, assisted with developing the Roadex website. Independently created an analytics platform for IRASTE Telangana project. "
    },
    {
        'position': 'Intern',
        'company': 'Six30 Labs',
        'from': 'June 2022',
        'to': 'July 2022',
        'description': "Worked as an intern. Developed an intruder detection system employing Computer Vision and Deep Learning techniques to recognize and report intrusion in an area under surveillance."
    }
]

const projects = [
    {
        'name': "Text Summarization",
        'preview': "./images/text-summarization.png",
        'from': "Dec 2021",
        'to': "April 2022",
        'link': "https://github.com/abhinav-TB/som_summarizer",
        'description': "Implementation of a text summarizer using Self Organizing Maps. It was published in the International Journal of Advance Computational Engineering and Networking."
    },
    {
        'name': "Price prediction",
        'preview': "./images/car-price-prediction.png",
        'from': "Dec 2021",
        'to': "Jan 2022",
        'link': "https://github.com/advaithca/vehicle-price-prediction",
        'description': "A Machine Learning project, implements a Regression model that predicts the price of used cars, given the year of the model, and kilometres driven."
    },
    {
        'name': "Sorting Visualizer",
        'preview': "./images/SS1.png",
        'from': "April 2022",
        'to': "May 2022",
        'link': "https://github.com/advaithca/AlgoVisualizer",
        'description': "Visualizes a bunch of sorting algorithms. Uses OpenGL bindings for Python for the animation. Does the sorting on a randomly generated numpy Array."
    },
    {
        'name': "LessThanGreaterThan50k",
        'preview': "./images/lessthan.jpg",
        'from': "Jan 2022",
        'to': "March 2022",
        'link': "https://github.com/advaithca/lessThanGreaterThan50k",
        'description': "A data mining project to predict whether the person makes less than or greater than 50k per year. It was done as an academic project to explore data pre-processing methods."
    },
    {
        'name': "Face Blocker",
        'preview': "./images/faceBlocker.png",
        'from': "May 2022",
        'to': "May 2022",
        'link': "https://github.com/advaithca/Face-Blocker",
        'description': "A Face detection project, uses MTCNN to detect faces and blocks them. Built a Web App for it using Streamlit. Done to familiarise working of MTCNN."
    }
]

export const details = {
    'Education': education,
    'WorkExperience': workExperience,
    'Projects': projects
}