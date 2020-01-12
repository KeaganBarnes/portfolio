import React from 'react'
import { Form, Button, TextArea, Icon } from 'semantic-ui-react'



export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <>
        <center >
          <h1> Contact Me </h1>
          <hr />
          <div>
            <Button circular color='facebook' icon='facebook' size='large' href="https://www.facebook.com/keaganbarnes" target="_blank" />
            <Button circular color='twitter' icon='twitter' size='large' href="https://twitter.com/KeaganBarnes12" target="_blank" />
            <Button circular color='google plus' icon='instagram' size='large' href="https://www.instagram.com/keaganbarnes/?hl=en" target="_blank" />
            <Button circular color='linkedin' icon='linkedin' size='large' href="https://www.linkedin.com/in/keaganbarnes/" target="_blank" />
            <Button circular color='black' icon='github' size='large' href="https://github.com/KeaganBarnes" target="_blank" />
          </div>
          <hr />
          <br />
        </center >
        <br />


        <Form>
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/myyknolk"
            method="POST"
          >
            {/* <!-- add your custom form HTML here --> */}
            <label>Name:</label>
            <input type="text" name="Name" placeholder="Name" />
            <label>Email:</label>
            <input type="email" name="email" placeholder="Your Email" />
            <label>Subject:</label>
            <input type="text" name="_subject" placeholder="Subject" />
            <label>Message:</label>
            <TextArea type="text" name="message" placeholder="Type your message here..." />
            <br />
            <br />
            {status === "SUCCESS" ? <p>Thanks!</p>
              :
              <Button icon color='black' size='medium'>
                <Icon name='send' />
                Send
              </Button>
            }
            {status === "ERROR" && <p>Ooops! There was an error. Please try again!</p>}
          </form>
        </Form>
        <center>
          <br />
          <hr />
          <p>
            <Icon name='phone volume' />:
              801.671.5084
          </p>
          <p>
            <Icon name='envelope' />:
              barnes.keagan9@gmail.com
          </p>
          <hr />
        </center>
      </>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}