import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Shared/Card'

function AboutPage() {
    return (
        <Card>
            <h3>About this project</h3>
            <p>This is a project for giving feedback created using <code>npx create-react-app</code></p>
            <p>Version: 1.0.0</p>
            <p><Link to="/">Back to Home</Link></p>            
        </Card>
    )
}

export default AboutPage
