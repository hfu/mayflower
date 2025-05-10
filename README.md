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

2. Start Martin with the following command:
   以下のコマンドで Martin を起動します：

   ```bash
   make martin-host
   ```

This will serve the PMTiles file locally.
これにより、PMTiles ファイルがローカルで提供されます。

## Starting the Vite Development Server / Vite 開発サーバーの起動

To start the Vite development server and view the map in your browser, run the following command:
Vite 開発サーバーを起動してブラウザで地図を表示するには、以下のコマンドを実行してください：

```bash
npm run dev
```

This will launch the Vite server, and you can access the application at [http://localhost:5173](http://localhost:5173).
これにより Vite サーバーが起動し、[http://localhost:5173](http://localhost:5173) でアプリケーションにアクセスできます。

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

