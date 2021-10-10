

/**
 * This function is just a front-end check to tell if the currently logged in user is a superadmin.  
 * For a more generic application we would pull the list of superadmins from Firebase or use a cloud
 * function.  For this simple portfolio, we can just do some regex.
 * 
 * This doesn't prevent a hacker from doing things to the database, Firestore rules prevent nonadmins
 * from submitting data.  This is mostly useful in hiding non-admin UI.
 * 
 * @param email The current user's email
 * @returns true if they are a superadmin and false otherwise
 */

export const isSuperAdmin = (email: string) => {
    // use !! to convert to booleans
    return !!email.match(/^(mcanallyc@gmail.com|rpatel01@wesleyan.edu|chris@adadevelopersacademy.org)$/);
}