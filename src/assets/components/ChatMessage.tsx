interface messageItem {
	message: string;
	type: "username" | "orange_msg" | "pink_msg";
	name?: string;
}

function ChatMessage({ message, type, name } : messageItem) {
	return (
		<div className={"msg "+ type}>
			{ type == 'username' && <strong className="username">{ name }: </strong> } { message }
		</div>		
	);
}

export default ChatMessage