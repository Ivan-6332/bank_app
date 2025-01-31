'use server';

import { createSessionClient } from '../appwrite';

export const signIn = async () => {
    try{
        // Mutation / Database / Make fetch
    } catch (error) {
        console.error('Error', error);
    }
}
export const signUp = async (userData: SignUpParams) => {
    try{
        // create a user account
        console.log('User data:', userData);
    } catch (error) {
        console.error('Error', error);
    }
}

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      return await account.get();
    } catch (error) {
      console.error('Error', error);
      return null;
    }
  }
  