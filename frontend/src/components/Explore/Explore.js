import React, { useEffect, useState } from 'react'
import './Explore.css'
import Header from '../Header/Header'
import axios from 'axios';
import config from '../../config';
import CheckboxFilter from '../CheckboxFilter/CheckBoxFilter';
import SortingFilter from '../SortingFilter/SortingFilter';
import ListingsTableView from '../ListingsTableView/ListingsTableView';


export const Explore = () => {

    const [listingsData, setListingsData] = useState();
    const [locationFilter, setLocationFilter] = useState([]);
    const [priceRangeFilter, setPriceRangeFilter] = useState([]);
    const [sortBy, setSortBy] = useState('');

    async function fetchListings() {
        try{
            const response = await axios.get(`${config.backendEndpoint}/real-estate-data`);
            // console.log(response, "listing")
            setListingsData(response.data.listings)
        }catch(err){
            console.log(err)
        }
    }
    //function to handle filter

    const handleLocationFilterChange = (event) => {
        const isChecked = event.target.checked;

        if(isChecked)
            setLocationFilter((prevState) => [...prevState, event.target.value])
        else
            setLocationFilter((prevState)=> prevState.filter((item) => item !== event.target.value))
    }

    const handlePriceRangeFilterChange = (event) => {
        const isChecked = event.target.checked;

        if(isChecked)
            setPriceRangeFilter((prevState) => [...prevState, event.target.value])
        else
            setPriceRangeFilter((prevState) => prevState.filter((item) => item !== event.target.value))
    }

    const handleSortByChange = (event) => {
        setSortBy(event.target.value)

    }

    useEffect(() => {
        fetchListings()
    },[]);

  return (
    <>
        <Header />

        <div className='property-listings-view'></div>
        {/* CheckboxFilters */}
        <CheckboxFilter 
            locationFilter={locationFilter}
            priceRangeFilter={priceRangeFilter}
            handleLocationFilterChange={handleLocationFilterChange}
            handlePriceRangeFilterChange={handlePriceRangeFilterChange} />

        {/* SortingFilters */}
        <SortingFilter 
            sortBy={sortBy}
            handleSortByChange={handleSortByChange} />

        {/* ListingTableView */}
        <ListingsTableView  
            listingsData={listingsData} 
            priceRangeFilter={priceRangeFilter} 
            locationFilter={locationFilter} 
            sortBy={sortBy} />
            
    </>
  )
}
