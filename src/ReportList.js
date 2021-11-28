// import { useState } from "react";
import { Link } from "react-router-dom";
// import Creatable from 'react-select/creatable';


const ReportList = (props) => {
    const reports = props.reports;
    const title = props.title;
    const [searchShop,setSearchShop] = useState('')
    
    const shop=[
        { label:'wine',value:'wine' },
        { label:'สุรายาสูบ',value:'สุรายาสูบ' },
        { label:'Fast',value:'Fast' },
        { label:'King HDY',value:'King HDY' },
        { label: 'King KN' ,value: 'King KN' },
        { label: 'King SRT' ,value: 'King SRT' },
        { label: 'John' ,value: 'John' },
        { label: 'Fort' ,value: 'Fort' },
        { label: 'Dodges' ,value: 'Dodges' },
        { label: 'Champagne' ,value: 'Champagne' },
        { label: 'Dewars' ,value: 'Dewars' },
        { label: 'Rich' ,value: 'Rich' },
        { label: 'PTL' ,value: 'PTL' },
        { label: 'Green' ,value: 'Green' },
        { label: 'Rose' ,value: 'Rose' }
    ]
    
    const handleChange = (field,value) => {
        switch (field) {
            case 'searchShop':
                setSearchShop(value);
                break;
            default:
                break;
        }
    }
    const customStyle = {
        option : (provided,state)=> ({
            ...provided,
            borderBottom: '1px dotted pink',
            color: state.isSelected ? 'red' : 'blue'
        })
    }


    return ( 
        <div className="report-list">
            <h2> { title } </h2>
            <label> Search Shop :</label>
            <Creatable
                isMulti
                isClearable
                onChange={(value => handleChange('searchShop',value))}
                options={shop}
                value={searchShop}
                styles={customStyle}
                />
            {/* {reports.filter((reports) => {
                if (searchShop === '') {
                    return reports;
                } else if (reports.shopValue === searchShop) {
                    return reports;
                }
                return false;
            }).map((report)  => ( */}
            {reports.map((report) => (
                <div className="report-preview" key={report.id}>
                    <Link to={`/reports/${report.id}`}>
                    <h2> { report.name}</h2>
                    <p> Salary : {report.base !== 0 && report.base}  {report.otd !== 0 && <span> + {(report.otd*(report.base/report.day)).toFixed(2)}</span>}
                    {report.oth !== 0 && <span> + {(report.oth*((report.base/report.day)/report.hour)).toFixed(2)}</span>} {report.deductd !== 0 && <span className="deduct"> - {(report.deductd*(report.base/report.day)).toFixed(2)}</span>}
                    {report.deducth !== 0 && <span className="deduct"> - {(report.deducth*((report.base/report.day)/report.hour)).toFixed(2)}</span>} {report.late !== 0 && <span className="deduct"> - {(report.late*5).toFixed(2)}</span>}
                    {report.sadvance !== 0 && <span className="deduct"> - {(report.sadvance*1).toFixed(2)}</span>} {report.iadvance !== 0 && <span className="deduct">  - {(report.iadvance*1).toFixed(2)}</span>} = 
                    {(parseInt(report.base) + parseFloat(report.otd*(report.base/report.day)) + parseFloat(report.oth*((report.base/report.day)/report.hour)) - parseFloat(report.deductd*(report.base/report.day)) - parseFloat(report.deducth*((report.base/report.day)/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toFixed(2)}</p>
                    <p> Total Salary : {(parseInt(report.base) + parseFloat(report.otd*(report.base/report.day)) + parseFloat(report.oth*((report.base/report.day)/report.hour)) - parseFloat(report.deductd*(report.base/report.day)) - parseFloat(report.deducth*((report.base/report.day)/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toFixed(2)}</p>
                    {report.otd !== 0 && <p>OT(D) : {report.otd} day x {(parseFloat(report.base/report.day)).toFixed(2)} = {parseFloat(report.otd*(report.base/report.day)).toFixed(2)}</p>}
                    {report.oth !== 0 && <p>OT(H) : {report.oth} hour x {(parseFloat(report.base/report.day/report.hour).toFixed(2))} = {parseFloat(report.oth*((report.base/report.day)/report.hour)).toFixed(2)}</p>}
                    {report.deductd !== 0 && <p className="deduct">Deduct(D) : {report.deductd} day x {(parseFloat(report.base/report.day)).toFixed(2)} = {parseFloat(report.deductd*(report.base/report.day)).toFixed(2)}</p>}
                    {report.deducth !== 0 && <p className="deduct">Deduct(H) : {report.deducth} hour x {(parseFloat(report.base/report.day/report.hour).toFixed(2))} = {parseFloat(report.deducth*((report.base/report.day)/report.hour)).toFixed(2)}</p>}
                    {report.late !== 0 && <p className="deduct">Late(min) : {(report.late*1).toFixed(2)} min x 5 ={(report.late*5).toFixed(2)}</p>}
                    {report.sadvance !== 0 && <p className="deduct"> Salary Advance : {(report.sadvance*1).toFixed(2)}</p>}
                    {report.iadvance !== 0 && <p className="deduct"> Item Advance : {(report.iadvance*1).toFixed(2)}</p>}
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default ReportList;