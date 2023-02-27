import DatalistInput, { startsWithValueFilter } from "react-datalist-input"

export default function Input() {
    return (
        <div className="gallery__nav__input">
            <DatalistInput
                placeholder="Type a breed here."                
                onSelect={(item) => console.log(item.value)}
                filters={[startsWithValueFilter]}               
                items={[
                  { id: 'Chocolate', value: 'type a breed here' },
                  { id: 'Coconut', value: 'Coconut' },
                  { id: 'Mint', value: 'Mint' },
                  { id: 'Strawberry', value: 'Strawberry' },
                  { id: 'Vanilla', value: 'Vanilla' },
                  { id: 'Chocolate', value: 'Chocolate' },
                  { id: 'Coconut', value: 'Coconut' },
                  { id: 'Mint', value: 'Mint' },
                  { id: 'Strawberry', value: 'Strawberry' },                 
                ]}
            />
            <a href='javascript:void(0)' className='gallery__nav__input-btn'>find pictures</a>
        </div>
    )
};
