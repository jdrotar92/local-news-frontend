import React from 'react';
import AWS from 'aws-sdk'
import { SNSClient, PublishCommand} from "@aws-sdk/client-sns";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ACCESS_KEY_ID = ''
const SECRET_ACCESS_KEY = ''
const SNS_TOPIC_ARN = 'arn:aws:sns:us-east-1:558579932727:local-notifications'

AWS.config.update({
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
  region: 'us-east-1'
})

export default class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const client = new SNSClient(AWS.config);
    const message = {"Message":this.state.value, "TopicArn":SNS_TOPIC_ARN}
    const command = new PublishCommand(message);
    console.log('Sending SNS Message')
    client.send(command).then(
      (data) => {
        console.log('Sent message successfully')
      },
      (error) => {
        console.log('Encountered Error')
      }
    );
    event.preventDefault();
  }

  render() {
    return (
      // <form onSubmit={this.handleSubmit}>
      // <label>
      //   Message:
      //   <textarea value={this.state.value} onChange={this.handleChange} />
      // </label>
      // <input type="submit" value="Submit" />
      // </form>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formSendMessage">
            <Form.Label>Send Message</Form.Label>
            <Form.Control type="message" placeholder="Enter message here" value={this.state.value} onChange={this.handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
      </Form>
    );
  }
}