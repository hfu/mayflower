# Project Concept

## Free Maps Are Portable

This project revolves around the concept of "Free Maps Are Portable." It aims to provide an environment where map data can be freely used, easily hosted, and displayed anywhere.

### Project Goals
1. **Hosting PMTiles with Martin**
   - Enable easy hosting of map data in the PMTiles format.
   - Currently configured to host `https://data.source.coop/protomaps/openstreetmap/v4.pmtiles`.
   - Martin serves the tiles locally at `http://localhost:3000/v4`.

2. **Fast Map Display with Vite**
   - Utilize Vite to enable map display using MapLibre GL JS.
   - Provide an environment where developers can easily customize maps.

3. **Flexible Styling**
   - Initially use an external `style.json`.
   - In the future, generate a custom `style.json` using Apple Pkl.

### Project Features
- **Lightweight and Portable**
  - Efficiently distribute map data using PMTiles.
  - Deployable as a static site.

- **Open Source and Customizable**
  - Allows customization of map data and styles.
  - Designed for developers to freely extend the project.

### Key Configuration Files

This project uses the following configuration files:

1. **Makefile**
   - Automates tasks such as installing Martin and starting the development server.
   - Example: Install Martin with `make martin-install`.

2. **vite.config.js**
   - Configures the Vite development server.
   - Includes reverse proxy settings to forward `/v4` requests to Martin on port 3000.

3. **package.json**
   - Manages project dependencies and scripts.
   - Example: Start the Vite development server with `npm run dev`.

4. **config.yaml**
   - Configures Martin.
   - Example: Hosts `https://data.source.coop/protomaps/openstreetmap/v4.pmtiles` on port 3000.

5. **src/style.json**
   - Defines map styles for MapLibre GL JS.
   - Initially uses an external style but can be customized using Apple Pkl in the future.

### Future Prospects
- Generate custom styles using Apple Pkl.
- Support for more map data formats.
- Improved map display performance and new features.

This project aims to promote the free use and sharing of map data, enabling anyone to easily host and display maps.