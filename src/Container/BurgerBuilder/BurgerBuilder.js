import React, { Component } from 'react'
// import Aux from '../../hoc/Aux'
import Burger from '../../Components/Burger/Burger'

class BurgerBuilder extends Component {
    state={
        ingredients:{
            salad:1,
            cheese:2,
            bacon:1,
            meat:2
        }
    }
    render() {
        return (
            <p>hii</p>
            // <div>
            //     {/* <Aux>
            //         <div>Burger</div>
            //         <Burger ingredients={this.state.ingredients}/>
            //         <div>Burger Control</div>
            //         {/* <BuildControls/> */}
            //     </Aux> */}
            // </div>
        )
    }
}

export default BurgerBuilder
