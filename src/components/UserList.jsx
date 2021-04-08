import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { GlobalContext } from "../components/context/GlobalState";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";

export const UserList = () => {
  const { users, deleteUser } = useContext(GlobalContext);
  console.log(users);
  return (
    <ListGroup className="mt-4">
      {users.length > 0 ? (
        <>
          {users.map((user) => (
            <ListGroupItem className="d-flex" key={user.id}>
              {user.name}
              <div className="ml-auto">
                <Link
                  className="btn btn-outline-secondary mr-1"
                  type="button"
                  to={`/edit/${user.id}`}
                >
                  <AiTwotoneEdit />
                </Link>
                <Button
                  className="btn btn-outline-secondary mr-1"
                  type="button"
                  onClick={() => deleteUser(user.id)}
                  color="white"
                >
                  <AiTwotoneDelete />
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className="text-center">No Contacts</h4>
      )}
    </ListGroup>
  );
};
