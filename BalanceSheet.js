document.addEventListener('DOMContentLoaded', function () {
    const addCurrentAssetsBtn = document.getElementById('addCurrentAssetsBtn');
    const currentAssetsContainer = document.getElementById('currentAssetsContainer');
    const totalCurrentAssets = document.getElementById('totalCurrentAssets');

    const addInvestmentPropertyBtn = document.getElementById('addInvestmentPropertyBtn');
    const investmentPropertyContainer = document.getElementById('investmentPropertyContainer');
    const totalInvestmentProperty = document.getElementById('totalInvestmentProperty');

    const addIntangibleAssetsBtn = document.getElementById('addIntangibleAssetsBtn');
    const intangibleAssetsContainer = document.getElementById('intangibleAssetsContainer');
    const totalIntangibleAssets = document.getElementById('totalIntangibleAssets');

    const addCurrentLiabilitiesBtn = document.getElementById('addCurrentLiabilitiesBtn');
    const currentLiabilitiesContainer = document.getElementById('currentLiabilitiesContainer');
    const totalCurrentLiabilities = document.getElementById('totalCurrentLiabilities');

    const addLongTermLiabilitiesBtn = document.getElementById('addLongTermLiabilitiesBtn');
    const longTermLiabilitiesContainer = document.getElementById('longTermLiabilitiesContainer');
    const totalLongTermLiabilities = document.getElementById('totalLongTermLiabilities');

    const calculatePositionBtn = document.getElementById('calculatePositionBtn');
    const totalAssets = document.getElementById('totalAssets');
    const totalLiabilities = document.getElementById('totalLiabilities');
    const position = document.getElementById('position');

    let currentAssetsCount = 0;
    let investmentPropertyCount = 0;
    let intangibleAssetsCount = 0;
    let currentLiabilitiesCount = 0;
    let longTermLiabilitiesCount = 0;

    let buttonsClicked = {
        addCurrentAssets: false,
        addInvestmentProperty: false,
        addIntangibleAssets: false,
        addCurrentLiabilities: false,
        addLongTermLiabilities: false,
    };


    addCurrentAssetsBtn.addEventListener('click', function () {
        if (!buttonsClicked.addCurrentAssets) {
            buttonsClicked.addCurrentAssets = true;
            addSubsection(currentAssetsContainer, 'Current Asset', [
                { label: 'Cash', id: `cash${currentAssetsCount}` },
                { label: 'Inventory', id: `inventory${currentAssetsCount}` },
                { label: 'Supplies', id: `supplies${currentAssetsCount}` },
                { label: 'Temporary Investments', id: `investments${currentAssetsCount}` }
            ]);
            currentAssetsCount++;
            updateTotalCurrentAssets();

        }
        updateTotalCurrentAssets();

    });

    addInvestmentPropertyBtn.addEventListener('click', function () {
        if (!buttonsClicked.addInvestmentProperty) {
            buttonsClicked.addInvestmentProperty = true;
            addSubsection(investmentPropertyContainer, 'Investment Property', [
                { label: 'Land', id: 'land' },
                { label: 'Buildings and Improvement', id: 'buildingsandimprovement' },
                { label: 'Equipment', id: 'equipment' },
                { label: 'Temporary Investments', id: 'equipmentinvestments' }
            ]);
            investmentPropertyCount++;
        }
        updateTotalInvestmentProperty();

    });

    addIntangibleAssetsBtn.addEventListener('click', function () {
        if (!buttonsClicked.addIntangibleAssets) {
            buttonsClicked.addIntangibleAssets = true;
            addSubsection(intangibleAssetsContainer, 'Intangible Asset', [
                { label: 'Trade Names', id: 'tradeNames' },
                { label: 'Goodwill', id: 'goodwill' },
            ]);
            intangibleAssetsCount++;
        }
        updateTotalIntangibleAssets();

    });

    addCurrentLiabilitiesBtn.addEventListener('click', function () {
        if (!buttonsClicked.addCurrentLiabilities) {
            buttonsClicked.addCurrentLiabilities = true;
            addSubsection(currentLiabilitiesContainer, 'Current Liability', [
                { label: 'Accounts Payable', id: 'accountsPayable' },
                { label: 'Notes Payable', id: 'notesPayable' },
                { label: 'Interests Payable', id: 'interestsPayable' },
                { label: 'Wages Payable', id: 'wagesPayable' },
                { label: 'Accrued Expenses', id: 'accruedExpenses' },
            ]);
            currentLiabilitiesCount++;
        }
        updateTotalCurrentLiabilities();

    });

    addLongTermLiabilitiesBtn.addEventListener('click', function () {
        if (!buttonsClicked.addLongTermLiabilities) {
            buttonsClicked.addLongTermLiabilities = true;
            addSubsection(longTermLiabilitiesContainer, 'Long-Term Liability', [
                { label: 'Notes Payable', id: 'ltNotesPayable' },
                { label: 'Bonds Payable', id: 'bondsPayable' },
            ]);
            longTermLiabilitiesCount++;
        }
        updateTotalLongTermLiabilities();

    });

    calculatePositionBtn.addEventListener('click', function () {
        
        calculatePosition();
    });

    function addSubsection(container, subsectionTitle, labels) {
        // Create subsubsection elements
        const subsubsection = document.createElement('div');
        subsubsection.classList.add('subsubsection');

        const subsectionHeader = document.createElement('h3');
        subsectionHeader.textContent = subsectionTitle;
        subsubsection.appendChild(subsectionHeader);

        labels.forEach(item => {
            const label = document.createElement('label');
            label.textContent = item.label;

            const textbox = document.createElement('input');
            textbox.type = 'text';
            textbox.id = item.id;

            subsubsection.appendChild(label);
            subsubsection.appendChild(textbox);
        });

        // Add a line break after each subsubsection
        subsubsection.appendChild(document.createElement('br'));

        // Append subsubsection to the specified container
        container.appendChild(subsubsection);
    }

    // Function to update totalCurrentAssets based on user input
    function updateTotalCurrentAssets() {
        let total = 0;
    
        for (let i = 0; i < currentAssetsCount; i++) {
            const cashValue = parseFloat(document.getElementById(`cash${i}`).value) || 0;
            const inventoryValue = parseFloat(document.getElementById(`inventory${i}`).value) || 0;
            const suppliesValue = parseFloat(document.getElementById(`supplies${i}`).value) || 0;
            const investmentsValue = parseFloat(document.getElementById(`investments${i}`).value) || 0;
    
            total += cashValue + inventoryValue + suppliesValue + investmentsValue;
        }
    
        totalCurrentAssets.textContent = total.toFixed(2);
    }

    // Function to update totalInvestmentProperty based on user input
    function updateTotalInvestmentProperty() {
        let total = 0;

        for (let i = 0; i < investmentPropertyCount; i++) {
            const landValue = parseFloat(document.getElementById('land').value) || 0;
            const buildingsandimprovementValue = parseFloat(document.getElementById('buildingsandimprovement').value) || 0;
            const equipmentValue = parseFloat(document.getElementById('equipment').value) || 0;
            const equipmentinvestmentsValue = parseFloat(document.getElementById('equipmentinvestments').value) || 0;

            total += landValue + buildingsandimprovementValue + equipmentValue + equipmentinvestmentsValue;
        }

        // Update the totalInvestmentProperty element
        totalInvestmentProperty.textContent = total.toFixed(2);
    }

    // Function to update totalIntangibleAssets based on user input
    function updateTotalIntangibleAssets() {
        let total = 0;

        for (let i = 0; i < intangibleAssetsCount; i++) {
            // Modify the property IDs based on your actual structure
            const tradeNamesValue = parseFloat(document.getElementById('tradeNames').value) || 0;
            const goodwillValue = parseFloat(document.getElementById('goodwill').value) || 0;
            // Add more items as needed

            total += tradeNamesValue + goodwillValue;
        }

        // Update the totalIntangibleAssets element
        totalIntangibleAssets.textContent = total.toFixed(2);
    }

    // Function to update totalCurrentLiabilities based on user input
    function updateTotalCurrentLiabilities() {
        let total = 0;

        for (let i = 0; i < currentLiabilitiesCount; i++) {
            // Modify the property IDs based on your actual structure
            const accountsPayableValue = parseFloat(document.getElementById('accountsPayable').value) || 0;
            const notesPayableValue = parseFloat(document.getElementById('notesPayable').value) || 0;
            const interestsPayableValue = parseFloat(document.getElementById('interestsPayable').value) || 0;
            const wagesPayableValue = parseFloat(document.getElementById('wagesPayable').value) || 0;
            const accruedExpensesValue = parseFloat(document.getElementById('accruedExpenses').value) || 0;
            // Add more items as needed

            total += accountsPayableValue + notesPayableValue + interestsPayableValue + wagesPayableValue + accruedExpensesValue;
        }

        // Update the totalCurrentLiabilities element
        totalCurrentLiabilities.textContent = total.toFixed(2);
    }

    // Function to update totalLongTermLiabilities based on user input
    function updateTotalLongTermLiabilities() {
        let total = 0;

        for (let i = 0; i < longTermLiabilitiesCount; i++) {
            // Modify the property IDs based on your actual structure
            const ltNotesPayableValue = parseFloat(document.getElementById('ltNotesPayable').value) || 0;
            const bondsPayableValue = parseFloat(document.getElementById('bondsPayable').value) || 0;
            // Add more items as needed

            total += ltNotesPayableValue + bondsPayableValue;
        }

        // Update the totalLongTermLiabilities element
        totalLongTermLiabilities.textContent = total.toFixed(2);
    }

    // Function to calculate and display the position
    function calculatePosition() {
        let totalAssetsValue = 0;
        let totalLiabilitiesValue = 0;

        // Calculate total assets
        totalAssetsValue += getTotalFromContainer(currentAssetsContainer);
        totalAssetsValue += getTotalFromContainer(investmentPropertyContainer);
        totalAssetsValue += getTotalFromContainer(intangibleAssetsContainer);

        // Calculate total liabilities
        totalLiabilitiesValue += getTotalFromContainer(currentLiabilitiesContainer);
        totalLiabilitiesValue += getTotalFromContainer(longTermLiabilitiesContainer);

        let positionValue = totalAssetsValue - totalLiabilitiesValue;

        // Display the calculated values
        totalAssets.textContent = totalAssetsValue.toFixed(2);
        totalLiabilities.textContent = totalLiabilitiesValue.toFixed(2);
        position.textContent = positionValue.toFixed(2);
    }

    function getTotalFromContainer(container) {
        let total = 0;
        const textboxes = container.querySelectorAll('input[type="text"]');
        textboxes.forEach(textbox => {
            total += parseFloat(textbox.value) || 0;
        });
        return total;
    }
});
