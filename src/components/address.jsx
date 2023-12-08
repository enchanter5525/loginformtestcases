const Address = ({state, setState}) => {
    return <>
    <div>
        <label>State:</label>
        <input type='text' value={state} onChange={(e) => setState(e.target.value)}/>
        <button data-testid='childBtn' onClick={(e) => setState('e.target.value')}>on child click </button>
    </div>
 
    </>
}

export default Address