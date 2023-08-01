# React Native Dog Breed App

This is a React Native app that lists all dog breeds available using the [Dog CEO API](https://dog.ceo/dog-api/documentation/). The app includes features such as displaying all breeds, handling sub-breeds, adding favorites, displaying breed details, and managing a user profile with authentication using Redux.

## Libraries Used

- Redux
- React Navigation
- Axios (Bonus for API fetching)
- React Native (not Expo)

## Features

- Display a list of all dog breeds.
- If a breed has one or more sub-breeds, they appear as an accordion or as separate cards displaying the sub-breeds.
- Users can mark any dog breed or sub-breed as a favorite.
- Favorites are indicated by an icon/image in the list of all breeds.
- Tapping on a breed takes the user to a details screen showing the breed name and the first image from the API. If there are sub-breeds, their names and images are also displayed.
- A fake authentication system is implemented locally using Redux to ask for the user's email and name.
- Users can navigate between a tab menu with the list of breeds and the user profile screen.
- In the user profile, the user's name and email address are displayed, along with a list of their favorite breeds.
- A search bar is included at the top of the list to allow users to search the whole list quickly (Bonus).
- Users can display a random dog image in a modal using the endpoint: `https://dog.ceo/api/breeds/image/random`. In the modal, users can add the breed to their favorites or remove it if it's already in the list (Bonus).

## Note

This is a react native challenge. 
There were no strict specifications for UI and layout 🐾🐶
