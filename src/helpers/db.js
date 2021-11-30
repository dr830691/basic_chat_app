import { database } from "../firebase";
export function registerUsersForChat(name,email){
  database.ref("user").push({name,email});  
}