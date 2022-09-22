import React, { Component} from "react";
import "./style.css";
class Wishes extends Component {
    state = {
        brith: [

            {
                id: 1,
                name: 'Bertie Yates',
                age: 29,
                image:
                  'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
              },
              {
                id: 2,
                name: 'Hester Hogan',
                age: 32,
                image:
                  'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
              },
              {
                id: 3,
                name: 'Larry Little',
                age: 36,
                image:
                  'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
              },
              {
                id: 4,
                name: 'Sean Walsh',
                age: 34,
                image:
                  'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
              },
              {
                id: 5,
                name: 'Lola Gardner',
                age: 29,
                image:
                  'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
              },    
        ]
    }
    render() {
        return (
            <div className="center">

            <h1>{this.state.brith.length} Brithday Wishes</h1>
            
            {this.state.brith.map(lm =>
                <div className="">
                     <img className="img" src={lm.image} /> 
                     <h3>{lm.name}</h3>
                     <h4>{lm.age}years ago</h4>
                     
                     
                     </div>)
                
                
        }
        </div>

        )
    }
}
export default Wishes;