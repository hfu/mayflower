.PHONY: martin-install

MARTIN_VERSION = 0.16.0
MARTIN_FN = martin-aarch64-unknown-linux-musl.tar.gz
MARTIN_URL := https://github.com/maplibre/martin/releases/download/v$(MARTIN_VERSION)/$(MARTIN_FN)

martin-install:
	curl -L -O $(MARTIN_URL)
	tar -xvzf $(MARTIN_FN)
