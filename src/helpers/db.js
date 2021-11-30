import { database } from "../firebase";
export function registerUsersForChat(name,email){
  database.ref("user").push({name,email});  
}
export function writeMessage(content,email){
    database.ref("messages").push(
        {      
            content,
            timeStamp:Date.now(),
            userInfo:email
        });
}