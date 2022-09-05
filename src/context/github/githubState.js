import React, {useReducer} from 'react';
import {GithubContext} from "./githubContext";
import {githubReducer} from "./githubReducer";

const GithubState = ({children}) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: []
  }
  const [state,dispatch] = useReducer(githubReducer, initialState)

  return (
    <GithubContext.provider value={{

    }}>
      {children}
    </GithubContext.provider>
  );
};

export default GithubState;