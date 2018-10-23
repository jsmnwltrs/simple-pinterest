const loadPinsForBoard = (boardId) => {
    return new Promise((resolve, reject) => {
        $.get('../db/pins.json')
         .done((data) => {
             const pinsForBoards = data.pins.filter(pin => pin.board_id == boardId)
             resolve(pinsForBoards)
         })
         .fail((error) =>{
             reject(error)
         })
    })
}

const loadPinsOnBoard = (boards) => {
    return new Promise((resolve, reject) => {
        $.get('../db/pins.json')
         .done((data) => {
            const boardsWithPins = boards.map(board => {
                const matchingPins = data.pins.filter(pin => pin.board_id === board.id);
                board.pins = matchingPins;
                return board;
            })
            resolve(boardsWithPins)
         })
         .fail((error) => {
             reject('error loadPinsOnBoard', error);
         })
    })
}

export {loadPinsForBoard, loadPinsOnBoard};