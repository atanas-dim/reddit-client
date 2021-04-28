import React from 'react';
import './Filters.css';
import Card from '../../components/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, selectCurrentFilter, setCurrentFilter } from './filtersSlice';
import capitalizeFirstLetter from '../../utils/capitaliseFirstLetter';
import Button from '../../components/Button/Button';
import { AiFillFire } from "react-icons/ai";
import { GiNewBorn } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa";

const Filters = () => {
    const filters = useSelector(selectFilters);
    const currentFilter = useSelector(selectCurrentFilter);
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

    const createFilterButton = (filter) => {
        return (
            <li key={filter}>
                <Button 
                    text={capitalizeFirstLetter(filter)}
                    icon={icons[filter]}
                    className={'filter' + (filter === currentFilter ? ' selected' : '')}
                    onClick={(event) => {onClickHandler(event, filter)}}
                />
            </li>
        )
    }

    return (
        <Card className="filters-card">
            <nav>
                <ul className="filters-list" >
                    {filters.map(createFilterButton)}
                </ul>  
            </nav>
        </Card> 
    )
}

export default Filters;