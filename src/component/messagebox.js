import React from 'react';
import AWS from 'aws-sdk'
import { SNSClient, PublishCommand} from "@aws-sdk/client-sns";

AWS.config.update({
  accessKeyId: 'AKIAYEDPVLY3YZIODYP6',
  secretAccessKey: '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',
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
    const message = {"Message":this.state.value, "TopicArn":"arn:aws:sns:us-east-1:558579932727:local-notifications"}
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
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Message:
        <textarea value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
      </form>
    );
  }
}