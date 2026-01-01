/**
 * How Is It? - Interactive scale visualization application
 *
 * This application provides interactive visualizations of various scientific scales
 * including Scoville heat units, earthquake magnitudes, pH levels, decibels,
 * Mohs hardness, and radiation doses. Built using vis.js for network visualization.
 *
 * Each mode supports both logarithmic and linear scale types for accurate
 * representation of measurement ranges.
 */

// Configuration data for all visualization modes
const modes = {
    spicy: {
        name: 'Spicy',
        scaleType: 'logarithmic',
        unit: 'SHU',
        theme: {
            background: 'linear-gradient(to right, #fff3e0 0%, #ffe0b2 25%, #ffcc80 50%, #ff8a65 75%, #ef5350 100%)',
            accent: '#ff6b6b'
        },
        markers: [
            { value: 0, label: '0' },
            { value: 500, label: '500' },
            { value: 2500, label: '2.5K' },
            { value: 10000, label: '10K' },
            { value: 50000, label: '50K' },
            { value: 200000, label: '200K' },
            { value: 1000000, label: '1M' },
            { value: 3000000, label: '3M' }
        ],
        items: [
            { id: 1, name: "Bell Pepper", value: 0, emoji: "🫑", description: "Sweet and mild, no heat at all.", image: "images/spicy/bell-pepper.jpg", wiki: "https://en.wikipedia.org/wiki/Bell_pepper" },
            { id: 2, name: "Pimento", value: 300, emoji: "🌶️", description: "Very mild, slightly sweet.", image: "images/spicy/pimento.jpg", wiki: "https://en.wikipedia.org/wiki/Pimiento" },
            { id: 3, name: "Banana Pepper", value: 250, emoji: "🌶️", description: "Mild and tangy.", image: "images/spicy/banana-pepper.jpg", wiki: "https://en.wikipedia.org/wiki/Banana_pepper" },
            { id: 4, name: "Pepperoncini", value: 300, emoji: "🌶️", description: "Mild Italian pepper, often pickled.", image: "images/spicy/pepperoncini.jpg", wiki: "https://en.wikipedia.org/wiki/Friggitello" },
            { id: 5, name: "Shishito", value: 500, emoji: "🌶️", description: "Japanese pepper, 1 in 10 is spicy.", image: "images/spicy/shishito.jpg", wiki: "https://en.wikipedia.org/wiki/Shishito" },
            { id: 6, name: "Cubanelle", value: 1000, emoji: "🌶️", description: "Sweet Italian frying pepper.", image: "images/spicy/cubanelle.jpg", wiki: "https://en.wikipedia.org/wiki/Cubanelle" },
            { id: 7, name: "Poblano", value: 1500, emoji: "🌶️", description: "Mild heat with earthy flavor.", image: "images/spicy/poblano.jpg", wiki: "https://en.wikipedia.org/wiki/Poblano" },
            { id: 8, name: "Anaheim", value: 1500, emoji: "🌶️", description: "Mild to moderate heat.", image: "images/spicy/anaheim.jpg", wiki: "https://en.wikipedia.org/wiki/New_Mexico_chile" },
            { id: 9, name: "Aji Panca", value: 1250, emoji: "🌶️", description: "Peruvian pepper, smoky and fruity.", image: "images/spicy/aji-panca.jpg", wiki: "https://en.wikipedia.org/wiki/Capsicum_baccatum" },
            { id: 10, name: "Pasilla", value: 2000, emoji: "🌶️", description: "Dried chilaca, essential for mole.", image: "images/spicy/pasilla.jpg", wiki: "https://en.wikipedia.org/wiki/Pasilla" },
            { id: 11, name: "Guajillo", value: 3500, emoji: "🌶️", description: "Sweet and tangy with berry notes.", image: "images/spicy/guajillo.jpg", wiki: "https://en.wikipedia.org/wiki/Guajillo_chili" },
            { id: 12, name: "Jalapeño", value: 5000, emoji: "🌶️", description: "The most popular chili pepper.", image: "images/spicy/jalapeno.jpg", wiki: "https://en.wikipedia.org/wiki/Jalape%C3%B1o" },
            { id: 13, name: "Fresno", value: 6000, emoji: "🌶️", description: "Similar to jalapeño but fruitier.", image: "images/spicy/fresno.jpg", wiki: "https://en.wikipedia.org/wiki/Fresno_pepper" },
            { id: 14, name: "Chipotle", value: 5000, emoji: "🌶️", description: "Smoked and dried jalapeño.", image: "images/spicy/jalapeno.jpg", wiki: "https://en.wikipedia.org/wiki/Chipotle" },
            { id: 15, name: "Hungarian Wax", value: 10000, emoji: "🌶️", description: "Medium heat, great for pickling.", image: "images/spicy/hungarian-wax.jpg", wiki: "https://en.wikipedia.org/wiki/Hungarian_wax_pepper" },
            { id: 16, name: "Serrano", value: 17500, emoji: "🌶️", description: "Hotter than jalapeño with crisp flavor.", image: "images/spicy/serrano.jpg", wiki: "https://en.wikipedia.org/wiki/Serrano_pepper" },
            { id: 17, name: "Chile de Árbol", value: 22500, emoji: "🌶️", description: "Nutty, smoky with lasting heat.", image: "images/spicy/chile-de-arbol.jpg", wiki: "https://en.wikipedia.org/wiki/Chile_de_%C3%A1rbol" },
            { id: 18, name: "Aji Amarillo", value: 40000, emoji: "🌶️", description: "Peruvian yellow pepper, fruity and floral.", image: "images/spicy/aji-amarillo.jpg", wiki: "https://en.wikipedia.org/wiki/Capsicum_baccatum" },
            { id: 19, name: "Cayenne", value: 40000, emoji: "🌶️", description: "Commonly used in powdered form.", image: "images/spicy/cayenne.jpg", wiki: "https://en.wikipedia.org/wiki/Cayenne_pepper" },
            { id: 20, name: "Tabasco", value: 40000, emoji: "🌶️", description: "Used for the famous hot sauce.", image: "images/spicy/tabasco.jpg", wiki: "https://en.wikipedia.org/wiki/Tabasco_pepper" },
            { id: 21, name: "Chiltepin", value: 75000, emoji: "🌶️", description: "Wild ancestor of all chilis.", image: "images/spicy/chiltepin.jpg", wiki: "https://en.wikipedia.org/wiki/Chiltepin" },
            { id: 22, name: "Thai Chile", value: 75000, emoji: "🌶️", description: "Small but mighty.", image: "images/spicy/thai-chile.jpg", wiki: "https://en.wikipedia.org/wiki/Bird%27s_eye_chili" },
            { id: 23, name: "Malagueta", value: 80000, emoji: "🌶️", description: "Brazilian pepper, fruity and tangy.", image: "images/spicy/malagueta.jpg", wiki: "https://en.wikipedia.org/wiki/Malagueta_pepper" },
            { id: 24, name: "Piri Piri", value: 112500, emoji: "🔥", description: "African bird's eye, sharp and citrusy.", image: "images/spicy/piri-piri.jpg", wiki: "https://en.wikipedia.org/wiki/Piri_piri" },
            { id: 25, name: "Fatalii", value: 262500, emoji: "🔥", description: "African pepper with citrus flavor.", image: "images/spicy/fatalii.jpg", wiki: "https://en.wikipedia.org/wiki/Fatalii" },
            { id: 26, name: "Habanero", value: 225000, emoji: "🔥", description: "Intensely hot with fruity notes.", image: "images/spicy/habanero.jpg", wiki: "https://en.wikipedia.org/wiki/Habanero" },
            { id: 27, name: "Scotch Bonnet", value: 225000, emoji: "🔥", description: "Caribbean cousin of habanero.", image: "images/spicy/scotch-bonnet.jpg", wiki: "https://en.wikipedia.org/wiki/Scotch_bonnet" },
            { id: 28, name: "Red Savina", value: 325000, emoji: "🔥", description: "Habanero cultivar, former world record.", image: "images/spicy/red-savina.jpg", wiki: "https://en.wikipedia.org/wiki/Red_Savina_pepper" },
            { id: 29, name: "Naga Viper", value: 1150000, emoji: "💀", description: "Hybrid of ghost pepper varieties.", image: "images/spicy/naga-viper.jpg", wiki: "https://en.wikipedia.org/wiki/Naga_Viper_pepper" },
            { id: 30, name: "Ghost Pepper", value: 1000000, emoji: "💀", description: "First pepper to break 1 million SHU.", image: "images/spicy/ghost-pepper.jpg", wiki: "https://en.wikipedia.org/wiki/Bhut_jolokia" },
            { id: 31, name: "7 Pot", value: 1100000, emoji: "💀", description: "Can spice seven pots of stew.", image: "images/spicy/7-pot.jpg", wiki: "https://en.wikipedia.org/wiki/Trinidad_Moruga_scorpion" },
            { id: 32, name: "Trinidad Scorpion", value: 1600000, emoji: "💀", description: "Named for its scorpion tail shape.", image: "images/spicy/trinidad-scorpion.jpg", wiki: "https://en.wikipedia.org/wiki/Trinidad_Moruga_scorpion" },
            { id: 33, name: "Komodo Dragon", value: 1800000, emoji: "☠️", description: "UK-bred superhot.", image: "images/spicy/komodo-dragon.jpg", wiki: "https://en.wikipedia.org/wiki/Carolina_Reaper" },
            { id: 34, name: "Carolina Reaper", value: 1800000, emoji: "☠️", description: "Guinness World Record holder.", image: "images/spicy/carolina-reaper.jpg", wiki: "https://en.wikipedia.org/wiki/Carolina_Reaper" },
            { id: 35, name: "Dragon's Breath", value: 2480000, emoji: "☠️", description: "Potentially lethal, medical use.", image: "images/spicy/naga-viper.jpg", wiki: "https://en.wikipedia.org/wiki/Dragon%27s_Breath_(chili_pepper)" },
            { id: 36, name: "Pepper X", value: 3180000, emoji: "☠️", description: "Hottest pepper ever created.", image: "images/spicy/carolina-reaper.jpg", wiki: "https://en.wikipedia.org/wiki/Pepper_X" }
        ]
    },

    earthquake: {
        name: 'Shaky',
        scaleType: 'logarithmic',
        unit: 'Magnitude',
        theme: {
            background: 'linear-gradient(to right, #e8f5e9 0%, #fff9c4 25%, #ffecb3 50%, #ffccbc 75%, #d32f2f 100%)',
            accent: '#d84315'
        },
        markers: [
            { value: 1, label: '1.0' },
            { value: 2, label: '2.0' },
            { value: 3, label: '3.0' },
            { value: 4, label: '4.0' },
            { value: 5, label: '5.0' },
            { value: 6, label: '6.0' },
            { value: 7, label: '7.0' },
            { value: 8, label: '8.0' },
            { value: 9, label: '9.0' },
            { value: 10, label: '10.0' }
        ],
        items: [
            { id: 1, name: "Mining blast", value: 1.0, emoji: "💣", description: "Controlled explosion - only detected by seismographs.", image: "images/earthquake/1.0.jpg", wiki: "https://en.wikipedia.org/wiki/Induced_seismicity" },
            { id: 2, name: "Microearthquake", value: 1.5, emoji: "〰️", description: "Micro tremor - not felt by humans.", image: "images/earthquake/1.5.jpg", wiki: "https://en.wikipedia.org/wiki/Microearthquake" },
            { id: 3, name: "Barely felt tremor", value: 2.0, emoji: "〰️", description: "Minor tremor, barely perceptible.", image: "images/earthquake/2.0.jpg", wiki: "https://en.wikipedia.org/wiki/Seismic_magnitude_scales" },
            { id: 4, name: "Truck driving past", value: 2.5, emoji: "🚚", description: "Like a heavy truck passing by.", image: "images/earthquake/2.5.jpg", wiki: "https://en.wikipedia.org/wiki/Seismic_magnitude_scales" },
            { id: 5, name: "Door slamming", value: 3.0, emoji: "🚪", description: "Sensation like a door slamming.", image: "images/earthquake/3.0.jpg", wiki: "https://en.wikipedia.org/wiki/Seismic_magnitude_scales" },
            { id: 6, name: "Hanging plant swaying", value: 3.5, emoji: "🪴", description: "Hanging objects sway slightly.", image: "images/earthquake/3.5.jpg", wiki: "https://en.wikipedia.org/wiki/Seismic_magnitude_scales" },
            { id: 7, name: "Dishes rattling", value: 4.0, emoji: "🍽️", description: "Light earthquake, dishes rattle.", image: "images/earthquake/4.0.jpg", wiki: "https://en.wikipedia.org/wiki/Seismic_magnitude_scales" },
            { id: 8, name: "Pictures tilting", value: 4.5, emoji: "🖼️", description: "Pictures tilt on walls.", image: "images/earthquake/4.5.jpg", wiki: "https://en.wikipedia.org/wiki/Seismic_magnitude_scales" },
            { id: 9, name: "Books falling", value: 5.0, emoji: "📚", description: "Moderate quake, books fall from shelves.", image: "images/earthquake/5.0.jpg", wiki: "https://en.wikipedia.org/wiki/Seismic_magnitude_scales" },
            { id: 10, name: "Furniture sliding", value: 5.5, emoji: "🛋️", description: "Heavy furniture slides.", image: "images/earthquake/5.5.jpg", wiki: "https://en.wikipedia.org/wiki/Seismic_magnitude_scales" },
            { id: 11, name: "Cracked walls", value: 6.0, emoji: "🧱", description: "Strong quake, cracks in plaster walls.", image: "images/earthquake/6.0.jpg", wiki: "https://en.wikipedia.org/wiki/Seismic_magnitude_scales" },
            { id: 12, name: "Windows shattering", value: 6.5, emoji: "🪟", description: "Windows shatter from shaking.", image: "images/earthquake/6.5.jpg", wiki: "https://en.wikipedia.org/wiki/Seismic_magnitude_scales" },
            { id: 13, name: "Northridge 1994", value: 6.7, emoji: "🏚️", description: "Chimney collapsing (strong) - 1994 Northridge.", image: "images/earthquake/6.7.jpg", wiki: "https://en.wikipedia.org/wiki/1994_Northridge_earthquake" },
            { id: 14, name: "Haiti 2010", value: 7.0, emoji: "🏚️", description: "Brick buildings crumbling (major) - 2010 Haiti.", image: "images/earthquake/7.0.jpg", wiki: "https://en.wikipedia.org/wiki/2010_Haiti_earthquake" },
            { id: 15, name: "Bridge collapsing", value: 7.5, emoji: "🌉", description: "Major earthquake, bridges collapse.", image: "images/earthquake/7.5.jpg", wiki: "https://en.wikipedia.org/wiki/Seismic_magnitude_scales" },
            { id: 16, name: "San Francisco 1906", value: 7.8, emoji: "🔥", description: "City on fire (great) - 1906 San Francisco.", image: "images/earthquake/7.8.jpg", wiki: "https://en.wikipedia.org/wiki/1906_San_Francisco_earthquake" },
            { id: 17, name: "Sichuan 2008", value: 8.0, emoji: "⛰️", description: "Mountains splitting (great) - 2008 Sichuan.", image: "images/earthquake/8.0.jpg", wiki: "https://en.wikipedia.org/wiki/2008_Sichuan_earthquake" },
            { id: 18, name: "Entire city leveled", value: 8.5, emoji: "💥", description: "Great earthquake, entire cities destroyed.", image: "images/earthquake/8.5.jpg", wiki: "https://en.wikipedia.org/wiki/Seismic_magnitude_scales" },
            { id: 19, name: "Tōhoku 2011", value: 9.0, emoji: "🌊", description: "Tsunami wave (great) - 2011 Tōhoku Japan.", image: "images/earthquake/9.0.jpg", wiki: "https://en.wikipedia.org/wiki/2011_T%C5%8Dhoku_earthquake_and_tsunami" },
            { id: 20, name: "Alaska 1964", value: 9.2, emoji: "🏔️", description: "Coastline reshaped (great) - 1964 Alaska.", image: "images/earthquake/9.2.jpg", wiki: "https://en.wikipedia.org/wiki/1964_Alaska_earthquake" },
            { id: 21, name: "Valdivia 1960", value: 9.5, emoji: "☠️", description: "Continent shifted (great) - 1960 Chile (strongest ever recorded).", image: "images/earthquake/9.5.jpg", wiki: "https://en.wikipedia.org/wiki/1960_Valdivia_earthquake" }
        ]
    },

    ph: {
        name: 'Basic/Acidic',
        scaleType: 'linear',
        unit: 'pH',
        theme: {
            background: 'linear-gradient(to right, #f44336 0%, #ff9800 20%, #ffeb3b 35%, #e8f5e9 50%, #81c784 65%, #4caf50 80%, #1b5e20 100%)',
            accent: '#66bb6a'
        },
        markers: [
            { value: 0, label: '0 (Acidic)' },
            { value: 2, label: '2' },
            { value: 4, label: '4' },
            { value: 6, label: '6' },
            { value: 7, label: '7 (Neutral)' },
            { value: 8, label: '8' },
            { value: 10, label: '10' },
            { value: 12, label: '12' },
            { value: 14, label: '14 (Basic)' }
        ],
        items: [
            { id: 1, name: "Car battery acid", value: 0, emoji: "🔋", description: "Extremely acidic and corrosive.", image: "images/ph/0.jpg", wiki: "https://en.wikipedia.org/wiki/Car_battery" },
            { id: 2, name: "Sulfuric acid bottle", value: 0.5, emoji: "⚗️", description: "Highly corrosive strong acid.", image: "images/ph/0.5.jpg", wiki: "https://en.wikipedia.org/wiki/Sulfuric_acid" },
            { id: 3, name: "Stomach acid", value: 1.0, emoji: "🫃", description: "Digesting gastric acid.", image: "images/ph/1.0.jpg", wiki: "https://en.wikipedia.org/wiki/Gastric_acid" },
            { id: 4, name: "Hydrochloric acid", value: 1.5, emoji: "🧪", description: "Strong corrosive acid container.", image: "images/ph/1.5.jpg", wiki: "https://en.wikipedia.org/wiki/Hydrochloric_acid" },
            { id: 5, name: "Lemon juice", value: 2.0, emoji: "🍋", description: "Very acidic citrus fruit.", image: "images/ph/2.0.jpg", wiki: "https://en.wikipedia.org/wiki/Lemon" },
            { id: 6, name: "Lime juice", value: 2.2, emoji: "🟢", description: "Tart acidic citrus.", image: "images/ph/2.2.jpg", wiki: "https://en.wikipedia.org/wiki/Lime_(fruit)" },
            { id: 7, name: "Vinegar bottle", value: 2.4, emoji: "🧴", description: "Acetic acid solution.", image: "images/ph/2.4.jpg", wiki: "https://en.wikipedia.org/wiki/Vinegar" },
            { id: 8, name: "Cranberry juice", value: 2.9, emoji: "🧃", description: "Tart berry juice.", image: "images/ph/2.9.jpg", wiki: "https://en.wikipedia.org/wiki/Cranberry" },
            { id: 9, name: "Orange juice", value: 3.0, emoji: "🍊", description: "Moderately acidic citrus.", image: "images/ph/3.0.jpg", wiki: "https://en.wikipedia.org/wiki/Orange_juice" },
            { id: 10, name: "Apple juice", value: 3.3, emoji: "🍎", description: "Mildly acidic fruit juice.", image: "images/ph/3.3.jpg", wiki: "https://en.wikipedia.org/wiki/Apple_juice" },
            { id: 11, name: "Soda can", value: 3.5, emoji: "🥤", description: "Carbonated soft drink.", image: "images/ph/3.5.jpg", wiki: "https://en.wikipedia.org/wiki/Soft_drink" },
            { id: 12, name: "Tomato", value: 4.0, emoji: "🍅", description: "Acidic fruit vegetable.", image: "images/ph/4.0.jpg", wiki: "https://en.wikipedia.org/wiki/Tomato" },
            { id: 13, name: "Acid rain", value: 4.5, emoji: "🌧️", description: "Environmentally damaging rain.", image: "images/ph/4.5.jpg", wiki: "https://en.wikipedia.org/wiki/Acid_rain" },
            { id: 14, name: "Black coffee", value: 5.0, emoji: "☕", description: "Slightly acidic beverage.", image: "images/ph/5.0.jpg", wiki: "https://en.wikipedia.org/wiki/Coffee" },
            { id: 15, name: "Banana", value: 5.5, emoji: "🍌", description: "Mildly acidic fruit.", image: "images/ph/5.5.jpg", wiki: "https://en.wikipedia.org/wiki/Banana" },
            { id: 16, name: "Milk carton", value: 6.0, emoji: "🥛", description: "Nearly neutral dairy.", image: "images/ph/6.0.jpg", wiki: "https://en.wikipedia.org/wiki/Milk" },
            { id: 17, name: "Fresh rainwater", value: 6.5, emoji: "💧", description: "Slightly acidic precipitation.", image: "images/ph/6.5.jpg", wiki: "https://en.wikipedia.org/wiki/Rain" },
            { id: 18, name: "Pure water glass", value: 7.0, emoji: "💧", description: "Perfectly neutral H2O.", image: "images/ph/7.0.jpg", wiki: "https://en.wikipedia.org/wiki/Water" },
            { id: 19, name: "Human blood drop", value: 7.4, emoji: "🩸", description: "Slightly alkaline body fluid.", image: "images/ph/7.4.jpg", wiki: "https://en.wikipedia.org/wiki/Blood" },
            { id: 20, name: "Seawater", value: 8.0, emoji: "🌊", description: "Ocean water, mildly basic.", image: "images/ph/8.0.jpg", wiki: "https://en.wikipedia.org/wiki/Seawater" },
            { id: 21, name: "Baking soda solution", value: 8.3, emoji: "🧂", description: "Sodium bicarbonate solution.", image: "images/ph/8.3.jpg", wiki: "https://en.wikipedia.org/wiki/Sodium_bicarbonate" },
            { id: 22, name: "Toothpaste tube", value: 9.0, emoji: "🪥", description: "Mildly alkaline cleaner.", image: "images/ph/9.0.jpg", wiki: "https://en.wikipedia.org/wiki/Toothpaste" },
            { id: 23, name: "Hand soap bar", value: 10.0, emoji: "🧼", description: "Alkaline cleaning agent.", image: "images/ph/10.0.jpg", wiki: "https://en.wikipedia.org/wiki/Soap" },
            { id: 24, name: "Milk of Magnesia", value: 10.5, emoji: "💊", description: "Antacid medicine bottle.", image: "images/ph/10.5.jpg", wiki: "https://en.wikipedia.org/wiki/Milk_of_magnesia" },
            { id: 25, name: "Ammonia bottle", value: 11.0, emoji: "🧴", description: "Strong alkaline cleaner.", image: "images/ph/11.0.jpg", wiki: "https://en.wikipedia.org/wiki/Ammonia" },
            { id: 26, name: "Soapy water bucket", value: 12.0, emoji: "🪣", description: "Highly alkaline cleaning solution.", image: "images/ph/12.0.jpg", wiki: "https://en.wikipedia.org/wiki/Soap" },
            { id: 27, name: "Bleach bottle", value: 13.0, emoji: "🧴", description: "Very strong alkaline disinfectant.", image: "images/ph/13.0.jpg", wiki: "https://en.wikipedia.org/wiki/Bleach" },
            { id: 28, name: "Drain cleaner (lye)", value: 14.0, emoji: "⚠️", description: "Extremely corrosive base.", image: "images/ph/14.0.jpg", wiki: "https://en.wikipedia.org/wiki/Drain_cleaner" }
        ]
    },

    decibel: {
        name: 'Loud',
        scaleType: 'linear',
        unit: 'dB',
        theme: {
            background: 'linear-gradient(to right, #e1f5fe 0%, #b3e5fc 20%, #4fc3f7 40%, #29b6f6 60%, #1976d2 80%, #0d47a1 100%)',
            accent: '#2196f3'
        },
        markers: [
            { value: 0, label: '0' },
            { value: 20, label: '20' },
            { value: 40, label: '40' },
            { value: 60, label: '60' },
            { value: 80, label: '80' },
            { value: 100, label: '100' },
            { value: 120, label: '120' },
            { value: 140, label: '140' },
            { value: 160, label: '160' },
            { value: 180, label: '180' },
            { value: 194, label: '194' }
        ],
        items: [
            { id: 1, name: "Complete silence", value: 0, emoji: "🔇", description: "Threshold of hearing.", image: "images/decibel/0.jpg", wiki: "https://en.wikipedia.org/wiki/Absolute_threshold_of_hearing" },
            { id: 2, name: "Butterfly wings", value: 10, emoji: "🦋", description: "Nearly imperceptible flutter.", image: "images/decibel/10.jpg", wiki: "https://en.wikipedia.org/wiki/Butterfly" },
            { id: 3, name: "Rustling leaves", value: 15, emoji: "🍃", description: "Gentle breeze through trees.", image: "images/decibel/15.jpg", wiki: "https://en.wikipedia.org/wiki/Sound" },
            { id: 4, name: "Whisper", value: 20, emoji: "🤫", description: "Soft quiet speech.", image: "images/decibel/20.jpg", wiki: "https://en.wikipedia.org/wiki/Whispering" },
            { id: 5, name: "Quiet library", value: 25, emoji: "📚", description: "Hushed reading room.", image: "images/decibel/25.jpg", wiki: "https://en.wikipedia.org/wiki/Library" },
            { id: 6, name: "Bedroom at night", value: 30, emoji: "🛏️", description: "Peaceful sleeping environment.", image: "images/decibel/30.jpg", wiki: "https://en.wikipedia.org/wiki/Bedroom" },
            { id: 7, name: "Quiet rural area", value: 35, emoji: "🌾", description: "Countryside ambiance.", image: "images/decibel/35.jpg", wiki: "https://en.wikipedia.org/wiki/Rural_area" },
            { id: 8, name: "Refrigerator hum", value: 40, emoji: "🧊", description: "Low appliance noise.", image: "images/decibel/40.jpg", wiki: "https://en.wikipedia.org/wiki/Refrigerator" },
            { id: 9, name: "Quiet suburb", value: 45, emoji: "🏘️", description: "Residential neighborhood.", image: "images/decibel/45.jpg", wiki: "https://en.wikipedia.org/wiki/Suburb" },
            { id: 10, name: "Rainfall", value: 50, emoji: "🌧️", description: "Moderate precipitation.", image: "images/decibel/50.jpg", wiki: "https://en.wikipedia.org/wiki/Rain" },
            { id: 11, name: "Electric toothbrush", value: 55, emoji: "🪥", description: "Buzzing bathroom device.", image: "images/decibel/55.jpg", wiki: "https://en.wikipedia.org/wiki/Electric_toothbrush" },
            { id: 12, name: "Normal conversation", value: 60, emoji: "💬", description: "Comfortable speaking level.", image: "images/decibel/60.jpg", wiki: "https://en.wikipedia.org/wiki/Conversation" },
            { id: 13, name: "Dishwasher", value: 65, emoji: "🍽️", description: "Kitchen appliance noise.", image: "images/decibel/65.jpg", wiki: "https://en.wikipedia.org/wiki/Dishwasher" },
            { id: 14, name: "Vacuum cleaner", value: 70, emoji: "🧹", description: "Common household cleaning.", image: "images/decibel/70.jpg", wiki: "https://en.wikipedia.org/wiki/Vacuum_cleaner" },
            { id: 15, name: "Toilet flushing", value: 75, emoji: "🚽", description: "Bathroom fixture noise.", image: "images/decibel/75.jpg", wiki: "https://en.wikipedia.org/wiki/Flush_toilet" },
            { id: 16, name: "Alarm clock", value: 80, emoji: "⏰", description: "Morning wake-up device.", image: "images/decibel/80.jpg", wiki: "https://en.wikipedia.org/wiki/Alarm_clock" },
            { id: 17, name: "Garbage disposal", value: 85, emoji: "🗑️", description: "Grinding kitchen waste.", image: "images/decibel/85.jpg", wiki: "https://en.wikipedia.org/wiki/Garbage_disposal_unit" },
            { id: 18, name: "Lawnmower", value: 90, emoji: "🚜", description: "Gas-powered yard tool.", image: "images/decibel/90.jpg", wiki: "https://en.wikipedia.org/wiki/Lawn_mower" },
            { id: 19, name: "Motorcycle", value: 95, emoji: "🏍️", description: "Loud motor vehicle.", image: "images/decibel/95.jpg", wiki: "https://en.wikipedia.org/wiki/Motorcycle" },
            { id: 20, name: "Snowmobile", value: 100, emoji: "🛷", description: "Winter recreational vehicle.", image: "images/decibel/100.jpg", wiki: "https://en.wikipedia.org/wiki/Snowmobile" },
            { id: 21, name: "Power saw", value: 105, emoji: "🪚", description: "Construction tool noise.", image: "images/decibel/105.jpg", wiki: "https://en.wikipedia.org/wiki/Chainsaw" },
            { id: 22, name: "Rock concert", value: 110, emoji: "🎸", description: "Live amplified music.", image: "images/decibel/110.jpg", wiki: "https://en.wikipedia.org/wiki/Rock_concert" },
            { id: 23, name: "Car horn", value: 115, emoji: "📯", description: "Vehicle warning signal.", image: "images/decibel/115.jpg", wiki: "https://en.wikipedia.org/wiki/Vehicle_horn" },
            { id: 24, name: "Ambulance siren", value: 120, emoji: "🚑", description: "Emergency vehicle alert.", image: "images/decibel/120.jpg", wiki: "https://en.wikipedia.org/wiki/Siren_(alarm)" },
            { id: 25, name: "Jackhammer", value: 125, emoji: "🔨", description: "Pneumatic breaking tool.", image: "images/decibel/125.jpg", wiki: "https://en.wikipedia.org/wiki/Jackhammer" },
            { id: 26, name: "Military jet takeoff", value: 130, emoji: "✈️", description: "Fighter aircraft launch.", image: "images/decibel/130.jpg", wiki: "https://en.wikipedia.org/wiki/Fighter_aircraft" },
            { id: 27, name: "Air raid siren", value: 135, emoji: "🚨", description: "Civil defense warning.", image: "images/decibel/135.jpg", wiki: "https://en.wikipedia.org/wiki/Civil_defense_siren" },
            { id: 28, name: "Gunshot", value: 140, emoji: "🔫", description: "Firearm discharge.", image: "images/decibel/140.jpg", wiki: "https://en.wikipedia.org/wiki/Gunshot" },
            { id: 29, name: "Firecracker", value: 145, emoji: "🧨", description: "Explosive firework.", image: "images/decibel/145.jpg", wiki: "https://en.wikipedia.org/wiki/Firecracker" },
            { id: 30, name: "Jet engine at 25m", value: 150, emoji: "🛫", description: "Close proximity to aircraft.", image: "images/decibel/150.jpg", wiki: "https://en.wikipedia.org/wiki/Jet_engine" },
            { id: 31, name: "Rocket launch", value: 160, emoji: "🚀", description: "Space vehicle liftoff.", image: "images/decibel/160.jpg", wiki: "https://en.wikipedia.org/wiki/Rocket_launch" },
            { id: 32, name: "Shotgun blast", value: 170, emoji: "💥", description: "Close-range firearm.", image: "images/decibel/170.jpg", wiki: "https://en.wikipedia.org/wiki/Shotgun" },
            { id: 33, name: "Volcanic eruption", value: 180, emoji: "🌋", description: "Explosive geological event.", image: "images/decibel/180.jpg", wiki: "https://en.wikipedia.org/wiki/Types_of_volcanic_eruptions" },
            { id: 34, name: "Heavy weapons fire", value: 190, emoji: "💣", description: "Artillery and explosives.", image: "images/decibel/190.jpg", wiki: "https://en.wikipedia.org/wiki/Artillery" },
            { id: 35, name: "Theoretical maximum", value: 194, emoji: "💥", description: "Shockwave at Earth's atmosphere.", image: "images/decibel/194.jpg", wiki: "https://en.wikipedia.org/wiki/Sound_pressure" }
        ]
    },

    hardness: {
        name: 'Hard',
        scaleType: 'linear',
        unit: 'Mohs',
        theme: {
            background: 'linear-gradient(to right, #efebe9 0%, #d7ccc8 20%, #a1887f 40%, #6d4c41 60%, #4e342e 80%, #212121 100%)',
            accent: '#795548'
        },
        markers: [
            { value: 1, label: '1' },
            { value: 2, label: '2' },
            { value: 3, label: '3' },
            { value: 4, label: '4' },
            { value: 5, label: '5' },
            { value: 6, label: '6' },
            { value: 7, label: '7' },
            { value: 8, label: '8' },
            { value: 9, label: '9' },
            { value: 10, label: '10' },
            { value: 11, label: '11' },
            { value: 12, label: '12' },
            { value: 13, label: '13' },
            { value: 14, label: '14' },
            { value: 15, label: '15' }
        ],
        items: [
        { id: 1, name: "Chalk stick", value: 2, emoji: "🪨", description: "Chalk stick", image: "images/hardness/2.jpg", wiki: "https://en.wikipedia.org/wiki/Mohs_scale" },
        { id: 2, name: "Fingernail", value: 2.5, emoji: "🪨", description: "Fingernail", image: "images/hardness/2.5.jpg", wiki: "https://en.wikipedia.org/wiki/Nail_(anatomy)" },
        { id: 3, name: "Copper penny", value: 3, emoji: "⚙️", description: "Copper penny", image: "images/hardness/3.jpg", wiki: "https://en.wikipedia.org/wiki/Copper" },
        { id: 4, name: "Brass key", value: 3.5, emoji: "⚙️", description: "Brass key", image: "images/hardness/3.5.jpg", wiki: "https://en.wikipedia.org/wiki/Mohs_scale" },
        { id: 5, name: "Iron nail", value: 4, emoji: "⚙️", description: "Iron nail", image: "images/hardness/4.jpg", wiki: "https://en.wikipedia.org/wiki/Iron" },
        { id: 6, name: "Platinum ring", value: 4.5, emoji: "⚙️", description: "Platinum ring", image: "images/hardness/4.5.jpg", wiki: "https://en.wikipedia.org/wiki/Platinum" },
        { id: 7, name: "Window glass", value: 5, emoji: "⚙️", description: "Window glass", image: "images/hardness/5.jpg", wiki: "https://en.wikipedia.org/wiki/Glass" },
        { id: 8, name: "Porcelain plate", value: 5.5, emoji: "🔨", description: "Porcelain plate", image: "images/hardness/5.5.jpg", wiki: "https://en.wikipedia.org/wiki/Mohs_scale" },
        { id: 9, name: "Steel knife blade", value: 6, emoji: "🔨", description: "Steel knife blade", image: "images/hardness/6.jpg", wiki: "https://en.wikipedia.org/wiki/Steel" },
        { id: 10, name: "Masonry nail", value: 6.5, emoji: "🔨", description: "Masonry nail", image: "images/hardness/6.5.jpg", wiki: "https://en.wikipedia.org/wiki/Mohs_scale" },
        { id: 11, name: "Quartz crystal", value: 7, emoji: "🔨", description: "Quartz crystal", image: "images/hardness/7.jpg", wiki: "https://en.wikipedia.org/wiki/Quartz" },
        { id: 12, name: "Garnet gemstone", value: 7.5, emoji: "💎", description: "Garnet gemstone", image: "images/hardness/7.5.jpg", wiki: "https://en.wikipedia.org/wiki/Mohs_scale" },
        { id: 13, name: "Topaz gemstone", value: 8, emoji: "💎", description: "Topaz gemstone", image: "images/hardness/8.jpg", wiki: "https://en.wikipedia.org/wiki/Topaz" },
        { id: 14, name: "Chrysoberyl", value: 8.5, emoji: "💎", description: "Chrysoberyl", image: "images/hardness/8.5.jpg", wiki: "https://en.wikipedia.org/wiki/Mohs_scale" },
        { id: 15, name: "Sapphire", value: 9, emoji: "💎", description: "Sapphire", image: "images/hardness/9.jpg", wiki: "https://en.wikipedia.org/wiki/Corundum" },
        { id: 16, name: "Tungsten carbide drill bit", value: 9.5, emoji: "⚡", description: "Tungsten carbide drill bit", image: "images/hardness/9.5.jpg", wiki: "https://en.wikipedia.org/wiki/Tungsten_carbide" },
        { id: 17, name: "Diamond ring", value: 10, emoji: "⚡", description: "Diamond ring", image: "images/hardness/10.jpg", wiki: "https://en.wikipedia.org/wiki/Diamond" },
        { id: 18, name: "Aggregated diamond nanorods", value: 11, emoji: "⚡", description: "Aggregated diamond nanorods", image: "images/hardness/11.jpg", wiki: "https://en.wikipedia.org/wiki/Diamond" },
        { id: 19, name: "Lonsdaleite", value: 15, emoji: "⚡", description: "Lonsdaleite", image: "images/hardness/15.jpg", wiki: "https://en.wikipedia.org/wiki/Lonsdaleite" }
        ]
    },

    radioactive: {
        name: 'Radioactive',
        scaleType: 'logarithmic',
        unit: 'mSv',
        theme: {
            background: 'linear-gradient(to right, #f1f8e9 0%, #dcedc8 20%, #aed581 40%, #ffeb3b 60%, #ff9800 80%, #e91e63 100%)',
            accent: '#cddc39'
        },
        markers: [
            { value: 0.00001, label: '0.00001' },
            { value: 0.0001, label: '0.0001' },
            { value: 0.001, label: '0.001' },
            { value: 0.01, label: '0.01' },
            { value: 0.1, label: '0.1' },
            { value: 1, label: '1' },
            { value: 10, label: '10' },
            { value: 100, label: '100' },
            { value: 1000, label: '1000' }
        ],
        items: [
        { id: 1, name: "Eating a banana", value: 0.0001, emoji: "🍌", description: "Banana equivalent dose (BED)", image: "images/radioactive/0.0001.jpg", wiki: "https://en.wikipedia.org/wiki/Banana_equivalent_dose" },
        { id: 2, name: "Living near coal plant", value: 0.001, emoji: "🍌", description: "Living near coal plant", image: "images/radioactive/0.001.jpg", wiki: "https://en.wikipedia.org/wiki/Sievert" },
        { id: 3, name: "Dental X-ray", value: 0.005, emoji: "🍌", description: "Dental X-ray", image: "images/radioactive/0.005.jpg", wiki: "https://en.wikipedia.org/wiki/X-ray" },
        { id: 4, name: "One day natural background", value: 0.01, emoji: "✈️", description: "One day natural background", image: "images/radioactive/0.01.jpg", wiki: "https://en.wikipedia.org/wiki/Sievert" },
        { id: 5, name: "Arm X-ray", value: 0.02, emoji: "✈️", description: "Arm X-ray", image: "images/radioactive/0.02.jpg", wiki: "https://en.wikipedia.org/wiki/X-ray" },
        { id: 6, name: "Airplane flight", value: 0.04, emoji: "✈️", description: "Airplane flight", image: "images/radioactive/0.04.jpg", wiki: "https://en.wikipedia.org/wiki/Radiation_exposure" },
        { id: 7, name: "Chest X-ray", value: 0.1, emoji: "🏥", description: "Chest X-ray", image: "images/radioactive/0.1.jpg", wiki: "https://en.wikipedia.org/wiki/X-ray" },
        { id: 8, name: "Mammogram", value: 0.3, emoji: "🏥", description: "Mammogram", image: "images/radioactive/0.3.jpg", wiki: "https://en.wikipedia.org/wiki/Mammography" },
        { id: 9, name: "Trans-Atlantic flight", value: 0.4, emoji: "🏥", description: "Trans-Atlantic flight", image: "images/radioactive/0.4.jpg", wiki: "https://en.wikipedia.org/wiki/Radiation_exposure" },
        { id: 10, name: "Limit for public exposure", value: 1, emoji: "⚠️", description: "Limit for public exposure", image: "images/radioactive/1.jpg", wiki: "https://en.wikipedia.org/wiki/Sievert" },
        { id: 11, name: "Average yearly natural background", value: 3, emoji: "⚠️", description: "Average yearly natural background", image: "images/radioactive/3.jpg", wiki: "https://en.wikipedia.org/wiki/Sievert" },
        { id: 12, name: "Abdominal X-ray", value: 5, emoji: "⚠️", description: "Abdominal X-ray", image: "images/radioactive/5.jpg", wiki: "https://en.wikipedia.org/wiki/X-ray" },
        { id: 13, name: "Full-body CT scan", value: 10, emoji: "☢️", description: "Full-body CT scan", image: "images/radioactive/10.jpg", wiki: "https://en.wikipedia.org/wiki/CT_scan" },
        { id: 14, name: "Annual limit for radiation workers", value: 20, emoji: "☢️", description: "Annual limit for radiation workers", image: "images/radioactive/20.jpg", wiki: "https://en.wikipedia.org/wiki/Sievert" },
        { id: 15, name: "Maximum yearly for emergency workers", value: 50, emoji: "☢️", description: "Maximum yearly for emergency workers", image: "images/radioactive/50.jpg", wiki: "https://en.wikipedia.org/wiki/Sievert" },
        { id: 16, name: "Lowest dose with increased cancer risk", value: 100, emoji: "☠️", description: "Lowest dose with increased cancer risk", image: "images/radioactive/100.jpg", wiki: "https://en.wikipedia.org/wiki/Cancer" },
        { id: 17, name: "Radiation burns possible", value: 250, emoji: "☠️", description: "Radiation burns possible", image: "images/radioactive/250.jpg", wiki: "https://en.wikipedia.org/wiki/Sievert" },
        { id: 18, name: "Fukushima exclusion zone", value: 400, emoji: "☠️", description: "Fukushima exclusion zone", image: "images/radioactive/400.jpg", wiki: "https://en.wikipedia.org/wiki/Fukushima_nuclear_disaster" }
        ]
    }
};

