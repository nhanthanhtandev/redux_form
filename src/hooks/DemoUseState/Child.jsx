import React from 'react'

export default function Child({ message, onChangeMessage }) {
    return (
        <div>
            Child
            <h4>Message từ cha truyền xuống: {message}</h4>
            {/* truyền function */}
            <button className='bg-green-500 rounded py-2 px-3 text-white'
                onClick={() => onChangeMessage("Child: Hello BC66")}>
                Change Message
            </button>
        </div>
    )
}
