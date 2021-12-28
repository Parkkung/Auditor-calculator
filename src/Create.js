import { useState } from "react";
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

const Create = () => {
    const [shopValue, setShopValue] = useState('');
    const [name, setName] = useState('');
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [monthDay, setMonthDay] = useState("30");
    const [base, setBase] = useState(0);
    const [baseused, setbaseUsed] = useState("1")
    const [otd, setOtd] = useState(0);
    const [oth, setOth] = useState(0);
    const [deductd, setDeductd] = useState(0);
    const [deducth, setDeducth] = useState(0);
    const [late, setLate] = useState(0);
    const [sadvance, setSAdvance] = useState(0);
    const [iadvance, setIAdvance] = useState(0);
    // const [tagInputValue, setTagInputValue] = useState('');
    // const [tagValue, setTagValue] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const report = { shopValue, name, day, hour, monthDay, base, baseused, otd, oth, deductd, deducth, late, sadvance, iadvance };
        
        fetch('http://localhost:8000/reports', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(report)
        }).then (() => {
            console.log("new report added");
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
                    onChange={(e) => setName(e.target.value)}
                />
                <label> Day :</label>
                <input 
                    type="number"
                    step="0.1"
                    required
                    onChange={(e) => setDay(e.target.value)}
                />
                <label> Hour :</label>
                <input 
                    type="number"
                    step="0.1"
                    required
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
                    onChange={(e) => setOtd(e.target.value)}
                />
                <label> OT(H) :</label>
                <input 
                    type="number"
                    step="0.1"
                    onChange={(e) => setOth(e.target.value)}
                />
                <label> Deduct(D) :</label>
                <input 
                    type="number"
                    step="0.1"
                    onChange={(e) => setDeductd(e.target.value)}
                />
                <label> Deduct(H) :</label>
                <input 
                    type="number"
                    step="0.1"
                    onChange={(e) => setDeducth(e.target.value)}
                />
                <label> Late(min) :</label>
                <input 
                    type="number"
                    step="0.1"
                    onChange={(e) => setLate(e.target.value)}
                />
                <label> SalaryAdvance :</label>
                <input 
                    type="number"
                    step="0.1"
                    onChange={(e) => setSAdvance(e.target.value)}
                />       
                <label> ItemAdvance :</label>
                <input 
                    type="number"
                    step="0.1"
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
                { !isPending &&  <button>Add Report</button>}
                { isPending &&  <button disabled>Adding report...</button>}      
            </form>
        </div>
     );
}
 
export default Create;
