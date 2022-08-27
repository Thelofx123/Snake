import React, { useContext, useState, useEffect, createContext } from "react";


const news = createContext()

export const TProvider = ({children}) => {
   
  const [news1, setNews] =useState('')

    return (
        <news.Provider value={{news1, setNews}}>
         {children}   
        </news.Provider>
    )
}

export const useNews = () => useContext(news)