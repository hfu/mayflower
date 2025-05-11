.PHONY: martin-install
.PHONY: martin-host
.PHONY: extract

MARTIN_VERSION = 0.16.0
MARTIN_FN = martin-aarch64-unknown-linux-musl.tar.gz
MARTIN_URL := https://github.com/maplibre/martin/releases/download/v$(MARTIN_VERSION)/$(MARTIN_FN)
MARTIN_BIN = ./martin

PMTILES_URL = https://data.source.coop/protomaps/openstreetmap/v4.pmtiles
PMTILES_PATH = v4.pmtiles
EXTENT_PATH = extent.geojson

martin-install:
	curl -L -O $(MARTIN_URL)
	tar -xvzf $(MARTIN_FN)
	rm $(MARTIN_FN)

martin-host:
	./martin -c config.yaml

extract:
	pmtiles extract --region=$(EXTENT_PATH) $(PMTILES_URL) $(PMTILES_PATH)
	pmtiles verify $(PMTILES_PATH)