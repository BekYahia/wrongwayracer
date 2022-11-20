import { Card } from '@mui/material'
import LeaderboardPlayer from './LeaderboardPlayer'
import socket from '../helpers/socket'
import { useEffect, useState } from 'react'
import { Player } from '../helpers/types'

function Leaderboard() {

	const [players, setPlayers] = useState([]) 

	useEffect(() => {
		socket.on('players', (data) => {
			setPlayers(data)
		})
	})

	return (
		<Card className="card leaderboard">
			<div className="card-header">
				<div className="record">
					<span>3:44</span>
					Your Lest record
				</div>
				<div className="rank">
					<span>#144th</span> <small>from 15k</small>
				</div>
			</div>
			<div className="card-content">
				<div>
					{ !players.length ? 'no players found' : players.map((p: Player, index: number) => <LeaderboardPlayer key={ index } { ...p } />) }
				</div>
			</div>
		</Card>
	)
}

export default Leaderboard;