import React, { useContext, useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "./context/GlobalState";
import { v4 as uuid } from "uuid";

export const AddUser = () => {
  const [name, setName] = useState("");
  const { users, addUser } = useContext(GlobalContext);
  const history = useHistory();
  const onSubmit = () => {
    const newUser = {
      id: uuid(),
      name,
    };
    addUser(newUser);

    history.push("/");
  };
  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={onChange}
          ></Input>
        </FormGroup>
        <Button type="submit">Submit</Button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default AddUser;
