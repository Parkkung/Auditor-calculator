import { Link } from "react-router-dom";

const ReportList = (props) => {
    const reports = props.reports;
    const title = props.title;

    return ( 
        <div className="report-list">
            <h2> { title } </h2>
            {reports.map((report) => (
                <div className="report-preview" key={report.id}>
                    <Link to={`/reports/${report.id}`}>
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
                        <p className="deduct">{report.deductd} day x {(parseFloat(report.base/report.day)).toLocaleString(undefined, {maximumFractionDigits:2})} = {parseFloat(report.deductd*(report.base/report.day)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    </div>}
                    {report.deducth !== 0 && <div>
                        <p className="deduct space-detail">Deduct(H) :</p>
                        <p className="deduct">{report.deducth} hour x {(parseFloat(report.base/report.day/report.hour).toLocaleString(undefined, {maximumFractionDigits:2}))} = {parseFloat(report.deducth*((report.base/report.day)/report.hour)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
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