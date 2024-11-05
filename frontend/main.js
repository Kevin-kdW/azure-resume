window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApi = '';

const getVistCount = () => {
    let count = 3;
    fetch(functionApi)
        .then(response => {
            return response.json()
        }).then(response => {
            console.log('Website called functionApi');
            count = response.count;
            document.getElementById('counter').innerText = count;
        }).catch(function (error) {
            console.log(error);
        });
    return count;
}