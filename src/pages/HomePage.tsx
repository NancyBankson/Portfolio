import { useState, useEffect } from "react";

export function HomePage() {
    const [searchValue, setSearchValue] = useState<string>("");
    const [isFoundArray, setIsFoundArray] = useState<boolean[]>(() => Array(225).fill(false));
    const [wordfindArray, setWordfindArray] = useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value.toUpperCase());
    };

    useEffect(() => {
        let searchOrientationValue = 0;
        let tempArray = [...isFoundArray].fill(false);
        let successArray: number[] = [];
        // let matchArray: number[] = [];
        for (let n = 0; n < wordfindArray.length; n++) {

            let matchArray: number[] = [];

            if (wordfindArray[n] === searchValue[0]) {
                tempArray[n] = true;
                if (searchValue[1] === wordfindArray[n - 16]) {
                    // orientation is up and left
                    searchOrientationValue = -16;
                    tempArray[n + searchOrientationValue] = true;
                }
                if (searchValue[1] === wordfindArray[n - 15]) {
                    // orientation is up
                    searchOrientationValue = -15;
                    tempArray[n + searchOrientationValue] = true;
                }
                if (searchValue[1] === wordfindArray[n - 14]) {
                    // orientation is up and right
                    searchOrientationValue = -14;
                    tempArray[n + searchOrientationValue] = true;
                }
                if (searchValue[1] === wordfindArray[n - 1]) {
                    // orientation is left
                    searchOrientationValue = -1;
                    tempArray[n + searchOrientationValue] = true;
                }
                if (searchValue[1] === wordfindArray[n + 1]) {
                    // orientation is right 
                    searchOrientationValue = 1;
                    tempArray[n + searchOrientationValue] = true;
                }
                if (searchValue[1] === wordfindArray[n + 14]) {
                    // orientation is down and left
                    searchOrientationValue = 14;
                    tempArray[n + searchOrientationValue] = true;
                }
                if (searchValue[1] === wordfindArray[n + 15]) {
                    // orientation is down
                    searchOrientationValue = 15;
                    tempArray[n + searchOrientationValue] = true;
                }
                if (searchValue[1] === wordfindArray[n + 16]) {
                    // orientation is down and right
                    searchOrientationValue = 16;
                    tempArray[n + searchOrientationValue] = true;
                }

                // if (matchArray.length != searchValue.length) {
                //     tempArray = Array(225).fill(false);
                // }

                // let matchArray: number[] = [];

                // matchArray = [];
                // tempArray = Array(225).fill(false);

                // may need to add if length > 3
                // if (searchValue.length >= 3 ) {
                //     tempArray = Array(225).fill(false);
                // }             
                switch (searchValue.length) {
                    case 3:
                        matchArray = [];
                        if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2])) {
                            for (let r = 0; r < searchValue.length; r++) {
                                matchArray.push(n + searchOrientationValue * r);
                            }
                        }
                        break;
                    case 4:
                        matchArray = [];
                        if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2]) && (searchValue[3] === wordfindArray[n + searchOrientationValue * 3])) {
                            for (let r = 0; r < searchValue.length; r++) {
                                matchArray.push(n + searchOrientationValue * r);
                            }
                        }
                        break;
                    case 5:
                        matchArray = [];
                        if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2]) && (searchValue[3] === wordfindArray[n + searchOrientationValue * 3]) && (searchValue[4] === wordfindArray[n + searchOrientationValue * 4])) {
                            for (let r = 0; r < searchValue.length; r++) {
                                matchArray.push(n + searchOrientationValue * r);
                            }
                        }
                        break;
                    case 6:
                        matchArray = [];
                        if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2]) && (searchValue[3] === wordfindArray[n + searchOrientationValue * 3]) && (searchValue[4] === wordfindArray[n + searchOrientationValue * 4]) && (searchValue[5] === wordfindArray[n + searchOrientationValue * 5])) {
                            for (let r = 0; r < searchValue.length; r++) {
                                matchArray.push(n + searchOrientationValue * r);
                            }
                        }
                        break;
                    case 7:
                        matchArray = [];
                        if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2]) && (searchValue[3] === wordfindArray[n + searchOrientationValue * 3]) && (searchValue[4] === wordfindArray[n + searchOrientationValue * 4]) && (searchValue[5] === wordfindArray[n + searchOrientationValue * 5]) && (searchValue[6] === wordfindArray[n + searchOrientationValue * 6])) {
                            for (let r = 0; r < searchValue.length; r++) {
                                matchArray.push(n + searchOrientationValue * r);
                            }
                        }
                        break;
                    case 8:
                        matchArray = [];
                        if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2]) && (searchValue[3] === wordfindArray[n + searchOrientationValue * 3]) && (searchValue[4] === wordfindArray[n + searchOrientationValue * 4]) && (searchValue[5] === wordfindArray[n + searchOrientationValue * 5]) && (searchValue[6] === wordfindArray[n + searchOrientationValue * 6]) && (searchValue[7] === wordfindArray[n + searchOrientationValue * 7])) {
                            for (let r = 0; r < searchValue.length; r++) {
                                matchArray.push(n + searchOrientationValue * r);
                            }
                        }
                        break;
                    case 9:
                        matchArray = [];
                        if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2]) && (searchValue[3] === wordfindArray[n + searchOrientationValue * 3]) && (searchValue[4] === wordfindArray[n + searchOrientationValue * 4]) && (searchValue[5] === wordfindArray[n + searchOrientationValue * 5]) && (searchValue[6] === wordfindArray[n + searchOrientationValue * 6]) && (searchValue[7] === wordfindArray[n + searchOrientationValue * 7]) && (searchValue[8] === wordfindArray[n + searchOrientationValue * 8])) {
                            for (let r = 0; r < searchValue.length; r++) {
                                matchArray.push(n + searchOrientationValue * r);
                            }
                        }
                        break;
                    case 10: matchArray = [];
                        if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2]) && (searchValue[3] === wordfindArray[n + searchOrientationValue * 3]) && (searchValue[4] === wordfindArray[n + searchOrientationValue * 4]) && (searchValue[5] === wordfindArray[n + searchOrientationValue * 5]) && (searchValue[6] === wordfindArray[n + searchOrientationValue * 6]) && (searchValue[7] === wordfindArray[n + searchOrientationValue * 7]) && (searchValue[8] === wordfindArray[n + searchOrientationValue * 8]) && (searchValue[9] === wordfindArray[n + searchOrientationValue * 9])) {
                            for (let r = 0; r < searchValue.length; r++) {
                                matchArray.push(n + searchOrientationValue * r);
                            }
                        }
                        break;
                    case 11:
                        matchArray = [];
                        if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2]) && (searchValue[3] === wordfindArray[n + searchOrientationValue * 3]) && (searchValue[4] === wordfindArray[n + searchOrientationValue * 4]) && (searchValue[5] === wordfindArray[n + searchOrientationValue * 5]) && (searchValue[6] === wordfindArray[n + searchOrientationValue * 6]) && (searchValue[7] === wordfindArray[n + searchOrientationValue * 7]) && (searchValue[8] === wordfindArray[n + searchOrientationValue * 8]) && (searchValue[9] === wordfindArray[n + searchOrientationValue * 9]) && (searchValue[10] === wordfindArray[n + searchOrientationValue * 10])) {
                            for (let r = 0; r < searchValue.length; r++) {
                                matchArray.push(n + searchOrientationValue * r);
                            }
                        }
                        break;
                    case 12:
                        matchArray = [];
                        if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2]) && (searchValue[3] === wordfindArray[n + searchOrientationValue * 3]) && (searchValue[4] === wordfindArray[n + searchOrientationValue * 4]) && (searchValue[5] === wordfindArray[n + searchOrientationValue * 5]) && (searchValue[6] === wordfindArray[n + searchOrientationValue * 6]) && (searchValue[7] === wordfindArray[n + searchOrientationValue * 7]) && (searchValue[8] === wordfindArray[n + searchOrientationValue * 8]) && (searchValue[9] === wordfindArray[n + searchOrientationValue * 9]) && (searchValue[10] === wordfindArray[n + searchOrientationValue * 10]) && (searchValue[11] === wordfindArray[n + searchOrientationValue * 11])) {
                            for (let r = 0; r < searchValue.length; r++) {
                                matchArray.push(n + searchOrientationValue * r);
                            }
                        }
                        break;
                    case 13:
                        matchArray = [];
                        if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2]) && (searchValue[3] === wordfindArray[n + searchOrientationValue * 3]) && (searchValue[4] === wordfindArray[n + searchOrientationValue * 4]) && (searchValue[5] === wordfindArray[n + searchOrientationValue * 5]) && (searchValue[6] === wordfindArray[n + searchOrientationValue * 6]) && (searchValue[7] === wordfindArray[n + searchOrientationValue * 7]) && (searchValue[8] === wordfindArray[n + searchOrientationValue * 8]) && (searchValue[9] === wordfindArray[n + searchOrientationValue * 9]) && (searchValue[10] === wordfindArray[n + searchOrientationValue * 10]) && (searchValue[11] === wordfindArray[n + searchOrientationValue * 11]) && (searchValue[12] === wordfindArray[n + searchOrientationValue * 12])) {
                            for (let r = 0; r < searchValue.length; r++) {
                                matchArray.push(n + searchOrientationValue * r);
                            }
                        }
                        break;
                    case 14:
                        matchArray = [];
                        if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2]) && (searchValue[3] === wordfindArray[n + searchOrientationValue * 3]) && (searchValue[4] === wordfindArray[n + searchOrientationValue * 4]) && (searchValue[5] === wordfindArray[n + searchOrientationValue * 5]) && (searchValue[6] === wordfindArray[n + searchOrientationValue * 6]) && (searchValue[7] === wordfindArray[n + searchOrientationValue * 7]) && (searchValue[8] === wordfindArray[n + searchOrientationValue * 8]) && (searchValue[9] === wordfindArray[n + searchOrientationValue * 9]) && (searchValue[10] === wordfindArray[n + searchOrientationValue * 10]) && (searchValue[11] === wordfindArray[n + searchOrientationValue * 11]) && (searchValue[12] === wordfindArray[n + searchOrientationValue * 12]) && (searchValue[13] === wordfindArray[n + searchOrientationValue * 13])) {
                            for (let r = 0; r < searchValue.length; r++) {
                                matchArray.push(n + searchOrientationValue * r);
                            }
                        }
                        break;
                    case 15:
                        matchArray = [];
                        if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2]) && (searchValue[3] === wordfindArray[n + searchOrientationValue * 3]) && (searchValue[4] === wordfindArray[n + searchOrientationValue * 4]) && (searchValue[5] === wordfindArray[n + searchOrientationValue * 5]) && (searchValue[6] === wordfindArray[n + searchOrientationValue * 6]) && (searchValue[7] === wordfindArray[n + searchOrientationValue * 7]) && (searchValue[8] === wordfindArray[n + searchOrientationValue * 8]) && (searchValue[9] === wordfindArray[n + searchOrientationValue * 9]) && (searchValue[10] === wordfindArray[n + searchOrientationValue * 10]) && (searchValue[11] === wordfindArray[n + searchOrientationValue * 11]) && (searchValue[12] === wordfindArray[n + searchOrientationValue * 12]) && (searchValue[13] === wordfindArray[n + searchOrientationValue * 13]) && (searchValue[14] === wordfindArray[n + searchOrientationValue * 14])) {
                            for (let r = 0; r < searchValue.length; r++) {
                                matchArray.push(n + searchOrientationValue * r);
                            }
                        }
                        break;
                }
                // console.log(matchArray);
                // for (let s = 0; s < 225; s++) {
                //     if (matchArray.includes(s)) {
                //         tempArray[s] = true;
                //     }
                //     else {
                //         if (matchArray.length === searchValue.length) {
                //              tempArray[s] = false;
                //         }                       
                //     }
                // }
            }
            if (matchArray.length > 0) {
                successArray = [...successArray,...matchArray];
                console.log(matchArray);
                console.log('here');
            }

            for (let s = 0; s < 225; s++) {
                if (successArray.includes(s)) {
                    tempArray[s] = true;
                    console.log('location is ', s);
                }
                else {
                    if (successArray.length === searchValue.length) {
                        tempArray[s] = false;
                    }
                }
            }
        }
        for (let t = 0; t < tempArray.length; t++) {
            if (tempArray[t] === true) {
                console.log('location for temparray is ', t);
            }
        }
        setIsFoundArray([...tempArray]);
    }, [searchValue]);



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
            // console.log('orientation is ', orientation);
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
                                // console.log('match ', wordArray[k]);
                            }
                            if ((usedIndex.includes(initialPossition + columnIndex + rowIndex)) && wordArray[k] != letterArray[initialPossition + columnIndex + rowIndex]) {
                                // console.log('conflict at ', initialPossition + columnIndex + rowIndex)
                                noPossitionConflict = false;
                                break;
                            }
                            letterArray[initialPossition + columnIndex] = wordArray[k];
                            // console.log('position is ', initialPossition + columnIndex, wordArray[k]);
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
                                // console.log('match ', wordArray[k]);
                            }
                            if ((usedIndex.includes(initialPossition + columnIndex + rowIndex)) && wordArray[k] != letterArray[initialPossition + columnIndex + rowIndex]) {
                                // console.log('conflict at ', initialPossition + columnIndex + rowIndex)
                                noPossitionConflict = false;
                                break;
                            }
                            letterArray[initialPossition + columnIndex] = wordArray[k];
                            // console.log('position is ', initialPossition + columnIndex, wordArray[k]);
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
                                // console.log('match ', wordArray[k]);
                            }
                            if ((usedIndex.includes(initialPossition + columnIndex + rowIndex)) && wordArray[k] != letterArray[initialPossition + columnIndex + rowIndex]) {
                                // console.log('conflict at ', initialPossition + columnIndex + rowIndex)
                                noPossitionConflict = false;
                                break;
                            }
                            letterArray[initialPossition + rowIndex] = wordArray[k];
                            // console.log('position is ', initialPossition + rowIndex, wordArray[k]);
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
                                // console.log('match ', wordArray[k]);
                            }
                            if ((usedIndex.includes(initialPossition + columnIndex + rowIndex)) && wordArray[k] != letterArray[initialPossition + columnIndex + rowIndex]) {
                                // console.log('conflict at ', initialPossition + columnIndex + rowIndex)
                                noPossitionConflict = false;
                                break;
                            }
                            letterArray[initialPossition + rowIndex] = wordArray[k];
                            // console.log('position is ', initialPossition + rowIndex, wordArray[k]);
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
                                // console.log('match ', wordArray[k]);
                            }
                            if ((usedIndex.includes(initialPossition + columnIndex + rowIndex)) && wordArray[k] != letterArray[initialPossition + columnIndex + rowIndex]) {
                                // console.log('conflict at ', initialPossition + columnIndex + rowIndex)
                                noPossitionConflict = false;
                                break;
                            }
                            letterArray[initialPossition + columnIndex + rowIndex] = wordArray[k];
                            // console.log('position is ', initialPossition + columnIndex + rowIndex, wordArray[k]);
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
                                // console.log('match ', wordArray[k]);
                            }
                            if ((usedIndex.includes(initialPossition + columnIndex + rowIndex)) && wordArray[k] != letterArray[initialPossition + columnIndex + rowIndex]) {
                                // console.log('conflict at ', initialPossition + columnIndex + rowIndex)
                                noPossitionConflict = false;
                                break;
                            }
                            letterArray[initialPossition + columnIndex + rowIndex] = wordArray[k];
                            // console.log('position is ', initialPossition + columnIndex + rowIndex, wordArray[k]);
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
                                // console.log('match ', wordArray[k]);
                            }
                            if ((usedIndex.includes(initialPossition + columnIndex + rowIndex)) && wordArray[k] != letterArray[initialPossition + columnIndex + rowIndex]) {
                                // console.log('conflict at ', initialPossition + columnIndex + rowIndex)
                                noPossitionConflict = false;
                                break;
                            }
                            letterArray[initialPossition + columnIndex + rowIndex] = wordArray[k];
                            // console.log('position is ', initialPossition + columnIndex + rowIndex, wordArray[k]);
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
                                // console.log('match ', wordArray[k]);
                            }
                            if ((usedIndex.includes(initialPossition + columnIndex + rowIndex)) && wordArray[k] != letterArray[initialPossition + columnIndex + rowIndex]) {
                                // console.log('conflict at ', initialPossition + columnIndex + rowIndex)
                                noPossitionConflict = false;
                                break;
                            }
                            letterArray[initialPossition + columnIndex + rowIndex] = wordArray[k];
                            // console.log('position is ', initialPossition + columnIndex + rowIndex, wordArray[k]);
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
        // console.log('positions taken ', usedIndex);
        setWordfindArray([...letterArray])
    }, []);

    function findInitialPossition(rowMin: number, rowMax: number, columnMin: number, columnMax: number) {
        return (Math.floor(Math.random() * (rowMax - rowMin + 1)) + rowMin) * 15 + Math.floor(Math.random() * (columnMax - columnMin) + columnMin);
    }

    return (
        <>
            <h1 id="home-title">Nancy's Portfolio</h1>
            <div id="wordfind-area">
                <div id="wordfind-container">
                    {wordfindArray.map((char, index) => (
                        <div key={index} className="char-cell" style={{
                            // color: searchValue.includes(char) === true ? 'red' : 'black',
                            // fontWeight: searchValue.includes(char) ? 'bold' : 'normal'
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