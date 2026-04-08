export function HomePage() {

    function findInitialPossition(rowMin: number, rowMax: number, columnMin: number, columnMax: number) {
        return (Math.floor(Math.random() * (rowMax - rowMin + 1)) + rowMin) * 15 + Math.floor(Math.random() * (columnMax - columnMin) + columnMin);
    }

    const orientations: string[] = ['forward', 'backward', 'up', 'down', 'diagonal1', 'diagonal2', 'diagonal3', 'diagonal4'];
    let randomLetter: string = '';
    let letterArray: string[] = [];
    let usedIndex: number[] = [];
    let usedIndexForWord: number[] = [];
    for (let i = 0; i < 225; i++) {
        randomLetter = String.fromCharCode(Math.floor(Math.random() * (91 - 65)) + 65);
        letterArray.push(randomLetter);
    }
    const mysteryWords = ['JAVASCRIPT', 'TYPESCRIPT', 'EXPRESS', 'MONGODB', 'REACT', 'HTML', 'NODE', 'CSS'];
    for (let j = 0; j < mysteryWords.length; j++) {
        let wordArray = [...mysteryWords[j]];
        let initialPossition = 0;
        let rowMin = 0;
        let rowMax = 14;
        let columnMin = 1;
        let columnMax = 15;
        let columnIndex = 0;
        let rowIndex = 0;
        let wordAddedSuccessfully: boolean = false;
        let randomOrientation = Math.floor(Math.random() * 8);
        let orientation = orientations[randomOrientation];
        // let orientation = orientations[7];
        console.log('orientation is ', orientation);
        switch (orientation) {
            case 'forward':
                wordAddedSuccessfully = false;
                while (!wordAddedSuccessfully) {
                    rowMin = 0;
                    rowMax = 14;
                    columnMin = 1;
                    columnMax = 15 - wordArray.length;
                    columnIndex = 0;
                    rowIndex = 0;
                    initialPossition = findInitialPossition(rowMin, rowMax, columnMin, columnMax);
                    let noPossitionConflict = true;
                    usedIndexForWord = [];
                    for (let k = 0; k < wordArray.length; k++) {
                        if (wordArray[k] == letterArray[initialPossition + columnIndex + rowIndex]) {
                            console.log('match ', wordArray[k]);
                        }
                        if ((usedIndex.includes(initialPossition + columnIndex + rowIndex)) && wordArray[k] != letterArray[initialPossition + columnIndex + rowIndex]) {
                            console.log('conflict at ', initialPossition + columnIndex + rowIndex)
                            noPossitionConflict = false;
                            break;
                        }
                        letterArray[initialPossition + columnIndex] = wordArray[k];
                        console.log('position is ', initialPossition + columnIndex, wordArray[k]);
                        // usedIndex.push(initialPossition + columnIndex);
                        usedIndexForWord.push(initialPossition + columnIndex + rowIndex);
                        columnIndex += 1;
                    }
                    if (noPossitionConflict) {
                        for (let l = 0; l < usedIndexForWord.length; l++) {
                            usedIndex.push(usedIndexForWord[l]);
                        }
                        wordAddedSuccessfully = true;
                    }
                }
                break;
            case 'backward':
                wordAddedSuccessfully = false;
                while (!wordAddedSuccessfully) {
                    rowMin = 0;
                    rowMax = 14;
                    columnMin = wordArray.length;
                    columnMax = 15;
                    columnIndex = 0;
                    rowIndex = 0;
                    initialPossition = findInitialPossition(rowMin, rowMax, columnMin, columnMax);
                    let noPossitionConflict = true;
                    usedIndexForWord = [];
                    for (let k = 0; k < wordArray.length; k++) {
                        if (wordArray[k] == letterArray[initialPossition + columnIndex + rowIndex]) {
                            console.log('match ', wordArray[k]);
                        }
                        if ((usedIndex.includes(initialPossition + columnIndex + rowIndex)) && wordArray[k] != letterArray[initialPossition + columnIndex + rowIndex]) {
                            console.log('conflict at ', initialPossition + columnIndex + rowIndex)
                            noPossitionConflict = false;
                            break;
                        }
                        letterArray[initialPossition + columnIndex] = wordArray[k];
                        console.log('position is ', initialPossition + columnIndex, wordArray[k]);
                        // usedIndex.push(initialPossition + columnIndex);
                        usedIndexForWord.push(initialPossition + columnIndex + rowIndex);
                        columnIndex -= 1;
                    }
                    if (noPossitionConflict) {
                        for (let l = 0; l < usedIndexForWord.length; l++) {
                            usedIndex.push(usedIndexForWord[l]);
                        }
                        wordAddedSuccessfully = true;
                    }
                }
                // columnMin = wordArray.length;
                // initialPossition = findInitialPossition(rowMin, rowMax, columnMin, columnMax);
                // for (let k = 0; k < wordArray.length; k++) {
                //     letterArray[initialPossition + columnIndex] = wordArray[k];
                //     console.log('position is ', initialPossition + columnIndex, wordArray[k]);
                //     usedIndex.push(initialPossition + columnIndex);
                //     columnIndex -= 1;
                // }
                break;
            case 'up':
                wordAddedSuccessfully = false;
                while (!wordAddedSuccessfully) {
                    rowMin = wordArray.length - 1;
                    rowMax = 14;
                    columnMin = 1;
                    columnMax = 15;
                    columnIndex = 0;
                    rowIndex = 0;
                    initialPossition = findInitialPossition(rowMin, rowMax, columnMin, columnMax);
                    let noPossitionConflict = true;
                    usedIndexForWord = [];
                    for (let k = 0; k < wordArray.length; k++) {
                        if (wordArray[k] == letterArray[initialPossition + columnIndex + rowIndex]) {
                            console.log('match ', wordArray[k]);
                        }
                        if ((usedIndex.includes(initialPossition + columnIndex + rowIndex)) && wordArray[k] != letterArray[initialPossition + columnIndex + rowIndex]) {
                            console.log('conflict at ', initialPossition + columnIndex + rowIndex)
                            noPossitionConflict = false;
                            break;
                        }
                        letterArray[initialPossition + rowIndex] = wordArray[k];
                        console.log('position is ', initialPossition + rowIndex, wordArray[k]);
                        // usedIndex.push(initialPossition + columnIndex);
                        usedIndexForWord.push(initialPossition + columnIndex + rowIndex);
                        rowIndex -= 15;
                    }
                    if (noPossitionConflict) {
                        for (let l = 0; l < usedIndexForWord.length; l++) {
                            usedIndex.push(usedIndexForWord[l]);
                        }
                        wordAddedSuccessfully = true;
                    }
                }
                // rowMin = wordArray.length - 1;
                // console.log('rowmin is ', rowMin);
                // initialPossition = findInitialPossition(rowMin, rowMax, columnMin, columnMax);
                // console.log('initial possition ', initialPossition);
                // rowIndex = 0;
                // for (let k = 0; k < wordArray.length; k++) {
                //     letterArray[initialPossition + rowIndex] = wordArray[k];
                //     console.log('position is ', initialPossition + rowIndex, wordArray[k]);
                //     usedIndex.push(initialPossition + rowIndex);
                //     rowIndex -= 15;
                // }
                break;
            case 'down':
                wordAddedSuccessfully = false;
                while (!wordAddedSuccessfully) {
                    rowMin = 0;
                    rowMax = 15 - wordArray.length;
                    columnMin = 1;
                    columnMax = 15;
                    columnIndex = 0;
                    rowIndex = 0;
                    initialPossition = findInitialPossition(rowMin, rowMax, columnMin, columnMax);
                    let noPossitionConflict = true;
                    usedIndexForWord = [];
                    for (let k = 0; k < wordArray.length; k++) {
                        if (wordArray[k] == letterArray[initialPossition + columnIndex + rowIndex]) {
                            console.log('match ', wordArray[k]);
                        }
                        if ((usedIndex.includes(initialPossition + columnIndex + rowIndex)) && wordArray[k] != letterArray[initialPossition + columnIndex + rowIndex]) {
                            console.log('conflict at ', initialPossition + columnIndex + rowIndex)
                            noPossitionConflict = false;
                            break;
                        }
                        letterArray[initialPossition + rowIndex] = wordArray[k];
                        console.log('position is ', initialPossition + rowIndex, wordArray[k]);
                        // usedIndex.push(initialPossition + columnIndex);
                        usedIndexForWord.push(initialPossition + columnIndex + rowIndex);
                        rowIndex += 15;
                    }
                    if (noPossitionConflict) {
                        for (let l = 0; l < usedIndexForWord.length; l++) {
                            usedIndex.push(usedIndexForWord[l]);
                        }
                        wordAddedSuccessfully = true;
                    }
                }
                // rowMax = 15 - wordArray.length;
                // initialPossition = findInitialPossition(rowMin, rowMax, columnMin, columnMax);
                // console.log('init pos ', initialPossition);
                // console.log('word array ', wordArray);
                // for (let k = 0; k < wordArray.length; k++) {
                //     letterArray[initialPossition + rowIndex] = wordArray[k];
                //     console.log('position is ', initialPossition + rowIndex, wordArray[k]);
                //     usedIndex.push(initialPossition + rowIndex);
                //     rowIndex += 15;
                // }
                break;
            case 'diagonal1':
                wordAddedSuccessfully = false;
                while (!wordAddedSuccessfully) {
                    rowMin = 0;
                    rowMax = 15 - wordArray.length;
                    columnMin = 1;
                    columnMax = 15 - wordArray.length;
                    columnIndex = 0;
                    rowIndex = 0;
                    initialPossition = findInitialPossition(rowMin, rowMax, columnMin, columnMax);
                    let noPossitionConflict = true;
                    usedIndexForWord = [];
                    for (let k = 0; k < wordArray.length; k++) {
                        if (wordArray[k] == letterArray[initialPossition + columnIndex + rowIndex]) {
                            console.log('match ', wordArray[k]);
                        }
                        if ((usedIndex.includes(initialPossition + columnIndex + rowIndex)) && wordArray[k] != letterArray[initialPossition + columnIndex + rowIndex]) {
                            console.log('conflict at ', initialPossition + columnIndex + rowIndex)
                            noPossitionConflict = false;
                            break;
                        }
                        letterArray[initialPossition + columnIndex + rowIndex] = wordArray[k];
                        console.log('position is ', initialPossition + columnIndex + rowIndex, wordArray[k]);
                        // usedIndex.push(initialPossition + columnIndex);
                        usedIndexForWord.push(initialPossition + columnIndex + rowIndex);
                        rowIndex += 15;
                        columnIndex += 1;
                    }
                    if (noPossitionConflict) {
                        for (let l = 0; l < usedIndexForWord.length; l++) {
                            usedIndex.push(usedIndexForWord[l]);
                        }
                        wordAddedSuccessfully = true;
                    }
                }
                // diagonal forward and down
                // columnMax = 15 - wordArray.length;
                // rowMax = 15 - wordArray.length;
                // initialPossition = findInitialPossition(rowMin, rowMax, columnMin, columnMax);
                // for (let k = 0; k < wordArray.length; k++) {
                //     letterArray[initialPossition + columnIndex + rowIndex] = wordArray[k];
                //     console.log('position is ', initialPossition + columnIndex + rowIndex, wordArray[k]);
                //     usedIndex.push(initialPossition + columnIndex);
                //     rowIndex += 15;
                //     columnIndex += 1;
                // }
                break;
            case 'diagonal2':
                wordAddedSuccessfully = false;
                while (!wordAddedSuccessfully) {
                    rowMin = wordArray.length - 1;
                    rowMax = 14;
                    columnMin = 1;
                    columnMax = 15 - wordArray.length;
                    columnIndex = 0;
                    rowIndex = 0;
                    initialPossition = findInitialPossition(rowMin, rowMax, columnMin, columnMax);
                    let noPossitionConflict = true;
                    usedIndexForWord = [];
                    for (let k = 0; k < wordArray.length; k++) {
                        if (wordArray[k] == letterArray[initialPossition + columnIndex + rowIndex]) {
                            console.log('match ', wordArray[k]);
                        }
                        if ((usedIndex.includes(initialPossition + columnIndex + rowIndex)) && wordArray[k] != letterArray[initialPossition + columnIndex + rowIndex]) {
                            console.log('conflict at ', initialPossition + columnIndex + rowIndex)
                            noPossitionConflict = false;
                            break;
                        }
                        letterArray[initialPossition + columnIndex + rowIndex] = wordArray[k];
                        console.log('position is ', initialPossition + columnIndex + rowIndex, wordArray[k]);
                        // usedIndex.push(initialPossition + columnIndex);
                        usedIndexForWord.push(initialPossition + columnIndex + rowIndex);
                        rowIndex -= 15;
                        columnIndex += 1;
                    }
                    if (noPossitionConflict) {
                        for (let l = 0; l < usedIndexForWord.length; l++) {
                            usedIndex.push(usedIndexForWord[l]);
                        }
                        wordAddedSuccessfully = true;
                    }
                }
                // diagonal forward and up
                // columnMax = 15 - wordArray.length;
                // rowMin = wordArray.length - 1;
                // initialPossition = findInitialPossition(rowMin, rowMax, columnMin, columnMax);
                // for (let k = 0; k < wordArray.length; k++) {
                //     letterArray[initialPossition + columnIndex + rowIndex] = wordArray[k];
                //     console.log('position is ', initialPossition + columnIndex + rowIndex, wordArray[k]);
                //     usedIndex.push(initialPossition + columnIndex);
                //     rowIndex -= 15;
                //     columnIndex += 1;
                // }
                break;
            case 'diagonal3':
                // diagonal backward and down
                wordAddedSuccessfully = false;
                while (!wordAddedSuccessfully) {
                    rowMin = 0;
                    rowMax = 15 - wordArray.length;
                    columnMin = wordArray.length;
                    columnMax = 15;
                    columnIndex = 0;
                    rowIndex = 0;
                    initialPossition = findInitialPossition(rowMin, rowMax, columnMin, columnMax);
                    let noPossitionConflict = true;
                    usedIndexForWord = [];
                    for (let k = 0; k < wordArray.length; k++) {
                        if (wordArray[k] == letterArray[initialPossition + columnIndex + rowIndex]) {
                            console.log('match ', wordArray[k]);
                        }
                        if ((usedIndex.includes(initialPossition + columnIndex + rowIndex)) && wordArray[k] != letterArray[initialPossition + columnIndex + rowIndex]) {
                            console.log('conflict at ', initialPossition + columnIndex + rowIndex)
                            noPossitionConflict = false;
                            break;
                        }
                        letterArray[initialPossition + columnIndex + rowIndex] = wordArray[k];
                        console.log('position is ', initialPossition + columnIndex + rowIndex, wordArray[k]);
                        // usedIndex.push(initialPossition + columnIndex);
                        usedIndexForWord.push(initialPossition + columnIndex + rowIndex);
                        rowIndex += 15;
                        columnIndex -= 1;
                    }
                    if (noPossitionConflict) {
                        for (let l = 0; l < usedIndexForWord.length; l++) {
                            usedIndex.push(usedIndexForWord[l]);
                        }
                        wordAddedSuccessfully = true;
                    }
                }

                // columnMin = wordArray.length;
                // rowMax = 15 - wordArray.length;
                // initialPossition = findInitialPossition(rowMin, rowMax, columnMin, columnMax);
                // for (let k = 0; k < wordArray.length; k++) {
                //     letterArray[initialPossition + columnIndex + rowIndex] = wordArray[k];
                //     console.log('position is ', initialPossition + columnIndex + rowIndex, wordArray[k]);
                //     usedIndex.push(initialPossition + columnIndex);
                //     rowIndex += 15;
                //     columnIndex -= 1;
                // }
                break;
            case 'diagonal4':
                // diagonal backward and up
                wordAddedSuccessfully = false;
                while (!wordAddedSuccessfully) {
                    rowMin = wordArray.length - 1;
                    rowMax = 14;
                    columnMin = wordArray.length;
                    columnMax = 15;
                    columnIndex = 0;
                    rowIndex = 0;
                    initialPossition = findInitialPossition(rowMin, rowMax, columnMin, columnMax);
                    let noPossitionConflict = true;
                    usedIndexForWord = [];
                    for (let k = 0; k < wordArray.length; k++) {
                        if (wordArray[k] == letterArray[initialPossition + columnIndex + rowIndex]) {
                            console.log('match ', wordArray[k]);
                        }
                        if ((usedIndex.includes(initialPossition + columnIndex + rowIndex)) && wordArray[k] != letterArray[initialPossition + columnIndex + rowIndex]) {
                            console.log('conflict at ', initialPossition + columnIndex + rowIndex)
                            noPossitionConflict = false;
                            break;
                        }
                        letterArray[initialPossition + columnIndex + rowIndex] = wordArray[k];
                        console.log('position is ', initialPossition + columnIndex + rowIndex, wordArray[k]);
                        // usedIndex.push(initialPossition + columnIndex);
                        usedIndexForWord.push(initialPossition + columnIndex + rowIndex);
                        rowIndex -= 15;
                        columnIndex -= 1;
                    }
                    if (noPossitionConflict) {
                        for (let l = 0; l < usedIndexForWord.length; l++) {
                            usedIndex.push(usedIndexForWord[l]);
                        }
                        wordAddedSuccessfully = true;
                    }
                }

                // columnMin = wordArray.length;
                // rowMin = wordArray.length - 1;
                // initialPossition = findInitialPossition(rowMin, rowMax, columnMin, columnMax);
                // for (let k = 0; k < wordArray.length; k++) {
                //     letterArray[initialPossition + columnIndex + rowIndex] = wordArray[k];
                //     console.log('position is ', initialPossition + columnIndex + rowIndex, wordArray[k]);
                //     usedIndex.push(initialPossition + columnIndex);
                //     rowIndex -= 15;
                //     columnIndex -= 1;
                // }
                break;
        }
    }
    console.log('positions taken ', usedIndex);

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