# mayflower

UNVT POD prototype of 2025 May, supported by copilot

## Martin Installation / Martin のインストール

To install Martin, run the following command:
Martin をインストールするには、以下のコマンドを実行してください：

```bash
make martin-install
```

This will download and extract Martin version 0.16.0 from its official release on GitHub.
これにより、GitHub の公式リリースから Martin バージョン 0.16.0 がダウンロードおよび展開されます。

## Hosting PMTiles with Martin / Martin を使用した PMTiles のホスティング

To host the PMTiles file `https://data.source.coop/protomaps/openstreetmap/v4.pmtiles` using Martin, follow these steps:
Martin を使用して PMTiles ファイル `https://data.source.coop/protomaps/openstreetmap/v4.pmtiles` をホスティングするには、以下の手順に従ってください：

1. Ensure Martin is installed by running:
   Martin がインストールされていることを確認するには、以下を実行してください：

   ```bash
   make martin-install
   ```

2. Configure Martin to host the PMTiles file by editing `config.yaml`:
   `config.yaml` を編集して PMTiles ファイルをホストするように Martin を設定します：

   ```yaml
   # filepath: config.yaml
   tilesets:
     - name: openstreetmap
       path: https://data.source.coop/protomaps/openstreetmap/v4.pmtiles
   ```

3. Start Martin with the following command:
   以下のコマンドで Martin を起動します：

   ```bash
   make martin-host
   ```

This will serve the PMTiles file locally at `http://localhost:3000/v4`.
これにより、PMTiles ファイルがローカルで `http://localhost:3000/v4` で提供されます。

---

## Using MapLibre GL JS with Vite / Vite を使用した MapLibre GL JS の利用

To display the map using MapLibre GL JS, follow these steps:
MapLibre GL JS を使用して地図を表示するには、以下の手順に従ってください：

1. Install dependencies:
   依存関係をインストールします：

   ```bash
   npm install
   ```

2. Start the Vite development server:
   Vite 開発サーバーを起動します：

   ```bash
   npm run dev
   ```

3. Access the application in your browser at [http://localhost:5173](http://localhost:5173).
   ブラウザで [http://localhost:5173](http://localhost:5173) にアクセスします。

---

## Map Style Configuration / 地図スタイルの設定

The map style is defined in `src/style.json`. Initially, an external style is used:
地図スタイルは `src/style.json` で定義されています。初期設定では外部スタイルを使用します：

```json
{
  "version": 8,
  "sources": {
    "osm": {
      "type": "vector",
      "url": "http://localhost:3000/v4"
    }
  },
  "layers": [
    {
      "id": "background",
      "type": "background",
      "paint": {
        "background-color": "#ffffff"
      }
    }
  ]
}
```

In the future, custom styles can be generated using Apple Pkl.
将来的には Apple Pkl を使用してカスタムスタイルを生成することが可能です。

## Configuration Files / 設定ファイル

This project uses several key configuration files to manage its functionality:
このプロジェクトでは、いくつかの主要な設定ファイルを使用して機能を管理しています：

1. **Makefile**
   - Automates tasks such as installing Martin and running the development server.
   - Example: `make martin-install` installs Martin.
   - Martin のインストールや開発サーバーの起動などのタスクを自動化します。
   - 例: `make martin-install` で Martin をインストール。

2. **vite.config.js**
   - Configures the Vite development server.
   - Includes reverse proxy settings to forward `/v4` requests to Martin running on port 3000.
   - Vite 開発サーバーの設定を行います。
   - `/v4` リクエストをポート 3000 の Martin に転送するリバースプロキシ設定を含みます。

3. **package.json**
   - Manages project dependencies and scripts.
   - Example: `npm run dev` starts the Vite development server.
   - プロジェクトの依存関係とスクリプトを管理します。
   - 例: `npm run dev` で Vite 開発サーバーを起動。

4. **config.yaml**
   - Configures Martin to host PMTiles.
   - Example: Hosts `https://data.source.coop/protomaps/openstreetmap/v4.pmtiles` on port 3000.
   - Martin の設定を行います。
   - 例: `https://data.source.coop/protomaps/openstreetmap/v4.pmtiles` をポート 3000 でホスト。

5. **src/style.json**
   - Defines the map style for MapLibre GL JS.
   - Initially uses an external style, but can be customized using Apple Pkl in the future.
   - MapLibre GL JS の地図スタイルを定義します。
   - 初期設定では外部スタイルを使用しますが、将来的には Apple Pkl を使用してカスタマイズ可能です。

## Project Concepts / プロジェクトコンセプト

For more details about the project concepts, please refer to the following documents:
プロジェクトのコンセプトについての詳細は、以下のドキュメントをご参照ください：

- [Concept (English)](concept-en.md)
- [コンセプト (日本語)](concept-ja.md)

