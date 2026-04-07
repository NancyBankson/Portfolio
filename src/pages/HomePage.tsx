export function HomePage() {

    const orientations = ['forward', 'backward', 'up', 'down', 'diagonal1', 'diagonal2', 'diagonal3', 'diagonal4'];
    let randomLetter = '';
    let letterArray = [];
    let usedIndex = [];
    for (let i = 0; i < 225; i++) {
        randomLetter = String.fromCharCode(Math.floor(Math.random() * (91 - 65)) + 65);
        letterArray.push(randomLetter);
    }
    const mysteryWords = ['REACT', 'HTML'];
    for (let j = 0; j < mysteryWords.length; j++) {
        let wordArray = [...mysteryWords[j]];
        let initialPossition = 0;
        let rowMin = 0;
        let rowMax = 14;
        let columnMin = 1;
        let columnMax = 15;
        let columnIndex = 0;
        let rowIndex = 0;
        let randomOrientation = Math.floor(Math.random() * 8);
        let orientation = orientations[randomOrientation];
        // let orientation = orientations[7];
        console.log('orientation is ', orientation);
        switch (orientation) {
            case 'forward':
                columnMax = 15 - wordArray.length;
                initialPossition = (Math.floor(Math.random() * (rowMax - rowMin + 1)) + rowMin) * 15 + Math.floor(Math.random() * (columnMax - columnMin) + columnMin);
                for (let k = 0; k < wordArray.length; k++) {
                    letterArray[initialPossition + columnIndex] = wordArray[k];
                    console.log('position is ', initialPossition + columnIndex, wordArray[k]);
                    usedIndex.push(initialPossition + columnIndex);
                    columnIndex += 1;
                }
                break;
            case 'backward':
                columnMin = wordArray.length;
                initialPossition = (Math.floor(Math.random() * (rowMax - rowMin + 1)) + rowMin) * 15 + Math.floor(Math.random() * (columnMax - columnMin) + columnMin);
                for (let k = 0; k < wordArray.length; k++) {
                    letterArray[initialPossition + columnIndex] = wordArray[k];
                    console.log('position is ', initialPossition + columnIndex, wordArray[k]);
                    usedIndex.push(initialPossition + columnIndex);
                    columnIndex -= 1;
                }
                break;
            case 'up':
                rowMin = wordArray.length - 1;
                console.log('rowmin is ', rowMin);
                initialPossition = (Math.floor(Math.random() * (rowMax - rowMin + 1)) + rowMin) * 15 + Math.floor(Math.random() * (columnMax - columnMin) + columnMin);
                console.log('initial possition ', initialPossition);
                rowIndex = 0;
                for (let k = 0; k < wordArray.length; k++) {
                    letterArray[initialPossition + rowIndex] = wordArray[k];
                    console.log('position is ', initialPossition + rowIndex, wordArray[k]);
                    usedIndex.push(initialPossition + rowIndex);
                    rowIndex -= 15;
                }
                break;
            case 'down':
                rowMax = 15 - wordArray.length;
                initialPossition = (Math.floor(Math.random() * (rowMax - rowMin + 1)) + rowMin) * 15 + Math.floor(Math.random() * (columnMax - columnMin) + 1);
                console.log('init pos ', initialPossition);
                console.log('word array ', wordArray);
                for (let k = 0; k < wordArray.length; k++) {
                    letterArray[initialPossition + rowIndex] = wordArray[k];
                    console.log('position is ', initialPossition + rowIndex, wordArray[k]);
                    usedIndex.push(initialPossition + rowIndex);
                    rowIndex += 15;
                }
                break;
            case 'diagonal1':
                // diagonal forward and down
                columnMax = 15 - wordArray.length;
                rowMax = 15 - wordArray.length;
                initialPossition = (Math.floor(Math.random() * (rowMax - rowMin + 1)) + rowMin) * 15 + Math.floor(Math.random() * (columnMax - columnMin) + columnMin);
                for (let k = 0; k < wordArray.length; k++) {
                    letterArray[initialPossition + columnIndex + rowIndex] = wordArray[k];
                    console.log('position is ', initialPossition + columnIndex + rowIndex, wordArray[k]);
                    usedIndex.push(initialPossition + columnIndex);
                    rowIndex += 15;
                    columnIndex += 1;
                }
                break;
            case 'diagonal2':
                // diagonal forward and up
                columnMax = 15 - wordArray.length;
                rowMin = wordArray.length - 1;
                initialPossition = (Math.floor(Math.random() * (rowMax - rowMin + 1)) + rowMin) * 15 + Math.floor(Math.random() * (columnMax - columnMin) + columnMin);
                for (let k = 0; k < wordArray.length; k++) {
                    letterArray[initialPossition + columnIndex + rowIndex] = wordArray[k];
                    console.log('position is ', initialPossition + columnIndex + rowIndex, wordArray[k]);
                    usedIndex.push(initialPossition + columnIndex);
                    rowIndex -= 15;
                    columnIndex += 1;
                }
                break;
            case 'diagonal3':
                // diagonal backward and down
                columnMin = wordArray.length;
                rowMax = 15 - wordArray.length;
                initialPossition = (Math.floor(Math.random() * (rowMax - rowMin + 1)) + rowMin) * 15 + Math.floor(Math.random() * (columnMax - columnMin) + columnMin);
                for (let k = 0; k < wordArray.length; k++) {
                    letterArray[initialPossition + columnIndex + rowIndex] = wordArray[k];
                    console.log('position is ', initialPossition + columnIndex + rowIndex, wordArray[k]);
                    usedIndex.push(initialPossition + columnIndex);
                    rowIndex += 15;
                    columnIndex -= 1;
                }
                break;
            case 'diagonal4':
                // diagonal backward and up
                columnMin = wordArray.length;
                rowMin = wordArray.length - 1;
                initialPossition = (Math.floor(Math.random() * (rowMax - rowMin + 1)) + rowMin) * 15 + Math.floor(Math.random() * (columnMax - columnMin) + columnMin);
                for (let k = 0; k < wordArray.length; k++) {
                    letterArray[initialPossition + columnIndex + rowIndex] = wordArray[k];
                    console.log('position is ', initialPossition + columnIndex + rowIndex, wordArray[k]);
                    usedIndex.push(initialPossition + columnIndex);
                    rowIndex -= 15;
                    columnIndex -= 1;
                }
                break;
        }
    }

    return (
        <>
            <h1>Nancy's Portfolio</h1>
            <div id="wordfind-container">
                {letterArray.map((char, index) => (
                    <div key={index} className="char-cell">
                        {char}
                    </div>
                ))
                }
            </div>
        </>
    )
}