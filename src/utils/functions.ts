import { listProps } from "../types"


export const calculateMean = (list:listProps) => {
    let sum = 0
    list.forEach(item => {
        sum = sum + item
    })

    return Number(sum/list.length).toFixed(3)
}


export const calculateMedian = (list:listProps) => {

   const sortedList =  list.sort((a,b) => a -b)

   let value = 0
   const oddTerm = (sortedList.length + 
    1) / 2;
   const evenTerm = (sortedList.length) /2


    if(list.length % 2 === 0){
        value = (sortedList[evenTerm] + sortedList[evenTerm + 1] ) / 2
    }else{
        value = sortedList[oddTerm]
    }

    return value.toFixed(3)
}


export const calculateMode = (list:listProps) => {

    let obj:{[index:number] : number} = { }

    list.forEach(item => {

        const key = Number(item.toFixed(3))
        obj[key] = obj[key] ? (obj[key] + 1) : 1
    })

    let maxFrequency = 0
    const values:string[] = []

    for(let key in obj){
        if(obj[key] >= maxFrequency ){
            maxFrequency = obj[key]
            values.push(key)
        }
        
    }

    return values.join(", ")
}