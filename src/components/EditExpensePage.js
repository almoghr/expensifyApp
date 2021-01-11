import React from 'react'

const EditExpensePage = (props) => {
    return (
        <div>
        edit your expense page right on {props.match.params.id}
        </div>
    )
}

export default EditExpensePage
