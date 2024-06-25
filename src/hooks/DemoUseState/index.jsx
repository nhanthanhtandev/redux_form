import React, { useState } from 'react'
import Child from './Child';

export default function DemoUseState(props) {
    const { message } = props

    // trả về mảng 
    /*
        const [state, setState] trong đó :
        + state : chỉ số đầu tiên trong mảng
        + setState : là hàm setState

    */

    const [count, setCount] = useState(1)
    const [message1, setMessage1] = useState("Hello Me")
    //  const [user, setUser] = useState({username:"",age:""}) có thể truyền đối tượng , mảng , chuỗi , ...

    //  count ở đây là getter : giá trị ở đây là 0 nếu ko để là null
    // const handleIncrease ở đây như 1 setter , muốn cập nhaath lại getter thì phải gọi setState ra (ví dụ ở đây tên setCount)
    const handleIncrease = () => {
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // ví dụ gọi 3 lần setCount giống nhau bên trong handleIncrease thì react sẽ gộp 3 thằng lại và chọn thằng cuối cùng để chạy

        // Nếu muốn chạy tuần tự thì làm như sau vì call back function sẽ chạy theo quy tắc event loop
        setCount((prev) => {
            return prev + 1
        });
        setCount((prev) => {
            return prev + 1
        });
        setCount((prev) => {
            return prev + 1
        });
    }
    return (
        <div>
            DemoUseState
            <h4>{message}</h4>
            <h2>
                Count:{count}
            </h2>
            <button onClick={handleIncrease}>
                Increase
            </button>
            <hr />
            <Child message={message1} onChangeMessage={(msg) => {

                setMessage1(msg);
            }}></Child>
        </div>
    )
}
