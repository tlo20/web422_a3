/*********************************************************************************
*  WEB422 – Assignment 3
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: TSZ KIT LO  Student ID: 160067211 Date: 2023/02/11
*
*
********************************************************************************/ 

import Movie from './movies/[title].js'
import useSWR from 'swr';
import {useState, useEffect} from 'react';
import {Pagination, Accordion} from 'react-bootstrap';
import MovieDetails from '../components/MovieDetails';
import PageHeader from '../components/PageHeader';


export default function Home() {
  const [page,setPage] = useState(1)
  const [pageData,setPageData] = useState([])

  const { data, error } = useSWR(`https://nice-erin-sparrow-kilt.cyclic.app/api/movies?page=${page}&perPage=10`);

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);
  
  function previous(){
    if (page>1){setPage(page-1)}
  }

  function next(){
    setPage(page+1)
  }


  return (
    <>
      <PageHeader text="Film Collection : Sorted by Date"/>
      {pageData.map(item=>{
        return (
          <Accordion defaultActiveKey={item._id} key={item._id}>
          <Accordion.Item eventKey={item._id} >
            <Accordion.Header><b> {item.title} </b> {item.year} {item.directors.join(", ")}</Accordion.Header>
            <Accordion.Body>
                <MovieDetails movie={item}/>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        )
      })}

  <Pagination>
      <Pagination.Prev onClick={previous}/>
      <Pagination.Item>{page}</Pagination.Item>
      <Pagination.Next onClick={next}/>
    </Pagination>

    </>
    
  )
}
