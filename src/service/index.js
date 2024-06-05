import axios from "axios";

export const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getHomeInformation = async (section) => {
  try {
    const apiUrl = `${baseUrl}/home.json`;
    //console.log(apiUrl);

    const response = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    // //console.error("Error fetching data:", error);
    throw error;
  }
};


export const getHeaderData = async () => {
  try {
    const apiUrl = `${baseUrl}/header.json`;

    const response = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    //console.error("Error fetching data:", error);
    throw error;
  }
};

export const getFilterCategoryData = async () => {
  try {
    const apiUrl = `${baseUrl}/productFilter.json`;

    const response = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    //console.error("Error fetching data:", error);
    throw error;
  }
};

export const getFooterData = async () => {
  try {
    const apiUrl = `${baseUrl}/footer.json`;

    const response = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    //console.error("Error fetching data:", error);
    throw error;
  }
};

export const getProducts = async (types) => {
  try {
    let apiUrl = `${baseUrl}/products.json`;

    // if (types) {
    //   apiUrl = `${apiUrl}?${types}`; // Corrected line
    // }
    // if (types) {
    //   apiUrl += `&_page=1&_per_page=9`;
    // } else {
    //   apiUrl += `?_page=1&_per_page=9`;
    // }
    const response = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    //console.error("Error fetching data:", error);
    throw error;
  }
};

export const getInstaProducts = async (types) => {
  try {
    let apiUrl = `${baseUrl}/InstaProducts.json`;

    // {
    //   apiUrl += `?_page=1&_per_page=4`;
    // }
    const response = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    //console.error("Error fetching data:", error);
    throw error;
  }
};

export const getProductsList = async (types) => {
  try {
    let apiUrl = `${baseUrl}/products.json`;

    const response = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    //console.error("Error fetching data:", error);
    throw error;
  }
};

export const getAboutPageData = async () => {
  try {
    const apiUrl = `${baseUrl}/about.json`;
    //console.log("apiUrl", apiUrl);
    const response = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    // //console.error('Error fetching about:', error);
  }
};

export const getContactPageData = async () => {
  try {
    const apiUrl = `${baseUrl}/contact.json`;
    //console.log("apiUrl", apiUrl);
    const response = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    // //console.error('Error fetching about:', error);
  }
};

export const getSearchResult = async () => {
  try {
    let apiUrl = `${baseUrl}/results.json`;

    const response = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    //console.error('Error fetching about:', error.data);
  }
};

export const getBlogs = async (pages) => {
  try {
    let apiUrl = `${baseUrl}/blogs.json`;

    // if (pages) {
    //   apiUrl += `?_page=${pages}&_per_page=8`;
    // } else {
    //   apiUrl += `?_page=1&_per_page=8`;
    // }

    const response = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return { data: response.data, total: response.data.items.length / 9 };
  } catch (error) {
    // //console.error('Error fetching about:', error);
  }
};

export const getBlogsDetails = async (id) => {
  try {
    let apiUrl = `${baseUrl}/blogs?id=${id}`;

    const response = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data[0];
  } catch (error) {
    //console.error("Error fetching about:", error.data);
  }
};

export const getProductDetails = async (id) => {
  try {
    let apiUrl = `${baseUrl}/products?id=${id}`;

    const response = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data[0];
  } catch (error) {
    //console.error("Error fetching about:", error.data);
  }
};

export const addToCart = async (data = {}) => {
  try {
    // const apiUrl = `${baseUrl}/cart`;

    // try {
    //   const response = await axios.post(apiUrl, data, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   return response.data;
    // } catch (error) {
    //   //console.error("Error in POST request:", error);
    //   // Fallback to localStorage if API request fails
      addToCartLocalStorage(data);
    // }
  } catch (error) {
    //console.error("Error in POST request:", error);
    // Fallback to localStorage if API request fails
    addToCartLocalStorage(data);
  }
};

export const getCartItems = async () => {
  try {
    const apiUrl = `${baseUrl}/cart`;

    // try {
    //   const response = await axios.get(apiUrl, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   return response.data;
    // } catch (error) {
    //   //console.error("Error fetching cart items:", error);
    //   // Fallback to localStorage if API request fails
      return getCartItemsLocalStorage();
    // }
  } catch (error) {
    //console.error("Error fetching cart items:", error);
    // Fallback to localStorage if API request fails
    return getCartItemsLocalStorage();
  }
};

export const updateCartItem = async (itemId, updatedData) => {
  try {
    // const apiUrl = `${baseUrl}/cart/${itemId}`;

    // try {
    //   const response = await axios.patch(apiUrl, updatedData, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   return response.data;
    // } catch (error) {
    //   //console.error("Error updating cart item:", error);
    //   // Fallback to localStorage if API request fails
      updateCartItemLocalStorage(itemId, updatedData);
    // }
  } catch (error) {
    //console.error("Error updating cart item:", error);
    // Fallback to localStorage if API request fails
    updateCartItemLocalStorage(itemId, updatedData);
  }
};

