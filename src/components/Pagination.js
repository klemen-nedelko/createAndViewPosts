import React from 'react';
import { Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {

    const pageNumbers = [];
    
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
    <>
      <ul className="pagination m-3">
        {
          currentPage > 1 && (
            <Button className="btn-link"  variant="link" onClick={() => paginate(currentPage -1)}>
              <FontAwesomeIcon size="2x" icon={faChevronLeft}/>
            </Button>
          )
        }
          {pageNumbers.map(number => (
                <li key={number} className={`${currentPage === number ? 'active' : ''}`}>
                    <Button onClick={() => paginate(number)}  variant="link" className="page-link">{number}</Button>
                </li>
            ))}
            {
              currentPage < pageNumbers.length &&(
                <Button className="btn-link"  variant="link" onClick={() => paginate(currentPage +1)}>
                  <FontAwesomeIcon size="2x" icon={faChevronRight}/>
              </Button>
              )
            }
        </ul>
    </>
  )
}