// Current mode
let currentMode = 'spicy';
let selectedItem = null;
let network = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadMode(currentMode);
    initializeSearch();
    loadFromURL();

    document.getElementById('mode-selector').addEventListener('change', (e) => {
        loadMode(e.target.value);
    });
});

// Populate mode dropdown
function populateModeDropdown() {
    const dropdown = document.getElementById('mode-selector');
    dropdown.innerHTML = Object.keys(modes).map(key =>
        `<option value="${key}">${modes[key].name}</option>`
    ).join('');
}

populateModeDropdown();

// Load a mode
function loadMode(modeName) {
    currentMode = modeName;
    const mode = modes[modeName];

    // Update dropdown
    document.getElementById('mode-selector').value = modeName;

    // Update search placeholder
    document.getElementById('search-input').placeholder = 'Search...';

    // Apply theme
    if (mode.theme) {
        document.body.style.background = mode.theme.background;
        document.documentElement.style.setProperty('--accent-color', mode.theme.accent);
    }

    // Create network visualization
    createNetwork(mode);
}

// Convert value to position (0-1)
function valueToPosition(value, mode) {
    if (mode.scaleType === 'logarithmic') {
        const maxValue = Math.max(...mode.items.map(i => i.value));
        const minValue = Math.min(...mode.items.map(i => i.value).filter(v => v > 0));

        // Handle zero specially - place it at the very start
        if (value === 0 || value <= 0) return 0;

        // Use proper logarithmic scale: log(value) - log(min) / log(max) - log(min)
        const logValue = Math.log10(value);
        const logMin = Math.log10(minValue);
        const logMax = Math.log10(maxValue);

        return (logValue - logMin) / (logMax - logMin);
    } else {
        const maxValue = Math.max(...mode.items.map(i => i.value));
        const minValue = Math.min(...mode.items.map(i => i.value));
        return (value - minValue) / (maxValue - minValue);
    }
}

