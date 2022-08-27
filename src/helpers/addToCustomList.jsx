import React from 'react';
import tmdb from '../api/tmdb';
import Cookies from 'js-cookie';

const addToCustomList = (listId, mediaData) => {

  const sessionId = Cookies.get('session_id');

  console.log('in helper', mediaData, 'listid', listId);
  const itemToAdd = {
    media_id: mediaData.id
  };
  tmdb.post(`list/${listId}/add_item`, itemToAdd, {
    params: {
      session_id: sessionId,
    }
  })
  .then((response) => {
    console.log('add to custom list success', response)
  })
  .catch((error) => console.log('error', error));
};

export default addToCustomList;