export const removeCartItem = async (itemId) => {
  try {
    const apiUrl = `${baseUrl}/cart/${itemId}`;

    // try {
    //   const response = await axios.delete(apiUrl, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   return response.data;
    // } catch (error) {
    //   //console.error("Error removing cart item:", error);
    //   // Fallback to localStorage if API request fails
      removeCartItemLocalStorage(itemId);
    // }
  } catch (error) {
    //console.error("Error removing cart item:", error);
    // Fallback to localStorage if API request fails
    removeCartItemLocalStorage(itemId);
  }
};

const addToCartLocalStorage = (data) => {
  try {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push(data);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  } catch (error) {
    //console.error("Error adding to localStorage:", error);
  }
};

const getCartItemsLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch (error) {
    //console.error("Error getting cart items from localStorage:", error);
    return [];
  }
};

const updateCartItemLocalStorage = (itemId, updatedData) => {
  try {
  
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedItems = cartItems.map((item) => {
      if (item.productId === itemId) {
        return { ...item, ...updatedData };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  } catch (error) {
    //console.error("Error updating cart item in localStorage:", error);
  }
};

const removeCartItemLocalStorage = (itemId) => {
  try {
    //console.log(itemId,"itemId");
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedItems = cartItems.filter((item) => item.productId !== itemId);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  } catch (error) {
    //console.error("Error removing cart item from localStorage:", error);
  }
};

export const addUserAddress = async (data = {}) => {
  try {
    const apiUrl = `${baseUrl}/user`;

    // try {
    //   const response = await axios.post(apiUrl, data, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
      
    //   return response.data;
    // } catch (error) {
    //   //console.error("Error in POST request:", error);
    //   // Fallback to localStorage if API request fails
      addUserAddressLocalStorage(data);
    // }
  } catch (error) {
    //console.error("Error in POST request:", error);
    // Fallback to localStorage if API request fails
    addUserAddressLocalStorage(data);
  }
};

export const removeUserAddress = async (itemId) => {
  try {
    const apiUrl = `${baseUrl}/user/${itemId}`;

    // try {
    //   const response = await axios.delete(apiUrl, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   return response.data;
    // } catch (error) {
    //   //console.error("Error removing user address:", error);
    //   // Fallback to localStorage if API request fails
      removeUserAddressLocalStorage(itemId);
    // }
  } catch (error) {
    // //console.error("Error removing user address:", error);
    // Fallback to localStorage if API request fails
    removeUserAddressLocalStorage(itemId);
  }
};

export const updateUser = async (itemId, updatedData) => {
  try {
    const apiUrl = `${baseUrl}/user/${itemId}`;

    // try {
    //   const response = await axios.patch(apiUrl, updatedData, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   return response.data;
    // } catch (error) {
    //   //console.error("Error updating user:", error);
    //   // Fallback to localStorage if API request fails
      updateUserLocalStorage(itemId, updatedData);
    // }
  } catch (error) {
    // //console.error("Error updating user:", error);
    // Fallback to localStorage if API request fails
    updateUserLocalStorage(itemId, updatedData);
  }
};

export const getUserDetails = async () => {
  // try {
  //   const apiUrl = `${baseUrl}/user.json`;
  //   const response = await axios.get(apiUrl, {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   return response.data;
  // } catch (error) {
    return getUserAddressLocalStorage();
  // }
};

const addUserAddressLocalStorage = (data) => {
  try {
    let userAddresses = JSON.parse(localStorage.getItem("userAddresses")) || [];
    userAddresses.push(data);
    localStorage.setItem("userAddresses", JSON.stringify(userAddresses));
  } catch (error) {
   // //console.error("Error adding user address to localStorage:", error);
  }
};

const removeUserAddressLocalStorage = (itemId) => {
  try {
    let userAddresses = JSON.parse(localStorage.getItem("userAddresses")) || [];
    const updatedAddresses = userAddresses.filter((address) => address.id !== itemId);
    localStorage.setItem("userAddresses", JSON.stringify(updatedAddresses));
  } catch (error) {
  //  //console.error("Error removing user address from localStorage:", error);
  }
};

const updateUserLocalStorage = (itemId, updatedData) => {
  try {
    let userAddresses = JSON.parse(localStorage.getItem("userAddresses")) || [];
    const updatedAddresses = userAddresses.map((address) => {
      if (address.id === itemId) {
        return { ...address, ...updatedData };
      }
      return address;
    });
    localStorage.setItem("userAddresses", JSON.stringify(updatedAddresses));
  } catch (error) {
    ////console.error("Error updating user address in localStorage:", error);
  }
};

const getUserAddressLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem("userAddresses")) || [];
  } catch (error) {
   // //console.error("Error getting user items from localStorage:", error);
    return [];
  }
};