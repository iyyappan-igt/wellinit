import instance from "../Config/Config"



const GOOGLESHEET = 'macros/s/AKfycbwrrBSRsiZW1N-1dNd9eWiXS6BItDh1WR2A1FOgWEwqIF6_KfFqoQ1FGrUCwQdwXhpY/exec'


export const formdata = async (value)=>{
    const response =  await instance.post(`${GOOGLESHEET}` , value )
    return response?.data
}
