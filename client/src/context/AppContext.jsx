import { createContext, useEffect } from "react";
import { useState } from "react";
export const AppContext = createContext();
import { jobsData } from "../assets/assets";
export const AppContextProvider = (props)=>{

    const [searchFilter,setSearchFilter] = useState({
        title:"",
        location:""
    });

    const [isSearched,setIsSearched] = useState(false);

    const [jobs,setJobs] = useState([])

    const [showRecruiterLogin,setShowRecruiterLogin] = useState(false)

    //Function to fetch jobs data
    const fetchJobs =  async()=>{
        setJobs(jobsData)
    }
    useEffect(()=>{
        fetchJobs()
    },[])
    
    const val = {
        searchFilter,
        setSearchFilter,
        isSearched,
        setIsSearched,
        jobs,setJobs,
        showRecruiterLogin,setShowRecruiterLogin,
        
    }
    return (<AppContext.Provider value={val}>
        {props.children}
    </AppContext.Provider>);
};
