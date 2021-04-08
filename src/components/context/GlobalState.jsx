import React, { createContext, useReducer } from "react";
import App from "../../App";
import AppReducer from "./AppReducer";

//Initial State
const initialState = {
  users: [
    // { id: 1, name: "User One" },
    // { id: 2, name: "User Two" },
    // { id: 3, name: "User Three" },
  ],
};

// Create Context

export const GlobalContext = createContext(initialState);

// Provider Component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Action remove user
  const deleteUser = (id) => {
    dispatch({
      type: "DELETE_USER",
      payload: id,
    });
  };

  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };

  const editUser = (user) => {
    dispatch({
      type: "EDIT_USER",
      payload: user,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        deleteUser,
        addUser,
        editUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
