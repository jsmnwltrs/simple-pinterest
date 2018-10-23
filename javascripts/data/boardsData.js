const loadBoards = () => {
    return new Promise((resolve, reject) => {
        $.get('../db/boards.json')
         .done((data) => {
            resolve(data.boards)
         })
         .fail((error) => {
            reject(error);
         })
    })
}

export {loadBoards};