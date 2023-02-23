import { gql } from "@apollo/client";

export const LOGINUSER=gql`
mutation Login($input:UsersPermissionsLoginInput!){
  login(input:$input){
    
    jwt
    user{
      username
      email
    }
   
  }
  
}
`

// This is the Register User Mutation
// exports
export const REGISTERUSER=gql`
mutation register($input:UsersPermissionsRegisterInput !){
  register(input:$input){
    jwt
    user{
      username
      email
      id
      
    }
    
  }
}

`
