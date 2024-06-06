const conf = {
appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
appwriteDatabaseId :  String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
appwriteProjectId :  String(import.meta.env.VITE_APPWRITE_DATABASE_ID ),
appwriteCollectionId :  String(import.meta.env.APPWRITE_COLLECTION_ID),
}
export default conf