import React, { useEffect, useState } from "react";
import axios from "axios";

export const CricketFunc = ()=>{
    const [Cricket, setCricket]=useState([])

    useEffect(()=>{
        // let AuthObj = {
        //     'content-type': 'application/octet-stream',
        //     'X-RapidAPI-Key': 'ed943dfa23msh945dd0d7bda9e10p1617f1jsn3f57f303fbc4',
        //     'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
        //   }
        const options = {
            method: 'GET',
            url: 'https://cricket-live-data.p.rapidapi.com/fixtures',
            headers: {
              'content-type': 'application/octet-stream',
              'X-RapidAPI-Key': 'ed943dfa23msh945dd0d7bda9e10p1617f1jsn3f57f303fbc4',
              'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
            }
          };
        // let URL = "https://cricket-live-data.p.rapidapi.com/fixtures"
        axios.request(options).then(({data})=>{
            // console.log(data)
            setCricket(data.results)
        })
    })
    const getSeries = ()=>{
        var options = {
            method: 'GET',
            url: 'https://cricket-live-data.p.rapidapi.com/series',
            headers: {
              'content-type': 'application/octet-stream',
              'X-RapidAPI-Key': 'ed943dfa23msh945dd0d7bda9e10p1617f1jsn3f57f303fbc4',
              'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
            }
          };
          axios.request(options).then(({data})=>{
            console.log(data)
            setCricket(data.results)
        }) 
          
    }
    return(
        <div>
            <h1>Hello From Cricket Function Component</h1>
            <button onClick={()=>{getSeries()}}>Get Series</button>
            <button>Get Fixtures</button>
            <button>Get Fixtures By Series </button>
            <button>Get Fixtures By Date</button>
            <button>Get Results</button>
            <button>Get Results By Date</button>
            <button>Get Match ScoreCard</button>
            <ol>
                {Cricket.map((Cricket)=>{
                    return(
                        <li>
                            {Cricket.match_title}
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}