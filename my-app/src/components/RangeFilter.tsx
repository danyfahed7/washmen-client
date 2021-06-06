import React from 'react'

export const RangeFilter = (props: {onChangeForm :any,  fetchPartners  :any,  displayMap  :any, handleKeyPress:any}) => {

    return(
        <div className="range-filter">
            <div className="row">
                <div className="col-md-12 mrgnbtm">
                <form>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label >Search for Partners within a range of </label>
                            <input type="number" onChange={(e) => props.onChangeForm(e)} onKeyPress={props.handleKeyPress} className="rangeInput" name="range" id="range"/> KM 
                            <label >&nbsp;from Lat:</label>
                            <input type="number" onChange={(e) => props.onChangeForm(e)} onKeyPress={props.handleKeyPress} className="rangeInput" name="lat" id="lat" defaultValue="51.5144636"/>
                            <label >&nbsp; Lng:</label>
                            <input type="number" onChange={(e) => props.onChangeForm(e)} onKeyPress={props.handleKeyPress} className="rangeInput" name="lng" id="lng" defaultValue="-0.142571"/>
                        </div>
                    </div>
                    <button type="button" onClick= {(e) => props.fetchPartners()} className="btn btn-dark btn-header">Display Partners in Grid</button>
                    &nbsp;&nbsp;&nbsp; 
                    <button type="button" onClick= {(e) => props.displayMap()} className="btn btn-success btn-header">Toggle Map</button>
                </form>
                </div>
            </div>
        </div>
    )
}