import { useState, useEffect } from "react";
import type { OrientationType } from "../types/types";

export function HomePage() {
    const [searchValue, setSearchValue] = useState<string>("");
    const [isFoundArray, setIsFoundArray] = useState<boolean[]>(() => Array(225).fill(false));
    const [wordfindArray, setWordfindArray] = useState<string[]>([]);
    const [foundWords, setFoundWords] = useState<string[]>([]);
    const mysteryWords = ['JAVASCRIPT', 'TYPESCRIPT', 'EXPRESS', 'MONGODB', 'REACT', 'ZELDA', 'NANCY', 'HTML', 'NODE', 'CSS'];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value.toUpperCase());
    };

    useEffect(() => {
        for (let b = 0; b < mysteryWords.length; b++) {
            if (searchValue === mysteryWords[b]) {
                setFoundWords([...foundWords, searchValue]);
            }
        }
        let searchOrientationValue = 0;
        let tempArray = [...isFoundArray].fill(false);
        let successArray: number[] = [];
        for (let n = 0; n < wordfindArray.length; n++) {
            let matchArray: number[] = [];
            let searchOrientation: OrientationType[] = [
                {
                    orientation: 'upandleft',
                    isMatch: false,
                    searchOrientationValue: -16
                },
                {
                    orientation: 'up',
                    isMatch: false,
                    searchOrientationValue: -15
                },
                {
                    orientation: 'upandright',
                    isMatch: false,
                    searchOrientationValue: -14
                },
                {
                    orientation: 'left',
                    isMatch: false,
                    searchOrientationValue: -1
                },
                {
                    orientation: 'right',
                    isMatch: false,
                    searchOrientationValue: 1
                },
                {
                    orientation: 'downandleft',
                    isMatch: false,
                    searchOrientationValue: 14
                },
                {
                    orientation: 'down',
                    isMatch: false,
                    searchOrientationValue: 15
                },
                {
                    orientation: 'downandright',
                    isMatch: false,
                    searchOrientationValue: 16
                },
            ];
            if (wordfindArray[n] === searchValue[0]) {
                matchArray.push(n);
                if (searchValue.length === 2) {
                    matchArray = [];
                }
                if (searchValue[1] === wordfindArray[n - 16]) {
                    // orientation is up and left
                    searchOrientation[0].isMatch = true;
                }
                if (searchValue[1] === wordfindArray[n - 15]) {
                    // orientation is up
                    searchOrientation[1].isMatch = true;
                }
                if (searchValue[1] === wordfindArray[n - 14]) {
                    // orientation is up and right
                    searchOrientation[2].isMatch = true;
                }
                if (searchValue[1] === wordfindArray[n - 1]) {
                    // orientation is left
                    searchOrientation[3].isMatch = true;
                }
                if (searchValue[1] === wordfindArray[n + 1]) {
                    // orientation is right 
                    searchOrientation[4].isMatch = true;
                }
                if (searchValue[1] === wordfindArray[n + 14]) {
                    // orientation is down and left
                    searchOrientation[5].isMatch = true;
                }
                if (searchValue[1] === wordfindArray[n + 15]) {
                    // orientation is down
                    searchOrientation[6].isMatch = true;
                }
                if (searchValue[1] === wordfindArray[n + 16]) {
                    // orientation is down and right
                    searchOrientation[7].isMatch = true;
                }
                switch (searchValue.length) {
                    case 2:
                        for (let a = 0; a < searchOrientation.length; a++) {
                            matchArray = [];
                            if (searchOrientation[a].isMatch === true) {
                                searchOrientationValue = searchOrientation[a].searchOrientationValue;
                                if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue])) {
                                    for (let r = 0; r < searchValue.length; r++) {
                                        matchArray.push(n + searchOrientationValue * r);
                                    }
                                    if (matchArray.length > 0) {
                                        successArray = [...successArray, ...matchArray];
                                    }
                                }
                            }
                        }
                        break;
                    case 3:
                        for (let a = 0; a < searchOrientation.length; a++) {
                            matchArray = [];
                            if (searchOrientation[a].isMatch === true) {
                                searchOrientationValue = searchOrientation[a].searchOrientationValue;
                                if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2])) {
                                    for (let r = 0; r < searchValue.length; r++) {
                                        matchArray.push(n + searchOrientationValue * r);
                                    }
                                    if (matchArray.length > 0) {
                                        successArray = [...successArray, ...matchArray];
                                    }
                                }
                            }
                        }
                        break;
                    case 4:
                        for (let a = 0; a < searchOrientation.length; a++) {
                            matchArray = [];
                            if (searchOrientation[a].isMatch === true) {
                                searchOrientationValue = searchOrientation[a].searchOrientationValue;
                                if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2]) && (searchValue[3] === wordfindArray[n + searchOrientationValue * 3])) {
                                    for (let r = 0; r < searchValue.length; r++) {
                                        matchArray.push(n + searchOrientationValue * r);
                                    }
                                    if (matchArray.length > 0) {
                                        successArray = [...successArray, ...matchArray];
                                    }
                                }
                            }
                        }
                        break;
                    case 5:
                        for (let a = 0; a < searchOrientation.length; a++) {
                            matchArray = [];
                            if (searchOrientation[a].isMatch === true) {
                                searchOrientationValue = searchOrientation[a].searchOrientationValue;
                                if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2]) && (searchValue[3] === wordfindArray[n + searchOrientationValue * 3]) && (searchValue[4] === wordfindArray[n + searchOrientationValue * 4])) {
                                    for (let r = 0; r < searchValue.length; r++) {
                                        matchArray.push(n + searchOrientationValue * r);
                                    }
                                    if (matchArray.length > 0) {
                                        successArray = [...successArray, ...matchArray];
                                    }
                                }
                            }
                        }
                        break;
                    case 6:
                        for (let a = 0; a < searchOrientation.length; a++) {
                            matchArray = [];
                            if (searchOrientation[a].isMatch === true) {
                                searchOrientationValue = searchOrientation[a].searchOrientationValue;
                                if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2]) && (searchValue[3] === wordfindArray[n + searchOrientationValue * 3]) && (searchValue[4] === wordfindArray[n + searchOrientationValue * 4]) && (searchValue[5] === wordfindArray[n + searchOrientationValue * 5])) {
                                    for (let r = 0; r < searchValue.length; r++) {
                                        matchArray.push(n + searchOrientationValue * r);
                                    }
                                    if (matchArray.length > 0) {
                                        successArray = [...successArray, ...matchArray];
                                    }
                                }
                            }
                        }
                        break;
                    case 7:
                        for (let a = 0; a < searchOrientation.length; a++) {
                            matchArray = [];
                            if (searchOrientation[a].isMatch === true) {
                                searchOrientationValue = searchOrientation[a].searchOrientationValue;
                                if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2]) && (searchValue[3] === wordfindArray[n + searchOrientationValue * 3]) && (searchValue[4] === wordfindArray[n + searchOrientationValue * 4]) && (searchValue[5] === wordfindArray[n + searchOrientationValue * 5]) && (searchValue[6] === wordfindArray[n + searchOrientationValue * 6])) {
                                    for (let r = 0; r < searchValue.length; r++) {
                                        matchArray.push(n + searchOrientationValue * r);
                                    }
                                    if (matchArray.length > 0) {
                                        successArray = [...successArray, ...matchArray];
                                    }
                                }
                            }
                        }
                        break;
                    case 8:
                        for (let a = 0; a < searchOrientation.length; a++) {
                            matchArray = [];
                            if (searchOrientation[a].isMatch === true) {
                                searchOrientationValue = searchOrientation[a].searchOrientationValue;
                                if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2]) && (searchValue[3] === wordfindArray[n + searchOrientationValue * 3]) && (searchValue[4] === wordfindArray[n + searchOrientationValue * 4]) && (searchValue[5] === wordfindArray[n + searchOrientationValue * 5]) && (searchValue[6] === wordfindArray[n + searchOrientationValue * 6]) && (searchValue[7] === wordfindArray[n + searchOrientationValue * 7])) {
                                    for (let r = 0; r < searchValue.length; r++) {
                                        matchArray.push(n + searchOrientationValue * r);
                                    }
                                    if (matchArray.length > 0) {
                                        successArray = [...successArray, ...matchArray];
                                    }
                                }
                            }
                        }
                        break;
                    case 9:
                        for (let a = 0; a < searchOrientation.length; a++) {
                            matchArray = [];
                            if (searchOrientation[a].isMatch === true) {
                                searchOrientationValue = searchOrientation[a].searchOrientationValue;
                                if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2]) && (searchValue[3] === wordfindArray[n + searchOrientationValue * 3]) && (searchValue[4] === wordfindArray[n + searchOrientationValue * 4]) && (searchValue[5] === wordfindArray[n + searchOrientationValue * 5]) && (searchValue[6] === wordfindArray[n + searchOrientationValue * 6]) && (searchValue[7] === wordfindArray[n + searchOrientationValue * 7]) && (searchValue[8] === wordfindArray[n + searchOrientationValue * 8])) {
                                    for (let r = 0; r < searchValue.length; r++) {
                                        matchArray.push(n + searchOrientationValue * r);
                                    }
                                    if (matchArray.length > 0) {
                                        successArray = [...successArray, ...matchArray];
                                    }
                                }
                            }
                        }
                        break;
                    case 10:
                        for (let a = 0; a < searchOrientation.length; a++) {
                            matchArray = [];
                            if (searchOrientation[a].isMatch === true) {
                                searchOrientationValue = searchOrientation[a].searchOrientationValue;
                                if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2]) && (searchValue[3] === wordfindArray[n + searchOrientationValue * 3]) && (searchValue[4] === wordfindArray[n + searchOrientationValue * 4]) && (searchValue[5] === wordfindArray[n + searchOrientationValue * 5]) && (searchValue[6] === wordfindArray[n + searchOrientationValue * 6]) && (searchValue[7] === wordfindArray[n + searchOrientationValue * 7]) && (searchValue[8] === wordfindArray[n + searchOrientationValue * 8]) && (searchValue[9] === wordfindArray[n + searchOrientationValue * 9])) {
                                    for (let r = 0; r < searchValue.length; r++) {
                                        matchArray.push(n + searchOrientationValue * r);
                                    }
                                    if (matchArray.length > 0) {
                                        successArray = [...successArray, ...matchArray];
                                    }
                                }
                            }
                        }
                        break;
                    case 11:
                        for (let a = 0; a < searchOrientation.length; a++) {
                            matchArray = [];
                            if (searchOrientation[a].isMatch === true) {
                                searchOrientationValue = searchOrientation[a].searchOrientationValue;
                                if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2]) && (searchValue[3] === wordfindArray[n + searchOrientationValue * 3]) && (searchValue[4] === wordfindArray[n + searchOrientationValue * 4]) && (searchValue[5] === wordfindArray[n + searchOrientationValue * 5]) && (searchValue[6] === wordfindArray[n + searchOrientationValue * 6]) && (searchValue[7] === wordfindArray[n + searchOrientationValue * 7]) && (searchValue[8] === wordfindArray[n + searchOrientationValue * 8]) && (searchValue[9] === wordfindArray[n + searchOrientationValue * 9]) && (searchValue[10] === wordfindArray[n + searchOrientationValue * 10])) {
                                    for (let r = 0; r < searchValue.length; r++) {
                                        matchArray.push(n + searchOrientationValue * r);
                                    }
                                    if (matchArray.length > 0) {
                                        successArray = [...successArray, ...matchArray];
                                    }
                                }
                            }
                        }
                        break;
                    case 12:
                        for (let a = 0; a < searchOrientation.length; a++) {
                            matchArray = [];
                            if (searchOrientation[a].isMatch === true) {
                                searchOrientationValue = searchOrientation[a].searchOrientationValue;
                                if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2]) && (searchValue[3] === wordfindArray[n + searchOrientationValue * 3]) && (searchValue[4] === wordfindArray[n + searchOrientationValue * 4]) && (searchValue[5] === wordfindArray[n + searchOrientationValue * 5]) && (searchValue[6] === wordfindArray[n + searchOrientationValue * 6]) && (searchValue[7] === wordfindArray[n + searchOrientationValue * 7]) && (searchValue[8] === wordfindArray[n + searchOrientationValue * 8]) && (searchValue[9] === wordfindArray[n + searchOrientationValue * 9]) && (searchValue[10] === wordfindArray[n + searchOrientationValue * 10]) && (searchValue[11] === wordfindArray[n + searchOrientationValue * 11])) {
                                    for (let r = 0; r < searchValue.length; r++) {
                                        matchArray.push(n + searchOrientationValue * r);
                                    }
                                    if (matchArray.length > 0) {
                                        successArray = [...successArray, ...matchArray];
                                    }
                                }
                            }
                        }
                        break;
                    case 13:
                        for (let a = 0; a < searchOrientation.length; a++) {
                            matchArray = [];
                            if (searchOrientation[a].isMatch === true) {
                                searchOrientationValue = searchOrientation[a].searchOrientationValue;
                                if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2]) && (searchValue[3] === wordfindArray[n + searchOrientationValue * 3]) && (searchValue[4] === wordfindArray[n + searchOrientationValue * 4]) && (searchValue[5] === wordfindArray[n + searchOrientationValue * 5]) && (searchValue[6] === wordfindArray[n + searchOrientationValue * 6]) && (searchValue[7] === wordfindArray[n + searchOrientationValue * 7]) && (searchValue[8] === wordfindArray[n + searchOrientationValue * 8]) && (searchValue[9] === wordfindArray[n + searchOrientationValue * 9]) && (searchValue[10] === wordfindArray[n + searchOrientationValue * 10]) && (searchValue[11] === wordfindArray[n + searchOrientationValue * 11]) && (searchValue[12] === wordfindArray[n + searchOrientationValue * 12])) {
                                    for (let r = 0; r < searchValue.length; r++) {
                                        matchArray.push(n + searchOrientationValue * r);
                                    }
                                    if (matchArray.length > 0) {
                                        successArray = [...successArray, ...matchArray];
                                    }
                                }
                            }
                        }
                        break;
                    case 14:
                        for (let a = 0; a < searchOrientation.length; a++) {
                            matchArray = [];
                            if (searchOrientation[a].isMatch === true) {
                                searchOrientationValue = searchOrientation[a].searchOrientationValue;
                                if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2]) && (searchValue[3] === wordfindArray[n + searchOrientationValue * 3]) && (searchValue[4] === wordfindArray[n + searchOrientationValue * 4]) && (searchValue[5] === wordfindArray[n + searchOrientationValue * 5]) && (searchValue[6] === wordfindArray[n + searchOrientationValue * 6]) && (searchValue[7] === wordfindArray[n + searchOrientationValue * 7]) && (searchValue[8] === wordfindArray[n + searchOrientationValue * 8]) && (searchValue[9] === wordfindArray[n + searchOrientationValue * 9]) && (searchValue[10] === wordfindArray[n + searchOrientationValue * 10]) && (searchValue[11] === wordfindArray[n + searchOrientationValue * 11]) && (searchValue[12] === wordfindArray[n + searchOrientationValue * 12]) && (searchValue[13] === wordfindArray[n + searchOrientationValue * 13])) {
                                    for (let r = 0; r < searchValue.length; r++) {
                                        matchArray.push(n + searchOrientationValue * r);
                                    }
                                    if (matchArray.length > 0) {
                                        successArray = [...successArray, ...matchArray];
                                    }
                                }
                            }
                        }
                        break;
                    case 15:
                        for (let a = 0; a < searchOrientation.length; a++) {
                            matchArray = [];
                            if (searchOrientation[a].isMatch === true) {
                                searchOrientationValue = searchOrientation[a].searchOrientationValue;
                                if ((searchValue[0] === wordfindArray[n]) && (searchValue[1] === wordfindArray[n + searchOrientationValue]) && (searchValue[2] === wordfindArray[n + searchOrientationValue * 2]) && (searchValue[3] === wordfindArray[n + searchOrientationValue * 3]) && (searchValue[4] === wordfindArray[n + searchOrientationValue * 4]) && (searchValue[5] === wordfindArray[n + searchOrientationValue * 5]) && (searchValue[6] === wordfindArray[n + searchOrientationValue * 6]) && (searchValue[7] === wordfindArray[n + searchOrientationValue * 7]) && (searchValue[8] === wordfindArray[n + searchOrientationValue * 8]) && (searchValue[9] === wordfindArray[n + searchOrientationValue * 9]) && (searchValue[10] === wordfindArray[n + searchOrientationValue * 10]) && (searchValue[11] === wordfindArray[n + searchOrientationValue * 11]) && (searchValue[12] === wordfindArray[n + searchOrientationValue * 12]) && (searchValue[13] === wordfindArray[n + searchOrientationValue * 13]) && (searchValue[14] === wordfindArray[n + searchOrientationValue * 14])) {
                                    for (let r = 0; r < searchValue.length; r++) {
                                        matchArray.push(n + searchOrientationValue * r);
                                    }
                                    if (matchArray.length > 0) {
                                        successArray = [...successArray, ...matchArray];
                                    }
                                }
                            }
                        }
                        break;
                }
            }
            if (matchArray.length > 0) {
                successArray = [...successArray, ...matchArray];
            }
            for (let s = 0; s < 225; s++) {
                if (successArray.includes(s)) {
                    tempArray[s] = true;
                }
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
        // const mysteryWords = ['JAVASCRIPT', 'TYPESCRIPT', 'EXPRESS', 'MONGODB', 'REACT', 'ZELDA', 'NANCY', 'HTML', 'NODE', 'CSS'];
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
                            }
                            if ((usedIndex.includes(initialPossition + columnIndex + rowIndex)) && wordArray[k] != letterArray[initialPossition + columnIndex + rowIndex]) {
                                noPossitionConflict = false;
                                break;
                            }
                            letterArray[initialPossition + columnIndex] = wordArray[k];
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
                            }
                            if ((usedIndex.includes(initialPossition + columnIndex + rowIndex)) && wordArray[k] != letterArray[initialPossition + columnIndex + rowIndex]) {
                                noPossitionConflict = false;
                                break;
                            }
                            letterArray[initialPossition + columnIndex] = wordArray[k];
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
                            }
                            if ((usedIndex.includes(initialPossition + columnIndex + rowIndex)) && wordArray[k] != letterArray[initialPossition + columnIndex + rowIndex]) {
                                noPossitionConflict = false;
                                break;
                            }
                            letterArray[initialPossition + rowIndex] = wordArray[k];
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
                            }
                            if ((usedIndex.includes(initialPossition + columnIndex + rowIndex)) && wordArray[k] != letterArray[initialPossition + columnIndex + rowIndex]) {
                                noPossitionConflict = false;
                                break;
                            }
                            letterArray[initialPossition + rowIndex] = wordArray[k];
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
                    break;
                case 'diagonal1':
                    // diagonal forward and down
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
                            }
                            if ((usedIndex.includes(initialPossition + columnIndex + rowIndex)) && wordArray[k] != letterArray[initialPossition + columnIndex + rowIndex]) {
                                noPossitionConflict = false;
                                break;
                            }
                            letterArray[initialPossition + columnIndex + rowIndex] = wordArray[k];
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
                    break;
                case 'diagonal2':
                    // diagonal forward and up
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
                            }
                            if ((usedIndex.includes(initialPossition + columnIndex + rowIndex)) && wordArray[k] != letterArray[initialPossition + columnIndex + rowIndex]) {
                                noPossitionConflict = false;
                                break;
                            }
                            letterArray[initialPossition + columnIndex + rowIndex] = wordArray[k];
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
                            if ((usedIndex.includes(initialPossition + columnIndex + rowIndex)) && wordArray[k] != letterArray[initialPossition + columnIndex + rowIndex]) {
                                noPossitionConflict = false;
                                break;
                            }
                            letterArray[initialPossition + columnIndex + rowIndex] = wordArray[k];
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
                            }
                            if ((usedIndex.includes(initialPossition + columnIndex + rowIndex)) && wordArray[k] != letterArray[initialPossition + columnIndex + rowIndex]) {
                                noPossitionConflict = false;
                                break;
                            }
                            letterArray[initialPossition + columnIndex + rowIndex] = wordArray[k];
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
                    break;
            }
        }
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
                            color: isFoundArray[index] === true ? 'red' : 'gray',
                            fontWeight: isFoundArray[index] === true ? 'bold' : 'normal'
                        }}>
                            {char}
                        </div>
                    ))}
                </div>
                <div>
                    <input id="search-bar" type="text" name="search" value={searchValue} onChange={handleChange} placeholder="Search wordfind"></input>
                    <h3>Welcome to the Wordfind featuring REACT</h3>
                    <p>Enter a word into the searchbar to find it in the wordfind.  Notice the state of the wordfind updates as each letter is entered.  Start with "REACT".  The Wordfind contains 10 words.  Enjoy!</p>
                    {(foundWords.length > 0) && <h3>Found Words:</h3>}
                    {foundWords.map((word, index) => (
                        <div key={index}>
                            {word}
                        </div>
                    ))
                    }
                </div>
            </div>
        </>
    )
}