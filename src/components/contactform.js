import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Loader from "../images/loader.svg"
import { Form, Button } from "react-bootstrap"
import Axios from "axios"

const SubmissionContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ContactForm = () => {
  const [valid, setValid] = useState(false)
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    enquiry_type: "",
    message: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = e => {
    let newForm = { ...formFields }

    newForm[e.target.name] = e.target.value

    setFormFields(newForm)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setError(false)
    setSubmitting(true)

    Axios.post(
      "https://links-cms.herokuapp.com/enquiries",
      JSON.stringify(formFields),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(result => {
        setSuccess(true)
        setFormFields({
          name: "",
          email: "",
          enquiry_type: "",
          message: "",
        })
      })
      .catch(err => {
        setSubmitting(false)
        setError(true)
      })
  }

  useEffect(() => {
    const { name, email, enquiry_type, message } = formFields
    if (name && email && enquiry_type && message) {
      setValid(true)
    } else {
      setValid(false)
    }
  }, [formFields])

  return (
    <>
      <p>
        Drop us a message, we will aim to respond to all enquiries within 24-48
        hours.
      </p>
      {error ? (
        <h6 className="text-danger">
          Error submitting form. Please try again!
        </h6>
      ) : (
        ""
      )}
      {submitting ? (
        <SubmissionContainer>
          {success ? (
            <h3>Thank you. We will get back to you shortly.</h3>
          ) : (
            <>
              <img src={Loader} alt="Loader" width="125" />
              <h5>Submitting...</h5>
            </>
          )}
        </SubmissionContainer>
      ) : (
        <Form onSubmit={e => handleSubmit(e)}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              className="border border-dark"
              type="text"
              name="name"
              onChange={e => handleChange(e)}
              value={formFields.name}
              placeholder="Full Name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="border border-dark"
              type="email"
              name="email"
              onChange={e => handleChange(e)}
              value={formFields.email}
              placeholder="Email Address"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Subject</Form.Label>
            <Form.Control
              className="border border-dark"
              as="select"
              name="enquiry_type"
              value={formFields.enquiry_type}
              onChange={e => handleChange(e)}
            >
              <option disabled value="">
                Choose your enquiry type
              </option>
              <option value="general">General</option>
              <option value="business">Business</option>
              <option value="dealer">Dealer</option>
              <option value="support">Support</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control
              className="border border-dark"
              as="textarea"
              rows="3"
              name="message"
              onChange={e => handleChange(e)}
              value={formFields.message}
              placeholder="Leave your message..."
            />
          </Form.Group>
          <Button
            type="submit"
            variant="primary"
            className="mx-auto d-block"
            {...(valid
              ? submitting
                ? { disabled: true }
                : { disabled: false }
              : { disabled: true })}
          >
            Submit
          </Button>
        </Form>
      )}
    </>
  )
}

export default ContactForm
