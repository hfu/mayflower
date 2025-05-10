.PHONY: martin-install
.PHONY: martin-host

MARTIN_VERSION = 0.16.0
MARTIN_FN = martin-aarch64-unknown-linux-musl.tar.gz
MARTIN_URL := https://github.com/maplibre/martin/releases/download/v$(MARTIN_VERSION)/$(MARTIN_FN)
MARTIN_BIN = ./martin

BBOX = 34.9595,29.1859,39.3011,33.3751
PMTILES_URL = https://data.source.coop/protomaps/openstreetmap/v4.pmtiles

martin-install:
	curl -L -O $(MARTIN_URL)
	tar -xvzf $(MARTIN_FN)
	rm $(MARTIN_FN)

martin-host:
	./martin -c config.yaml

extract:
	pmtiles extract --bbox=$(BBOX) $(PMTILES_URL) v4.pmtiles
