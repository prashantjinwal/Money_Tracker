export default function Stack ({StackHeaderName, StackValue}){

    let valueClass = 'font-bold text-2xl my-2 text-green'

    if (StackHeaderName === 'Expenses') {
        valueClass += ' text-red-500'
    }if (StackHeaderName === 'Income') {
        valueClass += ' text-green-500'
    } else {
        valueClass += ' text-white'
    }

    return (

        <div className="bg-[#323031] py-5 px-6 md:w-1/3 w-full">
            <p className="text-xl ">{StackHeaderName}</p>
            <p className={valueClass}>{StackValue}</p>
        </div>
    )
}