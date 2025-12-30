// Comprehensive Scoville Scale Data
const scovilleData = [
    {
        name: "Bell Pepper",
        shu: { min: 0, max: 0 },
        emoji: "🫑",
        description: "Sweet and mild, no heat at all. The baseline for all pepper measurements.",
        heatLevel: 0
    },
    {
        name: "Pimento",
        shu: { min: 100, max: 500 },
        emoji: "🌶️",
        description: "Very mild, slightly sweet. Often used in cheese and olives.",
        heatLevel: 0
    },
    {
        name: "Banana Pepper",
        shu: { min: 0, max: 500 },
        emoji: "🌶️",
        description: "Mild and tangy, popular on pizzas and in salads.",
        heatLevel: 0
    },
    {
        name: "Pepperoncini",
        shu: { min: 100, max: 500 },
        emoji: "🌶️",
        description: "Mild Italian pepper, often pickled. Slightly sweet and tangy.",
        heatLevel: 1
    },
    {
        name: "Poblano",
        shu: { min: 1000, max: 2000 },
        emoji: "🌶️",
        description: "Mild heat with earthy flavor. Used for chile rellenos when fresh.",
        heatLevel: 1
    },
    {
        name: "Anaheim",
        shu: { min: 500, max: 2500 },
        emoji: "🌶️",
        description: "Mild to moderate heat. Great for stuffing and roasting.",
        heatLevel: 1
    },
    {
        name: "Jalapeño",
        shu: { min: 2500, max: 8000 },
        emoji: "🌶️",
        description: "The most popular chili pepper. Moderate heat with a bright, grassy flavor.",
        heatLevel: 2
    },
    {
        name: "Fresno",
        shu: { min: 2500, max: 10000 },
        emoji: "🌶️",
        description: "Similar to jalapeño but fruitier. Often confused with red jalapeños.",
        heatLevel: 2
    },
    {
        name: "Chipotle",
        shu: { min: 2500, max: 8000 },
        emoji: "🌶️",
        description: "Smoked and dried jalapeño. Rich, smoky flavor with moderate heat.",
        heatLevel: 2
    },
    {
        name: "Guajillo",
        shu: { min: 2500, max: 5000 },
        emoji: "🌶️",
        description: "Mild to moderate dried chili. Sweet and tangy with berry notes.",
        heatLevel: 2
    },
    {
        name: "Serrano",
        shu: { min: 10000, max: 25000 },
        emoji: "🌶️",
        description: "Hotter than jalapeño with a crisp, bright flavor. Popular in pico de gallo.",
        heatLevel: 3
    },
    {
        name: "Aji Amarillo",
        shu: { min: 30000, max: 50000 },
        emoji: "🌶️",
        description: "Peruvian yellow pepper. Fruity and floral with solid heat.",
        heatLevel: 4
    },
    {
        name: "Cayenne",
        shu: { min: 30000, max: 50000 },
        emoji: "🌶️",
        description: "Commonly used in powdered form. Sharp, pungent heat.",
        heatLevel: 4
    },
    {
        name: "Tabasco",
        shu: { min: 30000, max: 50000 },
        emoji: "🌶️",
        description: "Small pepper used for the famous hot sauce. Bright, tangy heat.",
        heatLevel: 4
    },
    {
        name: "Chile de Árbol",
        shu: { min: 15000, max: 30000 },
        emoji: "🌶️",
        description: "Thin Mexican pepper. Nutty, smoky flavor with lasting heat.",
        heatLevel: 3
    },
    {
        name: "Ají Panca",
        shu: { min: 1000, max: 1500 },
        emoji: "🌶️",
        description: "Peruvian pepper with mild heat. Fruity, smoky, and slightly sweet.",
        heatLevel: 1
    },
    {
        name: "Thai Chile",
        shu: { min: 50000, max: 100000 },
        emoji: "🌶️",
        description: "Small but mighty. Sharp heat with fruity undertones.",
        heatLevel: 5
    },
    {
        name: "Malagueta",
        shu: { min: 60000, max: 100000 },
        emoji: "🌶️",
        description: "Brazilian pepper. Fruity and tangy with intense heat.",
        heatLevel: 5
    },
    {
        name: "Chiltepin",
        shu: { min: 50000, max: 100000 },
        emoji: "🌶️",
        description: "Wild pepper, considered the mother of all chilis. Intense, quick heat.",
        heatLevel: 5
    },
    {
        name: "Piri Piri",
        shu: { min: 50000, max: 175000 },
        emoji: "🌶️",
        description: "African bird's eye chili. Sharp, citrusy heat.",
        heatLevel: 6
    },
    {
        name: "Habanero",
        shu: { min: 100000, max: 350000 },
        emoji: "🔥",
        description: "Intensely hot with fruity, citrus notes. Now we're getting serious.",
        heatLevel: 7
    },
    {
        name: "Scotch Bonnet",
        shu: { min: 100000, max: 350000 },
        emoji: "🔥",
        description: "Caribbean cousin of habanero. Fruity, tropical heat. Essential in jerk seasoning.",
        heatLevel: 7
    },
    {
        name: "Fatalii",
        shu: { min: 125000, max: 400000 },
        emoji: "🔥",
        description: "African pepper with citrus flavor. Extremely hot with a fruity finish.",
        heatLevel: 7
    },
    {
        name: "Red Savina",
        shu: { min: 200000, max: 450000 },
        emoji: "🔥",
        description: "Habanero cultivar. Once held the world record for hottest pepper.",
        heatLevel: 8
    },
    {
        name: "7 Pot Chili",
        shu: { min: 1000000, max: 1200000 },
        emoji: "🔥",
        description: "Named because one pepper can spice seven pots of stew. Extreme heat.",
        heatLevel: 9
    },
    {
        name: "Naga Viper",
        shu: { min: 900000, max: 1400000 },
        emoji: "💀",
        description: "Hybrid of Ghost Pepper varieties. Brief world record holder.",
        heatLevel: 9
    },
    {
        name: "Ghost Pepper",
        shu: { min: 800000, max: 1041427 },
        emoji: "💀",
        description: "Also known as Bhut Jolokia. First pepper to break 1 million SHU. Punishing heat.",
        heatLevel: 9
    },
    {
        name: "Trinidad Scorpion",
        shu: { min: 1200000, max: 2000000 },
        emoji: "💀",
        description: "Named for its scorpion tail shape. Delayed but devastating heat.",
        heatLevel: 10
    },
    {
        name: "Komodo Dragon",
        shu: { min: 1400000, max: 2200000 },
        emoji: "💀",
        description: "UK-bred super-hot. Slow-building but long-lasting intense heat.",
        heatLevel: 10
    },
    {
        name: "Carolina Reaper",
        shu: { min: 1400000, max: 2200000 },
        emoji: "☠️",
        description: "Current Guinness World Record holder (as of 2023). Extreme, sustained heat with fruity notes. Not for the faint of heart.",
        heatLevel: 10
    },
    {
        name: "Dragon's Breath",
        shu: { min: 2480000, max: 2480000 },
        emoji: "☠️",
        description: "Controversial contender. Potentially lethal, developed for medical anesthetic use.",
        heatLevel: 10
    },
    {
        name: "Pepper X",
        shu: { min: 3180000, max: 3180000 },
        emoji: "☠️",
        description: "Created by the maker of Carolina Reaper. Unverified claim to be the hottest pepper ever.",
        heatLevel: 10
    }
];

