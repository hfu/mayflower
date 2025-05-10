# mayflower

UNVT POD prototype of 2025 May, supported by copilot

## Martin Installation

To install Martin, run the following command:

```bash
make martin-install
```

This will download and extract Martin version 0.16.0 from its official release on GitHub.

## Hosting PMTiles with Martin

To host the PMTiles file `https://data.source.coop/protomaps/openstreetmap/v4.pmtiles` using Martin, follow these steps:

1. Ensure Martin is installed by running:

   ```bash
   make martin-install
   ```

2. Start Martin with the following command:

   ```bash
   ./martin --tileset https://data.source.coop/protomaps/openstreetmap/v4.pmtiles
   ```

This will serve the PMTiles file locally.

