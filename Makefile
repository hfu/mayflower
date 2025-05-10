.PHONY: martin-install
.PHONY: martin-host

MARTIN_VERSION = 0.16.0
MARTIN_FN = martin-aarch64-unknown-linux-musl.tar.gz
MARTIN_URL := https://github.com/maplibre/martin/releases/download/v$(MARTIN_VERSION)/$(MARTIN_FN)
MARTIN_BIN = ./martin

martin-install:
	curl -L -O $(MARTIN_URL)
	tar -xvzf $(MARTIN_FN)
	rm $(MARTIN_FN)

martin-host:
	martin -c config.yaml

