
import React, { useReducer } from 'react';
import {reducer} from 'react';
import { initialState} from 'react';



export const memReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PHOTO':
        return {
          ...state,
          regularphoto: action.payload,
        };
        case 'SET_HOTPHOTO':
            return {
                ...state,
                hotphoto: action.payload,
            };
        
      default:
              return state
    }
}
