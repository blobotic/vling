function NTable({children, className, fmt}) {
	// if (children[0]["props"]["children"].length > 1) return children[0]["props"]["children"];
	let rawText = children[0]["props"]["children"];

	let hasTH = rawText[0][0] == '|';
	// if (hasTH) rawText[0] = rawText[0].substring(1);
	// console.log(hasTH)

	// console.log(rawText)

	let tmpTableData = [[]], crc = 0;

	for (let i = 0; i < rawText.length; i++) {
		if (typeof rawText[i] === 'string' || rawText[i] instanceof String) {
			if (rawText[i] == "\r\n" || rawText[i] == "\n") {
				crc += 1;
			}
			else {
				let tmp = rawText[i].replace('\r','').split('\n');
				// if (tmp.length == 1) {tmpTableData[crc] = []; crc += 1;}
				// console.log(tmp.length)
				tmpTableData[crc] = tmpTableData[crc] || [];
				tmpTableData[crc].push(tmp[0])
				// console.log(tmp[0], tmpTableData[crc])
				for (let j=1; j < tmp.length; j++) tmpTableData[crc+j] = [tmp[j]];
				crc = tmpTableData.length - 1;
			}
		}
		else {
			tmpTableData[crc] = tmpTableData[crc] || [];
			tmpTableData[crc].push(rawText[i])
		}
	}
	// console.log(tmpTableData)
	let tableData = [[]], crc2 = 0, ccc2 = 0;

	for (let i=0; i < tmpTableData.length; i++) {
		for (let j=0; j<tmpTableData[i].length; j++) {
			if (typeof tmpTableData[i][j] === 'string' || tmpTableData[i][j] instanceof String) {
				let tmp = tmpTableData[i][j].split("&");
				// console.log(tmp)
				tableData[crc2] = tableData[crc2] || []
				tableData[crc2][ccc2] = tableData[crc2][ccc2]  || [];
				tableData[crc2][ccc2].push(tmp[0]);
				for (let k=1; k<tmp.length; k++) {
					ccc2 += 1;
					tableData[crc2][ccc2] = [tmp[k]];
					// console.log(tmp[k], crc2, ccc2, tableData)
				}
			}
			else {
				tableData[crc2] = tableData[crc2] || [];
				tableData[crc2][ccc2] = tableData[crc2][ccc2] || [];
				tableData[crc2][ccc2].push(tmpTableData[i][j]);
			}
		}
		
		crc2 += 1;
		ccc2 = 0;
	}	

	// console.log(tableData)

	// let tmpTableData = children[0]["props"]["children"][0].replace('\r','').split('\n')

	// for (let i = 0; i < tmpTableData.length; i++) {
	// 	tmpTableData[i] = tmpTableData[i].split("&");
	// }

	console.log(fmt)

	let dfltCl = "";

	if (fmt == "1")  dfltCl = " padding-none width-800 center border-hidden mb2 ";
	else if (fmt == "10") dfltCl = " width-1000 center border-hidden mb2 padding-fourth ";
	else if (fmt == "2") dfltCl = " width-600 border-hidden padding-fourth mb2 "

	// console.log(tableData)
	return (
		<table className={dfltCl + className}>
		{tableData.map((row,i) => <tr>{row.map((el, j) => (i==0 && hasTH)?<th>{el[0][0] == "|"?el[0].substring(1):el}</th>:<td>{el}</td>)}</tr>)}
		{/*<tr>{tmpTableData}</tr>*/}
		</table>
	);
	// return (<span className={className || "st"}>{children}</span>);
}

export default NTable;