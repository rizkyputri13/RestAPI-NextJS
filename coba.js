import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { GetJoblistRequest } from './redux-saga/Action/JobListAction';
import React from 'react';

export default function Coba() {

  
    const dispatch = useDispatch();
    const {jobs} = useSelector(state  => state.joblistStated)
    useEffect(() => {
       dispatch(GetJoblistRequest());;     
    }, [])
  return (
    <div>
      <table>
    <tbody>
      {Object.keys(jobs).map((data) => (
        <tr>
          <td>{data.title}</td>
        </tr>
      ))}
    </tbody>
    </table>
    </div>
  )
}