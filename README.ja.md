# vr-cats

Three.jsを使用してアニメーション付き3D動物モデルを表示するシンプルなWebXRデモです。

## デモ

-   **デフォルト体験 (猫とライオン):** [https://code4fukui.github.io/vr-cats/](https://code4fukui.github.io/vr-cats/)
-   **代替体験 (猫とクマ):** [https://code4fukui.github.io/vr-cats/#bear](https://code4fukui.github.io/vr-cats/#bear)

## 機能

-   **WebXR対応:** 互換性のあるヘッドセットを使用して、バーチャルリアリティでシーンを閲覧できます。
-   **アニメーションモデル:** アニメーション付きのGLTFモデルを利用し、リアルな動きを実現しています。
-   **PC操作:** デスクトップ環境では、マウスとキーボードを使用してシーン内を移動できます。
-   **動的コンテンツ:** URLハッシュ（`#bear`）を使用することで、2体目の動物モデルをライオンからクマに切り替えることができます。

## はじめに

このプロジェクトをローカルで実行するには、WebXRに対応したウェブブラウザが必要です。

1.  **リポジトリのクローン:**
    ```sh
    git clone https://github.com/code4fukui/vr-cats.git
    cd vr-cats
    ```

2.  **ローカルWebサーバーの起動:**
    任意のシンプルなWebサーバーを使用できます。例えば、Pythonがインストールされている場合は以下のコマンドを実行します:
    ```sh
    python -m http.server
    ```

3.  **ブラウザで開く:**
    -   `http://localhost:8000` にアクセスします。
    -   クマのモデルを見るには、`http://localhost:8000/#bear` にアクセスします。

## 3Dモデルとクレジット

このプロジェクトでは、Sketchfabで公開されているフリーライセンスの3Dモデルを使用しています。

-   **Bicolor Cat** by [kenchoo](https://sketchfab.com/kenchoo) （ライセンス: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)）
    -   [Sketchfabで見る](https://sketchfab.com/3d-models/bicolor-cat-e623a618ca344a8393d7ba4d63ec23cf)

-   **Lion** by [kenchoo](https://sketchfab.com/kenchoo) （ライセンス: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)）
    -   [Sketchfabで見る](https://sketchfab.com/3d-models/lion-61d687ca92dc4cafbd5e74e3be40d49d)

-   **Strong Bear** by [Pedro B. Goulart](https://sketchfab.com/Pebegou) （ライセンス: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)）
    -   [Sketchfabで見る](https://sketchfab.com/3d-models/strong-bear-1d1bb459a39a428282ce4cb46bdc3ed5)

## ライセンス

このプロジェクトは MIT License のもとで公開されています。
