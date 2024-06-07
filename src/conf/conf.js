const conf = {
appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
appwriteDatabaseId :  String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
appwriteProjectId :  String(import.meta.env.VITE_APPWRITE_DATABASE_ID ),
appwriteCollegeDataId :  String(import.meta.env.VITE_APPWRITE_COLLEGEDATA_ID ),
appwriteCourseDataId :  String(import.meta.env.VITE_APPWRITE_COURSEDATA_ID),
appwritUniversityDataId :  String(import.meta.env.VITE_APPWRITE_UNIVERSITY_ID),
}
export default conf