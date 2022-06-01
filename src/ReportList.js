// import { useState } from "react";
import { Link } from 'react-router-dom';
// import Creatable from 'react-select/creatable';


const ReportList = (props) => {
    const reports = props.reports;
    // const shop = [
    //     { label:'wine',value:'wine' },
    //     { label:'สุรายาสูบ',value:'สุรายาสูบ' },
    //     { label:'Fast',value:'Fast' },
    //     { label:'King HDY',value:'King HDY' },
    //     { label: 'King KN' ,value: 'King KN' },
    //     { label: 'King SRT' ,value: 'King SRT' },
    //     { label: 'John' ,value: 'John' },
    //     { label: 'Fort' ,value: 'Fort' },
    //     { label: 'Dodges' ,value: 'Dodges' },
    //     { label: 'Champagne' ,value: 'Champagne' },
    //     { label: 'Dewars' ,value: 'Dewars' },
    //     { label: 'Rich' ,value: 'Rich' },
    //     { label: 'PTL' ,value: 'PTL' },
    //     { label: 'Green' ,value: 'Green' },
    //     { label: 'Rose' ,value: 'Rose' }
    // ]
    // const [searchShop, setsearchShop] = useState('');
    
    // const customStyle = {
    //     option : (provided,state)=> ({
    //         ...provided,
    //         borderBottom: '1px dotted pink',
    //         color: state.isSelected ? 'red' : 'blue'
    //     })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("new search added");
    //     console.log( {searchShop})
    // }

    // const handleChange = (field,value) => {
    //     switch (field) {
    //         case 'shop':
    //             setsearchShop(value);
    //             break;
    //         default:
    //             break;
    //     }
    // }


    return ( 
        <div className="report-list">
            {/* <form onSubmit={handleSubmit}>
                <label> Shop :</label>
                <Creatable
                isMulti
                isClearable
                onChange={(value => handleChange('shop',value))}
                options={shop}
                value={searchShop}
                styles={customStyle}
                />
                <button>Add Report</button>
            </form> */}
            <h2 className="shopname"> Wine </h2>
            {reports.filter(shop => shop.shopValue.label === "wine").map((report) => (
                <div className="report-preview" key={report.id}>
                    <Link to={`/reports/${report.id}`}>
                    <h2> { report.name}</h2>
                    <div>
                        <p className="bold space-detail"> Salary :</p>
                        <p className="bold">
                        {report.base !== 0 && parseInt(report.base).toLocaleString()}
                        {report.baseused === "0" && <span> &gt;&gt; </span>}
                        {report.baseused === "0" && parseFloat(report.day*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <span> + {parseFloat(report.otd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <span> + {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <span className="deduct"> - {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <span className="deduct"> - {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.late !== 0 && report.late !== "0" && report.late !== "" &&  <span className="deduct"> - {parseFloat(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <span className="deduct"> - {parseFloat(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <span className="deduct">  - {parseFloat(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>} = 
                        &emsp;
                        {report.baseused === "0" && (parseFloat(report.day*(report.base/parseInt(report.monthDay))) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.baseused === "1" && (parseInt(report.baseused*report.base) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>
                    {report.baseused === "0" && <div>
                        <p className="space-detail">Working Day:</p>
                        <p>{report.day} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.day*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>    
                    </div>}
                    {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <div>
                        <p className="space-detail">OT(D) :</p>
                        <p>{report.otd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.otd*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <div>
                        <p className="space-detail">OT(H) :</p>
                        <p>{report.oth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <div>
                        <p className="deduct space-detail">Deduct(D) :</p>
                        <p className="deduct">{report.deductd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <div>
                        <p className="deduct space-detail">Deduct(H) :</p>
                        <p className="deduct">{report.deducth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.late !== 0 && report.late !== "0" && report.late !== "" && <div>
                        <p className="deduct space-detail">Late(min) :</p>
                        <p className="deduct">{(report.late*1).toLocaleString(undefined, {maximumFractionDigits:2})} min x 5 ={(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <div>
                        <p className="deduct space-detail">Salary Advance :</p>
                        <p className="deduct">{(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <div>
                        <p className="deduct space-detail">Item Advance :</p>
                        <p className="deduct">{(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    </Link>
                </div>
            ))}
            <h2 className="shopname"> สุรายาสูบ </h2>
            {reports.filter(shop => shop.shopValue.label === "สุรายาสูบ").map((report) => (
                                <div className="report-preview" key={report.id}>
                    <Link to={`/reports/${report.id}`}>
                    <h2> { report.name}</h2>
                    <div>
                        <p className="bold space-detail"> Salary :</p>
                        <p className="bold">
                        {report.base !== 0 && parseInt(report.base).toLocaleString()}
                        {report.baseused === "0" && <span> &gt;&gt; </span>}
                        {report.baseused === "0" && parseFloat(report.day*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <span> + {parseFloat(report.otd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <span> + {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <span className="deduct"> - {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <span className="deduct"> - {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.late !== 0 && report.late !== "0" && report.late !== "" &&  <span className="deduct"> - {parseFloat(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <span className="deduct"> - {parseFloat(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <span className="deduct">  - {parseFloat(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>} = 
                        &emsp;
                        {report.baseused === "0" && (parseFloat(report.day*(report.base/parseInt(report.monthDay))) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.baseused === "1" && (parseInt(report.baseused*report.base) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>
                    {report.baseused === "0" && <div>
                        <p className="space-detail">Working Day:</p>
                        <p>{report.day} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.day*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>    
                    </div>}
                    {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <div>
                        <p className="space-detail">OT(D) :</p>
                        <p>{report.otd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.otd*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <div>
                        <p className="space-detail">OT(H) :</p>
                        <p>{report.oth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <div>
                        <p className="deduct space-detail">Deduct(D) :</p>
                        <p className="deduct">{report.deductd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <div>
                        <p className="deduct space-detail">Deduct(H) :</p>
                        <p className="deduct">{report.deducth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.late !== 0 && report.late !== "0" && report.late !== "" && <div>
                        <p className="deduct space-detail">Late(min) :</p>
                        <p className="deduct">{(report.late*1).toLocaleString(undefined, {maximumFractionDigits:2})} min x 5 ={(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <div>
                        <p className="deduct space-detail">Salary Advance :</p>
                        <p className="deduct">{(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <div>
                        <p className="deduct space-detail">Item Advance :</p>
                        <p className="deduct">{(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    </Link>
                </div>
            ))}
            <h2 className="shopname"> Fast </h2>
            {reports.filter(shop => shop.shopValue.label === "Fast").map((report) => (
                                <div className="report-preview" key={report.id}>
                                <Link to={`/reports/${report.id}`}>
                                <h2> { report.name}</h2>
                                <div>
                                    <p className="bold space-detail"> Salary :</p>
                                    <p className="bold">
                                    {report.base !== 0 && parseInt(report.base).toLocaleString()}
                                    {report.baseused === "0" && <span> &gt;&gt; </span>}
                                    {report.baseused === "0" && parseFloat(report.day*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}
                                    {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <span> + {parseFloat(report.otd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                                    {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <span> + {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                                    {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <span className="deduct"> - {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                                    {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <span className="deduct"> - {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                                    {report.late !== 0 && report.late !== "0" && report.late !== "" &&  <span className="deduct"> - {parseFloat(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                                    {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <span className="deduct"> - {parseFloat(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                                    {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <span className="deduct">  - {parseFloat(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>} = 
                                    &emsp;
                                    {report.baseused === "0" && (parseFloat(report.day*(report.base/parseInt(report.monthDay))) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}
                                    {report.baseused === "1" && (parseInt(report.baseused*report.base) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                                </div>
                                {report.baseused === "0" && <div>
                                    <p className="space-detail">Working Day:</p>
                                    <p>{report.day} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.day*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>    
                                </div>}
                                {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <div>
                                    <p className="space-detail">OT(D) :</p>
                                    <p>{report.otd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.otd*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                                </div>}
                                {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <div>
                                    <p className="space-detail">OT(H) :</p>
                                    <p>{report.oth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                                </div>}
                                {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <div>
                                    <p className="deduct space-detail">Deduct(D) :</p>
                                    <p className="deduct">{report.deductd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                                </div>}
                                {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <div>
                                    <p className="deduct space-detail">Deduct(H) :</p>
                                    <p className="deduct">{report.deducth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                                </div>}
                                {report.late !== 0 && report.late !== "0" && report.late !== "" && <div>
                                    <p className="deduct space-detail">Late(min) :</p>
                                    <p className="deduct">{(report.late*1).toLocaleString(undefined, {maximumFractionDigits:2})} min x 5 ={(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                                </div>}
                                {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <div>
                                    <p className="deduct space-detail">Salary Advance :</p>
                                    <p className="deduct">{(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                                </div>}
                                {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <div>
                                    <p className="deduct space-detail">Item Advance :</p>
                                    <p className="deduct">{(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                                </div>}
                                </Link>
                            </div>
            ))}
            <h2 className="shopname"> King HDY </h2>
            {reports.filter(shop => shop.shopValue.label === "King HDY").map((report) => (
                                <div className="report-preview" key={report.id}>
                    <Link to={`/reports/${report.id}`}>
                    <h2> { report.name}</h2>
                    <div>
                        <p className="bold space-detail"> Salary :</p>
                        <p className="bold">
                        {report.base !== 0 && parseInt(report.base).toLocaleString()}
                        {report.baseused === "0" && <span> &gt;&gt; </span>}
                        {report.baseused === "0" && parseFloat(report.day*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <span> + {parseFloat(report.otd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <span> + {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <span className="deduct"> - {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <span className="deduct"> - {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.late !== 0 && report.late !== "0" && report.late !== "" &&  <span className="deduct"> - {parseFloat(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <span className="deduct"> - {parseFloat(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <span className="deduct">  - {parseFloat(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>} = 
                        &emsp;
                        {report.baseused === "0" && (parseFloat(report.day*(report.base/parseInt(report.monthDay))) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.baseused === "1" && (parseInt(report.baseused*report.base) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>
                    {report.baseused === "0" && <div>
                        <p className="space-detail">Working Day:</p>
                        <p>{report.day} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.day*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>    
                    </div>}
                    {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <div>
                        <p className="space-detail">OT(D) :</p>
                        <p>{report.otd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.otd*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <div>
                        <p className="space-detail">OT(H) :</p>
                        <p>{report.oth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <div>
                        <p className="deduct space-detail">Deduct(D) :</p>
                        <p className="deduct">{report.deductd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <div>
                        <p className="deduct space-detail">Deduct(H) :</p>
                        <p className="deduct">{report.deducth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.late !== 0 && report.late !== "0" && report.late !== "" && <div>
                        <p className="deduct space-detail">Late(min) :</p>
                        <p className="deduct">{(report.late*1).toLocaleString(undefined, {maximumFractionDigits:2})} min x 5 ={(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <div>
                        <p className="deduct space-detail">Salary Advance :</p>
                        <p className="deduct">{(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <div>
                        <p className="deduct space-detail">Item Advance :</p>
                        <p className="deduct">{(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    </Link>
                </div>
            ))}
            <h2 className="shopname"> King KN </h2>
            {reports.filter(shop => shop.shopValue.label === "King KN").map((report) => (
                                <div className="report-preview" key={report.id}>
                    <Link to={`/reports/${report.id}`}>
                    <h2> { report.name}</h2>
                    <div>
                        <p className="bold space-detail"> Salary :</p>
                        <p className="bold">
                        {report.base !== 0 && parseInt(report.base).toLocaleString()}
                        {report.baseused === "0" && <span> &gt;&gt; </span>}
                        {report.baseused === "0" && parseFloat(report.day*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <span> + {parseFloat(report.otd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <span> + {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <span className="deduct"> - {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <span className="deduct"> - {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.late !== 0 && report.late !== "0" && report.late !== "" &&  <span className="deduct"> - {parseFloat(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <span className="deduct"> - {parseFloat(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <span className="deduct">  - {parseFloat(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>} = 
                        &emsp;
                        {report.baseused === "0" && (parseFloat(report.day*(report.base/parseInt(report.monthDay))) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.baseused === "1" && (parseInt(report.baseused*report.base) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>
                    {report.baseused === "0" && <div>
                        <p className="space-detail">Working Day:</p>
                        <p>{report.day} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.day*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>    
                    </div>}
                    {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <div>
                        <p className="space-detail">OT(D) :</p>
                        <p>{report.otd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.otd*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <div>
                        <p className="space-detail">OT(H) :</p>
                        <p>{report.oth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <div>
                        <p className="deduct space-detail">Deduct(D) :</p>
                        <p className="deduct">{report.deductd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <div>
                        <p className="deduct space-detail">Deduct(H) :</p>
                        <p className="deduct">{report.deducth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.late !== 0 && report.late !== "0" && report.late !== "" && <div>
                        <p className="deduct space-detail">Late(min) :</p>
                        <p className="deduct">{(report.late*1).toLocaleString(undefined, {maximumFractionDigits:2})} min x 5 ={(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <div>
                        <p className="deduct space-detail">Salary Advance :</p>
                        <p className="deduct">{(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <div>
                        <p className="deduct space-detail">Item Advance :</p>
                        <p className="deduct">{(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    </Link>
                </div>
            ))}
            <h2 className="shopname"> King SRT </h2>
            {reports.filter(shop => shop.shopValue.label === "King SRT").map((report) => (
                                <div className="report-preview" key={report.id}>
                    <Link to={`/reports/${report.id}`}>
                    <h2> { report.name}</h2>
                    <div>
                        <p className="bold space-detail"> Salary :</p>
                        <p className="bold">
                        {report.base !== 0 && parseInt(report.base).toLocaleString()}
                        {report.baseused === "0" && <span> &gt;&gt; </span>}
                        {report.baseused === "0" && parseFloat(report.day*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <span> + {parseFloat(report.otd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <span> + {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <span className="deduct"> - {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <span className="deduct"> - {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.late !== 0 && report.late !== "0" && report.late !== "" &&  <span className="deduct"> - {parseFloat(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <span className="deduct"> - {parseFloat(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <span className="deduct">  - {parseFloat(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>} = 
                        &emsp;
                        {report.baseused === "0" && (parseFloat(report.day*(report.base/parseInt(report.monthDay))) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.baseused === "1" && (parseInt(report.baseused*report.base) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>
                    {report.baseused === "0" && <div>
                        <p className="space-detail">Working Day:</p>
                        <p>{report.day} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.day*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>    
                    </div>}
                    {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <div>
                        <p className="space-detail">OT(D) :</p>
                        <p>{report.otd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.otd*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <div>
                        <p className="space-detail">OT(H) :</p>
                        <p>{report.oth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <div>
                        <p className="deduct space-detail">Deduct(D) :</p>
                        <p className="deduct">{report.deductd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <div>
                        <p className="deduct space-detail">Deduct(H) :</p>
                        <p className="deduct">{report.deducth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.late !== 0 && report.late !== "0" && report.late !== "" && <div>
                        <p className="deduct space-detail">Late(min) :</p>
                        <p className="deduct">{(report.late*1).toLocaleString(undefined, {maximumFractionDigits:2})} min x 5 ={(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <div>
                        <p className="deduct space-detail">Salary Advance :</p>
                        <p className="deduct">{(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <div>
                        <p className="deduct space-detail">Item Advance :</p>
                        <p className="deduct">{(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    </Link>
                </div>
            ))}
            <h2 className="shopname"> John </h2>
            {reports.filter(shop => shop.shopValue.label === "John").map((report) => (
                                <div className="report-preview" key={report.id}>
                    <Link to={`/reports/${report.id}`}>
                    <h2> { report.name}</h2>
                    <div>
                        <p className="bold space-detail"> Salary :</p>
                        <p className="bold">
                        {report.base !== 0 && parseInt(report.base).toLocaleString()}
                        {report.baseused === "0" && <span> &gt;&gt; </span>}
                        {report.baseused === "0" && parseFloat(report.day*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <span> + {parseFloat(report.otd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <span> + {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <span className="deduct"> - {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <span className="deduct"> - {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.late !== 0 && report.late !== "0" && report.late !== "" &&  <span className="deduct"> - {parseFloat(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <span className="deduct"> - {parseFloat(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <span className="deduct">  - {parseFloat(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>} = 
                        &emsp;
                        {report.baseused === "0" && (parseFloat(report.day*(report.base/parseInt(report.monthDay))) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.baseused === "1" && (parseInt(report.baseused*report.base) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>
                    {report.baseused === "0" && <div>
                        <p className="space-detail">Working Day:</p>
                        <p>{report.day} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.day*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>    
                    </div>}
                    {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <div>
                        <p className="space-detail">OT(D) :</p>
                        <p>{report.otd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.otd*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <div>
                        <p className="space-detail">OT(H) :</p>
                        <p>{report.oth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <div>
                        <p className="deduct space-detail">Deduct(D) :</p>
                        <p className="deduct">{report.deductd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <div>
                        <p className="deduct space-detail">Deduct(H) :</p>
                        <p className="deduct">{report.deducth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.late !== 0 && report.late !== "0" && report.late !== "" && <div>
                        <p className="deduct space-detail">Late(min) :</p>
                        <p className="deduct">{(report.late*1).toLocaleString(undefined, {maximumFractionDigits:2})} min x 5 ={(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <div>
                        <p className="deduct space-detail">Salary Advance :</p>
                        <p className="deduct">{(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <div>
                        <p className="deduct space-detail">Item Advance :</p>
                        <p className="deduct">{(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    </Link>
                </div>
            ))}
            <h2 className="shopname"> Fort </h2>
            {reports.filter(shop => shop.shopValue.label === "Fort").map((report) => (
                                <div className="report-preview" key={report.id}>
                    <Link to={`/reports/${report.id}`}>
                    <h2> { report.name}</h2>
                    <div>
                        <p className="bold space-detail"> Salary :</p>
                        <p className="bold">
                        {report.base !== 0 && parseInt(report.base).toLocaleString()}
                        {report.baseused === "0" && <span> &gt;&gt; </span>}
                        {report.baseused === "0" && parseFloat(report.day*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <span> + {parseFloat(report.otd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <span> + {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <span className="deduct"> - {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <span className="deduct"> - {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.late !== 0 && report.late !== "0" && report.late !== "" &&  <span className="deduct"> - {parseFloat(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <span className="deduct"> - {parseFloat(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <span className="deduct">  - {parseFloat(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>} = 
                        &emsp;
                        {report.baseused === "0" && (parseFloat(report.day*(report.base/parseInt(report.monthDay))) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.baseused === "1" && (parseInt(report.baseused*report.base) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>
                    {report.baseused === "0" && <div>
                        <p className="space-detail">Working Day:</p>
                        <p>{report.day} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.day*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>    
                    </div>}
                    {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <div>
                        <p className="space-detail">OT(D) :</p>
                        <p>{report.otd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.otd*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <div>
                        <p className="space-detail">OT(H) :</p>
                        <p>{report.oth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <div>
                        <p className="deduct space-detail">Deduct(D) :</p>
                        <p className="deduct">{report.deductd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <div>
                        <p className="deduct space-detail">Deduct(H) :</p>
                        <p className="deduct">{report.deducth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.late !== 0 && report.late !== "0" && report.late !== "" && <div>
                        <p className="deduct space-detail">Late(min) :</p>
                        <p className="deduct">{(report.late*1).toLocaleString(undefined, {maximumFractionDigits:2})} min x 5 ={(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <div>
                        <p className="deduct space-detail">Salary Advance :</p>
                        <p className="deduct">{(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <div>
                        <p className="deduct space-detail">Item Advance :</p>
                        <p className="deduct">{(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    </Link>
                </div>
            ))}
            <h2 className="shopname"> Dodges </h2>
            {reports.filter(shop => shop.shopValue.label === "Dodges").map((report) => (
                                <div className="report-preview" key={report.id}>
                    <Link to={`/reports/${report.id}`}>
                    <h2> { report.name}</h2>
                    <div>
                        <p className="bold space-detail"> Salary :</p>
                        <p className="bold">
                        {report.base !== 0 && parseInt(report.base).toLocaleString()}
                        {report.baseused === "0" && <span> &gt;&gt; </span>}
                        {report.baseused === "0" && parseFloat(report.day*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <span> + {parseFloat(report.otd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <span> + {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <span className="deduct"> - {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <span className="deduct"> - {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.late !== 0 && report.late !== "0" && report.late !== "" &&  <span className="deduct"> - {parseFloat(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <span className="deduct"> - {parseFloat(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <span className="deduct">  - {parseFloat(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>} = 
                        &emsp;
                        {report.baseused === "0" && (parseFloat(report.day*(report.base/parseInt(report.monthDay))) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.baseused === "1" && (parseInt(report.baseused*report.base) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>
                    {report.baseused === "0" && <div>
                        <p className="space-detail">Working Day:</p>
                        <p>{report.day} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.day*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>    
                    </div>}
                    {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <div>
                        <p className="space-detail">OT(D) :</p>
                        <p>{report.otd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.otd*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <div>
                        <p className="space-detail">OT(H) :</p>
                        <p>{report.oth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <div>
                        <p className="deduct space-detail">Deduct(D) :</p>
                        <p className="deduct">{report.deductd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <div>
                        <p className="deduct space-detail">Deduct(H) :</p>
                        <p className="deduct">{report.deducth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.late !== 0 && report.late !== "0" && report.late !== "" && <div>
                        <p className="deduct space-detail">Late(min) :</p>
                        <p className="deduct">{(report.late*1).toLocaleString(undefined, {maximumFractionDigits:2})} min x 5 ={(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <div>
                        <p className="deduct space-detail">Salary Advance :</p>
                        <p className="deduct">{(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <div>
                        <p className="deduct space-detail">Item Advance :</p>
                        <p className="deduct">{(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    </Link>
                </div>
            ))}
            <h2 className="shopname"> Champagne </h2>
            {reports.filter(shop => shop.shopValue.label === "Champagne").map((report) => (
                                <div className="report-preview" key={report.id}>
                    <Link to={`/reports/${report.id}`}>
                    <h2> { report.name}</h2>
                    <div>
                        <p className="bold space-detail"> Salary :</p>
                        <p className="bold">
                        {report.base !== 0 && parseInt(report.base).toLocaleString()}
                        {report.baseused === "0" && <span> &gt;&gt; </span>}
                        {report.baseused === "0" && parseFloat(report.day*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <span> + {parseFloat(report.otd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <span> + {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <span className="deduct"> - {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <span className="deduct"> - {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.late !== 0 && report.late !== "0" && report.late !== "" &&  <span className="deduct"> - {parseFloat(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <span className="deduct"> - {parseFloat(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <span className="deduct">  - {parseFloat(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>} = 
                        &emsp;
                        {report.baseused === "0" && (parseFloat(report.day*(report.base/parseInt(report.monthDay))) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.baseused === "1" && (parseInt(report.baseused*report.base) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>
                    {report.baseused === "0" && <div>
                        <p className="space-detail">Working Day:</p>
                        <p>{report.day} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.day*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>    
                    </div>}
                    {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <div>
                        <p className="space-detail">OT(D) :</p>
                        <p>{report.otd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.otd*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <div>
                        <p className="space-detail">OT(H) :</p>
                        <p>{report.oth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <div>
                        <p className="deduct space-detail">Deduct(D) :</p>
                        <p className="deduct">{report.deductd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <div>
                        <p className="deduct space-detail">Deduct(H) :</p>
                        <p className="deduct">{report.deducth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.late !== 0 && report.late !== "0" && report.late !== "" && <div>
                        <p className="deduct space-detail">Late(min) :</p>
                        <p className="deduct">{(report.late*1).toLocaleString(undefined, {maximumFractionDigits:2})} min x 5 ={(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <div>
                        <p className="deduct space-detail">Salary Advance :</p>
                        <p className="deduct">{(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <div>
                        <p className="deduct space-detail">Item Advance :</p>
                        <p className="deduct">{(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    </Link>
                </div>
            ))}
            <h2 className="shopname"> Dewars </h2>
            {reports.filter(shop => shop.shopValue.label === "Dewars").map((report) => (
                                <div className="report-preview" key={report.id}>
                    <Link to={`/reports/${report.id}`}>
                    <h2> { report.name}</h2>
                    <div>
                        <p className="bold space-detail"> Salary :</p>
                        <p className="bold">
                        {report.base !== 0 && parseInt(report.base).toLocaleString()}
                        {report.baseused === "0" && <span> &gt;&gt; </span>}
                        {report.baseused === "0" && parseFloat(report.day*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <span> + {parseFloat(report.otd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <span> + {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <span className="deduct"> - {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <span className="deduct"> - {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.late !== 0 && report.late !== "0" && report.late !== "" &&  <span className="deduct"> - {parseFloat(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <span className="deduct"> - {parseFloat(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <span className="deduct">  - {parseFloat(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>} = 
                        &emsp;
                        {report.baseused === "0" && (parseFloat(report.day*(report.base/parseInt(report.monthDay))) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.baseused === "1" && (parseInt(report.baseused*report.base) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>
                    {report.baseused === "0" && <div>
                        <p className="space-detail">Working Day:</p>
                        <p>{report.day} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.day*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>    
                    </div>}
                    {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <div>
                        <p className="space-detail">OT(D) :</p>
                        <p>{report.otd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.otd*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <div>
                        <p className="space-detail">OT(H) :</p>
                        <p>{report.oth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <div>
                        <p className="deduct space-detail">Deduct(D) :</p>
                        <p className="deduct">{report.deductd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <div>
                        <p className="deduct space-detail">Deduct(H) :</p>
                        <p className="deduct">{report.deducth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.late !== 0 && report.late !== "0" && report.late !== "" && <div>
                        <p className="deduct space-detail">Late(min) :</p>
                        <p className="deduct">{(report.late*1).toLocaleString(undefined, {maximumFractionDigits:2})} min x 5 ={(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <div>
                        <p className="deduct space-detail">Salary Advance :</p>
                        <p className="deduct">{(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <div>
                        <p className="deduct space-detail">Item Advance :</p>
                        <p className="deduct">{(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    </Link>
                </div>
            ))}
            <h2 className="shopname"> Rich </h2>
            {reports.filter(shop => shop.shopValue.label === "Rich").map((report) => (
                                <div className="report-preview" key={report.id}>
                    <Link to={`/reports/${report.id}`}>
                    <h2> { report.name}</h2>
                    <div>
                        <p className="bold space-detail"> Salary :</p>
                        <p className="bold">
                        {report.base !== 0 && parseInt(report.base).toLocaleString()}
                        {report.baseused === "0" && <span> &gt;&gt; </span>}
                        {report.baseused === "0" && parseFloat(report.day*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <span> + {parseFloat(report.otd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <span> + {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <span className="deduct"> - {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <span className="deduct"> - {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.late !== 0 && report.late !== "0" && report.late !== "" &&  <span className="deduct"> - {parseFloat(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <span className="deduct"> - {parseFloat(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <span className="deduct">  - {parseFloat(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>} = 
                        &emsp;
                        {report.baseused === "0" && (parseFloat(report.day*(report.base/parseInt(report.monthDay))) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.baseused === "1" && (parseInt(report.baseused*report.base) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>
                    {report.baseused === "0" && <div>
                        <p className="space-detail">Working Day:</p>
                        <p>{report.day} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.day*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>    
                    </div>}
                    {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <div>
                        <p className="space-detail">OT(D) :</p>
                        <p>{report.otd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.otd*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <div>
                        <p className="space-detail">OT(H) :</p>
                        <p>{report.oth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <div>
                        <p className="deduct space-detail">Deduct(D) :</p>
                        <p className="deduct">{report.deductd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <div>
                        <p className="deduct space-detail">Deduct(H) :</p>
                        <p className="deduct">{report.deducth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.late !== 0 && report.late !== "0" && report.late !== "" && <div>
                        <p className="deduct space-detail">Late(min) :</p>
                        <p className="deduct">{(report.late*1).toLocaleString(undefined, {maximumFractionDigits:2})} min x 5 ={(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <div>
                        <p className="deduct space-detail">Salary Advance :</p>
                        <p className="deduct">{(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <div>
                        <p className="deduct space-detail">Item Advance :</p>
                        <p className="deduct">{(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    </Link>
                </div>
            ))}
            <h2 className="shopname"> PTL </h2>
            {reports.filter(shop => shop.shopValue.label === "PTL").map((report) => (
                                <div className="report-preview" key={report.id}>
                    <Link to={`/reports/${report.id}`}>
                    <h2> { report.name}</h2>
                    <div>
                        <p className="bold space-detail"> Salary :</p>
                        <p className="bold">
                        {report.base !== 0 && parseInt(report.base).toLocaleString()}
                        {report.baseused === "0" && <span> &gt;&gt; </span>}
                        {report.baseused === "0" && parseFloat(report.day*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <span> + {parseFloat(report.otd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <span> + {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <span className="deduct"> - {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <span className="deduct"> - {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.late !== 0 && report.late !== "0" && report.late !== "" &&  <span className="deduct"> - {parseFloat(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <span className="deduct"> - {parseFloat(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <span className="deduct">  - {parseFloat(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>} = 
                        &emsp;
                        {report.baseused === "0" && (parseFloat(report.day*(report.base/parseInt(report.monthDay))) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.baseused === "1" && (parseInt(report.baseused*report.base) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>
                    {report.baseused === "0" && <div>
                        <p className="space-detail">Working Day:</p>
                        <p>{report.day} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.day*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>    
                    </div>}
                    {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <div>
                        <p className="space-detail">OT(D) :</p>
                        <p>{report.otd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.otd*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <div>
                        <p className="space-detail">OT(H) :</p>
                        <p>{report.oth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <div>
                        <p className="deduct space-detail">Deduct(D) :</p>
                        <p className="deduct">{report.deductd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <div>
                        <p className="deduct space-detail">Deduct(H) :</p>
                        <p className="deduct">{report.deducth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.late !== 0 && report.late !== "0" && report.late !== "" && <div>
                        <p className="deduct space-detail">Late(min) :</p>
                        <p className="deduct">{(report.late*1).toLocaleString(undefined, {maximumFractionDigits:2})} min x 5 ={(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <div>
                        <p className="deduct space-detail">Salary Advance :</p>
                        <p className="deduct">{(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <div>
                        <p className="deduct space-detail">Item Advance :</p>
                        <p className="deduct">{(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    </Link>
                </div>
            ))}
            <h2 className="shopname"> Green </h2>
            {reports.filter(shop => shop.shopValue.label === "Green").map((report) => (
                                <div className="report-preview" key={report.id}>
                    <Link to={`/reports/${report.id}`}>
                    <h2> { report.name}</h2>
                    <div>
                        <p className="bold space-detail"> Salary :</p>
                        <p className="bold">
                        {report.base !== 0 && parseInt(report.base).toLocaleString()}
                        {report.baseused === "0" && <span> &gt;&gt; </span>}
                        {report.baseused === "0" && parseFloat(report.day*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <span> + {parseFloat(report.otd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <span> + {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <span className="deduct"> - {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <span className="deduct"> - {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.late !== 0 && report.late !== "0" && report.late !== "" &&  <span className="deduct"> - {parseFloat(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <span className="deduct"> - {parseFloat(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <span className="deduct">  - {parseFloat(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>} = 
                        &emsp;
                        {report.baseused === "0" && (parseFloat(report.day*(report.base/parseInt(report.monthDay))) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.baseused === "1" && (parseInt(report.baseused*report.base) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>
                    {report.baseused === "0" && <div>
                        <p className="space-detail">Working Day:</p>
                        <p>{report.day} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.day*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>    
                    </div>}
                    {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <div>
                        <p className="space-detail">OT(D) :</p>
                        <p>{report.otd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.otd*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <div>
                        <p className="space-detail">OT(H) :</p>
                        <p>{report.oth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <div>
                        <p className="deduct space-detail">Deduct(D) :</p>
                        <p className="deduct">{report.deductd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <div>
                        <p className="deduct space-detail">Deduct(H) :</p>
                        <p className="deduct">{report.deducth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.late !== 0 && report.late !== "0" && report.late !== "" && <div>
                        <p className="deduct space-detail">Late(min) :</p>
                        <p className="deduct">{(report.late*1).toLocaleString(undefined, {maximumFractionDigits:2})} min x 5 ={(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <div>
                        <p className="deduct space-detail">Salary Advance :</p>
                        <p className="deduct">{(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <div>
                        <p className="deduct space-detail">Item Advance :</p>
                        <p className="deduct">{(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    </Link>
                </div>
            ))}
            <h2 className="shopname"> Rose </h2>
            {reports.filter(shop => shop.shopValue.label === "Rose").map((report) => (
                                <div className="report-preview" key={report.id}>
                    <Link to={`/reports/${report.id}`}>
                    <h2> { report.name}</h2>
                    <div>
                        <p className="bold space-detail"> Salary :</p>
                        <p className="bold">
                        {report.base !== 0 && parseInt(report.base).toLocaleString()}
                        {report.baseused === "0" && <span> &gt;&gt; </span>}
                        {report.baseused === "0" && parseFloat(report.day*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <span> + {parseFloat(report.otd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <span> + {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <span className="deduct"> - {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <span className="deduct"> - {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.late !== 0 && report.late !== "0" && report.late !== "" &&  <span className="deduct"> - {parseFloat(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <span className="deduct"> - {parseFloat(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <span className="deduct">  - {parseFloat(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>} = 
                        &emsp;
                        {report.baseused === "0" && (parseFloat(report.day*(report.base/parseInt(report.monthDay))) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.baseused === "1" && (parseInt(report.baseused*report.base) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>
                    {report.baseused === "0" && <div>
                        <p className="space-detail">Working Day:</p>
                        <p>{report.day} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.day*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>    
                    </div>}
                    {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <div>
                        <p className="space-detail">OT(D) :</p>
                        <p>{report.otd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.otd*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <div>
                        <p className="space-detail">OT(H) :</p>
                        <p>{report.oth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <div>
                        <p className="deduct space-detail">Deduct(D) :</p>
                        <p className="deduct">{report.deductd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <div>
                        <p className="deduct space-detail">Deduct(H) :</p>
                        <p className="deduct">{report.deducth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.late !== 0 && report.late !== "0" && report.late !== "" && <div>
                        <p className="deduct space-detail">Late(min) :</p>
                        <p className="deduct">{(report.late*1).toLocaleString(undefined, {maximumFractionDigits:2})} min x 5 ={(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <div>
                        <p className="deduct space-detail">Salary Advance :</p>
                        <p className="deduct">{(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <div>
                        <p className="deduct space-detail">Item Advance :</p>
                        <p className="deduct">{(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    </Link>
                </div>
            ))}
            <h2 className="shopname"> Jack </h2>
            {reports.filter(shop => shop.shopValue.label === "Jack").map((report) => (
                <div className="report-preview" key={report.id}>
                    <Link to={`/reports/${report.id}`}>
                    <h2> { report.name}</h2>
                    <div>
                        <p className="bold space-detail"> Salary :</p>
                        <p className="bold">
                        {report.base !== 0 && parseInt(report.base).toLocaleString()}
                        {report.baseused === "0" && <span> &gt;&gt; </span>}
                        {report.baseused === "0" && parseFloat(report.day*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <span> + {parseFloat(report.otd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <span> + {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <span className="deduct"> - {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <span className="deduct"> - {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.late !== 0 && report.late !== "0" && report.late !== "" &&  <span className="deduct"> - {parseFloat(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <span className="deduct"> - {parseFloat(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <span className="deduct">  - {parseFloat(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>} = 
                        &emsp;
                        {report.baseused === "0" && (parseFloat(report.day*(report.base/parseInt(report.monthDay))) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.baseused === "1" && (parseInt(report.baseused*report.base) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>
                    {report.baseused === "0" && <div>
                        <p className="space-detail">Working Day:</p>
                        <p>{report.day} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.day*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>    
                    </div>}
                    {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <div>
                        <p className="space-detail">OT(D) :</p>
                        <p>{report.otd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.otd*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <div>
                        <p className="space-detail">OT(H) :</p>
                        <p>{report.oth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <div>
                        <p className="deduct space-detail">Deduct(D) :</p>
                        <p className="deduct">{report.deductd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <div>
                        <p className="deduct space-detail">Deduct(H) :</p>
                        <p className="deduct">{report.deducth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.late !== 0 && report.late !== "0" && report.late !== "" && <div>
                        <p className="deduct space-detail">Late(min) :</p>
                        <p className="deduct">{(report.late*1).toLocaleString(undefined, {maximumFractionDigits:2})} min x 5 ={(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <div>
                        <p className="deduct space-detail">Salary Advance :</p>
                        <p className="deduct">{(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <div>
                        <p className="deduct space-detail">Item Advance :</p>
                        <p className="deduct">{(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    </Link>
                </div>
            ))}
            <h2 className="shopname"> TSL </h2>
            {reports.filter(shop => shop.shopValue.label === "TSL").map((report) => (
                                <div className="report-preview" key={report.id}>
                    <Link to={`/reports/${report.id}`}>
                    <h2> { report.name}</h2>
                    <div>
                        <p className="bold space-detail"> Salary :</p>
                        <p className="bold">
                        {report.base !== 0 && parseInt(report.base).toLocaleString()}
                        {report.baseused === "0" && <span> &gt;&gt; </span>}
                        {report.baseused === "0" && parseFloat(report.day*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <span> + {parseFloat(report.otd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <span> + {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <span className="deduct"> - {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <span className="deduct"> - {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.late !== 0 && report.late !== "0" && report.late !== "" &&  <span className="deduct"> - {parseFloat(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <span className="deduct"> - {parseFloat(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <span className="deduct">  - {parseFloat(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>} = 
                        &emsp;
                        {report.baseused === "0" && (parseFloat(report.day*(report.base/parseInt(report.monthDay))) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.baseused === "1" && (parseInt(report.baseused*report.base) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>
                    {report.baseused === "0" && <div>
                        <p className="space-detail">Working Day:</p>
                        <p>{report.day} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.day*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>    
                    </div>}
                    {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <div>
                        <p className="space-detail">OT(D) :</p>
                        <p>{report.otd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.otd*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <div>
                        <p className="space-detail">OT(H) :</p>
                        <p>{report.oth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <div>
                        <p className="deduct space-detail">Deduct(D) :</p>
                        <p className="deduct">{report.deductd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <div>
                        <p className="deduct space-detail">Deduct(H) :</p>
                        <p className="deduct">{report.deducth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.late !== 0 && report.late !== "0" && report.late !== "" && <div>
                        <p className="deduct space-detail">Late(min) :</p>
                        <p className="deduct">{(report.late*1).toLocaleString(undefined, {maximumFractionDigits:2})} min x 5 ={(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <div>
                        <p className="deduct space-detail">Salary Advance :</p>
                        <p className="deduct">{(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <div>
                        <p className="deduct space-detail">Item Advance :</p>
                        <p className="deduct">{(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    </Link>
                </div>
            ))}
            <h2 className="shopname"> TP </h2>
            {reports.filter(shop => shop.shopValue.label === "TP").map((report) => (
                                <div className="report-preview" key={report.id}>
                    <Link to={`/reports/${report.id}`}>
                    <h2> { report.name}</h2>
                    <div>
                        <p className="bold space-detail"> Salary :</p>
                        <p className="bold">
                        {report.base !== 0 && parseInt(report.base).toLocaleString()}
                        {report.baseused === "0" && <span> &gt;&gt; </span>}
                        {report.baseused === "0" && parseFloat(report.day*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <span> + {parseFloat(report.otd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <span> + {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <span className="deduct"> - {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <span className="deduct"> - {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.late !== 0 && report.late !== "0" && report.late !== "" &&  <span className="deduct"> - {parseFloat(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <span className="deduct"> - {parseFloat(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <span className="deduct">  - {parseFloat(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>} = 
                        &emsp;
                        {report.baseused === "0" && (parseFloat(report.day*(report.base/parseInt(report.monthDay))) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.baseused === "1" && (parseInt(report.baseused*report.base) + parseFloat(report.otd*(report.base/parseInt(report.monthDay))) + parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)) - parseFloat(report.deductd*(report.base/parseInt(report.monthDay))) - parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>
                    {report.baseused === "0" && <div>
                        <p className="space-detail">Working Day:</p>
                        <p>{report.day} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.day*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>    
                    </div>}
                    {report.otd !== 0 && report.otd !== "0" && report.otd !== "" && <div>
                        <p className="space-detail">OT(D) :</p>
                        <p>{report.otd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.otd*(report.base/parseInt(report.monthDay)))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.oth !== 0 && report.oth !== "0" && report.oth !== "" && <div>
                        <p className="space-detail">OT(H) :</p>
                        <p>{report.oth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.oth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deductd !== 0 && report.deductd !== "0" && report.deductd !== "" && <div>
                        <p className="deduct space-detail">Deduct(D) :</p>
                        <p className="deduct">{report.deductd} day x {(parseFloat(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})} = {parseFloat(report.deductd*(report.base/parseInt(report.monthDay))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deducth !== 0 && report.deducth !== "0" && report.deducth !== "" && <div>
                        <p className="deduct space-detail">Deduct(H) :</p>
                        <p className="deduct">{report.deducth} hour x {(parseFloat(report.base/parseInt(report.monthDay)/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.deducth*((report.base/parseInt(report.monthDay))/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.late !== 0 && report.late !== "0" && report.late !== "" && <div>
                        <p className="deduct space-detail">Late(min) :</p>
                        <p className="deduct">{(report.late*1).toLocaleString(undefined, {maximumFractionDigits:2})} min x 5 ={(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.sadvance !== 0 && report.sadvance !== "0" && report.sadvance !== "" && <div>
                        <p className="deduct space-detail">Salary Advance :</p>
                        <p className="deduct">{(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.iadvance !== 0 &&  report.iadvance !== "0" && report.iadvance !== "" && <div>
                        <p className="deduct space-detail">Item Advance :</p>
                        <p className="deduct">{(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default ReportList;