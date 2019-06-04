import React from 'react'

const AddWizardForm = (props) => {
    const { handleChange, handleSubmit, name, isAlive, btnText} = props
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                value={name} 
                onChange={handleChange} 
                placeholder="Name"/>
            <label htmlFor="isAliveInput"> Is Alive:   
                <input 
                    id="isAliveInput"
                    type="checkbox" 
                    name="isAlive" 
                    checked={isAlive} 
                    onChange={handleChange}/>
            </label>
            <button>{btnText}</button>
        </form>
    )
}

export default AddWizardForm