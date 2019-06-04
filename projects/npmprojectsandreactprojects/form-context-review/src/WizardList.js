import React from 'react'
import Wizard from './Wizard.js'

const WizardList = (props) => {
    return (
        <div>
            {props.wizards.map((wizard, i)=> <Wizard key={wizard.name + i} {...wizard} />)}
        </div>
    )
}

export default WizardList