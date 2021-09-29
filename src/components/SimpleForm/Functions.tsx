export default class Functions {
    

    conditionalBack(page: number){
        if(page > 1){
            return null
        }

        else if(page === 1){
            return 'disabled'
        }
    }

    conditionalForward(page: number){
        if(page < 3){
            return null
        }

        else if(page === 3){
            return 'disabled'
        }
    }
}