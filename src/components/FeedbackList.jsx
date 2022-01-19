import FeedbackItem from "./FeedbackItem";
// import PropsType from 'prop-types';
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import FeedBackContext from "../context/FeedbackContext";


function FeedbackList() {

    const { feedback } = useContext(FeedBackContext);

    if (!feedback) {
        return <h2>No data found</h2>
    }

    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 1 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.5 }}
                        exit={{ opacity: 1 }}
                    >
                        <FeedbackItem key={index} item={item} />
                    </motion.div>
                ))}
            </AnimatePresence>

        </div>
    )
}

// FeedbackList.propTypes = {
//     feedback: PropsType.arrayOf(
//         PropsType.shape({
//             id: PropsType.string.isRequired,
//             text: PropsType.string.isRequired,
//             rating: PropsType.number.isRequired
//         })
//     )
// }

export default FeedbackList
