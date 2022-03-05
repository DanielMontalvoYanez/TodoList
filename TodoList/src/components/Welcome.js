import React from 'react';
import './estilos/Welcome.css'

const Welcome =({username})=>(
// componentDidMount(){
//     // this.authListener()
// }
// authListener(){
//     db.auth().onAuthStateChanged((user)=>{
//         console.log(user)
//         if (user) {
//             this.setState({user})
//             localStorage.setItem('user',user.id)
//         } else {
//             this.setState({user:null})
//             localStorage.removeItem('user')
//         }
//     })
// }
         (
            <div className="container">
                <div className="Fitness-User-Info">
                    <h1>Hello, {username}</h1>
                    <p>Le'ts workout to get someones gains</p>
                </div>
            </div>
        )
)


export default Welcome;