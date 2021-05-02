import React from 'react';
import './Filters.css';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, setCurrentFilter } from './filtersSlice';
import capitalizeFirstLetter from '../../utils/capitaliseFirstLetter';
import { AiFillFire } from "react-icons/ai";
import { GiNewBorn } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa";

const Filters = () => {
    const filters = useSelector(selectFilters);
    const dispatch = useDispatch();

    const icons = {
        hot: <AiFillFire />,
        new: <GiNewBorn />,
        top: <FaChartLine />
    };

    const onClickHandler = (event, filter) => {
        event.preventDefault();
        dispatch(setCurrentFilter(filter));
    }

    const createFilterLink = (filter) => {
        return (
            <li key={filter}>
                <Link 
                    className="nav-link"
                    to="#"
                    onClick={(event) => {onClickHandler(event, filter)}}
                >
                    {icons[filter]}
                    {capitalizeFirstLetter(filter)}
                </Link>
            </li>
        )
    }

    return (
        <Card className="filters-card">
            <nav>
                <ul className="filters-list" >
                    {filters.map(createFilterLink)}
                </ul>  
            </nav>
        </Card> 
    )
}

export default Filters;