import React, { useState } from "react";
import "../sass/App.scss";
import Footer from "./Footer";
import Header from "./Header";
import { postCall } from "../api/Api";

const NewPerson = () => {
  const [datos, setDatos] = useState({
    name: "",
    description: "",
    img: "",
    tag: "",
    link: "",
  });
  const validate = () => {
    if (!datos.name || !datos.description || !datos.img || !datos.tag) {
      return true;
    } else {
      return false;
    }
  };
  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postCall("http://localhost:4000/vote", datos);
      if (!response.data || response.data.code === 1) {
        return;
      }
      console.log(response);
      window.location.href = "/";
    } catch (err) {}
  };
  return (
    <>
      <Header page="1" />
      <div className="container new-person">
        <div className="col-6">
          <div>
            <h1>Create a new Person</h1>
            <form onSubmit={handleSubmit} className="form-person">
              <div className="form-label">
                <label htmlFor="name">Name</label>
                <input type="text" onChange={handleChange} name="name" />
              </div>
              <div className="form-label">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  cols="30"
                  rows="10"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-label">
                <label htmlFor="img">Image</label>
                <input
                  type="text"
                  placeholder="Only the name of the Image"
                  onChange={handleChange}
                  name="img"
                />
              </div>
              <div className="form-label">
                <label htmlFor="tag">Tag</label>
                <input type="text" onChange={handleChange} name="tag" />
              </div>
              <div className="form-label">
                <label htmlFor="link">Link wikipedia</label>
                <input type="text" onChange={handleChange} name="link" />
              </div>
              <input
                type="submit"
                value="Save"
                disabled={validate()}
                className="btn btn-form"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewPerson;
