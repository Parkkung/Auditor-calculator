import { useParams } from "react-router";
import useFetch from "./useFetch";
import {useHistory} from 'react-router-dom';

const ReportDetails = () => {

    const { id } = useParams()
    const { data: report, error, isPending} = useFetch('http://localhost:8000/reports/' + id); 
    const history = useHistory();
    
    const handleClick = () => {
        fetch('http://localhost:8000/reports/' + report.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    // if (report) {
    //     return report.name,
    //     report.day = parseInt(report.day,10),
    //     report.hour = parseInt(report.hour,10),
    //     report.base = parseInt(report.base,10),
    //     report.otd = parseInt(report.otd,10),
    //     report.oth = parseInt(report.oth,10),
    //     report.deductd = parseInt(report.deductd,10),
    //     report.deducth = parseInt(report.deducth,10),
    //     report.late = parseInt(report.late,10),
    //     report.sadvance = parseInt(report.sadvance,10),
    //     report.iadvance = parseInt(report.iadvance,10)
    // }

    return ( 
        <div className="report-details">
            { isPending && <div>Loading...</div> }
            { error && <div> {error} </div>}
            { report && (
                <article>
                    <h2> {report.id}.{ report.name}</h2>
                    <div>
                        <p className="bold space-detail"> Salary :</p>
                        <p className="bold">{report.base !== 0 && parseInt(report.base).toLocaleString()}
                        {report.otd !== 0 && <span> + {parseFloat(report.otd*(report.base/report.day)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.oth !== 0 && <span> + {parseFloat(report.oth*((report.base/report.day)/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deductd !== 0 && <span className="deduct"> - {parseFloat(report.deductd*(report.base/report.day)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.deducth !== 0 && <span className="deduct"> - {parseFloat(report.deducth*((report.base/report.day)/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.late !== 0 && <span className="deduct"> - {parseFloat(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.sadvance !== 0 && <span className="deduct"> - {parseFloat(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
                        {report.iadvance !== 0 && <span className="deduct">  - {parseFloat(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</span>} = 
                        &emsp;{(parseInt(report.base) + parseFloat(report.otd*(report.base/report.day)) + parseFloat(report.oth*((report.base/report.day)/report.hour)) - parseFloat(report.deductd*(report.base/report.day)) - parseFloat(report.deducth*((report.base/report.day)/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>
                    {report.otd !== 0 && <div>
                        <p className="space-detail">OT(D) :</p>
                        <p>{report.otd} day x {(parseFloat(report.base/report.day)).toLocaleString(undefined, {maximumFractionDigits:2})} = {(parseFloat(report.otd*(report.base/report.day))).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.oth !== 0 && <div>
                        <p className="space-detail">OT(H) :</p>
                        <p>{report.oth} hour x {(parseFloat(report.base/report.day/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.oth*((report.base/report.day)/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deductd !== 0 && <div>
                        <p className="deduct space-detail">Deduct(D) :</p>
                        <p>{report.deductd} day x {(parseFloat(report.base/report.day)).toLocaleString(undefined, {maximumFractionDigits:2})} = {parseFloat(report.deductd*(report.base/report.day)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deducth !== 0 && <div>
                        <p className="deduct space-detail">Deduct(H) :</p>
                        <p>{report.deducth} hour x {(parseFloat(report.base/report.day/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.deducth*((report.base/report.day)/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.late !== 0 && <div>
                        <p className="deduct space-detail">Late(min) :</p>
                        <p>{(report.late*1).toLocaleString(undefined, {maximumFractionDigits:2})} min x 5 ={(report.late*5).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.sadvance !== 0 && <div>
                        <p className="deduct space-detail">Salary Advance :</p>
                        <p>{(report.sadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.iadvance !== 0 && <div>
                    <p className="deduct space-detail">Item Advance :</p>
                        <p>{(report.iadvance*1).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default ReportDetails;