// Create network
function createNetwork(mode) {
    const container = document.getElementById('network-container');

    // Create MORE fixed scale marker nodes (interpolate between existing markers)
    const expandedMarkers = [];
    mode.markers.forEach((marker, idx) => {
        expandedMarkers.push(marker);

        // Add intermediate markers between this and next marker
        if (idx < mode.markers.length - 1) {
            const nextMarker = mode.markers[idx + 1];
            const numIntermediate = 4; // Add 4 points between each marker

            for (let i = 1; i <= numIntermediate; i++) {
                const ratio = i / (numIntermediate + 1);

                if (mode.scaleType === 'logarithmic') {
                    // For log scales, interpolate in log space
                    // Skip if current marker is 0 (can't take log of 0)
                    if (marker.value > 0 && nextMarker.value > 0) {
                        const logCurrent = Math.log10(marker.value);
                        const logNext = Math.log10(nextMarker.value);
                        const logIntermediate = logCurrent + (logNext - logCurrent) * ratio;
                        const intermediateValue = Math.pow(10, logIntermediate);

                        expandedMarkers.push({
                            value: intermediateValue,
                            label: '' // No label for intermediate markers
                        });
                    } else if (marker.value === 0 && nextMarker.value > 0) {
                        // Linear interpolation from 0 to next value
                        const intermediateValue = nextMarker.value * ratio;
                        expandedMarkers.push({
                            value: intermediateValue,
                            label: ''
                        });
                    }
                } else {
                    // For linear scales, simple interpolation
                    const intermediateValue = marker.value + (nextMarker.value - marker.value) * ratio;
                    expandedMarkers.push({
                        value: intermediateValue,
                        label: ''
                    });
                }
            }
        }
    });

    // Create fixed scale marker nodes with color coordination
    const scaleNodes = expandedMarkers.map((marker, idx) => ({
        id: `marker-${idx}`,
        label: marker.label,
        x: valueToPosition(marker.value, mode) * 1000 - 500,
        y: 0,
        shape: marker.label ? 'box' : 'dot',
        color: {
            background: getColorForValue(marker.value, mode),
            border: '#333'
        },
        font: { size: marker.label ? 11 : 8, color: '#333', bold: true },
        fixed: true,
        physics: false,  // No physics - markers are just visual reference points
        size: 8         // All markers same size
    }));

    // Create item nodes with physics - use images instead of emojis
    const itemNodes = mode.items.map(item => {
        const position = valueToPosition(item.value, mode);

        // Use image if available, otherwise fall back to colored circle
        const nodeConfig = {
            id: item.id,
            x: position * 1000 - 500,
            y: (Math.random() - 0.5) * 300,
            size: 25,
            borderWidth: 2,
            borderWidthSelected: 3,
            widthConstraint: { minimum: 50, maximum: 50 },
            heightConstraint: { minimum: 50, maximum: 50 },
            title: `${item.name}\n${item.value} ${mode.unit}\n${item.description}`,
            margin: 10
        };

        if (item.image) {
            // Use image shape
            nodeConfig.shape = 'circularImage';
            nodeConfig.image = item.image;
            nodeConfig.label = item.name;
            nodeConfig.font = {
                size: 10,
                color: '#333',
                background: 'rgba(255, 255, 255, 0.8)',
                strokeWidth: 0
            };
            nodeConfig.color = {
                border: '#333',
                highlight: {
                    border: '#ff6b6b'
                }
            };
        } else {
            // Fall back to emoji/colored circle
            nodeConfig.shape = 'circle';
            nodeConfig.label = `${item.emoji}\n${item.name}`;
            nodeConfig.font = {
                size: 11,
                multi: true,
                vadjust: 0
            };
            nodeConfig.color = {
                background: getColorForValue(item.value, mode),
                border: '#333',
                highlight: {
                    background: getColorForValue(item.value, mode),
                    border: '#ff6b6b'
                }
            };
        }

        return nodeConfig;
    });

    const nodes = new vis.DataSet([...scaleNodes, ...itemNodes]);

    // Create edges connecting each item to its corresponding scale marker
    const edgesList = mode.items.map(item => {
        const itemPosition = valueToPosition(item.value, mode);

        // Find the closest expanded scale marker (includes intermediate markers)
        let closestMarkerIdx = 0;
        let closestDistance = Infinity;

        expandedMarkers.forEach((marker, idx) => {
            const markerPosition = valueToPosition(marker.value, mode);
            const distance = Math.abs(itemPosition - markerPosition);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestMarkerIdx = idx;
            }
        });

        return {
            from: item.id,
            to: `marker-${closestMarkerIdx}`,
            color: { color: 'rgba(150, 150, 150, 0.3)', hover: 'rgba(150, 150, 150, 0.5)' },
            width: 1,
            smooth: false,
            physics: true,  // Enable physics on edges for spring effect
            length: 50      // Shorter spring length for tighter clustering
        };
    });

    const edges = new vis.DataSet(edgesList);

    const data = { nodes, edges };

    const options = {
        nodes: {
            size: 25,
            scaling: {
                enabled: false
            }
        },
        physics: {
            enabled: true,
            stabilization: {
                enabled: true,
                iterations: 1000
            },
            barnesHut: {
                gravitationalConstant: -800,    // Gentle repulsion to prevent overlap
                centralGravity: 0.05,           // Reduced central gravity
                springLength: 80,               // Longer springs for looser clusters
                springConstant: 0.08,           // Weaker springs for less bounce
                damping: 0.5,                   // Higher damping to reduce motion
                avoidOverlap: 0.8               // Strong but not maximum overlap avoidance
            },
            solver: 'barnesHut',
            timestep: 0.3,                      // Slightly smaller timestep
            adaptiveTimestep: true
        },
        edges: {
            smooth: false,
            physics: true
        },
        interaction: {
            hover: true,
            tooltipDelay: 100,
            zoomView: true,
            dragView: true,
            dragNodes: true,
            navigationButtons: false,
            keyboard: {
                enabled: true,
                bindToWindow: false
            }
        }
    };

    if (network) {
        network.destroy();
    }

    network = new vis.Network(container, data, options);

    // Event handlers
    network.on('click', (params) => {
        if (params.nodes.length > 0) {
            const nodeId = params.nodes[0];
            if (!String(nodeId).startsWith('marker-')) {
                const item = mode.items.find(i => i.id === nodeId);
                if (item) {
                    selectItem(item, mode);
                }
            }
        }
    });
}

