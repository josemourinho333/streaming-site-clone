import { useState, useEffect } from 'react';
import axios from 'axios';

const useRequests = (url, apiKey) => {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: ''
  });

  useEffect(() => {
    setState({...state, loading: true});
    axios.get(url, {
      params: {
        api_key: apiKey,
      },
    })
      .then((response) => {
        setState({
          data: response.data.results,
          loading: false,
          error: ''
        })
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error: error.message
        })
      })
  }, [url])

  return state;
};

export default useRequests;