import Answerbox from "./Answerbox"

function MatchingAnswerBox({num,start,alpha,ks}) {
	start = start-1 || 0

	num = parseInt(num)
	if (num <= 7) {
		let rows = []
		for (let i = 1; i <= num; i++) {
			rows.push(<td>{(alpha ? (i+start+9).toString(36).toUpperCase() : i+start) + "."}</td>)
			rows.push(<td><Answerbox /></td>)
		}
		return(
			<table className="border-hidden width-800 no1Count no2Count"><tbody>
			<tr>{rows}</tr></tbody>
			</table>
		)
	}
	else if (num <= 10) {
		let rows1 = []
		let rows2 = []
		for (let i = 1; i <= (num+1)/2; i++) {
			rows1.push(<td>{i+start}.</td>)
			rows1.push(<td><Answerbox /></td>)
		}

		for (let i = Math.floor((num+1)/2)+1; i <= num; i++) {
			rows2.push(<td>{i+start}.</td>)
			rows2.push(<td><Answerbox /></td>)
		}

		return (<table className="border-hidden width-800 no1Count no2Count"><tbody>
		<tr>{rows1}</tr>
		<tr>{rows2}</tr>
		</tbody></table>)
	}
	else {
		let rows = []
		for (let i = 0; i <= num/7; i++) {
			let tmprow = []

			for (let j = 1; j <= Math.min(7, num-i*7); j++) {
				tmprow.push(<td>{i*7+j+start}.</td>)
				tmprow.push(<td><Answerbox/></td>)
			}

			rows.push(tmprow)
		}

		return (<table className="border-hidden width-800 no1Count no2Count"><tbody>{rows.map((row, i) => <tr>{row}</tr>)}</tbody></table>)
	}
}

export default MatchingAnswerBox;