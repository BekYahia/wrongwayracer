import { Card, Button } from '@mui/material'
import { Settings } from '@mui/icons-material'
import PlayersPlayer from './PlayersPlayer'
import socket from '../helpers/socket'
import { useEffect, useState } from 'react'
import { Player } from '../helpers/types'

function Players() {

	const [players, setPlayers] = useState([]) 

	useEffect(() => {
		socket.on('players', (data) => {
			setPlayers(data)
		})
	})

	return (
		<Card className="card players">
			<div className="card-header">
				<h3>
					<span>Players</span>
					<span>8/{players.length}</span>
				</h3>
			</div>
			<div className="card-content">
				<Button variant="contained" fullWidth startIcon={<Settings />}>Setting</Button>
				<div>
					{ !players.length ? 'no players found' : players.map((p: Player, index: number) => <PlayersPlayer key={ index } { ...p } />) }
				</div>
			</div>
		</Card>
	)
}

export default Players;