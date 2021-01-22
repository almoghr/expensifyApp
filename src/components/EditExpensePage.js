import React from 'react'
import { connect } from 'react-redux'

const EditExpensePage = (props) => {
    return (
        <div>
        edit your expense page right on {props.match.params.id}
        </div>
    )
}

const ConnectedEditExpensePage = connect()(EditExpensePage)
export default ConnectedEditExpensePage
