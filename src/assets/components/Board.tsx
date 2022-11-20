import Leaderboard from './Leaderboard'
import Chat from './Chat'
import Players from './Players'
import dimentions from '../helpers/dimentions'
import Tabss from './Tabs'

function Board() {
	const { width } = dimentions()
	const boardItems = <> <Leaderboard /> <Chat/> <Players /> </>
	return (
		<section className='board'>
			{ width > 900 ? boardItems : <Tabss /> }
		</section>
	)
}

export default Board;