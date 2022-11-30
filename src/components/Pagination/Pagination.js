import React,{useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({info ,setPageNumber ,pageNumber}) => {
 

 
  
  return <ReactPaginate     
  className="pagination justify-content-center gap-4 my-4"
  nextLabel='Next'
  previousLabel='Prev'
  nextclassNameName='btn '
  previousclassNameName='btn '
  pageclassNameName='page-item'
  pageLinkclassNameName='page-link'
  activeclassNameName='active'
  forcePage={pageNumber===1? 0 : pageNumber -1}
  onPageChange={(x)=> {
   // console.log(x);  //ovde cu  videti da u svakoj stranici imam object"selected"
    setPageNumber(x.selected +1)   //mora plus 1 jed on racuna da krece od nule,zato kad stisnem br2 on ce prepoznati kao br1
  }}

  pageCount={info?.pages}/>;     //ako napravim bez upitnika svaki put kad refresujem stranicu ili ucitam ponovo prikazace mi gresku.
}

export default Pagination