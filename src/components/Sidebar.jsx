import React, { Component } from 'react'

//CSS
import './Sidebar.css'

class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state={
            filters:[
                {
                    name: 'filter1',
                    checked: false
                },
                {
                    name: 'filter2',
                    checked: false
                },
                {
                    name: 'filter3',
                    checked: false
                }
            ],
            currentFilter: ''
        }
    }

    getCheckedValue(name){
        const selectedFilter = this.state.filters.find(filter => filter.name === name)
        return selectedFilter.checked
    }

    handleCheckboxChange(name){
        const filters = this.state.filters;
        const modifiedFilters = filters.map(filter => {
            if (filter.name !== name && filter.checked) {
                return {
                    ...filter,
                    checked: false
                }
            } else if (filter.name === name) {
                if (filter.checked) {
                    return {
                        ...filter,
                        checked: false
                    }
                } else {
                    return {
                        ...filter,
                        checked: true
                    }
                }
            } else {
                return filter;
            }
        });
        this.setState({filters: modifiedFilters});
    }

    handleChange(event, minValue, maxValue){
       if(event.target.checked){
           this.props.filterProducts(minValue,maxValue)
       } else {
           this.props.filterProducts(0,Infinity)
       }
       this.handleCheckboxChange(event.target.name)
    }
    render() {        

        return (
            <div  className='sidebar'>
                <h5 className='mb-4'>Filter Products:</h5>
                <div className="input-box">
                    <input name='filter1' checked={this.getCheckedValue('filter1')} onChange={(event,minValue,maxValue) => this.handleChange(event,0,100)} type="checkbox" className='mx-2' /> 
                    <label htmlFor="Price"> &lt;100 </label>
                </div>
                <div className="input-box">
                    <input name='filter2'checked={this.getCheckedValue('filter2')} onChange={(event,minValue,maxValue) => this.handleChange(event,100,200)} type="checkbox" className='mx-2' /> 
                    <label htmlFor="Price"> 100-200 </label>
                </div>
                <div className="input-box">
                    <input name='filter3' checked={this.getCheckedValue('filter3')} onChange={(event,minValue,maxValue) => this.handleChange(event,200,Infinity)} type="checkbox" className='mx-2' /> 
                    <label htmlFor="Price"> &gt;200 </label>
                </div>
            </div>
        )
    }
}

export default Sidebar