// Sort data by average SHU
scovilleData.sort((a, b) => {
    const avgA = (a.shu.min + a.shu.max) / 2;
    const avgB = (b.shu.min + b.shu.max) / 2;
    return avgA - avgB;
});

// Global state
let selectedPepper = null;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeScale();
    initializeDataList();
    initializeSearch();
    loadFromURL();
});

// Format SHU for display
function formatSHU(shu) {
    if (shu.min === shu.max) {
        if (shu.min === 0) return "0 SHU";
        return `${shu.min.toLocaleString()} SHU`;
    }
    return `${shu.min.toLocaleString()} - ${shu.max.toLocaleString()} SHU`;
}

// Initialize the scale visualization
function initializeScale() {
    const container = document.getElementById('scale-container');

    // Add scale bar
    const scaleBar = document.createElement('div');
    scaleBar.className = 'scale-bar';
    container.appendChild(scaleBar);

    // Create pepper items
    scovilleData.forEach((pepper, index) => {
        const item = createScaleItem(pepper, index);
        container.appendChild(item);
    });
}

// Create individual scale item
function createScaleItem(pepper, index) {
    const item = document.createElement('div');
    item.className = `scale-item heat-${pepper.heatLevel}`;
    item.dataset.index = index;
    item.dataset.name = pepper.name;

    // Icon container
    const icon = document.createElement('div');
    icon.className = 'pepper-icon';
    icon.innerHTML = `
        <div class="heat-indicator"></div>
        <span>${pepper.emoji}</span>
    `;

    // Label
    const label = document.createElement('div');
    label.className = 'pepper-label';
    label.textContent = pepper.name;

    item.appendChild(icon);
    item.appendChild(label);

    // Event listeners
    item.addEventListener('mouseenter', (e) => showTooltip(e, pepper));
    item.addEventListener('mouseleave', hideTooltip);
    item.addEventListener('mousemove', (e) => updateTooltipPosition(e));
    item.addEventListener('click', () => selectPepper(pepper, item));

    return item;
}

// Tooltip functions
function showTooltip(e, pepper) {
    const tooltip = document.getElementById('tooltip');
    const content = tooltip.querySelector('.tooltip-content');

    content.innerHTML = `
        <h4>${pepper.name}</h4>
        <div class="shu">${formatSHU(pepper.shu)}</div>
        <div class="desc">${pepper.description}</div>
    `;

    tooltip.classList.add('visible');
    updateTooltipPosition(e);
}

function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.classList.remove('visible');
}

function updateTooltipPosition(e) {
    const tooltip = document.getElementById('tooltip');
    const offset = 15;

    let x = e.clientX + offset;
    let y = e.clientY + offset;

    // Keep tooltip on screen
    const rect = tooltip.getBoundingClientRect();
    if (x + rect.width > window.innerWidth) {
        x = e.clientX - rect.width - offset;
    }
    if (y + rect.height > window.innerHeight) {
        y = e.clientY - rect.height - offset;
    }

    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
}

