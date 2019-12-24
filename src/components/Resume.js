import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

const Resume = () => (
  <center>
    <h1>Resume</h1>
    <div className="ui card">
      <Card>
        <Card.Content>
          <Image
            target="_blank"
            href="https://docs.google.com/document/d/17DvBNvOMNoI6QcIAeRitFxlFKmQ_adj7ryievOEAOPM/edit"
            src="data:image/png;base64,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"
          />
        </Card.Content>
      </Card>
    </div>
    <br />
    <div>
      <Button circular color='facebook' icon='facebook' size='large' href="https://www.facebook.com/keaganbarnes" target="_blank" />
      <Button circular color='twitter' icon='twitter' size='large' href="https://twitter.com/KeaganBarnes12" target="_blank" />
      <Button circular color='google plus' icon='instagram' size='large' href="https://www.instagram.com/keaganbarnes/?hl=en" target="_blank" />
      <Button circular color='linkedin' icon='linkedin' size='large' href="https://www.linkedin.com/in/keaganbarnes/" target="_blank" />
      <Button circular color='black' icon='github' size='large' href="https://github.com/KeaganBarnes" target="_blank" />
    </div>
  </center>
);

export default Resume;