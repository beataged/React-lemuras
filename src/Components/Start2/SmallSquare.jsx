import DigitSqare from "./DigitSquare";

function SmallSquare({color, number}) {

    return(
        <div className="big-blue__small" style={{
            borderColor: color
        }}>
            <DigitSqare number={number}></DigitSqare>
        </div>
    )
}

export default SmallSquare;