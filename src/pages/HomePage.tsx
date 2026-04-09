import { useState, useEffect } from "react";

export function HomePage() {
    const [searchValue, setSearchValue] = useState<string>("");
    const [searchArray, setSearchArray] = useState<string[]>([]);
    const [isFoundArray, setIsFoundArray] = useState<boolean[]>(() => Array(225).fill(false));
    const [wordfindArray, setWordfindArray] = useState<string[]>([]);

    useEffect(() => {
        for (let m = 0; m < searchValue.length; m++) {
            setSearchArray([...searchValue]);
        }
        let searchOrientationValue = 0;
        let tempArray = [...isFoundArray];
        for (let n = 0; n < wordfindArray.length; n++) {
            if (wordfindArray[n] === searchArray[0]) {
                // console.log('search ', searchArray[0], 'array ', wordfindArray[n], 'location ', n);            
                tempArray[n] = true;
                if (searchArray[1] === wordfindArray[n - 16]) {
                    // orientation is up and left
                    console.log('search ', searchArray[1], 'array ', wordfindArray[n - 16], 'location ', n - 16);
                    if (wordfindArray[n] != searchArray[0]) {
                        tempArray[n] = false;
                        tempArray[n - 16] = false;
                    }
                    searchOrientationValue = -16;
                    if (wordfindArray[n] != searchArray[0]) {
                        tempArray[n] = false;
                        tempArray[n + searchOrientationValue] = false;
                    } else {
                        tempArray[n + searchOrientationValue] = true;
                    }
                }
                if (searchArray[1] === wordfindArray[n - 15]) {
                    // orientation is up
                    // console.log('search ', searchArray[1], 'array ', wordfindArray[n - 15], 'location ', n - 15);  
                    searchOrientationValue = -15;
                    if (wordfindArray[n] != searchArray[0]) {
                        tempArray[n] = false;
                        tempArray[n + searchOrientationValue] = false;
                    } else {
                        tempArray[n + searchOrientationValue] = true;
                    }
                }
                if (searchArray[1] === wordfindArray[n - 14]) {
                    // orientation is up and right
                    // console.log('search ', searchArray[1], 'array ', wordfindArray[n - 14], 'location ', n - 14); 
                    searchOrientationValue = -14;
                    if (wordfindArray[n] != searchArray[0]) {
                        tempArray[n] = false;
                        tempArray[n + searchOrientationValue] = false;
                    } else {
                        tempArray[n + searchOrientationValue] = true;
                    }
                }
                if (searchArray[1] === wordfindArray[n - 1]) {
                    // orientation is left
                    // console.log('search ', searchArray[1], 'array ', wordfindArray[n - 1], 'location ', n - 1); 
                    searchOrientationValue = -1;
                    if (wordfindArray[n] != searchArray[0]) {
                        tempArray[n] = false;
                        tempArray[n + searchOrientationValue] = false;
                    } else {
                        tempArray[n + searchOrientationValue] = true;
                    } tempArray[n - 1] = true;
                }
                if (searchArray[1] === wordfindArray[n + 1]) {
                    // orientation is right
                    // console.log('search ', searchArray[1], 'array ', wordfindArray[n + 1], 'location ', n + 1); 
                    searchOrientationValue = 1;
                    if (wordfindArray[n] != searchArray[0]) {
                        tempArray[n] = false;
                        tempArray[n + searchOrientationValue] = false;
                    } else {
                        tempArray[n + searchOrientationValue] = true;
                    }
                }
                if (searchArray[1] === wordfindArray[n + 14]) {
                    // console.log('search ', searchArray[1], 'array ', wordfindArray[n + 14], 'location ', n + 14); 
                    // orientation is down and left
                    searchOrientationValue = 14;
                    if (wordfindArray[n] != searchArray[0]) {
                        tempArray[n] = false;
                        tempArray[n + searchOrientationValue] = false;
                    } else {
                        tempArray[n + searchOrientationValue] = true;
                    }
                }
                if (searchArray[1] === wordfindArray[n + 15]) {
                    // console.log('search ', searchArray[1], 'array ', wordfindArray[n + 15], 'location ', n + 15); 
                    // orientation is down
                    searchOrientationValue = 15;
                    if (wordfindArray[n] != searchArray[0]) {
                        tempArray[n] = false;
                        tempArray[n + searchOrientationValue] = false;
                    } else {
                        tempArray[n + searchOrientationValue] = true;
                    }
                }
                if (searchArray[1] === wordfindArray[n + 16]) {
                    // console.log('search ', searchArray[1], 'array ', wordfindArray[n + 16], 'location ', n + 16); 
                    // orientation is up and right
                    searchOrientationValue = 16;
                    if (wordfindArray[n] != searchArray[0]) {
                        tempArray[n] = false;
                        tempArray[n + searchOrientationValue] = false;
                    } else {
                        tempArray[n + searchOrientationValue] = true;
                    }
                }
            }
            for (let o = 2; o < searchArray.length; o++) {
                if (searchArray[o] === wordfindArray[n + searchOrientationValue * o]) {
                    // console.log('search ', searchArray[o], 'array ', wordfindArray[n + searchOrientationValue * o], 'location ', n + searchOrientationValue * o, 'orientation factor', searchOrientationValue);
                    if (wordfindArray[n + searchOrientationValue * (o - 1)] != searchArray[o - 1]) {
                        for (let p = 0; p <= o; p++) {
                            console.log('locagtion is', n + searchOrientationValue * p);
                            tempArray[n + searchOrientationValue * p] = false;
                        }
                        // console.log('search is ', searchArray[o - 1], 'test is ', wordfindArray[n + searchOrientationValue * (o - 1)]);
                        // console.log('search array is', searchArray);
                        // tempArray[n] = false;
                        // console.log('location is ', n);
                        // tempArray[n + searchOrientationValue] = false;
                        // console.log('locagtion is', n + searchOrientationValue);
                        // tempArray[n + searchOrientationValue * o];
                        // console.log('location is', n + searchOrientationValue * o);
                    } else {
                        tempArray[n + searchOrientationValue * o] = true;
                    }
                }
                // } else {
                //     for (let p = 0; p <= o; p++) {
                //         console.log('locagtion is', n + searchOrientationValue * p);
                //         tempArray[n + searchOrientationValue * p] = false;
                //     }
                // }
            }
        }
        setIsFoundArray(tempArray);

    }, [searchValue]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value.toUpperCase());
    };

    function findInitialPossition(rowMin: number, rowMax: number, columnMin: number, columnMax: number) {
        return (Math.floor(Math.random() * (rowMax - rowMin + 1)) + rowMin) * 15 + Math.floor(Math.random() * (columnMax - columnMin) + columnMin);
    }

    useEffect(() => {
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
        setWordfindArray([...letterArray])
    }, []);



    return (
        <>
            <h1 id="home-title">Nancy's Portfolio</h1>
            <div id="wordfind-area">
                <div id="wordfind-container">
                    {wordfindArray.map((char, index) => (
                        <div key={index} className="char-cell" style={{
                            // color: searchArray.includes(char) === true ? 'red' : 'black',
                            // fontWeight: searchArray.includes(char) ? 'bold' : 'normal'
                            color: isFoundArray[index] === true ? 'red' : 'gray',
                            fontWeight: isFoundArray[index] === true ? 'bold' : 'normal'
                        }}>
                            {char}
                        </div>
                    ))}
                </div>
                <div>
                    <input id="search-bar" type="text" name="search" value={searchValue} onChange={handleChange} placeholder="Search wordfind"></input>
                </div>
            </div>
        </>
    )
}