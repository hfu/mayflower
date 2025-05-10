.PHONY: martin-install

MARTIN_FN = martin-aarch64-unknown-linux-musl.tar.gz
MARTIN_URL := https://github.com/maplibre/martin/releases/download/$(MARTIN_FN)

martin-install:
	curl -L -O $(MARTIN_URL)
