import React, {useState} from 'react';
import axios from 'axios';

export const postData = async (url, body) => {
  // const [responseData, setResponseData] = useState({
  //   isLoading: false,
  //   data: null,
  //   errorMessage: '',
  // });

  try {
    // setResponseData({...responseData, isLoading: true});
    const data = await axios.post(url, body);
    const finalData = data?.data?.data;
    // if (finalData)
    // setResponseData({...responseData, data: finalData, errorMessage: ''});
  } catch (err) {
    // setResponseData({...responseData, errorMessage: err.message, data: null});
  } finally {
    // setResponseData({...responseData, isLoading: false});
  }

  return responseData;
};
