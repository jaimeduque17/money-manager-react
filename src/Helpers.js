export const checkBudget = (budget, residuary) => {
    let clase;
    // check the 25% 
    if ((budget / 4) > residuary) {
        clase = 'alert alert-danger';
    } else if ((budget / 2) > residuary) {
        clase = 'alert alert-warning'
    } else {
        clase = 'alert alert alert-success';
    }
    return clase;
} 