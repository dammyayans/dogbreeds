import Axios from './axiosData';

export const BASE_URL = 'https://dog.ceo';

const API = {
  getBreeds: `${BASE_URL}/api/breeds/list/all`,
  getBreedImage: (name: string) =>
    `${BASE_URL}/api/breed/${name}/images/random`,
  getSubBreedImage: (name: string, subbreed) =>
    `${BASE_URL}/api/breed/${name}/${subbreed}/images/random`,
  getRandomImage: `${BASE_URL}/api/breeds/image/random`,
};

/*
 * Get all Breeds Request
 */
export const getAllBreeds: any = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const {data, error} = await Axios({
        method: 'GET',
        url: API.getBreeds,
      });
      if (data) {
        resolve(data);
      } else {
        reject(error);
      }
    } catch (ex) {
      reject(ex);
    }
  });
};

/*
 * Get Breed Image Request
 */
export const getBreed: any = (name: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {data, error} = await Axios({
        method: 'GET',
        url: API.getBreedImage(name),
      });
      if (data) {
        resolve(data);
      } else {
        reject(error);
      }
    } catch (ex) {
      reject(ex);
    }
  });
};

/*
 * Get Sub Breed Image Request
 */
export const getSubBreed: any = (name: string, subbreed: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {data, error} = await Axios({
        method: 'GET',
        url: API.getSubBreedImage(name, subbreed),
      });
      if (data) {
        resolve(data);
      } else {
        reject(error);
      }
    } catch (ex) {
      reject(ex);
    }
  });
};

// A mock function to mimic making an async request for login
export function postLogin(userData) {
  return new Promise<{data: IUser}>(resolve =>
    setTimeout(() => resolve({data: userData}), 2000),
  );
}

/*
 * Get Random Breed Request
 */
export const getRandomBreed: any = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const {data, error} = await Axios({
        method: 'GET',
        url: API.getRandomImage,
      });
      if (data) {
        resolve(data);
      } else {
        reject(error);
      }
    } catch (ex) {
      reject(ex);
    }
  });
};
