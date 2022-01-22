import FeedbackForm from '../FeedbackForm';
import FeedbackList from '../FeedbackList';
import FeedbackStats from '../FeedbackStats';


function HomePage() {
    
    return (
        <div className="container">
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
        </div>
    )
}

export default HomePage
