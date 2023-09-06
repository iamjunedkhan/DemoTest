import { Account, Client, Databases, ID, Storage } from "appwrite";
import { PUBLIC_APPURL, PUBLIC_COLLECTION_ID_PRODUCTDB, PUBLIC_DBKEY, PUBLIC_PRODUCT_IMAGE_BUCKET, PUBLIC_PROJECTID } from "../contastans/constant";

class AppwriteConfig {
    databaseId= PUBLIC_DBKEY
    imageBucketId = PUBLIC_PRODUCT_IMAGE_BUCKET
    productCollectionId=PUBLIC_COLLECTION_ID_PRODUCTDB
    projectId=PUBLIC_PROJECTID
  
    client = new Client();
    account = new Account(this.client);
    databases = new Databases(this.client);
    regDb = new Databases(this.client);
    storage = new Storage(this.client);
    
  
    constructor() {
      this.client
        .setEndpoint(PUBLIC_APPURL)
        .setProject(PUBLIC_PROJECTID);
    }
  
    
  
    createEvent(
        product_name,
        product_desc,
        product_mrp,
        image_input,
        product_company
    ) {
      try {
        this.storage
          .createFile(this.imageBucketId, ID.unique(), image_input)
          .then((res) => {
            console.log('**response block CreateFile ',JSON.stringify(res));
            this.databases
              .createDocument(this.databaseId, this.productCollectionId, ID.unique(), {
                product_name: product_name,
                product_desc: product_desc,
                product_img_url: `https://cloud.appwrite.io/v1/storage/buckets/${this.imageBucketId}/files/${res.$id}/view?project=${this.projectId}&mode=admin`,
                product_mrp: product_mrp,
                product_company: product_company
              })
              .then((res) => {
                        console.log('**response block CreateDocument ',JSON.stringify(res));
              }).catch(error=>{
                console.log('**Error Block CreateDocument:',error.message);
              });;
          }).catch(error=>{
            console.log('**Error Block CreateFile:',error);
          });
      } catch (error) {
        console.log("error block 1");
        throw error;
      }
      return Promise.resolve("sucess");
    }
  }
  
  export {AppwriteConfig};