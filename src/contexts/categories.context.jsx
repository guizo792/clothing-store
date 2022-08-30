import { createContext, useState, useEffect } from 'react';

import {
  addCollectionAndDocs,
  getCategoriesAndDocs,
} from '../utils/firebase/firebase.utils';

import SHOP_DATA from '../dev-data/shop-data';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategories] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocs();
      // console.log(categoryMap);
      setCategories(categoryMap);
    };

    getCategoriesMap();
  }, []);

  // useEffect(() => {
  //   addCollectionAndDocs("categories", SHOP_DATA);
  // }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
