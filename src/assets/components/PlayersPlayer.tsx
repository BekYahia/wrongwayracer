import { Player } from '../helpers/types'

function PlayersPlayer( { name, avatar }: Player ) {
	return (
		<div className="player">
			{ /* the avatar value [https://cdn.spls.ae/cdn/avatar/8.jpg] is 404 so i used a placeholder  */ }
			<img src="https://via.placeholder.com/50" alt="" />
			<span>{ name }</span>
		</div>
	);
}

export default PlayersPlayer;