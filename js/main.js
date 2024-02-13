const bars = document.querySelectorAll('.bar');

const onSuccess = (data) => {
    const allExpences = [];
    data.forEach((item) => {
        allExpences.push(item.amount);
    })

    const maxExpence = Math.max(...allExpences);
    let height = '';
    if (maxExpence * 3 <= 200) {
        for (let i = 0; i < allExpences.length; i++) {
            height = `${allExpences[i] * 3}px`;
            bars[i].style.height = height;
            bars[i].dataset.expences = allExpences[i];
            if (allExpences[i] === maxExpence) {
                bars[i].classList.add('highest');
            }
        }
    } else {
        for (let i = 0; i < allExpences.length; i++) {
            height = `${allExpences[i] / maxExpence * 200}px`
            bars[i].style.height = height;
            bars[i].dataset.expences = allExpences[i];
            if (allExpences[i] === maxExpence) {
                bars[i].classList.add('highest');
            }
        }
    }


}

const onFail = (error) => {
    console.log(error)
};

const getData = async (onSuccess, onFail) => {
    try {
        const response = await fetch(
            '../data.json'
        );

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const resp = await response.json();
        onSuccess(resp);
    } catch (error) {
        onFail(error.message);
    }
};

getData(onSuccess, onFail)