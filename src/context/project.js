import React, { useContext, useState, useEffect, createContext } from "react";


const projects = createContext()

export const ProjectProvider = ({children}) => {
   
  const [project, setProject] =useState([])

    return (
        <projects.Provider value={{project, setProject}}>
         {children}   
        </projects.Provider>
    )
}

export const useProject = () => useContext(projects)