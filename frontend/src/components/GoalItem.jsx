import {useDispatch} from "react-redux";
import { deleteGoal } from '../features/goals/goalsSlice'

export function GoalItem({goal}) {

    const dispatch = useDispatch()


    return (
        <div className='goal'>
            <div>
                {new Date(goal.createdAt).toLocaleString('en-US')}
                <h2>{goal.text}</h2>
                <button className='close' onClick={ () => {dispatch(deleteGoal(goal._id))}}>X</button>
            </div>
        </div>
    )
}

export default GoalItem