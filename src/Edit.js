import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import Creatable from 'react-select/creatable';

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

const customStyle = {
    option : (provided,state)=> ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'red' : 'blue'
    })
}



const Edit = () => {

    const { id } = useParams()
    const [reports, setReport] = useState(''); 

    const [shopValue, setShopValue] = useState(reports.shopValue);
    const [name, setName] = useState(reports.name);
    const [day, setDay] = useState(reports.day);
    const [hour, setHour] = useState(reports.hour);
    const [monthDay, setMonthDay] = useState(reports.monthDay);
    const [base, setBase] = useState(reports.base);
    const [baseused, setbaseUsed] = useState(reports.baseused)
    const [otd, setOtd] = useState(reports.otd);
    const [oth, setOth] = useState(reports.oth);
    const [deductd, setDeductd] = useState(reports.deductd);
    const [deducth, setDeducth] = useState(reports.deducth);
    const [late, setLate] = useState(reports.late);
    const [sadvance, setSAdvance] = useState(reports.iadvance);
    const [iadvance, setIAdvance] = useState(reports.sadvance);
    // const [tagInputValue, setTagInputValue] = useState('');
    // const [tagValue, setTagValue] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    useEffect(() => {
        getReportByID(id);
    },[id])

    useEffect(() => {
        console.log(reports)
        setShopValue(reports.shopValue)
        setName(reports.name)
        setDay(reports.day)
        setHour(reports.hour)
        setMonthDay(reports.monthDay)
        setBase(reports.base)
        setbaseUsed(reports.baseused)
        setOtd(reports.otd)
        setOth(reports.oth)
        setDeductd(reports.deductd)
        setDeducth(reports.deducth)
        setLate(reports.late)
        setSAdvance(reports.sadvance)
        setIAdvance(reports.iadvance)
    },[reports])

    const getReportByID = (id) => {
        setIsPending(true);
        fetch(`http://localhost:8000/reports/${id}`, {
            method: 'GET',
            headers: { "Content-Type": "application/json" },
        }).then(res => {
            console.log(res)
            if(!res.ok) {
                throw Error('could not fetch the data for that resource');
            }
            return res.json();
        })
        .then(data => {
            setReport(data)
            setIsPending(false)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const report = { shopValue, name, day, hour, monthDay, base, baseused, otd, oth, deductd, deducth, late, sadvance, iadvance };
        
        fetch('http://localhost:8000/reports/' + reports.id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(report)
        }).then (() => {
            console.log("report has edited");
            setIsPending(false);
            history.push('/')
        })
    }

    const handleChange = (field,value) => {
        switch (field) {
            case 'shop':
                setShopValue(value);
                break;
            // case 'tags':
            //     setTagValue(value);
            //     break;
        
            default:
                break;
        }
    }

    // const handleKeyDown = event => {
    //     if(!tagInputValue) return;
    //     switch (event.key) {
    //         case 'Enter':
    //         case 'Tab':
    //             setTagValue([...tagValue,createOption(tagInputValue)])
    //             setTagInputValue('');

    //             event.preventDefault();
    //             break;
        
    //         default:
    //             break;
    //     }
    // }

    // const createOption = label => ({
    //     label,
    //     value: label
    // })

    // const handleInputChange = (value) => {
    //     setTagInputValue(value);
    // }

    return ( 
        <div className="create">
            <h2> Add a New Report</h2>
            <form onSubmit={handleSubmit}>
                <label> Shop :</label>
                <Creatable
                isClearable
                onChange={(value => handleChange('shop',value))}
                options={shop}
                value={shopValue}
                styles={customStyle}
                />
                <label> Name :</label>
                <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label> Day :</label>
                <input 
                    type="number"
                    step="0.1"
                    required
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
                <label> Hour :</label>
                <input 
                    type="number"
                    step="0.1"
                    required
                    value={hour}
                    onChange={(e) => setHour(e.target.value)}
                />
                <label> Month-day :</label>
                <select
                    value={monthDay}
                    onChange={(e) => setMonthDay(e.target.value)}>
                    <option value= "30" >30</option>
                    <option value= "31" >31</option>
                </select>
                <label> Base salary :</label>
                <input 
                    type="number"
                    step="0.1"
                    required
                    value={base}
                    onChange={(e) => setBase(e.target.value)}
                />
                <label> Base used? :</label>
                <select
                    value={baseused}
                    onChange={(e) => setbaseUsed(e.target.value)}>
                    <option value= "1" >yes</option>
                    <option value= "0" >no</option>
                </select>
                <label> OT(D) :</label>
                <input 
                    type="number"
                    step="0.1"
                    value={otd}
                    onChange={(e) => setOtd(e.target.value)}
                />
                <label> OT(H) :</label>
                <input 
                    type="number"
                    step="0.1"
                    value={oth}
                    onChange={(e) => setOth(e.target.value)}
                />
                <label> Deduct(D) :</label>
                <input 
                    type="number"
                    step="0.1"
                    value={deductd}
                    onChange={(e) => setDeductd(e.target.value)}
                />
                <label> Deduct(H) :</label>
                <input 
                    type="number"
                    step="0.1"
                    value={deducth}
                    onChange={(e) => setDeducth(e.target.value)}
                />
                <label> Late(min) :</label>
                <input 
                    type="number"
                    step="0.1"
                    value={late}
                    onChange={(e) => setLate(e.target.value)}
                />
                <label> SalaryAdvance :</label>
                <input 
                    type="number"
                    step="0.1"
                    value={sadvance}
                    onChange={(e) => setSAdvance(e.target.value)}
                />       
                <label> ItemAdvance :</label>
                <input 
                    type="number"
                    step="0.1"
                    value={iadvance}
                    onChange={(e) => setIAdvance(e.target.value)}
                />
                {/* <label> Tag :</label>
                <Creatable
                isClearable
                isMulti
                components={
                    {DropdownIndicator : null}
                }
                inputValue={tagInputValue}
                menuIsOpen={false}
                onChange={(value => handleChange('tags',value))}
                placeholder='Type something and press enter...'
                onKeyDown={handleKeyDown}
                onInputChange={handleInputChange}
                value={tagValue}
                /> */}
                { !isPending &&  <button>Edit Report</button>}
                { isPending &&  <button disabled>Editing report...</button>}      
            </form>
        </div>
     );
}
 
export default Edit;
