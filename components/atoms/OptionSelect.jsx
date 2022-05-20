import React, {useEffect, useState} from 'react'

export const OptionSelect = (props) => {
    const [parameter, setParameter] = useState([])
        console.log(props.defaultParameter)        
        const options = ()=>{
            if (props.defaultParameter === "Genre") {
                const options = [
                    {
                        value: "Romance",
                        selected: false
                    },
                    {
                        value: "Fantasy",
                        selected: false
                    },
                    {
                        value: "Horror",
                        selected: false
                    },
                    {
                        value: "Thriller",
                        selected: false
                    },
                    {
                        value: "Mystery",
                        selected: false
                    },
                    {
                        value: "Sci-Fi",
                        selected: false
                    },
                    {
                        value: "Action",
                        selected: false
                    },
                    {
                        value: "Comedy",
                        selected: false
                    }
                ]
                return options
            } else if (props.defaultParameter === "Movies") {
                const options = [
                    {
                        value: "Most popular",
                        selected: false
                    },
                    {
                        value: "Top rated",
                        selected: false
                    },
                    {
                        value: "Up coming",
                        selected: false
                    },
                    {
                        value: "Now playing",
                        selected: false
                    }
                ]
                return options
            } else if (props.defaultParameter === "Year") {
                const options = [
                    {
                        value: "Asending",
                        selected: false
                    },
                    {
                        value: "Descending",
                        selected: false
                    }
                ]
                return options
            } else if (props.defaultParameter === "") {
                console.error("Error: No default parameter was provided")
            }   
        }
    useEffect(() => {
    setParameter(options())
    }, []) 
console.log(parameter)
  return (
    <div className="optionFilter">
        <select id={props.id} onChange={props.onChange}>
        <option disabled="choice" selected="selected" value={props.defaultParameter}  >{props.defaultParameter}</option>
        {
            parameter.map((option) => {
                return (
                    <option value={option.value}>{option.value}</option>
                )
            })  
        }
        </select>
    </div>
  )
}
