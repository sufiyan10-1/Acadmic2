
import {Client, ID, Databases, Storage, Query} from "appwrite";

export class Service{
   
  client = new Client();
  databases;
  bucket;
  constructor(){
   this.client
   .setEndpoint("https://cloud.appwrite.io/v1")
   .setProject("65a0273c4ec1160f3351");
   this.databases = new Databases(this.client);
   this.bucket = new Storage(this.client);
  }
 
  /* mathods for inputs  */
  async createUniversity({universityName, address,webSite,userID}){
   try{
     return await this.databases.createDocument(
      '65bbddf0d18cb9fd4d14',
      '65bbde0deb22c458ff76',
       ID.unique(),
       {
          universityName,
          address,
          webSite,
          userID
       }
     )
   }catch(error){
     console.log("Appwite service :: createUniversity "+error)
   }
  
  }
 
  async createCourse({
    userID,
    courseName, 
    year, 
    sub1Name, 
    sub1MaxMark,
    sub1MinMark,
    sub2Name,
    sub2MaxMark,
    sub2MinMark,
    sub3Name,
    sub3MaxMark,
    sub3MinMark,
    sub4Name,
    sub4MaxMark,
    sub4MinMark,
    sub5Name,
    sub5MaxMark,
    sub5MinMark,
    sub6Name,
    sub6MaxMark,
    sub6MinMark,
    sub7Name,
    sub7MaxMark,
    sub7MinMark,
    sub8Name,
    sub8MaxMark,
    sub8MinMark,
    sub9Name,
    sub9MaxMark,
    sub9MinMark,
    sub10Name,
    sub10MaxMark,
    sub10MinMark,
    sub11Name,
    sub11MaxMark,
    sub11MinMark,
    sub12Name,
    sub12MaxMark,
    sub12MinMark,
    sub13Name,
    sub13MaxMark,
    sub13MinMark,
    sub14Name,
    sub14MaxMark,
    sub14MinMark,
    internal1MinMark,
    internal2MinMark,
    internal3MinMark,
    internal4MinMark,
    internal5MinMark,
    internal6MinMark,
    internal7MinMark,
    internal8MinMark,
    internal9MinMark,
    internal10MinMark,
    internal11MinMark,
    internal12MinMark,
    internal13MinMark,
    internal14MinMark,
    internal1MaxMark,
    internal2MaxMark,
    internal3MaxMark,
    internal4MaxMark,
    internal5MaxMark,
    internal6MaxMark,
    internal7MaxMark,
    internal8MaxMark,
    internal9MaxMark,
    internal10MaxMark,
    internal11MaxMark,
    internal12MaxMark,
    internal13MaxMark,
    internal14MaxMark,
    
  }){

    try{
      return await this.databases.createDocument(
        '65bbddf0d18cb9fd4d14',
        '65d4f3cb2929e8d5446c',
        ID.unique(),
        {
          userID,
          courseName,
          year,
          sub1Name,
          sub1MaxMark,
          sub1MinMark,
          sub2Name,
          sub2MaxMark,
          sub2MinMark,
          sub3Name,
          sub3MaxMark,
          sub3MinMark,
          sub4Name,
          sub4MaxMark,
          sub4MinMark,
          sub5Name,
          sub5MaxMark,
          sub5MinMark,
          sub6Name,
          sub6MaxMark,
          sub6MinMark,
          sub7Name,
          sub7MaxMark,
          sub7MinMark,
          sub8Name,
          sub8MaxMark,
          sub8MinMark,
          sub9Name,
          sub9MaxMark,
          sub9MinMark,
          sub10Name,
          sub10MaxMark,
          sub10MinMark,
          sub11Name,
          sub11MaxMark,
          sub11MinMark,
          sub12Name,
          sub12MaxMark,
          sub12MinMark,
          sub13Name,
          sub13MaxMark,
          sub13MinMark,
          sub14Name,
          sub14MaxMark,
          sub14MinMark,
          internal1MinMark,
          internal2MinMark,
          internal3MinMark,
          internal4MinMark,
          internal5MinMark,
          internal6MinMark,
          internal7MinMark,
          internal8MinMark,
          internal9MinMark,
          internal10MinMark,
          internal11MinMark,
          internal12MinMark,
          internal13MinMark,
          internal14MinMark,
          internal1MaxMark,
          internal2MaxMark,
          internal3MaxMark,
          internal4MaxMark,
          internal5MaxMark,
          internal6MaxMark,
          internal7MaxMark,
          internal8MaxMark,
          internal9MaxMark,
          internal10MaxMark,
          internal11MaxMark,
          internal12MaxMark,
          internal13MaxMark,
          internal14MaxMark,
          
        }
      ) 
   }catch(error){
    console.log("Appwite service :: createCourse "+error)
   }
  }
  async createCollege({collegeName, collegeCode, userID}){
    
    try{
      return await this.databases.createDocument(
        '65bbddf0d18cb9fd4d14',
        '65e224dfa0c4d70b5b9c',
        ID.unique(),
         {
             collegeName,
             collegeCode,
             userID
         }
       )
    }catch(error){
      console.log("Appwrite serive :: createCollege :: error", error);
    }
  
  }
/*methods for output */
  async getColleges(){
    try{
     return await this.databases.listDocuments(
      "65bbddf0d18cb9fd4d14",
      "65e224dfa0c4d70b5b9c",
      [
        Query.equal('userID', `${localStorage.getItem('userID')}`)
      ]
     )
    }catch(error){
      console.log("Appwrite service :: getColleges" + error)
    }
  }  
  async getNameOfCourses(){
    try{
      return await this.databases.listDocuments(
        "65bbddf0d18cb9fd4d14",
        "65d4f3cb2929e8d5446c",
        [
          Query.equal('userID', `${localStorage.getItem('userID')}`)
        ]
      )
    }catch(error){
      console.log("Appwrite service :: getNameOfCourses" + error)
    }
  }
  async getCourse(){
    try{
      return await this.databases.listDocuments(
        "65bbddf0d18cb9fd4d14",
        "65d4f3cb2929e8d5446c",
        [
          Query.equal('courseName', `${localStorage.getItem('nameOFExamination')}`)
        ]
      )
    }catch(error){
      console.log("Appwrite service :: getNameOfCourses" + error)
    }
  }
  async getUniversity(){
    try{
     return await this.databases.listDocuments(
      "65bbddf0d18cb9fd4d14",
      "65bbde0deb22c458ff76",
      [
        Query.equal('userID', `${localStorage.getItem('userID')}`)
      ]
     )
    }catch(error){
      console.log("Appwrite service :: getColleges" + error)
    }
  }  
  
 
}
