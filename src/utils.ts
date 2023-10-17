export const shuffleArray = (array: string[]) => {
    console.log("arrayshuffleArray", array);
    
    return [...array].sort(() => Math.random() - 0.5);
};
// fisher-yates shuffle algorithm