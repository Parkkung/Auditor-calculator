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
                    <h2> { report.name}</h2>
                    <p> Salary : {report.base !== 0 && report.base}  {report.otd !== 0 && <span> + {(report.otd*(report.base/report.day)).toFixed(2)}</span>}
                    {report.oth !== 0 && <span> + {(report.oth*((report.base/report.day)/report.hour)).toFixed(2)}</span>} {report.deductd !== 0 && <span> - {(report.deductd*(report.base/report.day)).toFixed(2)}</span>}
                    {report.deducth !== 0 && <span> - {(report.deducth*((report.base/report.day)/report.hour)).toFixed(2)}</span>} {report.late !== 0 && <span> - {(report.late*5).toFixed(2)}</span>}
                    {report.sadvance !== 0 && <span> - {(report.sadvance*1).toFixed(2)}</span>} {report.iadvance !== 0 && <span> - {(report.iadvance*1).toFixed(2)}</span>} = 
                    {(parseInt(report.base) + parseFloat(report.otd*(report.base/report.day)) + parseFloat(report.oth*((report.base/report.day)/report.hour)) - parseFloat(report.deductd*(report.base/report.day)) - parseFloat(report.deducth*((report.base/report.day)/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toFixed(2)}</p>
                    <p> Total Salary : {(parseInt(report.base) + parseFloat(report.otd*(report.base/report.day)) + parseFloat(report.oth*((report.base/report.day)/report.hour)) - parseFloat(report.deductd*(report.base/report.day)) - parseFloat(report.deducth*((report.base/report.day)/report.hour)) - parseInt(report.late*5) - parseInt(report.sadvance) - parseInt(report.iadvance)).toFixed(2)}</p>
                    {report.otd !== 0 && <p>OT(D) : {report.otd} day x {(parseFloat(report.base/report.day)).toFixed(2)} = {parseFloat(report.otd*(report.base/report.day)).toFixed(2)}</p>}
                    {report.oth !== 0 && <p>OT(H) : {report.oth} hour x {(parseFloat(report.base/report.day/report.hour).toFixed(2))} = {parseFloat(report.oth*((report.base/report.day)/report.hour)).toFixed(2)}</p>}
                    {report.deductd !== 0 && <p>Deduct(D) : {report.deductd} day x {(parseFloat(report.base/report.day)).toFixed(2)} = {parseFloat(report.deductd*(report.base/report.day)).toFixed(2)}</p>}
                    {report.deducth !== 0 && <p>Deduct(H) : {report.deducth} hour x {(parseFloat(report.base/report.day/report.hour).toFixed(2))} = {parseFloat(report.deducth*((report.base/report.day)/report.hour)).toFixed(2)}</p>}
                    {report.late !== 0 && <p>Late(min) : {(report.late*1).toFixed(2)} min x 5 ={(report.late*5).toFixed(2)}</p>}
                    {report.sadvance !== 0 && <p> Salary Advance : {(report.sadvance*1).toFixed(2)}</p>}
                    {report.iadvance !== 0 && <p> Item Advance : {(report.iadvance*1).toFixed(2)}</p>}
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default ReportDetails;