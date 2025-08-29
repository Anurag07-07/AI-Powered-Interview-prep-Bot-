'use server'

import { db } from "@/firebase/admin";
import { success } from "zod";

export async function signUp(params:SignUpParams){
  const {uid,name,email} = params

  try {
    const userRecord = await db.collection('users').doc(uid).get()
    if (userRecord.exists) {
      return {
        success:false,
        message:`User alraedy Exists.Please sign in instead`,
      }
    }  
    
    await db.collection('users').doc(uid).set({
      name,email
    })
  } catch (error:any) {
    console.log(`Error creating a user`,error);
    
    if (error.code === `auth/email-already-exists`) {
      return {
        success:false,
        message:`The email is already in use`
      }
    }

    return {
      success:false,
      message:`Failed to create account`
    }
  }
}