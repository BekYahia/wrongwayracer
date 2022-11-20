import { Card, Button, TextField } from '@mui/material'
import ChatMessage from './ChatMessage'
import socket from '../helpers/socket'
import React, { useEffect, useState,  } from 'react'
import { Player } from '../helpers/types'
function Chat() {

	const [messages, setMessages] = useState<any>([])
	const [players, setPlayers] = useState<any>([]) 
	const [input, setInput] = useState(null)

  	const handleChange = (event: any) => {
    	setInput(event.target.value)
  	}

  	const handleSubmit = (event: any) => {

    	socket.emit('newChat', input)
  	}

	let s;
	useEffect(() => {
		socket.on('players', (data) => {
			setPlayers(data)
		})

		socket.on('newChatJoin', (data) => {

			setMessages(() => [{ type: 'pink_msg', message: `${data?.name} Has Join the Game`}, ...messages])
		})
		socket.on('newChat', (data) => {
			// i have generate the name myself, because it is not included in response
			setMessages(() => [{ type: 'username', name: players[Math.floor(Math.random()*players.length)]?.name || 'Baker', message: data}, ...messages])
		})

		return () => {
			socket.off('newChatJoin')
			socket.off('newChat')
		}
	})



	// scrollTop the chatBox

	//document.querySelector(".chat-box")
	//chatBox.scrollTop = chatBox.scrollHeight
	// 	const chatBox = document.querySelector("#tt")
	// chatBox.scrollTop = ss.scrollHeight

	return (
		<Card className="card chat">
			<div className="card-content" id="tt">
				<ChatMessage type="orange_msg" message="The Game Start in 6..."/>
				{ !messages.length ? 'no messages' : messages.map((m: any, index: number) => <ChatMessage key={ index } {...m} />) }
			</div>
			<div className="card-footer">
				<TextField onChange={ handleChange } name="aaa" hiddenLabel variant="filled" placeholder="|..." />
				<Button variant="contained" onClick={handleSubmit}>Send</Button>
			</div>
		</Card>
	)
}

export default Chat;