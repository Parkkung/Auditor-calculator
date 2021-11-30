// import { useState } from "react";
import { Link } from 'react-router-dom';
// import Creatable from 'react-select/creatable';


const ReportList = (props) => {
    const reports = props.reports;
    const title = props.title;
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
            <h2> { title } </h2>
            {reports.map((report) => (
                <div className="report-preview" key={report.id}>
                    <Link to={`/reports/${report.id}`}>
                    <h2> {report.id}.{ report.name}</h2>
                    <div>
                        <p className="bold space-detail"> Salary :</p>
                        <p className="bold">
                        {report.base !== 0 && parseInt(report.base).toLocaleString()}
                        {report.baseused === "0" && <span> &gt;&gt; </span>}
                        {report.baseused === "0" && parseFloat(report.day*(report.base/30)).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.otd !== 0 && <span> + {parseFloat(report.otd*(report.base/30)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.oth !== 0 && <span> + {parseFloat(report.oth*((report.base/30)/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deductd !== 0 && <span className="deduct"> - {parseFloat(report.deductd*(report.base/30)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deducth !== 0 && <span className="deduct"> - {parseFloat(report.deducth*((report.base/30)/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.late !== 0 && <span className="deduct"> - {parseFloat(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.sadvance !== 0 && <span className="deduct"> - {parseFloat(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.iadvance !== 0 && <span className="deduct">  - {parseFloat(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>} = 
                        &emsp;
                        {report.baseused === "0" && (parseFloat(report.day*(report.base/30)) + parseFloat(report.otd*(report.base/30)) + parseFloat(report.oth*((report.base/30)/report.hour)) - parseFloat(report.deductd*(report.base/30)) - parseFloat(report.deducth*((report.base/30)/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}
                        {report.baseused === "1" && (parseInt(report.baseused*report.base) + parseFloat(report.otd*(report.base/30)) + parseFloat(report.oth*((report.base/30)/report.hour)) - parseFloat(report.deductd*(report.base/30)) - parseFloat(report.deducth*((report.base/30)/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>
                    {report.otd !== 0 && <div>
                        <p className="space-detail">OT(D) :</p>
                        <p>{report.otd} day x {(parseFloat(report.base/30)).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.otd*(report.base/30))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.oth !== 0 && <div>
                        <p className="space-detail">OT(H) :</p>
                        <p>{report.oth} hour x {(parseFloat(report.base/30/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.oth*((report.base/30)/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deductd !== 0 && <div>
                        <p className="deduct space-detail">Deduct(D) :</p>
                        <p className="deduct">{report.deductd} day x {(parseFloat(report.base/30)).toLocaleString(undefined, {maximumFractionDigits:2})} = {parseFloat(report.deductd*(report.base/30)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deducth !== 0 && <div>
                        <p className="deduct space-detail">Deduct(H) :</p>
                        <p className="deduct">{report.deducth} hour x {(parseFloat(report.base/30/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.deducth*((report.base/30)/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.late !== 0 && <div>
                        <p className="deduct space-detail">Late(min) :</p>
                        <p className="deduct">{(report.late*1).toLocaleString(undefined, {maximumFractionDigits:2})} min x 5 ={(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.sadvance !== 0 && <div>
                        <p className="deduct space-detail">Salary Advance :</p>
                        <p className="deduct">{(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.iadvance !== 0 && <div>
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