// Select a pepper
function selectPepper(pepper, element) {
    // Update visual selection
    document.querySelectorAll('.scale-item').forEach(item => {
        item.classList.remove('selected');
    });
    if (element) {
        element.classList.add('selected');
    }

    selectedPepper = pepper;
    updateSelectedInfo(pepper);
    updateURL(pepper);
}

// Update selected info panel
function updateSelectedInfo(pepper) {
    const infoPanel = document.getElementById('selected-info');

    infoPanel.innerHTML = `
        <h3>Selected Pepper</h3>
        <div class="selected-details">
            <h4>${pepper.emoji} ${pepper.name}</h4>
            <div class="shu-value">${formatSHU(pepper.shu)}</div>
            <div class="description">${pepper.description}</div>
            <button class="share-button" onclick="copyShareLink()">
                📋 Copy Share Link
            </button>
            <div id="share-notification"></div>
        </div>
    `;
}

// Copy share link to clipboard
function copyShareLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        const notification = document.getElementById('share-notification');
        notification.innerHTML = '<div class="share-notification">✓ Link copied to clipboard!</div>';
        setTimeout(() => {
            notification.innerHTML = '';
        }, 2000);
    });
}

// Update URL with selected pepper
function updateURL(pepper) {
    const params = new URLSearchParams();
    params.set('mode', 'spicy');
    params.set('item', pepper.name.toLowerCase().replace(/\s+/g, '-'));

    const newURL = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({ pepper: pepper.name }, '', newURL);
}

// Load pepper from URL parameters
function loadFromURL() {
    const params = new URLSearchParams(window.location.search);
    const itemName = params.get('item');

    if (itemName) {
        const pepper = scovilleData.find(p =>
            p.name.toLowerCase().replace(/\s+/g, '-') === itemName
        );

        if (pepper) {
            const index = scovilleData.indexOf(pepper);
            const element = document.querySelector(`[data-index="${index}"]`);
            selectPepper(pepper, element);

            // Scroll to the selected item
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }
}

// Initialize data list
function initializeDataList() {
    const listContainer = document.querySelector('.list-container');

    scovilleData.forEach((pepper, index) => {
        const listItem = document.createElement('div');
        listItem.className = 'list-item';
        listItem.innerHTML = `
            <div class="list-item-name">${pepper.emoji} ${pepper.name}</div>
            <div class="list-item-shu">${formatSHU(pepper.shu)}</div>
        `;

        listItem.addEventListener('click', () => {
            const element = document.querySelector(`[data-index="${index}"]`);
            selectPepper(pepper, element);
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });

        listContainer.appendChild(listItem);
    });
}

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        if (!query) {
            searchResults.innerHTML = '';
            // Reset all items
            document.querySelectorAll('.scale-item').forEach(item => {
                item.style.opacity = '1';
                item.style.transform = '';
            });
            return;
        }

        // Filter peppers
        const matches = scovilleData.filter(pepper =>
            pepper.name.toLowerCase().includes(query) ||
            pepper.description.toLowerCase().includes(query)
        );

        // Highlight matching items on scale
        document.querySelectorAll('.scale-item').forEach(item => {
            const pepperName = item.dataset.name.toLowerCase();
            if (matches.some(p => p.name.toLowerCase() === pepperName)) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(-5px)';
            } else {
                item.style.opacity = '0.3';
                item.style.transform = '';
            }
        });

        // Show search results
        if (matches.length > 0) {
            searchResults.innerHTML = matches.map((pepper, idx) => {
                const index = scovilleData.indexOf(pepper);
                return `
                    <div class="search-result-item" data-index="${index}">
                        <strong>${pepper.emoji} ${pepper.name}</strong><br>
                        <small>${formatSHU(pepper.shu)}</small>
                    </div>
                `;
            }).join('');

            // Add click handlers to search results
            searchResults.querySelectorAll('.search-result-item').forEach(resultItem => {
                resultItem.addEventListener('click', () => {
                    const index = resultItem.dataset.index;
                    const pepper = scovilleData[index];
                    const element = document.querySelector(`[data-index="${index}"]`);
                    selectPepper(pepper, element);
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    searchInput.value = '';
                    searchResults.innerHTML = '';
                    // Reset opacity
                    document.querySelectorAll('.scale-item').forEach(item => {
                        item.style.opacity = '1';
                        item.style.transform = '';
                    });
                });
            });
        } else {
            searchResults.innerHTML = '<div style="padding: 0.75rem; color: #999;">No matches found</div>';
        }
    });

    // Clear search when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-section')) {
            searchInput.value = '';
            searchResults.innerHTML = '';
            document.querySelectorAll('.scale-item').forEach(item => {
                item.style.opacity = '1';
                item.style.transform = '';
            });
        }
    });
}

// Handle mode switching (for future modes)
document.getElementById('mode-selector').addEventListener('change', (e) => {
    // Future: Switch between different scales
    console.log('Mode switched to:', e.target.value);
});
