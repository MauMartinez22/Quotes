import React, {useState} from 'react';
import users from '../users.json';




const GetFirstUser = () => {

    const[ index , setindex ] = useState(0)
    let userlenght = users.lenght

const nextuser= () =>{
    let randomnumber= Math.floor( Math.random()*users.length)
   setindex(randomnumber)
}

//cooreo direccion numro

console.log(index)
const usertitle = users[index].name.title
const userftname = users[index].name.first
const userltname = users[index].name.last
const userimg = users[index].picture.large

    return (
        <div className='content'>
            <h1 className='title'>{usertitle} {userftname} {userltname}</h1>
            <img src={userimg}></img>
            <ul>
                <li>
                    <p>{users[index].email}</p>
                </li>
                <li>
                    <p>{users[index].cell}</p>
                </li>
                <li>
                    <p>{users[index].location.street.name} {users[index].location.street.number}</p>   
                </li>
            </ul>
            <button onClick={nextuser}>Siguiente usuario</button>
        </div>
    );
};

export default GetFirstUser;