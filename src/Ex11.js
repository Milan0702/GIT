//Write a program that creates a filter on array to skip digit 3 (3rd element) from the array and display all remaining digits of the array.
import React from 'react'

const Ex11 = () => {
    const arr=[1,2,3,4,5,6,7,8,9]
    const newarr=arr.filter((num)=>{
        if(num===arr[2]){
            return false;
        }
        else{
            return true;
        }
    });
    var arr1=arr.join(",")
    var arr2=newarr.join(",")
  return (
    <div>
        
        <h1>Initial array: {arr1}</h1>
        <h1>Filtered array: {arr2}</h1>
    </div>
  )
}

export default Ex11