// Get color for value
function getColorForValue(value, mode) {
    const position = valueToPosition(value, mode);

    // Gradient from green to yellow to red
    const r = Math.floor(position * 255);
    const g = Math.floor((1 - position) * 255);
    const b = 50;

    return `rgb(${r}, ${g}, ${b})`;
}

// Select item
function selectItem(item, mode) {
    selectedItem = item;
    updateInfoPanel(item, mode);
    updateURL(item);
}

// Update info panel
function updateInfoPanel(item, mode) {
    const panel = document.getElementById('info-content');

    const descriptionHTML = item.wiki
        ? `<a href="${item.wiki}" target="_blank" rel="noopener noreferrer" class="description" style="color: #666; text-decoration: none; cursor: pointer; display: block;">${item.description}</a>`
        : `<div class="description">${item.description}</div>`;

    panel.innerHTML = `
        <h3><span class="item-name-link" data-item-id="${item.id}">${item.emoji} ${item.name}</span></h3>
        <div class="shu-value">${item.value} ${mode.unit}</div>
        ${descriptionHTML}
    `;

    // Add click handler to copy link
    const nameElement = panel.querySelector('.item-name-link');
    nameElement.addEventListener('click', () => {
        copyLinkToClipboard(item);
    });
}

// Copy shareable link to clipboard
function copyLinkToClipboard(item) {
    const params = new URLSearchParams();
    params.set('mode', currentMode);
    params.set('item', item.id);
    const shareURL = `${window.location.origin}${window.location.pathname}?${params.toString()}`;

    navigator.clipboard.writeText(shareURL).then(() => {
        // Show brief confirmation
        const nameElement = document.querySelector('.item-name-link');
        const originalText = nameElement.textContent;
        nameElement.textContent = '✓ Link copied!';
        setTimeout(() => {
            nameElement.textContent = originalText;
        }, 1500);
    }).catch(err => {
        console.error('Failed to copy link:', err);
    });
}

// Update URL
function updateURL(item) {
    const params = new URLSearchParams();
    params.set('mode', currentMode);
    params.set('item', item.id);

    const newURL = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({ mode: currentMode, item: item.id }, '', newURL);
}

// Load from URL
function loadFromURL() {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');
    const itemId = parseInt(params.get('item'));

    if (mode && modes[mode]) {
        loadMode(mode);

        if (itemId) {
            setTimeout(() => {
                const item = modes[mode].items.find(i => i.id === itemId);
                if (item) {
                    selectItem(item, modes[mode]);
                }
            }, 500);
        }
    }
}

// Initialize search
function initializeSearch() {
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        if (!query) {
            // Reset highlighting
            return;
        }

        const mode = modes[currentMode];
        const matches = mode.items.filter(item =>
            item.name.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );

        if (matches.length > 0) {
            selectItem(matches[0], mode);
        }
    });
}
