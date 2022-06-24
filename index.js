function superbowWin(array){
    
    function test(element){
        return (element.result === "w")
    }
    
    {
        if (array.find(test)){
            return array.find(test).year
        }
    }
}