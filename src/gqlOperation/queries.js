import { gql } from "@apollo/client";

export const GETALLPRODUCTS=gql`

query getAllProducts($pagination:PaginationArg){
  products(pagination:$pagination){
    data{
      id
      attributes{
        name
        description
        price
        category{
          data{
            id
            attributes{
              
              name
              
            }
          }
        },
        images{
          data{
            id
            attributes{
              url
            }
          }
        }
        
      }
    }
    meta{
      pagination{
        total
        page
        pageCount
        pageSize
      }
    }
  }
}


`



export const GETSINGLEPRODUCT=gql`
query getSingleProduct($id:ID!){
  product(id:$id){
    data{
      id
      attributes{
        name
        description
        price
        category{
          data{
            id
            attributes{
              name
            }
          }
        }
        images{
          data{
            id
            attributes{
              url
            }
          }
        }
      }
    }
  }
}

`



export const GET_ALL_CATEGORIES=gql`
query getAllCategories{
  categories{
    data{
      id
      attributes{
        name
        
      }
    }
  }
}
`

export const GET_CATEGORY=gql`
query Category($catId:ID!){
  category(id:$catId){
    data{
      id
      attributes{
        name
        products{
          data{
            id
            attributes{
              name
              description
              price
              images{
                data{
                  id
                  attributes{
                    url
                  }
                }
                
              }
            }
          }
        }
      }
    }
  }
}
`


export const GET_PRODUCT_BYNAME=gql`
query ProductsFilters($filters:ProductFiltersInput){
  products(filters:$filters){
    data{
      id
      attributes{
        name
        price
        description
        images{
          data{
            attributes{
              url
            }
          }
        }
      }
    }
  }
}
`

