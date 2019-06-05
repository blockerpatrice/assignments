import React, {Component} from 'react';
import Movie from './Movie';
import Axios from 'axios';


const App = ( ) => {

    const movies = [
        { title: "Black Panther", stars: 5 },
        { title: "Mission Impossible", stars: 4 },
        { title: "Gremlins", stars: 0.1 },
        { title: "Sleepless in Seattle", stars: 4 }
    ]

    const mappedMovies = movies.map(movie => {
        return (
            <Movie title={ movie.title } stars={ movie.stars } />
            
        )
        console.log(mappedMovies);
    })
    
    return (
        
        <div>
            
            { mappedMovies }
        </div>
    )
}

export default App;

// class App extends Component(){
//     constructor(){
//         super();

//         this.state ={
//             person:"" 
//         }
//     }

//     componentDidMount(){
//         /* componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). 
//          * Initialization that requires DOM nodes should go here. If you need to 
//          * load data from a remote endpoint, this is a good place to instantiate the network request. */
//         Axios.get("https://swapi.co/api/people/1").then((response)=>{
//             console.log(response.data);
//             this.setState({person: response.data})
//         })
//     }

//     render(){
//         return (
//             <div>

//             </div>
//         );
//     }

// }

/*


    toggle = () => {
        this.setState(prevState =>{
            return {
                isDark: !prevState.isDark;
            }
        })
    }

    render(){
        const {isDark} = this.state;
        const {component, ...props} = this.props;
        const C = component;

        return <C isDark={isDark} toggle={this.toggle} {...props} />
    }
    export default Toggler
    export const withToggler = C => props => <Toggler component={C} {...props}/>

    export const withProvider = C => props => (
        <Consumer>
            {value => <C {...value} {...props} />}
        </Consumer>
    )

*/ 