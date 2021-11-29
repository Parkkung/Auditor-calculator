import ReportList from './ReportList';
import useFetch from './useFetch';


const Report = () => {
    const { data: reports, isPending, error} = useFetch('http://localhost:8000/reports');
    // const[name, setName] = useState('Pruk');

    // useEffect(() => {
    //     console.log('use effect run');
    //     console.log(name);
    // }, [name]);


    return ( 
        <div className="reportpage">
            { error && <div> { error }</div>}
            { isPending && <div>Loading...</div> }
            {reports && <ReportList reports={reports} title="All Reports!" />}
            {/* <button onClick={() => setName('Praew')}>change name</button>
            <p>{ name }</p>
            <ReportList reports={reports.filter((report) => report.name === 'Pruk')} title="Pruk's Reports!"/> */}
        </div>
     );
}
 

export default Report;