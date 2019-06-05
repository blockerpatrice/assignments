import React, { Component } from  'react'
import AddWizardForm from './AddWizardForm.js'
import WizardList from './WizardList.js'
import { withWizard } from './WizardProvider.js'

// Props => how we pass information between components in react
// State => how we maintain/change information in react

// Application State
    // Local:  name and isAlive inputs  => handleChange & handleSubmit
    // Global: wizards, saving of wizards

class App extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            isAlive: true
        }
    }

    handleChange = e => {
        const { name } = e.target

        const value = e.target.type === "checkbox" ? 
            e.target.checked : 
            e.target.value

        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newWizard = { name: this.state.name, isAlive: this.state.isAlive }

        this.props.saveNewWizard(newWizard)

        

        this.setState(prevState => ({
            name: "",
            isAlive: false
        }))

        console.log(this.props);
    }

    render(){
        const {handleChange, handleSubmit, state, state: { name, isAlive }} = this
        return (
            <div>
                <AddWizardForm 
                    {...state}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    btnText="Submit"
                />
                <WizardList wizards={this.props.wizards}/>
            </div>
        )
    }
}

export default withWizard(App);



// URL's:  
    // Uniform resource locator 
    // Base URL:           www.google.com
    // URL Endpoint:       www.google.com/images
    // Query Paramaters:   www.google.com/images?location=saltlakecity&timeofday=night

