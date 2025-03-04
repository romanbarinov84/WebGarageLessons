
export function Notification({messages}){
    return (
        <div>
            {messages.length > 0 && <h1>You have {messages.length} new messages</h1> }
        </div>
    )
}