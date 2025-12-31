# How Is It?

An interactive web tool for communicating intensity levels using scientific scales as humorous metaphors.

## Concept

Use real, measurable scientific scales to describe abstract situations. Say "this meeting is going to be Carolina Reaper level" or "this email is 7.5 on the Richter scale" and share a visual reference.

## Available Modes

- **Spicy** - Scoville scale (0 to 3+ million SHU) with 33 pepper varieties
- **Shaky** - Richter/Moment Magnitude scale (1.0 to 9.5) with 21 earthquake intensities
- **Acidic/Basic** - pH scale (0 to 14) with 28 common substances
- **Loud** - Decibel scale (0 to 194 dB) with 35 sound levels
- **Hard** - Mohs hardness scale (2 to 15) with 19 materials
- **Radioactive** - Radiation dose scale (0.0001 to 400+ mSv) with 18 exposure levels

## Features

- Six different measurement scales with mode switcher
- Interactive network visualization powered by vis.js library
- Hover tooltips showing detailed information for each data point
- Search capability across all items and descriptions
- Direct Wikipedia links for additional reference material
- Responsive design supporting desktop and mobile browsers

## How to Use

1. Select a measurement mode from the dropdown menu
2. Hover over items to view detailed information
3. Use the search bar to locate specific items
4. Click any item to open its Wikipedia article in a new tab

## Design Inspiration

- [ptable.com](https://ptable.com) - Clean layout, everything visible at once
- [neal.fun](https://neal.fun) - Playful illustrated style
- [Information is Beautiful](https://informationisbeautiful.net) - Data visualization aesthetics

## Technical Details

- Pure HTML, CSS, and JavaScript implementation
- vis.js network library handles physics-based node positioning
- Supports logarithmic (spicy, earthquake, radioactive) and linear (pH, decibel, hardness) scale types
- CSS transitions combined with vis.js physics for smooth animations
- Responsive layout adapts to different screen sizes
- Image-based nodes with emoji fallbacks for visual consistency

## Running Locally

Simply open `index.html` in any modern web browser. No build process or server required.

## Data Sources

All measurements use commonly accepted scientific values:
- Scoville Heat Units (SHU) based on standard pepper variety ranges
- Moment Magnitude scale data from USGS earthquake records
- pH values from standard chemistry references
- Decibel (dB) measurements from typical sound pressure levels
- Mohs hardness scale using reference mineral standards
- Radiation doses (mSv) from medical and scientific exposure data
