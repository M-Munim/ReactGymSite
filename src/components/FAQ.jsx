import { useState } from 'react'
import { AiOutlineMinus } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'

const FAQ = ({ question, answer }) => {
    const [isAnsShowing, setIsAnsShowing] = useState(true)
    return (
        <article className='faq' onClick={() => setIsAnsShowing(prev => !prev)}>
            <div>
                <h4>{question}</h4>
                <button className='faq_icon'>
                    {
                        isAnsShowing ? <AiOutlinePlus /> : <AiOutlineMinus />
                    }
                </button>
            </div>

            {isAnsShowing && <p>{answer}</p>}
        </article>
    )
}

export default FAQ
