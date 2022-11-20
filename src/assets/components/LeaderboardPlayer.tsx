import { Player } from '../helpers/types'
import { ordinal_suffix_of } from '../helpers/functions'

function LeaderboardPlayer({ name, record, rank }: Player) {
	return (
		<div className="player">
			<span className="name">{ name }</span>
			<div>
				<span className="record">
					<small>Record</small>
					<strong>{ record }</strong>
				</span>
				<span className="rank">
					<small>Rank</small>
					<strong>{ ordinal_suffix_of(rank) }</strong>
				</span>
			</div>
		</div>
	);
}
export default LeaderboardPlayer