import React, { useContext, useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "./context/GlobalState";
// import { v4 as uuid } from "uuid";

export const EditUser = (props) => {
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });
  const { users, editUser } = useContext(GlobalContext);
  const history = useHistory();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectUser = users.find((users) => users.id === userId);
    setSelectedUser(selectUser);
  }, [currentUserId, users]);

  const onSubmit = () => {
    editUser(selectedUser);
    history.push("/");
  };
  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            onChange={onChange}
            value={selectedUser.name}
            type="text"
            placeholder="Name"
            name="name"
          ></Input>
        </FormGroup>
        <Button type="submit">Edit</Button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default EditUser;
